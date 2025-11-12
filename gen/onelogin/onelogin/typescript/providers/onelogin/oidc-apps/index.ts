// https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OidcAppsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps#allow_assumed_signin OidcApps#allow_assumed_signin}
  */
  readonly allowAssumedSignin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps#brand_id OidcApps#brand_id}
  */
  readonly brandId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps#configuration OidcApps#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps#connector_id OidcApps#connector_id}
  */
  readonly connectorId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps#description OidcApps#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps#id OidcApps#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps#name OidcApps#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps#notes OidcApps#notes}
  */
  readonly notes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps#provisioning OidcApps#provisioning}
  */
  readonly provisioning?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps#visible OidcApps#visible}
  */
  readonly visible?: boolean | cdktf.IResolvable;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps#parameters OidcApps#parameters}
  */
  readonly parameters?: OidcAppsParameters[] | cdktf.IResolvable;
}
export interface OidcAppsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps#attributes_transformations OidcApps#attributes_transformations}
  */
  readonly attributesTransformations?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps#default_values OidcApps#default_values}
  */
  readonly defaultValues?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps#include_in_saml_assertion OidcApps#include_in_saml_assertion}
  */
  readonly includeInSamlAssertion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps#label OidcApps#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps#param_key_name OidcApps#param_key_name}
  */
  readonly paramKeyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps#provisioned_entitlements OidcApps#provisioned_entitlements}
  */
  readonly provisionedEntitlements?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps#safe_entitlements_enabled OidcApps#safe_entitlements_enabled}
  */
  readonly safeEntitlementsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps#skip_if_blank OidcApps#skip_if_blank}
  */
  readonly skipIfBlank?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps#user_attribute_macros OidcApps#user_attribute_macros}
  */
  readonly userAttributeMacros?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps#user_attribute_mappings OidcApps#user_attribute_mappings}
  */
  readonly userAttributeMappings?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps#values OidcApps#values}
  */
  readonly values?: string;
}

export function oidcAppsParametersToTerraform(struct?: OidcAppsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes_transformations: cdktf.stringToTerraform(struct!.attributesTransformations),
    default_values: cdktf.stringToTerraform(struct!.defaultValues),
    include_in_saml_assertion: cdktf.booleanToTerraform(struct!.includeInSamlAssertion),
    label: cdktf.stringToTerraform(struct!.label),
    param_key_name: cdktf.stringToTerraform(struct!.paramKeyName),
    provisioned_entitlements: cdktf.booleanToTerraform(struct!.provisionedEntitlements),
    safe_entitlements_enabled: cdktf.booleanToTerraform(struct!.safeEntitlementsEnabled),
    skip_if_blank: cdktf.booleanToTerraform(struct!.skipIfBlank),
    user_attribute_macros: cdktf.stringToTerraform(struct!.userAttributeMacros),
    user_attribute_mappings: cdktf.stringToTerraform(struct!.userAttributeMappings),
    values: cdktf.stringToTerraform(struct!.values),
  }
}


