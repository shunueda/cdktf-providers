// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_group_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlGroupMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier for the Saml Provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_group_mapping#saml_idp_id SamlGroupMapping#saml_idp_id}
  */
  readonly samlIdpId: string;
  /**
  * group_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_group_mapping#group_mapping SamlGroupMapping#group_mapping}
  */
  readonly groupMapping: SamlGroupMappingGroupMapping[] | cdktf.IResolvable;
}
export interface SamlGroupMappingGroupMapping {
  /**
  * Group Mapping description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_group_mapping#description SamlGroupMapping#description}
  */
  readonly description?: string;
  /**
  * Project mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_group_mapping#projects SamlGroupMapping#projects}
  */
  readonly projects?: string[];
  /**
  * Provider group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_group_mapping#provider_group_id SamlGroupMapping#provider_group_id}
  */
  readonly providerGroupId: string;
  /**
  * Wiz Role name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_group_mapping#role SamlGroupMapping#role}
  */
  readonly role: string;
}

export function samlGroupMappingGroupMappingToTerraform(struct?: SamlGroupMappingGroupMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    projects: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projects),
    provider_group_id: cdktf.stringToTerraform(struct!.providerGroupId),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function samlGroupMappingGroupMappingToHclTerraform(struct?: SamlGroupMappingGroupMapping | cdktf.IResolvable): any {
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
    projects: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.projects),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    provider_group_id: {
      value: cdktf.stringToHclTerraform(struct!.providerGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SamlGroupMappingGroupMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SamlGroupMappingGroupMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._projects !== undefined) {
      hasAnyValues = true;
      internalValueResult.projects = this._projects;
    }
    if (this._providerGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerGroupId = this._providerGroupId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SamlGroupMappingGroupMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._projects = undefined;
      this._providerGroupId = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._projects = value.projects;
      this._providerGroupId = value.providerGroupId;
      this._role = value.role;
    }
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

  // projects - computed: false, optional: true, required: false
  private _projects?: string[]; 
  public get projects() {
    return this.getListAttribute('projects');
  }
  public set projects(value: string[]) {
    this._projects = value;
  }
  public resetProjects() {
    this._projects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects;
  }

  // provider_group_id - computed: false, optional: false, required: true
  private _providerGroupId?: string; 
  public get providerGroupId() {
    return this.getStringAttribute('provider_group_id');
  }
  public set providerGroupId(value: string) {
    this._providerGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerGroupIdInput() {
    return this._providerGroupId;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class SamlGroupMappingGroupMappingList extends cdktf.ComplexList {
  public internalValue? : SamlGroupMappingGroupMapping[] | cdktf.IResolvable

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
  public get(index: number): SamlGroupMappingGroupMappingOutputReference {
    return new SamlGroupMappingGroupMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_group_mapping wiz_saml_group_mapping}
*/
export class SamlGroupMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_saml_group_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SamlGroupMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SamlGroupMapping to import
  * @param importFromId The id of the existing SamlGroupMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_group_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SamlGroupMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz_saml_group_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_group_mapping wiz_saml_group_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlGroupMappingConfig
  */
  public constructor(scope: Construct, id: string, config: SamlGroupMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz_saml_group_mapping',
      terraformGeneratorMetadata: {
        providerName: 'wiz',
        providerVersion: '1.2.5',
        providerVersionConstraint: '1.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._samlIdpId = config.samlIdpId;
    this._groupMapping.internalValue = config.groupMapping;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // saml_idp_id - computed: false, optional: false, required: true
  private _samlIdpId?: string; 
  public get samlIdpId() {
    return this.getStringAttribute('saml_idp_id');
  }
  public set samlIdpId(value: string) {
    this._samlIdpId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlIdpIdInput() {
    return this._samlIdpId;
  }

  // group_mapping - computed: false, optional: false, required: true
  private _groupMapping = new SamlGroupMappingGroupMappingList(this, "group_mapping", true);
  public get groupMapping() {
    return this._groupMapping;
  }
  public putGroupMapping(value: SamlGroupMappingGroupMapping[] | cdktf.IResolvable) {
    this._groupMapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMappingInput() {
    return this._groupMapping.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      saml_idp_id: cdktf.stringToTerraform(this._samlIdpId),
      group_mapping: cdktf.listMapper(samlGroupMappingGroupMappingToTerraform, true)(this._groupMapping.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      saml_idp_id: {
        value: cdktf.stringToHclTerraform(this._samlIdpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_mapping: {
        value: cdktf.listMapperHcl(samlGroupMappingGroupMappingToHclTerraform, true)(this._groupMapping.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SamlGroupMappingGroupMappingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
