// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/saml_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/saml_endpoint#access_set_by SamlEndpoint#access_set_by}
  */
  readonly accessSetBy?: string;
  /**
  * Switch to differentiate if it is for controller login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/saml_endpoint#controller_login SamlEndpoint#controller_login}
  */
  readonly controllerLogin?: boolean | cdktf.IResolvable;
  /**
  * Custom Entity ID. Required to be non-empty for 'Custom' Entity ID type, empty for 'Hostname'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/saml_endpoint#custom_entity_id SamlEndpoint#custom_entity_id}
  */
  readonly customEntityId?: string;
  /**
  * Custom SAML Request Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/saml_endpoint#custom_saml_request_template SamlEndpoint#custom_saml_request_template}
  */
  readonly customSamlRequestTemplate?: string;
  /**
  * SAML Endpoint Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/saml_endpoint#endpoint_name SamlEndpoint#endpoint_name}
  */
  readonly endpointName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/saml_endpoint#id SamlEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IDP Metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/saml_endpoint#idp_metadata SamlEndpoint#idp_metadata}
  */
  readonly idpMetadata?: string;
  /**
  * Type of IDP Metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/saml_endpoint#idp_metadata_type SamlEndpoint#idp_metadata_type}
  */
  readonly idpMetadataType: string;
  /**
  * IDP Metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/saml_endpoint#idp_metadata_url SamlEndpoint#idp_metadata_url}
  */
  readonly idpMetadataUrl?: string;
  /**
  * List of RBAC groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/saml_endpoint#rbac_groups SamlEndpoint#rbac_groups}
  */
  readonly rbacGroups?: string[];
  /**
  * Whether to sign SAML AuthnRequests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/saml_endpoint#sign_authn_requests SamlEndpoint#sign_authn_requests}
  */
  readonly signAuthnRequests?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/saml_endpoint aviatrix_saml_endpoint}
