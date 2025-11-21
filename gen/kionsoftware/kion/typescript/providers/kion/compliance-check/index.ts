// https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/compliance_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComplianceCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/compliance_check#azure_policy_id ComplianceCheck#azure_policy_id}
  */
  readonly azurePolicyId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/compliance_check#body ComplianceCheck#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/compliance_check#cloud_provider_id ComplianceCheck#cloud_provider_id}
  */
  readonly cloudProviderId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/compliance_check#compliance_check_type_id ComplianceCheck#compliance_check_type_id}
  */
  readonly complianceCheckTypeId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/compliance_check#created_by_user_id ComplianceCheck#created_by_user_id}
  */
  readonly createdByUserId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/compliance_check#description ComplianceCheck#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/compliance_check#frequency_minutes ComplianceCheck#frequency_minutes}
  */
  readonly frequencyMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/compliance_check#frequency_type_id ComplianceCheck#frequency_type_id}
  */
  readonly frequencyTypeId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/compliance_check#id ComplianceCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/compliance_check#is_all_regions ComplianceCheck#is_all_regions}
  */
  readonly isAllRegions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/compliance_check#is_auto_archived ComplianceCheck#is_auto_archived}
  */
  readonly isAutoArchived?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/compliance_check#last_updated ComplianceCheck#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/compliance_check#name ComplianceCheck#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/compliance_check#regions ComplianceCheck#regions}
  */
  readonly regions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/compliance_check#severity_type_id ComplianceCheck#severity_type_id}
  */
  readonly severityTypeId?: number;
  /**
  * owner_user_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/compliance_check#owner_user_groups ComplianceCheck#owner_user_groups}
  */
  readonly ownerUserGroups?: ComplianceCheckOwnerUserGroups[] | cdktf.IResolvable;
  /**
  * owner_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/compliance_check#owner_users ComplianceCheck#owner_users}
  */
  readonly ownerUsers?: ComplianceCheckOwnerUsers[] | cdktf.IResolvable;
}
export interface ComplianceCheckOwnerUserGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/compliance_check#id ComplianceCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function complianceCheckOwnerUserGroupsToTerraform(struct?: ComplianceCheckOwnerUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function complianceCheckOwnerUserGroupsToHclTerraform(struct?: ComplianceCheckOwnerUserGroups | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComplianceCheckOwnerUserGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComplianceCheckOwnerUserGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComplianceCheckOwnerUserGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class ComplianceCheckOwnerUserGroupsList extends cdktf.ComplexList {
  public internalValue? : ComplianceCheckOwnerUserGroups[] | cdktf.IResolvable

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
  public get(index: number): ComplianceCheckOwnerUserGroupsOutputReference {
    return new ComplianceCheckOwnerUserGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComplianceCheckOwnerUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/compliance_check#id ComplianceCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function complianceCheckOwnerUsersToTerraform(struct?: ComplianceCheckOwnerUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function complianceCheckOwnerUsersToHclTerraform(struct?: ComplianceCheckOwnerUsers | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComplianceCheckOwnerUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComplianceCheckOwnerUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComplianceCheckOwnerUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class ComplianceCheckOwnerUsersList extends cdktf.ComplexList {
  public internalValue? : ComplianceCheckOwnerUsers[] | cdktf.IResolvable

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
  public get(index: number): ComplianceCheckOwnerUsersOutputReference {
    return new ComplianceCheckOwnerUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/compliance_check kion_compliance_check}
*/
export class ComplianceCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kion_compliance_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComplianceCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComplianceCheck to import
  * @param importFromId The id of the existing ComplianceCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/compliance_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComplianceCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kion_compliance_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/compliance_check kion_compliance_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComplianceCheckConfig
  */
  public constructor(scope: Construct, id: string, config: ComplianceCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'kion_compliance_check',
      terraformGeneratorMetadata: {
        providerName: 'kion',
        providerVersion: '0.3.30',
        providerVersionConstraint: '0.3.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._azurePolicyId = config.azurePolicyId;
    this._body = config.body;
    this._cloudProviderId = config.cloudProviderId;
    this._complianceCheckTypeId = config.complianceCheckTypeId;
    this._createdByUserId = config.createdByUserId;
    this._description = config.description;
    this._frequencyMinutes = config.frequencyMinutes;
    this._frequencyTypeId = config.frequencyTypeId;
    this._id = config.id;
    this._isAllRegions = config.isAllRegions;
    this._isAutoArchived = config.isAutoArchived;
    this._lastUpdated = config.lastUpdated;
    this._name = config.name;
    this._regions = config.regions;
    this._severityTypeId = config.severityTypeId;
    this._ownerUserGroups.internalValue = config.ownerUserGroups;
    this._ownerUsers.internalValue = config.ownerUsers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_policy_id - computed: false, optional: true, required: false
  private _azurePolicyId?: number; 
  public get azurePolicyId() {
    return this.getNumberAttribute('azure_policy_id');
  }
  public set azurePolicyId(value: number) {
    this._azurePolicyId = value;
  }
  public resetAzurePolicyId() {
    this._azurePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurePolicyIdInput() {
    return this._azurePolicyId;
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // cloud_provider_id - computed: false, optional: false, required: true
  private _cloudProviderId?: number; 
  public get cloudProviderId() {
    return this.getNumberAttribute('cloud_provider_id');
  }
  public set cloudProviderId(value: number) {
    this._cloudProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderIdInput() {
    return this._cloudProviderId;
  }

  // compliance_check_type_id - computed: false, optional: false, required: true
  private _complianceCheckTypeId?: number; 
  public get complianceCheckTypeId() {
    return this.getNumberAttribute('compliance_check_type_id');
  }
  public set complianceCheckTypeId(value: number) {
    this._complianceCheckTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceCheckTypeIdInput() {
    return this._complianceCheckTypeId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by_user_id - computed: false, optional: true, required: false
  private _createdByUserId?: number; 
  public get createdByUserId() {
    return this.getNumberAttribute('created_by_user_id');
  }
  public set createdByUserId(value: number) {
    this._createdByUserId = value;
  }
  public resetCreatedByUserId() {
    this._createdByUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByUserIdInput() {
    return this._createdByUserId;
  }

  // ct_managed - computed: true, optional: false, required: false
  public get ctManaged() {
    return this.getBooleanAttribute('ct_managed');
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

  // frequency_minutes - computed: false, optional: true, required: false
  private _frequencyMinutes?: number; 
  public get frequencyMinutes() {
    return this.getNumberAttribute('frequency_minutes');
  }
  public set frequencyMinutes(value: number) {
    this._frequencyMinutes = value;
  }
  public resetFrequencyMinutes() {
    this._frequencyMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyMinutesInput() {
    return this._frequencyMinutes;
  }

  // frequency_type_id - computed: false, optional: true, required: false
  private _frequencyTypeId?: number; 
  public get frequencyTypeId() {
    return this.getNumberAttribute('frequency_type_id');
  }
  public set frequencyTypeId(value: number) {
    this._frequencyTypeId = value;
  }
  public resetFrequencyTypeId() {
    this._frequencyTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyTypeIdInput() {
    return this._frequencyTypeId;
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

  // is_all_regions - computed: false, optional: true, required: false
  private _isAllRegions?: boolean | cdktf.IResolvable; 
  public get isAllRegions() {
    return this.getBooleanAttribute('is_all_regions');
  }
  public set isAllRegions(value: boolean | cdktf.IResolvable) {
    this._isAllRegions = value;
  }
  public resetIsAllRegions() {
    this._isAllRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAllRegionsInput() {
    return this._isAllRegions;
  }

  // is_auto_archived - computed: false, optional: true, required: false
  private _isAutoArchived?: boolean | cdktf.IResolvable; 
  public get isAutoArchived() {
    return this.getBooleanAttribute('is_auto_archived');
  }
  public set isAutoArchived(value: boolean | cdktf.IResolvable) {
    this._isAutoArchived = value;
  }
  public resetIsAutoArchived() {
    this._isAutoArchived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoArchivedInput() {
    return this._isAutoArchived;
  }

  // last_scan_id - computed: true, optional: false, required: false
  public get lastScanId() {
    return this.getNumberAttribute('last_scan_id');
  }

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
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

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // severity_type_id - computed: false, optional: true, required: false
  private _severityTypeId?: number; 
  public get severityTypeId() {
    return this.getNumberAttribute('severity_type_id');
  }
  public set severityTypeId(value: number) {
    this._severityTypeId = value;
  }
  public resetSeverityTypeId() {
    this._severityTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityTypeIdInput() {
    return this._severityTypeId;
  }

  // owner_user_groups - computed: false, optional: true, required: false
  private _ownerUserGroups = new ComplianceCheckOwnerUserGroupsList(this, "owner_user_groups", true);
  public get ownerUserGroups() {
    return this._ownerUserGroups;
  }
  public putOwnerUserGroups(value: ComplianceCheckOwnerUserGroups[] | cdktf.IResolvable) {
    this._ownerUserGroups.internalValue = value;
  }
  public resetOwnerUserGroups() {
    this._ownerUserGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUserGroupsInput() {
    return this._ownerUserGroups.internalValue;
  }

  // owner_users - computed: false, optional: true, required: false
  private _ownerUsers = new ComplianceCheckOwnerUsersList(this, "owner_users", true);
  public get ownerUsers() {
    return this._ownerUsers;
  }
  public putOwnerUsers(value: ComplianceCheckOwnerUsers[] | cdktf.IResolvable) {
    this._ownerUsers.internalValue = value;
  }
  public resetOwnerUsers() {
    this._ownerUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUsersInput() {
    return this._ownerUsers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_policy_id: cdktf.numberToTerraform(this._azurePolicyId),
      body: cdktf.stringToTerraform(this._body),
      cloud_provider_id: cdktf.numberToTerraform(this._cloudProviderId),
      compliance_check_type_id: cdktf.numberToTerraform(this._complianceCheckTypeId),
      created_by_user_id: cdktf.numberToTerraform(this._createdByUserId),
      description: cdktf.stringToTerraform(this._description),
      frequency_minutes: cdktf.numberToTerraform(this._frequencyMinutes),
      frequency_type_id: cdktf.numberToTerraform(this._frequencyTypeId),
      id: cdktf.stringToTerraform(this._id),
      is_all_regions: cdktf.booleanToTerraform(this._isAllRegions),
      is_auto_archived: cdktf.booleanToTerraform(this._isAutoArchived),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      name: cdktf.stringToTerraform(this._name),
      regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regions),
      severity_type_id: cdktf.numberToTerraform(this._severityTypeId),
      owner_user_groups: cdktf.listMapper(complianceCheckOwnerUserGroupsToTerraform, true)(this._ownerUserGroups.internalValue),
      owner_users: cdktf.listMapper(complianceCheckOwnerUsersToTerraform, true)(this._ownerUsers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure_policy_id: {
        value: cdktf.numberToHclTerraform(this._azurePolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      body: {
        value: cdktf.stringToHclTerraform(this._body),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_provider_id: {
        value: cdktf.numberToHclTerraform(this._cloudProviderId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compliance_check_type_id: {
        value: cdktf.numberToHclTerraform(this._complianceCheckTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      created_by_user_id: {
        value: cdktf.numberToHclTerraform(this._createdByUserId),
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
      frequency_minutes: {
        value: cdktf.numberToHclTerraform(this._frequencyMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      frequency_type_id: {
        value: cdktf.numberToHclTerraform(this._frequencyTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_all_regions: {
        value: cdktf.booleanToHclTerraform(this._isAllRegions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_auto_archived: {
        value: cdktf.booleanToHclTerraform(this._isAutoArchived),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
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
      regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      severity_type_id: {
        value: cdktf.numberToHclTerraform(this._severityTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      owner_user_groups: {
        value: cdktf.listMapperHcl(complianceCheckOwnerUserGroupsToHclTerraform, true)(this._ownerUserGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComplianceCheckOwnerUserGroupsList",
      },
      owner_users: {
        value: cdktf.listMapperHcl(complianceCheckOwnerUsersToHclTerraform, true)(this._ownerUsers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComplianceCheckOwnerUsersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
