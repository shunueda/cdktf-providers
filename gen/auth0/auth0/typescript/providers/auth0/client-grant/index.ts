// https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClientGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * If enabled, any organization can be used with this grant. If disabled (default), the grant must be explicitly assigned to the desired organizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_grant#allow_any_organization ClientGrant#allow_any_organization}
  */
  readonly allowAnyOrganization?: boolean | cdktf.IResolvable;
  /**
  * Audience or API Identifier for this grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_grant#audience ClientGrant#audience}
  */
  readonly audience: string;
  /**
  * Defines the types of authorization details allowed for this client grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_grant#authorization_details_types ClientGrant#authorization_details_types}
  */
  readonly authorizationDetailsTypes?: string[];
  /**
  * ID of the client for this grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_grant#client_id ClientGrant#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_grant#id ClientGrant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defines whether organizations can be used with client credentials exchanges for this grant. (defaults to deny when not defined)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_grant#organization_usage ClientGrant#organization_usage}
  */
  readonly organizationUsage?: string;
  /**
  * Permissions (scopes) included in this grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_grant#scopes ClientGrant#scopes}
  */
  readonly scopes: string[];
  /**
  * Defines the type of subject for this grant. Can be one of `client` or `user`. Defaults to `client` when not defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_grant#subject_type ClientGrant#subject_type}
  */
  readonly subjectType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_grant auth0_client_grant}
*/
export class ClientGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_client_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClientGrant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClientGrant to import
  * @param importFromId The id of the existing ClientGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClientGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_client_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_grant auth0_client_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClientGrantConfig
  */
  public constructor(scope: Construct, id: string, config: ClientGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_client_grant',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.34.0',
        providerVersionConstraint: '1.34.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAnyOrganization = config.allowAnyOrganization;
    this._audience = config.audience;
    this._authorizationDetailsTypes = config.authorizationDetailsTypes;
    this._clientId = config.clientId;
    this._id = config.id;
    this._organizationUsage = config.organizationUsage;
    this._scopes = config.scopes;
    this._subjectType = config.subjectType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_any_organization - computed: false, optional: true, required: false
  private _allowAnyOrganization?: boolean | cdktf.IResolvable; 
  public get allowAnyOrganization() {
    return this.getBooleanAttribute('allow_any_organization');
  }
  public set allowAnyOrganization(value: boolean | cdktf.IResolvable) {
    this._allowAnyOrganization = value;
  }
  public resetAllowAnyOrganization() {
    this._allowAnyOrganization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAnyOrganizationInput() {
    return this._allowAnyOrganization;
  }

  // audience - computed: false, optional: false, required: true
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // authorization_details_types - computed: false, optional: true, required: false
  private _authorizationDetailsTypes?: string[]; 
  public get authorizationDetailsTypes() {
    return this.getListAttribute('authorization_details_types');
  }
  public set authorizationDetailsTypes(value: string[]) {
    this._authorizationDetailsTypes = value;
  }
  public resetAuthorizationDetailsTypes() {
    this._authorizationDetailsTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationDetailsTypesInput() {
    return this._authorizationDetailsTypes;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
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

  // organization_usage - computed: false, optional: true, required: false
  private _organizationUsage?: string; 
  public get organizationUsage() {
    return this.getStringAttribute('organization_usage');
  }
  public set organizationUsage(value: string) {
    this._organizationUsage = value;
  }
  public resetOrganizationUsage() {
    this._organizationUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationUsageInput() {
    return this._organizationUsage;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // subject_type - computed: true, optional: true, required: false
  private _subjectType?: string; 
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }
  public set subjectType(value: string) {
    this._subjectType = value;
  }
  public resetSubjectType() {
    this._subjectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectTypeInput() {
    return this._subjectType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_any_organization: cdktf.booleanToTerraform(this._allowAnyOrganization),
      audience: cdktf.stringToTerraform(this._audience),
      authorization_details_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizationDetailsTypes),
      client_id: cdktf.stringToTerraform(this._clientId),
      id: cdktf.stringToTerraform(this._id),
      organization_usage: cdktf.stringToTerraform(this._organizationUsage),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      subject_type: cdktf.stringToTerraform(this._subjectType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_any_organization: {
        value: cdktf.booleanToHclTerraform(this._allowAnyOrganization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      audience: {
        value: cdktf.stringToHclTerraform(this._audience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_details_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorizationDetailsTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
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
      organization_usage: {
        value: cdktf.stringToHclTerraform(this._organizationUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      subject_type: {
        value: cdktf.stringToHclTerraform(this._subjectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
