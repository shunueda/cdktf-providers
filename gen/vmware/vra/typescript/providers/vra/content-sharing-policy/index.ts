// https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/content_sharing_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContentSharingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of catalog item ids to share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/content_sharing_policy#catalog_item_ids ContentSharingPolicy#catalog_item_ids}
  */
  readonly catalogItemIds?: string[];
  /**
  * List of catalog source ids to share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/content_sharing_policy#catalog_source_ids ContentSharingPolicy#catalog_source_ids}
  */
  readonly catalogSourceIds?: string[];
  /**
  * A human-friendly description for the policy instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/content_sharing_policy#description ContentSharingPolicy#description}
  */
  readonly description?: string;
  /**
  * Entitlement type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/content_sharing_policy#entitlement_type ContentSharingPolicy#entitlement_type}
  */
  readonly entitlementType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/content_sharing_policy#id ContentSharingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A human-friendly name used as an identifier for the policy instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/content_sharing_policy#name ContentSharingPolicy#name}
  */
  readonly name: string;
  /**
  * The project based criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/content_sharing_policy#project_criteria ContentSharingPolicy#project_criteria}
  */
  readonly projectCriteria?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * The id of the project this entity belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/content_sharing_policy#project_id ContentSharingPolicy#project_id}
  */
  readonly projectId?: string;
  /**
  * principals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/content_sharing_policy#principals ContentSharingPolicy#principals}
  */
  readonly principals?: ContentSharingPolicyPrincipals[] | cdktf.IResolvable;
}
export interface ContentSharingPolicyPrincipals {
  /**
  * The reference ID of the principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/content_sharing_policy#reference_id ContentSharingPolicy#reference_id}
  */
  readonly referenceId?: string;
  /**
  * The type of the principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/content_sharing_policy#type ContentSharingPolicy#type}
  */
  readonly type: string;
}

export function contentSharingPolicyPrincipalsToTerraform(struct?: ContentSharingPolicyPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference_id: cdktf.stringToTerraform(struct!.referenceId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function contentSharingPolicyPrincipalsToHclTerraform(struct?: ContentSharingPolicyPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference_id: {
      value: cdktf.stringToHclTerraform(struct!.referenceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContentSharingPolicyPrincipalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContentSharingPolicyPrincipals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._referenceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceId = this._referenceId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContentSharingPolicyPrincipals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._referenceId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._referenceId = value.referenceId;
      this._type = value.type;
    }
  }

  // reference_id - computed: false, optional: true, required: false
  private _referenceId?: string; 
  public get referenceId() {
    return this.getStringAttribute('reference_id');
  }
  public set referenceId(value: string) {
    this._referenceId = value;
  }
  public resetReferenceId() {
    this._referenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceIdInput() {
    return this._referenceId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ContentSharingPolicyPrincipalsList extends cdktf.ComplexList {
  public internalValue? : ContentSharingPolicyPrincipals[] | cdktf.IResolvable

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
  public get(index: number): ContentSharingPolicyPrincipalsOutputReference {
    return new ContentSharingPolicyPrincipalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/content_sharing_policy vra_content_sharing_policy}
*/
export class ContentSharingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vra_content_sharing_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContentSharingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContentSharingPolicy to import
  * @param importFromId The id of the existing ContentSharingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/content_sharing_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContentSharingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vra_content_sharing_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/content_sharing_policy vra_content_sharing_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContentSharingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ContentSharingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'vra_content_sharing_policy',
      terraformGeneratorMetadata: {
        providerName: 'vra',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._catalogItemIds = config.catalogItemIds;
    this._catalogSourceIds = config.catalogSourceIds;
    this._description = config.description;
    this._entitlementType = config.entitlementType;
    this._id = config.id;
    this._name = config.name;
    this._projectCriteria = config.projectCriteria;
    this._projectId = config.projectId;
    this._principals.internalValue = config.principals;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_item_ids - computed: false, optional: true, required: false
  private _catalogItemIds?: string[]; 
  public get catalogItemIds() {
    return cdktf.Fn.tolist(this.getListAttribute('catalog_item_ids'));
  }
  public set catalogItemIds(value: string[]) {
    this._catalogItemIds = value;
  }
  public resetCatalogItemIds() {
    this._catalogItemIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogItemIdsInput() {
    return this._catalogItemIds;
  }

  // catalog_source_ids - computed: false, optional: true, required: false
  private _catalogSourceIds?: string[]; 
  public get catalogSourceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('catalog_source_ids'));
  }
  public set catalogSourceIds(value: string[]) {
    this._catalogSourceIds = value;
  }
  public resetCatalogSourceIds() {
    this._catalogSourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogSourceIdsInput() {
    return this._catalogSourceIds;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // enforcement_type - computed: true, optional: false, required: false
  public get enforcementType() {
    return this.getStringAttribute('enforcement_type');
  }

  // entitlement_type - computed: false, optional: true, required: false
  private _entitlementType?: string; 
  public get entitlementType() {
    return this.getStringAttribute('entitlement_type');
  }
  public set entitlementType(value: string) {
    this._entitlementType = value;
  }
  public resetEntitlementType() {
    this._entitlementType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementTypeInput() {
    return this._entitlementType;
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

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
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

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // project_criteria - computed: false, optional: true, required: false
  private _projectCriteria?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get projectCriteria() {
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('project_criteria')));
  }
  public set projectCriteria(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._projectCriteria = value;
  }
  public resetProjectCriteria() {
    this._projectCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectCriteriaInput() {
    return this._projectCriteria;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // principals - computed: false, optional: true, required: false
  private _principals = new ContentSharingPolicyPrincipalsList(this, "principals", true);
  public get principals() {
    return this._principals;
  }
  public putPrincipals(value: ContentSharingPolicyPrincipals[] | cdktf.IResolvable) {
    this._principals.internalValue = value;
  }
  public resetPrincipals() {
    this._principals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_item_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._catalogItemIds),
      catalog_source_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._catalogSourceIds),
      description: cdktf.stringToTerraform(this._description),
      entitlement_type: cdktf.stringToTerraform(this._entitlementType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_criteria: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._projectCriteria),
      project_id: cdktf.stringToTerraform(this._projectId),
      principals: cdktf.listMapper(contentSharingPolicyPrincipalsToTerraform, true)(this._principals.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_item_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._catalogItemIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      catalog_source_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._catalogSourceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entitlement_type: {
        value: cdktf.stringToHclTerraform(this._entitlementType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      project_criteria: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._projectCriteria),
        isBlock: false,
        type: "set",
        storageClassType: "stringMapList",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principals: {
        value: cdktf.listMapperHcl(contentSharingPolicyPrincipalsToHclTerraform, true)(this._principals.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContentSharingPolicyPrincipalsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
