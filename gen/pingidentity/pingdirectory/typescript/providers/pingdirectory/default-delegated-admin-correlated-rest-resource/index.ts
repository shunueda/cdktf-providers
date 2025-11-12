// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_correlated_rest_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultDelegatedAdminCorrelatedRestResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The REST Resource Type that will be linked to this REST Resource Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_correlated_rest_resource#correlated_rest_resource DefaultDelegatedAdminCorrelatedRestResource#correlated_rest_resource}
  */
  readonly correlatedRestResource?: string;
  /**
  * A human readable display name for this Delegated Admin Correlated REST Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_correlated_rest_resource#display_name DefaultDelegatedAdminCorrelatedRestResource#display_name}
  */
  readonly displayName?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_correlated_rest_resource#name DefaultDelegatedAdminCorrelatedRestResource#name}
  */
  readonly name: string;
  /**
  * The LDAP attribute from the parent REST Resource Type whose value will be used to match objects in the Delegated Admin Correlated REST Resource. This attribute must be writeable when use-secondary-value-for-linking is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_correlated_rest_resource#primary_rest_resource_correlation_attribute DefaultDelegatedAdminCorrelatedRestResource#primary_rest_resource_correlation_attribute}
  */
  readonly primaryRestResourceCorrelationAttribute?: string;
  /**
  * Name of the parent REST Resource Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_correlated_rest_resource#rest_resource_type_name DefaultDelegatedAdminCorrelatedRestResource#rest_resource_type_name}
  */
  readonly restResourceTypeName: string;
  /**
  * The LDAP attribute from the Delegated Admin Correlated REST Resource whose value will be matched with the primary-rest-resource-correlation-attribute. This attribute must be writeable when use-secondary-value-for-linking is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_correlated_rest_resource#secondary_rest_resource_correlation_attribute DefaultDelegatedAdminCorrelatedRestResource#secondary_rest_resource_correlation_attribute}
  */
  readonly secondaryRestResourceCorrelationAttribute?: string;
  /**
  * Indicates whether links should be created using the secondary correlation attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_correlated_rest_resource#use_secondary_value_for_linking DefaultDelegatedAdminCorrelatedRestResource#use_secondary_value_for_linking}
  */
  readonly useSecondaryValueForLinking?: boolean | cdktf.IResolvable;
}
export interface DefaultDelegatedAdminCorrelatedRestResourceRequiredActions {
}

