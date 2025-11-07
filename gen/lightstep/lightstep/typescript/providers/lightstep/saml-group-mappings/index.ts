// https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/saml_group_mappings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlGroupMappingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/saml_group_mappings#id SamlGroupMappings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/saml_group_mappings#mapping SamlGroupMappings#mapping}
  */
  readonly mapping: SamlGroupMappingsMapping[] | cdktf.IResolvable;
}
export interface SamlGroupMappingsMappingMatch {
  /**
  * Attribute Key to match against the user's SAML attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/saml_group_mappings#attribute_key SamlGroupMappings#attribute_key}
  */
  readonly attributeKey: string;
  /**
  * Attribute Value to match against the user's SAML attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/saml_group_mappings#attribute_value SamlGroupMappings#attribute_value}
  */
  readonly attributeValue: string;
}

export function samlGroupMappingsMappingMatchToTerraform(struct?: SamlGroupMappingsMappingMatchOutputReference | SamlGroupMappingsMappingMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_key: cdktf.stringToTerraform(struct!.attributeKey),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
  }
}


export function samlGroupMappingsMappingMatchToHclTerraform(struct?: SamlGroupMappingsMappingMatchOutputReference | SamlGroupMappingsMappingMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_key: {
      value: cdktf.stringToHclTerraform(struct!.attributeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_value: {
      value: cdktf.stringToHclTerraform(struct!.attributeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SamlGroupMappingsMappingMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SamlGroupMappingsMappingMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeKey = this._attributeKey;
    }
    if (this._attributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValue = this._attributeValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SamlGroupMappingsMappingMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributeKey = undefined;
      this._attributeValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributeKey = value.attributeKey;
      this._attributeValue = value.attributeValue;
    }
  }

  // attribute_key - computed: false, optional: false, required: true
  private _attributeKey?: string; 
  public get attributeKey() {
    return this.getStringAttribute('attribute_key');
  }
  public set attributeKey(value: string) {
    this._attributeKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeKeyInput() {
    return this._attributeKey;
  }

  // attribute_value - computed: false, optional: false, required: true
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }
}
export interface SamlGroupMappingsMappingRoles {
  /**
  * Organization Role. Only 'Organization Editor', 'Organization Viewer' and 'Organization Restricted Member'  are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/saml_group_mappings#organization_role SamlGroupMappings#organization_role}
  */
  readonly organizationRole: string;
  /**
  * Map of Project Name to Project Role. Only 'Project Editor' and 'Project Viewer' are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/saml_group_mappings#project_roles SamlGroupMappings#project_roles}
  */
  readonly projectRoles?: { [key: string]: string };
}

export function samlGroupMappingsMappingRolesToTerraform(struct?: SamlGroupMappingsMappingRolesOutputReference | SamlGroupMappingsMappingRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    organization_role: cdktf.stringToTerraform(struct!.organizationRole),
    project_roles: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.projectRoles),
  }
}


export function samlGroupMappingsMappingRolesToHclTerraform(struct?: SamlGroupMappingsMappingRolesOutputReference | SamlGroupMappingsMappingRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    organization_role: {
      value: cdktf.stringToHclTerraform(struct!.organizationRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_roles: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.projectRoles),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SamlGroupMappingsMappingRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SamlGroupMappingsMappingRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._organizationRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationRole = this._organizationRole;
    }
    if (this._projectRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectRoles = this._projectRoles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SamlGroupMappingsMappingRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._organizationRole = undefined;
      this._projectRoles = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._organizationRole = value.organizationRole;
      this._projectRoles = value.projectRoles;
    }
  }

  // organization_role - computed: false, optional: false, required: true
  private _organizationRole?: string; 
  public get organizationRole() {
    return this.getStringAttribute('organization_role');
  }
  public set organizationRole(value: string) {
    this._organizationRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationRoleInput() {
    return this._organizationRole;
  }

  // project_roles - computed: false, optional: true, required: false
  private _projectRoles?: { [key: string]: string }; 
  public get projectRoles() {
    return this.getStringMapAttribute('project_roles');
  }
  public set projectRoles(value: { [key: string]: string }) {
    this._projectRoles = value;
  }
  public resetProjectRoles() {
    this._projectRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectRolesInput() {
    return this._projectRoles;
  }
}
export interface SamlGroupMappingsMapping {
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/saml_group_mappings#match SamlGroupMappings#match}
  */
  readonly match: SamlGroupMappingsMappingMatch;
  /**
  * roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/saml_group_mappings#roles SamlGroupMappings#roles}
  */
  readonly roles: SamlGroupMappingsMappingRoles;
}

export function samlGroupMappingsMappingToTerraform(struct?: SamlGroupMappingsMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: samlGroupMappingsMappingMatchToTerraform(struct!.match),
    roles: samlGroupMappingsMappingRolesToTerraform(struct!.roles),
  }
}


export function samlGroupMappingsMappingToHclTerraform(struct?: SamlGroupMappingsMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: samlGroupMappingsMappingMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SamlGroupMappingsMappingMatchList",
    },
    roles: {
      value: samlGroupMappingsMappingRolesToHclTerraform(struct!.roles),
      isBlock: true,
      type: "list",
      storageClassType: "SamlGroupMappingsMappingRolesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SamlGroupMappingsMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SamlGroupMappingsMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._roles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SamlGroupMappingsMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match.internalValue = undefined;
      this._roles.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match.internalValue = value.match;
      this._roles.internalValue = value.roles;
    }
  }

  // match - computed: false, optional: false, required: true
  private _match = new SamlGroupMappingsMappingMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: SamlGroupMappingsMappingMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // roles - computed: false, optional: false, required: true
  private _roles = new SamlGroupMappingsMappingRolesOutputReference(this, "roles");
  public get roles() {
    return this._roles;
  }
  public putRoles(value: SamlGroupMappingsMappingRoles) {
    this._roles.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }
}

export class SamlGroupMappingsMappingList extends cdktf.ComplexList {
  public internalValue? : SamlGroupMappingsMapping[] | cdktf.IResolvable

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
  public get(index: number): SamlGroupMappingsMappingOutputReference {
    return new SamlGroupMappingsMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/saml_group_mappings lightstep_saml_group_mappings}
*/
export class SamlGroupMappings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lightstep_saml_group_mappings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SamlGroupMappings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SamlGroupMappings to import
  * @param importFromId The id of the existing SamlGroupMappings that should be imported. Refer to the {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/saml_group_mappings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SamlGroupMappings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lightstep_saml_group_mappings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/saml_group_mappings lightstep_saml_group_mappings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlGroupMappingsConfig
  */
  public constructor(scope: Construct, id: string, config: SamlGroupMappingsConfig) {
    super(scope, id, {
      terraformResourceType: 'lightstep_saml_group_mappings',
      terraformGeneratorMetadata: {
        providerName: 'lightstep',
        providerVersion: '1.98.2'
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
    this._mapping.internalValue = config.mapping;
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

  // mapping - computed: false, optional: false, required: true
  private _mapping = new SamlGroupMappingsMappingList(this, "mapping", true);
  public get mapping() {
    return this._mapping;
  }
  public putMapping(value: SamlGroupMappingsMapping[] | cdktf.IResolvable) {
    this._mapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mapping: cdktf.listMapper(samlGroupMappingsMappingToTerraform, true)(this._mapping.internalValue),
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
      mapping: {
        value: cdktf.listMapperHcl(samlGroupMappingsMappingToHclTerraform, true)(this._mapping.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SamlGroupMappingsMappingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