export function oidcAppsParametersToHclTerraform(struct?: OidcAppsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes_transformations: {
      value: cdktf.stringToHclTerraform(struct!.attributesTransformations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_values: {
      value: cdktf.stringToHclTerraform(struct!.defaultValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_in_saml_assertion: {
      value: cdktf.booleanToHclTerraform(struct!.includeInSamlAssertion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_key_name: {
      value: cdktf.stringToHclTerraform(struct!.paramKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioned_entitlements: {
      value: cdktf.booleanToHclTerraform(struct!.provisionedEntitlements),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    safe_entitlements_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.safeEntitlementsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_if_blank: {
      value: cdktf.booleanToHclTerraform(struct!.skipIfBlank),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_attribute_macros: {
      value: cdktf.stringToHclTerraform(struct!.userAttributeMacros),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_attribute_mappings: {
      value: cdktf.stringToHclTerraform(struct!.userAttributeMappings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.stringToHclTerraform(struct!.values),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OidcAppsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OidcAppsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributesTransformations !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributesTransformations = this._attributesTransformations;
    }
    if (this._defaultValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValues = this._defaultValues;
    }
    if (this._includeInSamlAssertion !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeInSamlAssertion = this._includeInSamlAssertion;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._paramKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramKeyName = this._paramKeyName;
    }
    if (this._provisionedEntitlements !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedEntitlements = this._provisionedEntitlements;
    }
    if (this._safeEntitlementsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.safeEntitlementsEnabled = this._safeEntitlementsEnabled;
    }
    if (this._skipIfBlank !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipIfBlank = this._skipIfBlank;
    }
    if (this._userAttributeMacros !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAttributeMacros = this._userAttributeMacros;
    }
    if (this._userAttributeMappings !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAttributeMappings = this._userAttributeMappings;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OidcAppsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributesTransformations = undefined;
      this._defaultValues = undefined;
      this._includeInSamlAssertion = undefined;
      this._label = undefined;
      this._paramKeyName = undefined;
      this._provisionedEntitlements = undefined;
      this._safeEntitlementsEnabled = undefined;
      this._skipIfBlank = undefined;
      this._userAttributeMacros = undefined;
      this._userAttributeMappings = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributesTransformations = value.attributesTransformations;
      this._defaultValues = value.defaultValues;
      this._includeInSamlAssertion = value.includeInSamlAssertion;
      this._label = value.label;
      this._paramKeyName = value.paramKeyName;
      this._provisionedEntitlements = value.provisionedEntitlements;
      this._safeEntitlementsEnabled = value.safeEntitlementsEnabled;
      this._skipIfBlank = value.skipIfBlank;
      this._userAttributeMacros = value.userAttributeMacros;
      this._userAttributeMappings = value.userAttributeMappings;
      this._values = value.values;
    }
  }

  // attributes_transformations - computed: true, optional: true, required: false
  private _attributesTransformations?: string; 
  public get attributesTransformations() {
    return this.getStringAttribute('attributes_transformations');
  }
  public set attributesTransformations(value: string) {
    this._attributesTransformations = value;
  }
  public resetAttributesTransformations() {
    this._attributesTransformations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesTransformationsInput() {
    return this._attributesTransformations;
  }

  // default_values - computed: true, optional: true, required: false
  private _defaultValues?: string; 
  public get defaultValues() {
    return this.getStringAttribute('default_values');
  }
  public set defaultValues(value: string) {
    this._defaultValues = value;
  }
  public resetDefaultValues() {
    this._defaultValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValuesInput() {
    return this._defaultValues;
  }

  // include_in_saml_assertion - computed: true, optional: true, required: false
  private _includeInSamlAssertion?: boolean | cdktf.IResolvable; 
  public get includeInSamlAssertion() {
    return this.getBooleanAttribute('include_in_saml_assertion');
  }
  public set includeInSamlAssertion(value: boolean | cdktf.IResolvable) {
    this._includeInSamlAssertion = value;
  }
  public resetIncludeInSamlAssertion() {
    this._includeInSamlAssertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInSamlAssertionInput() {
    return this._includeInSamlAssertion;
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // param_id - computed: true, optional: false, required: false
  public get paramId() {
    return this.getNumberAttribute('param_id');
  }

  // param_key_name - computed: false, optional: false, required: true
  private _paramKeyName?: string; 
  public get paramKeyName() {
    return this.getStringAttribute('param_key_name');
  }
  public set paramKeyName(value: string) {
    this._paramKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramKeyNameInput() {
    return this._paramKeyName;
  }

  // provisioned_entitlements - computed: true, optional: true, required: false
  private _provisionedEntitlements?: boolean | cdktf.IResolvable; 
  public get provisionedEntitlements() {
    return this.getBooleanAttribute('provisioned_entitlements');
  }
  public set provisionedEntitlements(value: boolean | cdktf.IResolvable) {
    this._provisionedEntitlements = value;
  }
  public resetProvisionedEntitlements() {
    this._provisionedEntitlements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedEntitlementsInput() {
    return this._provisionedEntitlements;
  }

  // safe_entitlements_enabled - computed: true, optional: true, required: false
  private _safeEntitlementsEnabled?: boolean | cdktf.IResolvable; 
  public get safeEntitlementsEnabled() {
    return this.getBooleanAttribute('safe_entitlements_enabled');
  }
  public set safeEntitlementsEnabled(value: boolean | cdktf.IResolvable) {
    this._safeEntitlementsEnabled = value;
  }
  public resetSafeEntitlementsEnabled() {
    this._safeEntitlementsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeEntitlementsEnabledInput() {
    return this._safeEntitlementsEnabled;
  }

  // skip_if_blank - computed: true, optional: true, required: false
  private _skipIfBlank?: boolean | cdktf.IResolvable; 
  public get skipIfBlank() {
    return this.getBooleanAttribute('skip_if_blank');
  }
  public set skipIfBlank(value: boolean | cdktf.IResolvable) {
    this._skipIfBlank = value;
  }
  public resetSkipIfBlank() {
    this._skipIfBlank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipIfBlankInput() {
    return this._skipIfBlank;
  }

  // user_attribute_macros - computed: true, optional: true, required: false
  private _userAttributeMacros?: string; 
  public get userAttributeMacros() {
    return this.getStringAttribute('user_attribute_macros');
  }
  public set userAttributeMacros(value: string) {
    this._userAttributeMacros = value;
  }
  public resetUserAttributeMacros() {
    this._userAttributeMacros = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttributeMacrosInput() {
    return this._userAttributeMacros;
  }

  // user_attribute_mappings - computed: true, optional: true, required: false
  private _userAttributeMappings?: string; 
  public get userAttributeMappings() {
    return this.getStringAttribute('user_attribute_mappings');
  }
  public set userAttributeMappings(value: string) {
    this._userAttributeMappings = value;
  }
  public resetUserAttributeMappings() {
    this._userAttributeMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttributeMappingsInput() {
    return this._userAttributeMappings;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class OidcAppsParametersList extends cdktf.ComplexList {
  public internalValue? : OidcAppsParameters[] | cdktf.IResolvable

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
  public get(index: number): OidcAppsParametersOutputReference {
    return new OidcAppsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps onelogin_oidc_apps}
*/
export class OidcApps extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "onelogin_oidc_apps";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OidcApps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OidcApps to import
  * @param importFromId The id of the existing OidcApps that should be imported. Refer to the {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OidcApps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "onelogin_oidc_apps", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/oidc_apps onelogin_oidc_apps} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OidcAppsConfig
  */
  public constructor(scope: Construct, id: string, config: OidcAppsConfig) {
    super(scope, id, {
      terraformResourceType: 'onelogin_oidc_apps',
      terraformGeneratorMetadata: {
        providerName: 'onelogin',
        providerVersion: '0.11.2',
        providerVersionConstraint: '0.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAssumedSignin = config.allowAssumedSignin;
    this._brandId = config.brandId;
    this._configuration = config.configuration;
    this._connectorId = config.connectorId;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._notes = config.notes;
    this._provisioning = config.provisioning;
    this._visible = config.visible;
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_assumed_signin - computed: false, optional: true, required: false
  private _allowAssumedSignin?: boolean | cdktf.IResolvable; 
  public get allowAssumedSignin() {
    return this.getBooleanAttribute('allow_assumed_signin');
  }
  public set allowAssumedSignin(value: boolean | cdktf.IResolvable) {
    this._allowAssumedSignin = value;
  }
  public resetAllowAssumedSignin() {
    this._allowAssumedSignin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAssumedSigninInput() {
    return this._allowAssumedSignin;
  }

  // auth_method - computed: true, optional: false, required: false
  public get authMethod() {
    return this.getNumberAttribute('auth_method');
  }

  // brand_id - computed: false, optional: true, required: false
  private _brandId?: number; 
  public get brandId() {
    return this.getNumberAttribute('brand_id');
  }
  public set brandId(value: number) {
    this._brandId = value;
  }
  public resetBrandId() {
    this._brandId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brandIdInput() {
    return this._brandId;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // connector_id - computed: false, optional: false, required: true
  private _connectorId?: number; 
  public get connectorId() {
    return this.getNumberAttribute('connector_id');
  }
  public set connectorId(value: number) {
    this._connectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIdInput() {
    return this._connectorId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // icon_url - computed: true, optional: false, required: false
  public get iconUrl() {
    return this.getStringAttribute('icon_url');
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

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }

  // provisioning - computed: true, optional: true, required: false
  private _provisioning?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get provisioning() {
    return this.getBooleanMapAttribute('provisioning');
  }
  public set provisioning(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._provisioning = value;
  }
  public resetProvisioning() {
    this._provisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningInput() {
    return this._provisioning;
  }

  // tab_id - computed: true, optional: false, required: false
  public get tabId() {
    return this.getNumberAttribute('tab_id');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // visible - computed: false, optional: true, required: false
  private _visible?: boolean | cdktf.IResolvable; 
  public get visible() {
    return this.getBooleanAttribute('visible');
  }
  public set visible(value: boolean | cdktf.IResolvable) {
    this._visible = value;
  }
  public resetVisible() {
    this._visible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleInput() {
    return this._visible;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new OidcAppsParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: OidcAppsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_assumed_signin: cdktf.booleanToTerraform(this._allowAssumedSignin),
      brand_id: cdktf.numberToTerraform(this._brandId),
      configuration: cdktf.hashMapper(cdktf.stringToTerraform)(this._configuration),
      connector_id: cdktf.numberToTerraform(this._connectorId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      provisioning: cdktf.hashMapper(cdktf.booleanToTerraform)(this._provisioning),
      visible: cdktf.booleanToTerraform(this._visible),
      parameters: cdktf.listMapper(oidcAppsParametersToTerraform, true)(this._parameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_assumed_signin: {
        value: cdktf.booleanToHclTerraform(this._allowAssumedSignin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      brand_id: {
        value: cdktf.numberToHclTerraform(this._brandId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      configuration: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._configuration),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      connector_id: {
        value: cdktf.numberToHclTerraform(this._connectorId),
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
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioning: {
        value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(this._provisioning),
        isBlock: false,
        type: "map",
        storageClassType: "booleanMap",
      },
      visible: {
        value: cdktf.booleanToHclTerraform(this._visible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      parameters: {
        value: cdktf.listMapperHcl(oidcAppsParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OidcAppsParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
