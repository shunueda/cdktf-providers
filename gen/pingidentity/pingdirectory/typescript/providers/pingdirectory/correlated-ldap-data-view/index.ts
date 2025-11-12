// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/correlated_ldap_data_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CorrelatedLdapDataViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies an auxiliary LDAP object class that should be exposed by this Correlated LDAP Data View.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/correlated_ldap_data_view#auxiliary_ldap_objectclass CorrelatedLdapDataView#auxiliary_ldap_objectclass}
  */
  readonly auxiliaryLdapObjectclass?: string[];
  /**
  * Specifies the template to use for the DN when creating new entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/correlated_ldap_data_view#create_dn_pattern CorrelatedLdapDataView#create_dn_pattern}
  */
  readonly createDnPattern?: string;
  /**
  * Specifies the base DN of the branch of the LDAP directory that can be accessed by this Correlated LDAP Data View.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/correlated_ldap_data_view#include_base_dn CorrelatedLdapDataView#include_base_dn}
  */
  readonly includeBaseDn: string;
  /**
  * The set of LDAP filters that define the LDAP entries that should be included in this Correlated LDAP Data View.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/correlated_ldap_data_view#include_filter CorrelatedLdapDataView#include_filter}
  */
  readonly includeFilter?: string[];
  /**
  * Specifies the set of operational LDAP attributes to be provided by this Correlated LDAP Data View.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/correlated_ldap_data_view#include_operational_attribute CorrelatedLdapDataView#include_operational_attribute}
  */
  readonly includeOperationalAttribute?: string[];
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/correlated_ldap_data_view#name CorrelatedLdapDataView#name}
  */
  readonly name: string;
  /**
  * The LDAP attribute from the parent SCIM Resource Type whose value will be used to match objects in the Correlated LDAP Data View. If multiple correlation attributes are required they may be created using additional correlation-attribute-pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/correlated_ldap_data_view#primary_correlation_attribute CorrelatedLdapDataView#primary_correlation_attribute}
  */
  readonly primaryCorrelationAttribute: string;
  /**
  * Name of the parent SCIM Resource Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/correlated_ldap_data_view#scim_resource_type_name CorrelatedLdapDataView#scim_resource_type_name}
  */
  readonly scimResourceTypeName: string;
  /**
  * The LDAP attribute from the Correlated LDAP Data View whose value will be matched with the primary-correlation-attribute. If multiple correlation attributes are required they may be specified by creating additional correlation-attribute-pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/correlated_ldap_data_view#secondary_correlation_attribute CorrelatedLdapDataView#secondary_correlation_attribute}
  */
  readonly secondaryCorrelationAttribute: string;
  /**
  * Specifies the LDAP structural object class that should be exposed by this Correlated LDAP Data View.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/correlated_ldap_data_view#structural_ldap_objectclass CorrelatedLdapDataView#structural_ldap_objectclass}
  */
  readonly structuralLdapObjectclass: string;
  /**
  * The type of Correlated LDAP Data View resource. Options are ['correlated-ldap-data-view']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/correlated_ldap_data_view#type CorrelatedLdapDataView#type}
  */
  readonly type?: string;
}
export interface CorrelatedLdapDataViewRequiredActions {
}