export function defaultDelegatedAdminCorrelatedRestResourceRequiredActionsToTerraform(struct?: DefaultDelegatedAdminCorrelatedRestResourceRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultDelegatedAdminCorrelatedRestResourceRequiredActionsToHclTerraform(struct?: DefaultDelegatedAdminCorrelatedRestResourceRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultDelegatedAdminCorrelatedRestResourceRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultDelegatedAdminCorrelatedRestResourceRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultDelegatedAdminCorrelatedRestResourceRequiredActions | undefined) {
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

export class DefaultDelegatedAdminCorrelatedRestResourceRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultDelegatedAdminCorrelatedRestResourceRequiredActionsOutputReference {
    return new DefaultDelegatedAdminCorrelatedRestResourceRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_correlated_rest_resource pingdirectory_default_delegated_admin_correlated_rest_resource}
*/
export class DefaultDelegatedAdminCorrelatedRestResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_delegated_admin_correlated_rest_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultDelegatedAdminCorrelatedRestResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultDelegatedAdminCorrelatedRestResource to import
  * @param importFromId The id of the existing DefaultDelegatedAdminCorrelatedRestResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_correlated_rest_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultDelegatedAdminCorrelatedRestResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_delegated_admin_correlated_rest_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_correlated_rest_resource pingdirectory_default_delegated_admin_correlated_rest_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultDelegatedAdminCorrelatedRestResourceConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultDelegatedAdminCorrelatedRestResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_delegated_admin_correlated_rest_resource',
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
    this._correlatedRestResource = config.correlatedRestResource;
    this._displayName = config.displayName;
    this._name = config.name;
    this._primaryRestResourceCorrelationAttribute = config.primaryRestResourceCorrelationAttribute;
    this._restResourceTypeName = config.restResourceTypeName;
    this._secondaryRestResourceCorrelationAttribute = config.secondaryRestResourceCorrelationAttribute;
    this._useSecondaryValueForLinking = config.useSecondaryValueForLinking;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // correlated_rest_resource - computed: true, optional: true, required: false
  private _correlatedRestResource?: string; 
  public get correlatedRestResource() {
    return this.getStringAttribute('correlated_rest_resource');
  }
  public set correlatedRestResource(value: string) {
    this._correlatedRestResource = value;
  }
  public resetCorrelatedRestResource() {
    this._correlatedRestResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlatedRestResourceInput() {
    return this._correlatedRestResource;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // primary_rest_resource_correlation_attribute - computed: true, optional: true, required: false
  private _primaryRestResourceCorrelationAttribute?: string; 
  public get primaryRestResourceCorrelationAttribute() {
    return this.getStringAttribute('primary_rest_resource_correlation_attribute');
  }
  public set primaryRestResourceCorrelationAttribute(value: string) {
    this._primaryRestResourceCorrelationAttribute = value;
  }
  public resetPrimaryRestResourceCorrelationAttribute() {
    this._primaryRestResourceCorrelationAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryRestResourceCorrelationAttributeInput() {
    return this._primaryRestResourceCorrelationAttribute;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultDelegatedAdminCorrelatedRestResourceRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // rest_resource_type_name - computed: false, optional: false, required: true
  private _restResourceTypeName?: string; 
  public get restResourceTypeName() {
    return this.getStringAttribute('rest_resource_type_name');
  }
  public set restResourceTypeName(value: string) {
    this._restResourceTypeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restResourceTypeNameInput() {
    return this._restResourceTypeName;
  }

  // secondary_rest_resource_correlation_attribute - computed: true, optional: true, required: false
  private _secondaryRestResourceCorrelationAttribute?: string; 
  public get secondaryRestResourceCorrelationAttribute() {
    return this.getStringAttribute('secondary_rest_resource_correlation_attribute');
  }
  public set secondaryRestResourceCorrelationAttribute(value: string) {
    this._secondaryRestResourceCorrelationAttribute = value;
  }
  public resetSecondaryRestResourceCorrelationAttribute() {
    this._secondaryRestResourceCorrelationAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryRestResourceCorrelationAttributeInput() {
    return this._secondaryRestResourceCorrelationAttribute;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_secondary_value_for_linking - computed: true, optional: true, required: false
  private _useSecondaryValueForLinking?: boolean | cdktf.IResolvable; 
  public get useSecondaryValueForLinking() {
    return this.getBooleanAttribute('use_secondary_value_for_linking');
  }
  public set useSecondaryValueForLinking(value: boolean | cdktf.IResolvable) {
    this._useSecondaryValueForLinking = value;
  }
  public resetUseSecondaryValueForLinking() {
    this._useSecondaryValueForLinking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSecondaryValueForLinkingInput() {
    return this._useSecondaryValueForLinking;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      correlated_rest_resource: cdktf.stringToTerraform(this._correlatedRestResource),
      display_name: cdktf.stringToTerraform(this._displayName),
      name: cdktf.stringToTerraform(this._name),
      primary_rest_resource_correlation_attribute: cdktf.stringToTerraform(this._primaryRestResourceCorrelationAttribute),
      rest_resource_type_name: cdktf.stringToTerraform(this._restResourceTypeName),
      secondary_rest_resource_correlation_attribute: cdktf.stringToTerraform(this._secondaryRestResourceCorrelationAttribute),
      use_secondary_value_for_linking: cdktf.booleanToTerraform(this._useSecondaryValueForLinking),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      correlated_rest_resource: {
        value: cdktf.stringToHclTerraform(this._correlatedRestResource),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_rest_resource_correlation_attribute: {
        value: cdktf.stringToHclTerraform(this._primaryRestResourceCorrelationAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rest_resource_type_name: {
        value: cdktf.stringToHclTerraform(this._restResourceTypeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_rest_resource_correlation_attribute: {
        value: cdktf.stringToHclTerraform(this._secondaryRestResourceCorrelationAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_secondary_value_for_linking: {
        value: cdktf.booleanToHclTerraform(this._useSecondaryValueForLinking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
