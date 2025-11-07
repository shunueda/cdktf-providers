// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_attribute_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScimAttributeMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies that the mapping is authoritative over other mappings for the same SCIM Resource Type attribute (for read operations).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_attribute_mapping#authoritative ScimAttributeMapping#authoritative}
  */
  readonly authoritative?: boolean | cdktf.IResolvable;
  /**
  * The Correlated LDAP Data View that persists the mapped SCIM Resource Type attribute(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_attribute_mapping#correlated_ldap_data_view ScimAttributeMapping#correlated_ldap_data_view}
  */
  readonly correlatedLdapDataView?: string;
  /**
  * The LDAP attribute to be mapped, or the path to a specific field of an LDAP attribute with the JSON object attribute syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_attribute_mapping#ldap_attribute ScimAttributeMapping#ldap_attribute}
  */
  readonly ldapAttribute: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_attribute_mapping#name ScimAttributeMapping#name}
  */
  readonly name: string;
  /**
  * Specifies whether the mapping is used to map from LDAP attribute to SCIM Resource Type attribute in a read operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_attribute_mapping#readable ScimAttributeMapping#readable}
  */
  readonly readable?: boolean | cdktf.IResolvable;
  /**
  * The attribute path of SCIM Resource Type attributes to be mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_attribute_mapping#scim_resource_type_attribute ScimAttributeMapping#scim_resource_type_attribute}
  */
  readonly scimResourceTypeAttribute: string;
  /**
  * Name of the parent SCIM Resource Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_attribute_mapping#scim_resource_type_name ScimAttributeMapping#scim_resource_type_name}
  */
  readonly scimResourceTypeName: string;
  /**
  * Specifies that the mapping is used to map from SCIM Resource Type attribute to LDAP attribute in a search filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_attribute_mapping#searchable ScimAttributeMapping#searchable}
  */
  readonly searchable?: boolean | cdktf.IResolvable;
  /**
  * The type of SCIM Attribute Mapping resource. Options are ['scim-attribute-mapping']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_attribute_mapping#type ScimAttributeMapping#type}
  */
  readonly type?: string;
  /**
  * Specifies that the mapping is used to map from SCIM Resource Type attribute to LDAP attribute in a write operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_attribute_mapping#writable ScimAttributeMapping#writable}
  */
  readonly writable?: boolean | cdktf.IResolvable;
}
export interface ScimAttributeMappingRequiredActions {
}

