// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_jwt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgIdpJwtConfig extends cdktf.TerraformMetaArguments {
  /**
  * auto register for users from this idp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_jwt#auto_register OrgIdpJwt#auto_register}
  */
  readonly autoRegister: boolean | cdktf.IResolvable;
  /**
  * the name of the header where the JWT is sent in, default is authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_jwt#header_name OrgIdpJwt#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_jwt#id OrgIdpJwt#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * the issuer of the jwt (for validation)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_jwt#issuer OrgIdpJwt#issuer}
  */
  readonly issuer: string;
  /**
  * the endpoint where the jwt can be extracted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_jwt#jwt_endpoint OrgIdpJwt#jwt_endpoint}
  */
  readonly jwtEndpoint: string;
  /**
  * the endpoint to the key (JWK) which are used to sign the JWT with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_jwt#keys_endpoint OrgIdpJwt#keys_endpoint}
  */
  readonly keysEndpoint: string;
  /**
  * Name of the IDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_jwt#name OrgIdpJwt#name}
  */
  readonly name: string;
  /**
  * ID of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_jwt#org_id OrgIdpJwt#org_id}
  */
  readonly orgId?: string;
  /**
  * Some identity providers specify the styling of the button to their login, supported values: STYLING_TYPE_UNSPECIFIED, STYLING_TYPE_GOOGLE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_jwt#styling_type OrgIdpJwt#styling_type}
  */
  readonly stylingType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_jwt zitadel_org_idp_jwt}
*/
export class OrgIdpJwt extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_org_idp_jwt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgIdpJwt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgIdpJwt to import
  * @param importFromId The id of the existing OrgIdpJwt that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_jwt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgIdpJwt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_org_idp_jwt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_jwt zitadel_org_idp_jwt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgIdpJwtConfig
  */
  public constructor(scope: Construct, id: string, config: OrgIdpJwtConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_org_idp_jwt',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRegister = config.autoRegister;
    this._headerName = config.headerName;
    this._id = config.id;
    this._issuer = config.issuer;
    this._jwtEndpoint = config.jwtEndpoint;
    this._keysEndpoint = config.keysEndpoint;
    this._name = config.name;
    this._orgId = config.orgId;
    this._stylingType = config.stylingType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_register - computed: false, optional: false, required: true
  private _autoRegister?: boolean | cdktf.IResolvable; 
  public get autoRegister() {
    return this.getBooleanAttribute('auto_register');
  }
  public set autoRegister(value: boolean | cdktf.IResolvable) {
    this._autoRegister = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRegisterInput() {
    return this._autoRegister;
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
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

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // jwt_endpoint - computed: false, optional: false, required: true
  private _jwtEndpoint?: string; 
  public get jwtEndpoint() {
    return this.getStringAttribute('jwt_endpoint');
  }
  public set jwtEndpoint(value: string) {
    this._jwtEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtEndpointInput() {
    return this._jwtEndpoint;
  }

  // keys_endpoint - computed: false, optional: false, required: true
  private _keysEndpoint?: string; 
  public get keysEndpoint() {
    return this.getStringAttribute('keys_endpoint');
  }
  public set keysEndpoint(value: string) {
    this._keysEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keysEndpointInput() {
    return this._keysEndpoint;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // styling_type - computed: false, optional: false, required: true
  private _stylingType?: string; 
  public get stylingType() {
    return this.getStringAttribute('styling_type');
  }
  public set stylingType(value: string) {
    this._stylingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stylingTypeInput() {
    return this._stylingType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_register: cdktf.booleanToTerraform(this._autoRegister),
      header_name: cdktf.stringToTerraform(this._headerName),
      id: cdktf.stringToTerraform(this._id),
      issuer: cdktf.stringToTerraform(this._issuer),
      jwt_endpoint: cdktf.stringToTerraform(this._jwtEndpoint),
      keys_endpoint: cdktf.stringToTerraform(this._keysEndpoint),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      styling_type: cdktf.stringToTerraform(this._stylingType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_register: {
        value: cdktf.booleanToHclTerraform(this._autoRegister),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      header_name: {
        value: cdktf.stringToHclTerraform(this._headerName),
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
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwt_endpoint: {
        value: cdktf.stringToHclTerraform(this._jwtEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keys_endpoint: {
        value: cdktf.stringToHclTerraform(this._keysEndpoint),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      styling_type: {
        value: cdktf.stringToHclTerraform(this._stylingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
