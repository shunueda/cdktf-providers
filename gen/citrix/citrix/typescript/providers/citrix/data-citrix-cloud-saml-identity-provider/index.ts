// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/cloud_saml_identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCitrixCloudSamlIdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the SAML 2.0 Identity Provider instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/cloud_saml_identity_provider#id DataCitrixCloudSamlIdentityProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the SAML 2.0 Identity Provider instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/cloud_saml_identity_provider#name DataCitrixCloudSamlIdentityProvider#name}
  */
  readonly name?: string;
}
export interface DataCitrixCloudSamlIdentityProviderAttributeNames {
}

export function dataCitrixCloudSamlIdentityProviderAttributeNamesToTerraform(struct?: DataCitrixCloudSamlIdentityProviderAttributeNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCitrixCloudSamlIdentityProviderAttributeNamesToHclTerraform(struct?: DataCitrixCloudSamlIdentityProviderAttributeNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCitrixCloudSamlIdentityProviderAttributeNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCitrixCloudSamlIdentityProviderAttributeNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCitrixCloudSamlIdentityProviderAttributeNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad_domain - computed: true, optional: false, required: false
  public get adDomain() {
    return this.getStringAttribute('ad_domain');
  }

  // ad_forest - computed: true, optional: false, required: false
  public get adForest() {
    return this.getStringAttribute('ad_forest');
  }

  // ad_object_identifier - computed: true, optional: false, required: false
  public get adObjectIdentifier() {
    return this.getStringAttribute('ad_object_identifier');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // security_identifier - computed: true, optional: false, required: false
  public get securityIdentifier() {
    return this.getStringAttribute('security_identifier');
  }

  // user_display_name - computed: true, optional: false, required: false
  public get userDisplayName() {
    return this.getStringAttribute('user_display_name');
  }

  // user_family_name - computed: true, optional: false, required: false
  public get userFamilyName() {
    return this.getStringAttribute('user_family_name');
  }

  // user_given_name - computed: true, optional: false, required: false
  public get userGivenName() {
    return this.getStringAttribute('user_given_name');
  }

  // user_principal_name - computed: true, optional: false, required: false
  public get userPrincipalName() {
    return this.getStringAttribute('user_principal_name');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/cloud_saml_identity_provider citrix_cloud_saml_identity_provider}
*/
export class DataCitrixCloudSamlIdentityProvider extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_cloud_saml_identity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCitrixCloudSamlIdentityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCitrixCloudSamlIdentityProvider to import
  * @param importFromId The id of the existing DataCitrixCloudSamlIdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/cloud_saml_identity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCitrixCloudSamlIdentityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_cloud_saml_identity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/cloud_saml_identity_provider citrix_cloud_saml_identity_provider} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCitrixCloudSamlIdentityProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCitrixCloudSamlIdentityProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrix_cloud_saml_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_names - computed: true, optional: false, required: false
  private _attributeNames = new DataCitrixCloudSamlIdentityProviderAttributeNamesOutputReference(this, "attribute_names");
  public get attributeNames() {
    return this._attributeNames;
  }

  // auth_domain_name - computed: true, optional: false, required: false
  public get authDomainName() {
    return this.getStringAttribute('auth_domain_name');
  }

  // authentication_context - computed: true, optional: false, required: false
  public get authenticationContext() {
    return this.getStringAttribute('authentication_context');
  }

  // authentication_context_comparison - computed: true, optional: false, required: false
  public get authenticationContextComparison() {
    return this.getStringAttribute('authentication_context_comparison');
  }

  // cert_common_name - computed: true, optional: false, required: false
  public get certCommonName() {
    return this.getStringAttribute('cert_common_name');
  }

  // cert_expiration - computed: true, optional: false, required: false
  public get certExpiration() {
    return this.getStringAttribute('cert_expiration');
  }

  // cert_file_path - computed: true, optional: false, required: false
  public get certFilePath() {
    return this.getStringAttribute('cert_file_path');
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // id - computed: false, optional: true, required: false
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

  // logout_binding - computed: true, optional: false, required: false
  public get logoutBinding() {
    return this.getStringAttribute('logout_binding');
  }

  // logout_url - computed: true, optional: false, required: false
  public get logoutUrl() {
    return this.getStringAttribute('logout_url');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // saml_response - computed: true, optional: false, required: false
  public get samlResponse() {
    return this.getStringAttribute('saml_response');
  }

  // scoped_entity_id_suffix - computed: true, optional: false, required: false
  public get scopedEntityIdSuffix() {
    return this.getStringAttribute('scoped_entity_id_suffix');
  }

  // sign_auth_request - computed: true, optional: false, required: false
  public get signAuthRequest() {
    return this.getStringAttribute('sign_auth_request');
  }

  // sign_logout_request - computed: true, optional: false, required: false
  public get signLogoutRequest() {
    return this.getStringAttribute('sign_logout_request');
  }

  // single_sign_on_service_binding - computed: true, optional: false, required: false
  public get singleSignOnServiceBinding() {
    return this.getStringAttribute('single_sign_on_service_binding');
  }

  // single_sign_on_service_url - computed: true, optional: false, required: false
  public get singleSignOnServiceUrl() {
    return this.getStringAttribute('single_sign_on_service_url');
  }

  // use_scoped_entity_id - computed: true, optional: false, required: false
  public get useScopedEntityId() {
    return this.getBooleanAttribute('use_scoped_entity_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
