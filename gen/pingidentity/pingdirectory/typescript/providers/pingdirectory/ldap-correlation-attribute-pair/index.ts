// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/ldap_correlation_attribute_pair
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapCorrelationAttributePairConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the parent Correlated LDAP Data View
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/ldap_correlation_attribute_pair#correlated_ldap_data_view_name LdapCorrelationAttributePair#correlated_ldap_data_view_name}
  */
  readonly correlatedLdapDataViewName: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/ldap_correlation_attribute_pair#name LdapCorrelationAttributePair#name}
  */
  readonly name: string;
  /**
  * The LDAP attribute from the base SCIM Resource Type whose value will be used to match objects in the Correlated LDAP Data View.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/ldap_correlation_attribute_pair#primary_correlation_attribute LdapCorrelationAttributePair#primary_correlation_attribute}
  */
  readonly primaryCorrelationAttribute: string;
  /**
  * Name of the parent SCIM Resource Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/ldap_correlation_attribute_pair#scim_resource_type_name LdapCorrelationAttributePair#scim_resource_type_name}
  */
  readonly scimResourceTypeName: string;
  /**
  * The LDAP attribute from the Correlated LDAP Data View whose value will be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/ldap_correlation_attribute_pair#secondary_correlation_attribute LdapCorrelationAttributePair#secondary_correlation_attribute}
  */
  readonly secondaryCorrelationAttribute: string;
  /**
  * The type of LDAP Correlation Attribute Pair resource. Options are ['ldap-correlation-attribute-pair']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/ldap_correlation_attribute_pair#type LdapCorrelationAttributePair#type}
  */
  readonly type?: string;
}
export interface LdapCorrelationAttributePairRequiredActions {
}

export function ldapCorrelationAttributePairRequiredActionsToTerraform(struct?: LdapCorrelationAttributePairRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ldapCorrelationAttributePairRequiredActionsToHclTerraform(struct?: LdapCorrelationAttributePairRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LdapCorrelationAttributePairRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LdapCorrelationAttributePairRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LdapCorrelationAttributePairRequiredActions | undefined) {
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

export class LdapCorrelationAttributePairRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): LdapCorrelationAttributePairRequiredActionsOutputReference {
    return new LdapCorrelationAttributePairRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/ldap_correlation_attribute_pair pingdirectory_ldap_correlation_attribute_pair}
*/
export class LdapCorrelationAttributePair extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_ldap_correlation_attribute_pair";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LdapCorrelationAttributePair resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapCorrelationAttributePair to import
  * @param importFromId The id of the existing LdapCorrelationAttributePair that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/ldap_correlation_attribute_pair#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapCorrelationAttributePair to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_ldap_correlation_attribute_pair", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/ldap_correlation_attribute_pair pingdirectory_ldap_correlation_attribute_pair} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapCorrelationAttributePairConfig
  */
  public constructor(scope: Construct, id: string, config: LdapCorrelationAttributePairConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_ldap_correlation_attribute_pair',
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
    this._correlatedLdapDataViewName = config.correlatedLdapDataViewName;
    this._name = config.name;
    this._primaryCorrelationAttribute = config.primaryCorrelationAttribute;
    this._scimResourceTypeName = config.scimResourceTypeName;
    this._secondaryCorrelationAttribute = config.secondaryCorrelationAttribute;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // correlated_ldap_data_view_name - computed: false, optional: false, required: true
  private _correlatedLdapDataViewName?: string; 
  public get correlatedLdapDataViewName() {
    return this.getStringAttribute('correlated_ldap_data_view_name');
  }
  public set correlatedLdapDataViewName(value: string) {
    this._correlatedLdapDataViewName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get correlatedLdapDataViewNameInput() {
    return this._correlatedLdapDataViewName;
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

  // primary_correlation_attribute - computed: false, optional: false, required: true
  private _primaryCorrelationAttribute?: string; 
  public get primaryCorrelationAttribute() {
    return this.getStringAttribute('primary_correlation_attribute');
  }
  public set primaryCorrelationAttribute(value: string) {
    this._primaryCorrelationAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryCorrelationAttributeInput() {
    return this._primaryCorrelationAttribute;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new LdapCorrelationAttributePairRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
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

  // secondary_correlation_attribute - computed: false, optional: false, required: true
  private _secondaryCorrelationAttribute?: string; 
  public get secondaryCorrelationAttribute() {
    return this.getStringAttribute('secondary_correlation_attribute');
  }
  public set secondaryCorrelationAttribute(value: string) {
    this._secondaryCorrelationAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryCorrelationAttributeInput() {
    return this._secondaryCorrelationAttribute;
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
      correlated_ldap_data_view_name: cdktf.stringToTerraform(this._correlatedLdapDataViewName),
      name: cdktf.stringToTerraform(this._name),
      primary_correlation_attribute: cdktf.stringToTerraform(this._primaryCorrelationAttribute),
      scim_resource_type_name: cdktf.stringToTerraform(this._scimResourceTypeName),
      secondary_correlation_attribute: cdktf.stringToTerraform(this._secondaryCorrelationAttribute),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      correlated_ldap_data_view_name: {
        value: cdktf.stringToHclTerraform(this._correlatedLdapDataViewName),
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
      primary_correlation_attribute: {
        value: cdktf.stringToHclTerraform(this._primaryCorrelationAttribute),
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
      secondary_correlation_attribute: {
        value: cdktf.stringToHclTerraform(this._secondaryCorrelationAttribute),
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
