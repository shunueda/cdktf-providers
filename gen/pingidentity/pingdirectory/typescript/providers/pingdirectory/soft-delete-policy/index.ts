// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/soft_delete_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SoftDeletePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection criteria used to automatically identify a delete operation for processing as a soft delete request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/soft_delete_policy#auto_soft_delete_connection_criteria SoftDeletePolicy#auto_soft_delete_connection_criteria}
  */
  readonly autoSoftDeleteConnectionCriteria?: string;
  /**
  * Request criteria used to automatically identify a delete operation for processing as a soft delete request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/soft_delete_policy#auto_soft_delete_request_criteria SoftDeletePolicy#auto_soft_delete_request_criteria}
  */
  readonly autoSoftDeleteRequestCriteria?: string;
  /**
  * A description for this Soft Delete Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/soft_delete_policy#description SoftDeletePolicy#description}
  */
  readonly description?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/soft_delete_policy#name SoftDeletePolicy#name}
  */
  readonly name: string;
  /**
  * Specifies the number of soft deleted entries to retain before the oldest entries are purged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/soft_delete_policy#soft_delete_retain_number_of_entries SoftDeletePolicy#soft_delete_retain_number_of_entries}
  */
  readonly softDeleteRetainNumberOfEntries?: number;
  /**
  * Specifies the maximum length of time that soft delete entries are retained before they are eligible to purged automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/soft_delete_policy#soft_delete_retention_time SoftDeletePolicy#soft_delete_retention_time}
  */
  readonly softDeleteRetentionTime?: string;
  /**
  * The type of Soft Delete Policy resource. Options are ['soft-delete-policy']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/soft_delete_policy#type SoftDeletePolicy#type}
  */
  readonly type?: string;
}
export interface SoftDeletePolicyRequiredActions {
}

export function softDeletePolicyRequiredActionsToTerraform(struct?: SoftDeletePolicyRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function softDeletePolicyRequiredActionsToHclTerraform(struct?: SoftDeletePolicyRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SoftDeletePolicyRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SoftDeletePolicyRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SoftDeletePolicyRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class SoftDeletePolicyRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): SoftDeletePolicyRequiredActionsOutputReference {
    return new SoftDeletePolicyRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/soft_delete_policy pingdirectory_soft_delete_policy}
*/
export class SoftDeletePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_soft_delete_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SoftDeletePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SoftDeletePolicy to import
  * @param importFromId The id of the existing SoftDeletePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/soft_delete_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SoftDeletePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_soft_delete_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/soft_delete_policy pingdirectory_soft_delete_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SoftDeletePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SoftDeletePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_soft_delete_policy',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoSoftDeleteConnectionCriteria = config.autoSoftDeleteConnectionCriteria;
    this._autoSoftDeleteRequestCriteria = config.autoSoftDeleteRequestCriteria;
    this._description = config.description;
    this._name = config.name;
    this._softDeleteRetainNumberOfEntries = config.softDeleteRetainNumberOfEntries;
    this._softDeleteRetentionTime = config.softDeleteRetentionTime;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_soft_delete_connection_criteria - computed: false, optional: true, required: false
  private _autoSoftDeleteConnectionCriteria?: string; 
  public get autoSoftDeleteConnectionCriteria() {
    return this.getStringAttribute('auto_soft_delete_connection_criteria');
  }
  public set autoSoftDeleteConnectionCriteria(value: string) {
    this._autoSoftDeleteConnectionCriteria = value;
  }
  public resetAutoSoftDeleteConnectionCriteria() {
    this._autoSoftDeleteConnectionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSoftDeleteConnectionCriteriaInput() {
    return this._autoSoftDeleteConnectionCriteria;
  }

  // auto_soft_delete_request_criteria - computed: false, optional: true, required: false
  private _autoSoftDeleteRequestCriteria?: string; 
  public get autoSoftDeleteRequestCriteria() {
    return this.getStringAttribute('auto_soft_delete_request_criteria');
  }
  public set autoSoftDeleteRequestCriteria(value: string) {
    this._autoSoftDeleteRequestCriteria = value;
  }
  public resetAutoSoftDeleteRequestCriteria() {
    this._autoSoftDeleteRequestCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSoftDeleteRequestCriteriaInput() {
    return this._autoSoftDeleteRequestCriteria;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new SoftDeletePolicyRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // soft_delete_retain_number_of_entries - computed: false, optional: true, required: false
  private _softDeleteRetainNumberOfEntries?: number; 
  public get softDeleteRetainNumberOfEntries() {
    return this.getNumberAttribute('soft_delete_retain_number_of_entries');
  }
  public set softDeleteRetainNumberOfEntries(value: number) {
    this._softDeleteRetainNumberOfEntries = value;
  }
  public resetSoftDeleteRetainNumberOfEntries() {
    this._softDeleteRetainNumberOfEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDeleteRetainNumberOfEntriesInput() {
    return this._softDeleteRetainNumberOfEntries;
  }

  // soft_delete_retention_time - computed: false, optional: true, required: false
  private _softDeleteRetentionTime?: string; 
  public get softDeleteRetentionTime() {
    return this.getStringAttribute('soft_delete_retention_time');
  }
  public set softDeleteRetentionTime(value: string) {
    this._softDeleteRetentionTime = value;
  }
  public resetSoftDeleteRetentionTime() {
    this._softDeleteRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDeleteRetentionTimeInput() {
    return this._softDeleteRetentionTime;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_soft_delete_connection_criteria: cdktf.stringToTerraform(this._autoSoftDeleteConnectionCriteria),
      auto_soft_delete_request_criteria: cdktf.stringToTerraform(this._autoSoftDeleteRequestCriteria),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      soft_delete_retain_number_of_entries: cdktf.numberToTerraform(this._softDeleteRetainNumberOfEntries),
      soft_delete_retention_time: cdktf.stringToTerraform(this._softDeleteRetentionTime),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_soft_delete_connection_criteria: {
        value: cdktf.stringToHclTerraform(this._autoSoftDeleteConnectionCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_soft_delete_request_criteria: {
        value: cdktf.stringToHclTerraform(this._autoSoftDeleteRequestCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      soft_delete_retain_number_of_entries: {
        value: cdktf.numberToHclTerraform(this._softDeleteRetainNumberOfEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      soft_delete_retention_time: {
        value: cdktf.stringToHclTerraform(this._softDeleteRetentionTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