export function correlatedLdapDataViewRequiredActionsToTerraform(struct?: CorrelatedLdapDataViewRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function correlatedLdapDataViewRequiredActionsToHclTerraform(struct?: CorrelatedLdapDataViewRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CorrelatedLdapDataViewRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CorrelatedLdapDataViewRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CorrelatedLdapDataViewRequiredActions | undefined) {
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

export class CorrelatedLdapDataViewRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): CorrelatedLdapDataViewRequiredActionsOutputReference {
    return new CorrelatedLdapDataViewRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/correlated_ldap_data_view pingdirectory_correlated_ldap_data_view}
*/
export class CorrelatedLdapDataView extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_correlated_ldap_data_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CorrelatedLdapDataView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CorrelatedLdapDataView to import
  * @param importFromId The id of the existing CorrelatedLdapDataView that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/correlated_ldap_data_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CorrelatedLdapDataView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_correlated_ldap_data_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/correlated_ldap_data_view pingdirectory_correlated_ldap_data_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CorrelatedLdapDataViewConfig
  */
  public constructor(scope: Construct, id: string, config: CorrelatedLdapDataViewConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_correlated_ldap_data_view',
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
    this._auxiliaryLdapObjectclass = config.auxiliaryLdapObjectclass;
    this._createDnPattern = config.createDnPattern;
    this._includeBaseDn = config.includeBaseDn;
    this._includeFilter = config.includeFilter;
    this._includeOperationalAttribute = config.includeOperationalAttribute;
    this._name = config.name;
    this._primaryCorrelationAttribute = config.primaryCorrelationAttribute;
    this._scimResourceTypeName = config.scimResourceTypeName;
    this._secondaryCorrelationAttribute = config.secondaryCorrelationAttribute;
    this._structuralLdapObjectclass = config.structuralLdapObjectclass;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auxiliary_ldap_objectclass - computed: true, optional: true, required: false
  private _auxiliaryLdapObjectclass?: string[]; 
  public get auxiliaryLdapObjectclass() {
    return cdktf.Fn.tolist(this.getListAttribute('auxiliary_ldap_objectclass'));
  }
  public set auxiliaryLdapObjectclass(value: string[]) {
    this._auxiliaryLdapObjectclass = value;
  }
  public resetAuxiliaryLdapObjectclass() {
    this._auxiliaryLdapObjectclass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryLdapObjectclassInput() {
    return this._auxiliaryLdapObjectclass;
  }

  // create_dn_pattern - computed: false, optional: true, required: false
  private _createDnPattern?: string; 
  public get createDnPattern() {
    return this.getStringAttribute('create_dn_pattern');
  }
  public set createDnPattern(value: string) {
    this._createDnPattern = value;
  }
  public resetCreateDnPattern() {
    this._createDnPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDnPatternInput() {
    return this._createDnPattern;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_base_dn - computed: false, optional: false, required: true
  private _includeBaseDn?: string; 
  public get includeBaseDn() {
    return this.getStringAttribute('include_base_dn');
  }
  public set includeBaseDn(value: string) {
    this._includeBaseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBaseDnInput() {
    return this._includeBaseDn;
  }

  // include_filter - computed: true, optional: true, required: false
  private _includeFilter?: string[]; 
  public get includeFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('include_filter'));
  }
  public set includeFilter(value: string[]) {
    this._includeFilter = value;
  }
  public resetIncludeFilter() {
    this._includeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFilterInput() {
    return this._includeFilter;
  }

  // include_operational_attribute - computed: true, optional: true, required: false
  private _includeOperationalAttribute?: string[]; 
  public get includeOperationalAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('include_operational_attribute'));
  }
  public set includeOperationalAttribute(value: string[]) {
    this._includeOperationalAttribute = value;
  }
  public resetIncludeOperationalAttribute() {
    this._includeOperationalAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOperationalAttributeInput() {
    return this._includeOperationalAttribute;
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
  private _requiredActions = new CorrelatedLdapDataViewRequiredActionsList(this, "required_actions", true);
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

  // structural_ldap_objectclass - computed: false, optional: false, required: true
  private _structuralLdapObjectclass?: string; 
  public get structuralLdapObjectclass() {
    return this.getStringAttribute('structural_ldap_objectclass');
  }
  public set structuralLdapObjectclass(value: string) {
    this._structuralLdapObjectclass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get structuralLdapObjectclassInput() {
    return this._structuralLdapObjectclass;
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
      auxiliary_ldap_objectclass: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auxiliaryLdapObjectclass),
      create_dn_pattern: cdktf.stringToTerraform(this._createDnPattern),
      include_base_dn: cdktf.stringToTerraform(this._includeBaseDn),
      include_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeFilter),
      include_operational_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeOperationalAttribute),
      name: cdktf.stringToTerraform(this._name),
      primary_correlation_attribute: cdktf.stringToTerraform(this._primaryCorrelationAttribute),
      scim_resource_type_name: cdktf.stringToTerraform(this._scimResourceTypeName),
      secondary_correlation_attribute: cdktf.stringToTerraform(this._secondaryCorrelationAttribute),
      structural_ldap_objectclass: cdktf.stringToTerraform(this._structuralLdapObjectclass),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auxiliary_ldap_objectclass: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._auxiliaryLdapObjectclass),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      create_dn_pattern: {
        value: cdktf.stringToHclTerraform(this._createDnPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_base_dn: {
        value: cdktf.stringToHclTerraform(this._includeBaseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      include_operational_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeOperationalAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      structural_ldap_objectclass: {
        value: cdktf.stringToHclTerraform(this._structuralLdapObjectclass),
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
