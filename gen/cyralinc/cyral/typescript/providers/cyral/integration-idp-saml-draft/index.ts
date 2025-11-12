// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_saml_draft
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationIdpSamlDraftConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not IdP-Initiated login should be disabled for this generic SAML integration draft. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_saml_draft#disable_idp_initiated_login IntegrationIdpSamlDraft#disable_idp_initiated_login}
  */
  readonly disableIdpInitiatedLogin?: boolean | cdktf.IResolvable;
  /**
  * Display name used in the Cyral control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_saml_draft#display_name IntegrationIdpSamlDraft#display_name}
  */
  readonly displayName: string;
  /**
  * Identity provider type. The value provided can be used as a filter when retrieving SAML integrations. See data source `cyral_integration_idp_saml`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_saml_draft#idp_type IntegrationIdpSamlDraft#idp_type}
  */
  readonly idpType?: string;
  /**
  * attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_saml_draft#attributes IntegrationIdpSamlDraft#attributes}
  */
  readonly attributes?: IntegrationIdpSamlDraftAttributes;
}
export interface IntegrationIdpSamlDraftServiceProviderMetadataAssertionConsumerServices {
}

export function integrationIdpSamlDraftServiceProviderMetadataAssertionConsumerServicesToTerraform(struct?: IntegrationIdpSamlDraftServiceProviderMetadataAssertionConsumerServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function integrationIdpSamlDraftServiceProviderMetadataAssertionConsumerServicesToHclTerraform(struct?: IntegrationIdpSamlDraftServiceProviderMetadataAssertionConsumerServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationIdpSamlDraftServiceProviderMetadataAssertionConsumerServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationIdpSamlDraftServiceProviderMetadataAssertionConsumerServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationIdpSamlDraftServiceProviderMetadataAssertionConsumerServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class IntegrationIdpSamlDraftServiceProviderMetadataAssertionConsumerServicesList extends cdktf.ComplexList {

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
  public get(index: number): IntegrationIdpSamlDraftServiceProviderMetadataAssertionConsumerServicesOutputReference {
    return new IntegrationIdpSamlDraftServiceProviderMetadataAssertionConsumerServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationIdpSamlDraftServiceProviderMetadata {
}

export function integrationIdpSamlDraftServiceProviderMetadataToTerraform(struct?: IntegrationIdpSamlDraftServiceProviderMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function integrationIdpSamlDraftServiceProviderMetadataToHclTerraform(struct?: IntegrationIdpSamlDraftServiceProviderMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationIdpSamlDraftServiceProviderMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationIdpSamlDraftServiceProviderMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationIdpSamlDraftServiceProviderMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assertion_consumer_services - computed: true, optional: false, required: false
  private _assertionConsumerServices = new IntegrationIdpSamlDraftServiceProviderMetadataAssertionConsumerServicesList(this, "assertion_consumer_services", false);
  public get assertionConsumerServices() {
    return this._assertionConsumerServices;
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // single_logout_url - computed: true, optional: false, required: false
  public get singleLogoutUrl() {
    return this.getStringAttribute('single_logout_url');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // xml_document - computed: true, optional: false, required: false
  public get xmlDocument() {
    return this.getStringAttribute('xml_document');
  }
}

export class IntegrationIdpSamlDraftServiceProviderMetadataList extends cdktf.ComplexList {

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
  public get(index: number): IntegrationIdpSamlDraftServiceProviderMetadataOutputReference {
    return new IntegrationIdpSamlDraftServiceProviderMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationIdpSamlDraftAttributes {
  /**
  * The name of the attribute in the incoming SAML assertion containing the users email address. Defaults to `email`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_saml_draft#email IntegrationIdpSamlDraft#email}
  */
  readonly email?: string;
  /**
  * The name of the attribute in the incoming SAML assertion containing the users first name (given name). Defaults to `firstName`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_saml_draft#first_name IntegrationIdpSamlDraft#first_name}
  */
  readonly firstName?: string;
  /**
  * The name of the attribute in the incoming SAML assertion containing the users group membership in the IdP. Defaults to `memberOf`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_saml_draft#groups IntegrationIdpSamlDraft#groups}
  */
  readonly groups?: string;
  /**
  * The name of the attribute in the incoming SAML assertion containing the users last name (family name). Defaults to `lastName`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_saml_draft#last_name IntegrationIdpSamlDraft#last_name}
  */
  readonly lastName?: string;
}

export function integrationIdpSamlDraftAttributesToTerraform(struct?: IntegrationIdpSamlDraftAttributesOutputReference | IntegrationIdpSamlDraftAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    groups: cdktf.stringToTerraform(struct!.groups),
    last_name: cdktf.stringToTerraform(struct!.lastName),
  }
}


export function integrationIdpSamlDraftAttributesToHclTerraform(struct?: IntegrationIdpSamlDraftAttributesOutputReference | IntegrationIdpSamlDraftAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups: {
      value: cdktf.stringToHclTerraform(struct!.groups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationIdpSamlDraftAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationIdpSamlDraftAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationIdpSamlDraftAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._firstName = undefined;
      this._groups = undefined;
      this._lastName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._firstName = value.firstName;
      this._groups = value.groups;
      this._lastName = value.lastName;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string; 
  public get groups() {
    return this.getStringAttribute('groups');
  }
  public set groups(value: string) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_saml_draft cyral_integration_idp_saml_draft}
*/
export class IntegrationIdpSamlDraft extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_integration_idp_saml_draft";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationIdpSamlDraft resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationIdpSamlDraft to import
  * @param importFromId The id of the existing IntegrationIdpSamlDraft that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_saml_draft#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationIdpSamlDraft to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_integration_idp_saml_draft", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_saml_draft cyral_integration_idp_saml_draft} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationIdpSamlDraftConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationIdpSamlDraftConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_integration_idp_saml_draft',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3',
        providerVersionConstraint: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disableIdpInitiatedLogin = config.disableIdpInitiatedLogin;
    this._displayName = config.displayName;
    this._idpType = config.idpType;
    this._attributes.internalValue = config.attributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_idp_initiated_login - computed: false, optional: true, required: false
  private _disableIdpInitiatedLogin?: boolean | cdktf.IResolvable; 
  public get disableIdpInitiatedLogin() {
    return this.getBooleanAttribute('disable_idp_initiated_login');
  }
  public set disableIdpInitiatedLogin(value: boolean | cdktf.IResolvable) {
    this._disableIdpInitiatedLogin = value;
  }
  public resetDisableIdpInitiatedLogin() {
    this._disableIdpInitiatedLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIdpInitiatedLoginInput() {
    return this._disableIdpInitiatedLogin;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idp_type - computed: false, optional: true, required: false
  private _idpType?: string; 
  public get idpType() {
    return this.getStringAttribute('idp_type');
  }
  public set idpType(value: string) {
    this._idpType = value;
  }
  public resetIdpType() {
    this._idpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpTypeInput() {
    return this._idpType;
  }

  // service_provider_metadata - computed: true, optional: false, required: false
  private _serviceProviderMetadata = new IntegrationIdpSamlDraftServiceProviderMetadataList(this, "service_provider_metadata", true);
  public get serviceProviderMetadata() {
    return this._serviceProviderMetadata;
  }

  // sp_metadata - computed: true, optional: false, required: false
  public get spMetadata() {
    return this.getStringAttribute('sp_metadata');
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new IntegrationIdpSamlDraftAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: IntegrationIdpSamlDraftAttributes) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_idp_initiated_login: cdktf.booleanToTerraform(this._disableIdpInitiatedLogin),
      display_name: cdktf.stringToTerraform(this._displayName),
      idp_type: cdktf.stringToTerraform(this._idpType),
      attributes: integrationIdpSamlDraftAttributesToTerraform(this._attributes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_idp_initiated_login: {
        value: cdktf.booleanToHclTerraform(this._disableIdpInitiatedLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_type: {
        value: cdktf.stringToHclTerraform(this._idpType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attributes: {
        value: integrationIdpSamlDraftAttributesToHclTerraform(this._attributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IntegrationIdpSamlDraftAttributesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