*/
export class SamlEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_saml_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SamlEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SamlEndpoint to import
  * @param importFromId The id of the existing SamlEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/saml_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SamlEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_saml_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/saml_endpoint aviatrix_saml_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: SamlEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_saml_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessSetBy = config.accessSetBy;
    this._controllerLogin = config.controllerLogin;
    this._customEntityId = config.customEntityId;
    this._customSamlRequestTemplate = config.customSamlRequestTemplate;
    this._endpointName = config.endpointName;
    this._id = config.id;
    this._idpMetadata = config.idpMetadata;
    this._idpMetadataType = config.idpMetadataType;
    this._idpMetadataUrl = config.idpMetadataUrl;
    this._rbacGroups = config.rbacGroups;
    this._signAuthnRequests = config.signAuthnRequests;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_set_by - computed: false, optional: true, required: false
  private _accessSetBy?: string; 
  public get accessSetBy() {
    return this.getStringAttribute('access_set_by');
  }
  public set accessSetBy(value: string) {
    this._accessSetBy = value;
  }
  public resetAccessSetBy() {
    this._accessSetBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSetByInput() {
    return this._accessSetBy;
  }

  // controller_login - computed: false, optional: true, required: false
  private _controllerLogin?: boolean | cdktf.IResolvable; 
  public get controllerLogin() {
    return this.getBooleanAttribute('controller_login');
  }
  public set controllerLogin(value: boolean | cdktf.IResolvable) {
    this._controllerLogin = value;
  }
  public resetControllerLogin() {
    this._controllerLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerLoginInput() {
    return this._controllerLogin;
  }

  // custom_entity_id - computed: false, optional: true, required: false
  private _customEntityId?: string; 
  public get customEntityId() {
    return this.getStringAttribute('custom_entity_id');
  }
  public set customEntityId(value: string) {
    this._customEntityId = value;
  }
  public resetCustomEntityId() {
    this._customEntityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEntityIdInput() {
    return this._customEntityId;
  }

  // custom_saml_request_template - computed: false, optional: true, required: false
  private _customSamlRequestTemplate?: string; 
  public get customSamlRequestTemplate() {
    return this.getStringAttribute('custom_saml_request_template');
  }
  public set customSamlRequestTemplate(value: string) {
    this._customSamlRequestTemplate = value;
  }
  public resetCustomSamlRequestTemplate() {
    this._customSamlRequestTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSamlRequestTemplateInput() {
    return this._customSamlRequestTemplate;
  }

  // endpoint_name - computed: false, optional: false, required: true
  private _endpointName?: string; 
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
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

  // idp_metadata - computed: false, optional: true, required: false
  private _idpMetadata?: string; 
  public get idpMetadata() {
    return this.getStringAttribute('idp_metadata');
  }
  public set idpMetadata(value: string) {
    this._idpMetadata = value;
  }
  public resetIdpMetadata() {
    this._idpMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataInput() {
    return this._idpMetadata;
  }

  // idp_metadata_type - computed: false, optional: false, required: true
  private _idpMetadataType?: string; 
  public get idpMetadataType() {
    return this.getStringAttribute('idp_metadata_type');
  }
  public set idpMetadataType(value: string) {
    this._idpMetadataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataTypeInput() {
    return this._idpMetadataType;
  }

  // idp_metadata_url - computed: false, optional: true, required: false
  private _idpMetadataUrl?: string; 
  public get idpMetadataUrl() {
    return this.getStringAttribute('idp_metadata_url');
  }
  public set idpMetadataUrl(value: string) {
    this._idpMetadataUrl = value;
  }
  public resetIdpMetadataUrl() {
    this._idpMetadataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataUrlInput() {
    return this._idpMetadataUrl;
  }

  // rbac_groups - computed: false, optional: true, required: false
  private _rbacGroups?: string[]; 
  public get rbacGroups() {
    return this.getListAttribute('rbac_groups');
  }
  public set rbacGroups(value: string[]) {
    this._rbacGroups = value;
  }
  public resetRbacGroups() {
    this._rbacGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbacGroupsInput() {
    return this._rbacGroups;
  }

  // sign_authn_requests - computed: false, optional: true, required: false
  private _signAuthnRequests?: boolean | cdktf.IResolvable; 
  public get signAuthnRequests() {
    return this.getBooleanAttribute('sign_authn_requests');
  }
  public set signAuthnRequests(value: boolean | cdktf.IResolvable) {
    this._signAuthnRequests = value;
  }
  public resetSignAuthnRequests() {
    this._signAuthnRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signAuthnRequestsInput() {
    return this._signAuthnRequests;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_set_by: cdktf.stringToTerraform(this._accessSetBy),
      controller_login: cdktf.booleanToTerraform(this._controllerLogin),
      custom_entity_id: cdktf.stringToTerraform(this._customEntityId),
      custom_saml_request_template: cdktf.stringToTerraform(this._customSamlRequestTemplate),
      endpoint_name: cdktf.stringToTerraform(this._endpointName),
      id: cdktf.stringToTerraform(this._id),
      idp_metadata: cdktf.stringToTerraform(this._idpMetadata),
      idp_metadata_type: cdktf.stringToTerraform(this._idpMetadataType),
      idp_metadata_url: cdktf.stringToTerraform(this._idpMetadataUrl),
      rbac_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rbacGroups),
      sign_authn_requests: cdktf.booleanToTerraform(this._signAuthnRequests),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_set_by: {
        value: cdktf.stringToHclTerraform(this._accessSetBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_login: {
        value: cdktf.booleanToHclTerraform(this._controllerLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_entity_id: {
        value: cdktf.stringToHclTerraform(this._customEntityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_saml_request_template: {
        value: cdktf.stringToHclTerraform(this._customSamlRequestTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_name: {
        value: cdktf.stringToHclTerraform(this._endpointName),
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
      idp_metadata: {
        value: cdktf.stringToHclTerraform(this._idpMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_metadata_type: {
        value: cdktf.stringToHclTerraform(this._idpMetadataType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_metadata_url: {
        value: cdktf.stringToHclTerraform(this._idpMetadataUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rbac_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rbacGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sign_authn_requests: {
        value: cdktf.booleanToHclTerraform(this._signAuthnRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
