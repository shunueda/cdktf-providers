// https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/client_description_converter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeycloakClientDescriptionConverterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/client_description_converter#body DataKeycloakClientDescriptionConverter#body}
  */
  readonly body: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/client_description_converter#id DataKeycloakClientDescriptionConverter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/client_description_converter#realm_id DataKeycloakClientDescriptionConverter#realm_id}
  */
  readonly realmId: string;
}
export interface DataKeycloakClientDescriptionConverterProtocolMappers {
}

export function dataKeycloakClientDescriptionConverterProtocolMappersToTerraform(struct?: DataKeycloakClientDescriptionConverterProtocolMappers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeycloakClientDescriptionConverterProtocolMappersToHclTerraform(struct?: DataKeycloakClientDescriptionConverterProtocolMappers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeycloakClientDescriptionConverterProtocolMappersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeycloakClientDescriptionConverterProtocolMappers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeycloakClientDescriptionConverterProtocolMappers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new cdktf.StringMap(this, "config");
  public get config() {
    return this._config;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_mapper - computed: true, optional: false, required: false
  public get protocolMapper() {
    return this.getStringAttribute('protocol_mapper');
  }
}

export class DataKeycloakClientDescriptionConverterProtocolMappersList extends cdktf.ComplexList {

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
  public get(index: number): DataKeycloakClientDescriptionConverterProtocolMappersOutputReference {
    return new DataKeycloakClientDescriptionConverterProtocolMappersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/client_description_converter keycloak_client_description_converter}
*/
export class DataKeycloakClientDescriptionConverter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_client_description_converter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeycloakClientDescriptionConverter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeycloakClientDescriptionConverter to import
  * @param importFromId The id of the existing DataKeycloakClientDescriptionConverter that should be imported. Refer to the {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/client_description_converter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeycloakClientDescriptionConverter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_client_description_converter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/client_description_converter keycloak_client_description_converter} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeycloakClientDescriptionConverterConfig
  */
  public constructor(scope: Construct, id: string, config: DataKeycloakClientDescriptionConverterConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_client_description_converter',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '4.4.0',
        providerVersionConstraint: '4.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._body = config.body;
    this._id = config.id;
    this._realmId = config.realmId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: true, optional: false, required: false
  private _access = new cdktf.StringMap(this, "access");
  public get access() {
    return this._access;
  }

  // admin_url - computed: true, optional: false, required: false
  public get adminUrl() {
    return this.getStringAttribute('admin_url');
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new cdktf.StringMap(this, "attributes");
  public get attributes() {
    return this._attributes;
  }

  // authentication_flow_binding_overrides - computed: true, optional: false, required: false
  private _authenticationFlowBindingOverrides = new cdktf.StringMap(this, "authentication_flow_binding_overrides");
  public get authenticationFlowBindingOverrides() {
    return this._authenticationFlowBindingOverrides;
  }

  // authorization_services_enabled - computed: true, optional: false, required: false
  public get authorizationServicesEnabled() {
    return this.getBooleanAttribute('authorization_services_enabled');
  }

  // authorization_settings - computed: true, optional: false, required: false
  private _authorizationSettings = new cdktf.StringMap(this, "authorization_settings");
  public get authorizationSettings() {
    return this._authorizationSettings;
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // bearer_only - computed: true, optional: false, required: false
  public get bearerOnly() {
    return this.getBooleanAttribute('bearer_only');
  }

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // client_authenticator_type - computed: true, optional: false, required: false
  public get clientAuthenticatorType() {
    return this.getStringAttribute('client_authenticator_type');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // consent_required - computed: true, optional: false, required: false
  public get consentRequired() {
    return this.getStringAttribute('consent_required');
  }

  // default_client_scopes - computed: true, optional: false, required: false
  public get defaultClientScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('default_client_scopes'));
  }

  // default_roles - computed: true, optional: false, required: false
  public get defaultRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('default_roles'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // direct_access_grants_enabled - computed: true, optional: false, required: false
  public get directAccessGrantsEnabled() {
    return this.getBooleanAttribute('direct_access_grants_enabled');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // frontchannel_logout - computed: true, optional: false, required: false
  public get frontchannelLogout() {
    return this.getBooleanAttribute('frontchannel_logout');
  }

  // full_scope_allowed - computed: true, optional: false, required: false
  public get fullScopeAllowed() {
    return this.getBooleanAttribute('full_scope_allowed');
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

  // implicit_flow_enabled - computed: true, optional: false, required: false
  public get implicitFlowEnabled() {
    return this.getBooleanAttribute('implicit_flow_enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getNumberAttribute('not_before');
  }

  // optional_client_scopes - computed: true, optional: false, required: false
  public get optionalClientScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('optional_client_scopes'));
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_mappers - computed: true, optional: false, required: false
  private _protocolMappers = new DataKeycloakClientDescriptionConverterProtocolMappersList(this, "protocol_mappers", true);
  public get protocolMappers() {
    return this._protocolMappers;
  }

  // public_client - computed: true, optional: false, required: false
  public get publicClient() {
    return this.getBooleanAttribute('public_client');
  }

  // realm_id - computed: false, optional: false, required: true
  private _realmId?: string; 
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId;
  }

  // redirect_uris - computed: true, optional: false, required: false
  public get redirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('redirect_uris'));
  }

  // registered_nodes - computed: true, optional: false, required: false
  private _registeredNodes = new cdktf.StringMap(this, "registered_nodes");
  public get registeredNodes() {
    return this._registeredNodes;
  }

  // registration_access_token - computed: true, optional: false, required: false
  public get registrationAccessToken() {
    return this.getStringAttribute('registration_access_token');
  }

  // root_url - computed: true, optional: false, required: false
  public get rootUrl() {
    return this.getStringAttribute('root_url');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // service_accounts_enabled - computed: true, optional: false, required: false
  public get serviceAccountsEnabled() {
    return this.getBooleanAttribute('service_accounts_enabled');
  }

  // standard_flow_enabled - computed: true, optional: false, required: false
  public get standardFlowEnabled() {
    return this.getBooleanAttribute('standard_flow_enabled');
  }

  // surrogate_auth_required - computed: true, optional: false, required: false
  public get surrogateAuthRequired() {
    return this.getBooleanAttribute('surrogate_auth_required');
  }

  // web_origins - computed: true, optional: false, required: false
  public get webOrigins() {
    return cdktf.Fn.tolist(this.getListAttribute('web_origins'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body: cdktf.stringToTerraform(this._body),
      id: cdktf.stringToTerraform(this._id),
      realm_id: cdktf.stringToTerraform(this._realmId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      body: {
        value: cdktf.stringToHclTerraform(this._body),
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
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