export function scimAttributeMappingRequiredActionsToTerraform(struct?: ScimAttributeMappingRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function scimAttributeMappingRequiredActionsToHclTerraform(struct?: ScimAttributeMappingRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ScimAttributeMappingRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScimAttributeMappingRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScimAttributeMappingRequiredActions | undefined) {
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

export class ScimAttributeMappingRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): ScimAttributeMappingRequiredActionsOutputReference {
    return new ScimAttributeMappingRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_attribute_mapping pingdirectory_scim_attribute_mapping}
*/
export class ScimAttributeMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_scim_attribute_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScimAttributeMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScimAttributeMapping to import
  * @param importFromId The id of the existing ScimAttributeMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_attribute_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScimAttributeMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_scim_attribute_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_attribute_mapping pingdirectory_scim_attribute_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScimAttributeMappingConfig
  */
  public constructor(scope: Construct, id: string, config: ScimAttributeMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_scim_attribute_mapping',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authoritative = config.authoritative;
    this._correlatedLdapDataView = config.correlatedLdapDataView;
    this._ldapAttribute = config.ldapAttribute;
    this._name = config.name;
    this._readable = config.readable;
    this._scimResourceTypeAttribute = config.scimResourceTypeAttribute;
    this._scimResourceTypeName = config.scimResourceTypeName;
    this._searchable = config.searchable;
    this._type = config.type;
    this._writable = config.writable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authoritative - computed: true, optional: true, required: false
  private _authoritative?: boolean | cdktf.IResolvable; 
  public get authoritative() {
    return this.getBooleanAttribute('authoritative');
  }
  public set authoritative(value: boolean | cdktf.IResolvable) {
    this._authoritative = value;
  }
  public resetAuthoritative() {
    this._authoritative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authoritativeInput() {
    return this._authoritative;
  }

  // correlated_ldap_data_view - computed: false, optional: true, required: false
  private _correlatedLdapDataView?: string; 
  public get correlatedLdapDataView() {
    return this.getStringAttribute('correlated_ldap_data_view');
  }
  public set correlatedLdapDataView(value: string) {
    this._correlatedLdapDataView = value;
  }
  public resetCorrelatedLdapDataView() {
    this._correlatedLdapDataView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlatedLdapDataViewInput() {
    return this._correlatedLdapDataView;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ldap_attribute - computed: false, optional: false, required: true
  private _ldapAttribute?: string; 
  public get ldapAttribute() {
    return this.getStringAttribute('ldap_attribute');
  }
  public set ldapAttribute(value: string) {
    this._ldapAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapAttributeInput() {
    return this._ldapAttribute;
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

  // readable - computed: true, optional: true, required: false
  private _readable?: boolean | cdktf.IResolvable; 
  public get readable() {
    return this.getBooleanAttribute('readable');
  }
  public set readable(value: boolean | cdktf.IResolvable) {
    this._readable = value;
  }
  public resetReadable() {
    this._readable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readableInput() {
    return this._readable;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new ScimAttributeMappingRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // scim_resource_type_attribute - computed: false, optional: false, required: true
  private _scimResourceTypeAttribute?: string; 
  public get scimResourceTypeAttribute() {
    return this.getStringAttribute('scim_resource_type_attribute');
  }
  public set scimResourceTypeAttribute(value: string) {
    this._scimResourceTypeAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scimResourceTypeAttributeInput() {
    return this._scimResourceTypeAttribute;
  }

  // scim_resource_type_name - computed: false, optional: false, required: true
  private _scimResourceTypeName?: string; 
  public get scimResourceTypeName() {
    return this.getStringAttribute('scim_resource_type_name');
  }
  public set scimResourceTypeName(value: string) {
    this._scimResourceTypeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scimResourceTypeNameInput() {
    return this._scimResourceTypeName;
  }

  // searchable - computed: true, optional: true, required: false
  private _searchable?: boolean | cdktf.IResolvable; 
  public get searchable() {
    return this.getBooleanAttribute('searchable');
  }
  public set searchable(value: boolean | cdktf.IResolvable) {
    this._searchable = value;
  }
  public resetSearchable() {
    this._searchable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchableInput() {
    return this._searchable;
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

  // writable - computed: true, optional: true, required: false
  private _writable?: boolean | cdktf.IResolvable; 
  public get writable() {
    return this.getBooleanAttribute('writable');
  }
  public set writable(value: boolean | cdktf.IResolvable) {
    this._writable = value;
  }
  public resetWritable() {
    this._writable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writableInput() {
    return this._writable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authoritative: cdktf.booleanToTerraform(this._authoritative),
      correlated_ldap_data_view: cdktf.stringToTerraform(this._correlatedLdapDataView),
      ldap_attribute: cdktf.stringToTerraform(this._ldapAttribute),
      name: cdktf.stringToTerraform(this._name),
      readable: cdktf.booleanToTerraform(this._readable),
      scim_resource_type_attribute: cdktf.stringToTerraform(this._scimResourceTypeAttribute),
      scim_resource_type_name: cdktf.stringToTerraform(this._scimResourceTypeName),
      searchable: cdktf.booleanToTerraform(this._searchable),
      type: cdktf.stringToTerraform(this._type),
      writable: cdktf.booleanToTerraform(this._writable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authoritative: {
        value: cdktf.booleanToHclTerraform(this._authoritative),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      correlated_ldap_data_view: {
        value: cdktf.stringToHclTerraform(this._correlatedLdapDataView),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_attribute: {
        value: cdktf.stringToHclTerraform(this._ldapAttribute),
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
      readable: {
        value: cdktf.booleanToHclTerraform(this._readable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scim_resource_type_attribute: {
        value: cdktf.stringToHclTerraform(this._scimResourceTypeAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scim_resource_type_name: {
        value: cdktf.stringToHclTerraform(this._scimResourceTypeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      searchable: {
        value: cdktf.booleanToHclTerraform(this._searchable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      writable: {
        value: cdktf.booleanToHclTerraform(this._writable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
