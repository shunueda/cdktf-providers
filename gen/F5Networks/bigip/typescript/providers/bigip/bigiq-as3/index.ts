// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/bigiq_as3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigiqAs3Config extends cdktf.TerraformMetaArguments {
  /**
  * AS3 json
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/bigiq_as3#as3_json BigiqAs3#as3_json}
  */
  readonly as3Json: string;
  /**
  * The registration key pool to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/bigiq_as3#bigiq_address BigiqAs3#bigiq_address}
  */
  readonly bigiqAddress: string;
  /**
  * Login reference for token authentication (see BIG-IQ REST docs for details)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/bigiq_as3#bigiq_login_ref BigiqAs3#bigiq_login_ref}
  */
  readonly bigiqLoginRef?: string;
  /**
  * The registration key pool to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/bigiq_as3#bigiq_password BigiqAs3#bigiq_password}
  */
  readonly bigiqPassword: string;
  /**
  * The registration key pool to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/bigiq_as3#bigiq_port BigiqAs3#bigiq_port}
  */
  readonly bigiqPort?: string;
  /**
  * Enable to use an external authentication source (LDAP, TACACS, etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/bigiq_as3#bigiq_token_auth BigiqAs3#bigiq_token_auth}
  */
  readonly bigiqTokenAuth?: boolean | cdktf.IResolvable;
  /**
  * The registration key pool to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/bigiq_as3#bigiq_user BigiqAs3#bigiq_user}
  */
  readonly bigiqUser: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/bigiq_as3#id BigiqAs3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set True if you want to ignore metadata update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/bigiq_as3#ignore_metadata BigiqAs3#ignore_metadata}
  */
  readonly ignoreMetadata?: boolean | cdktf.IResolvable;
  /**
  * Name of Tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/bigiq_as3#tenant_list BigiqAs3#tenant_list}
  */
  readonly tenantList?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/bigiq_as3 bigip_bigiq_as3}
*/
export class BigiqAs3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_bigiq_as3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BigiqAs3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BigiqAs3 to import
  * @param importFromId The id of the existing BigiqAs3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/bigiq_as3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BigiqAs3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_bigiq_as3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/bigiq_as3 bigip_bigiq_as3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigiqAs3Config
  */
  public constructor(scope: Construct, id: string, config: BigiqAs3Config) {
    super(scope, id, {
      terraformResourceType: 'bigip_bigiq_as3',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._as3Json = config.as3Json;
    this._bigiqAddress = config.bigiqAddress;
    this._bigiqLoginRef = config.bigiqLoginRef;
    this._bigiqPassword = config.bigiqPassword;
    this._bigiqPort = config.bigiqPort;
    this._bigiqTokenAuth = config.bigiqTokenAuth;
    this._bigiqUser = config.bigiqUser;
    this._id = config.id;
    this._ignoreMetadata = config.ignoreMetadata;
    this._tenantList = config.tenantList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // as3_json - computed: false, optional: false, required: true
  private _as3Json?: string; 
  public get as3Json() {
    return this.getStringAttribute('as3_json');
  }
  public set as3Json(value: string) {
    this._as3Json = value;
  }
  // Temporarily expose input value. Use with caution.
  public get as3JsonInput() {
    return this._as3Json;
  }

  // bigiq_address - computed: false, optional: false, required: true
  private _bigiqAddress?: string; 
  public get bigiqAddress() {
    return this.getStringAttribute('bigiq_address');
  }
  public set bigiqAddress(value: string) {
    this._bigiqAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bigiqAddressInput() {
    return this._bigiqAddress;
  }

  // bigiq_login_ref - computed: false, optional: true, required: false
  private _bigiqLoginRef?: string; 
  public get bigiqLoginRef() {
    return this.getStringAttribute('bigiq_login_ref');
  }
  public set bigiqLoginRef(value: string) {
    this._bigiqLoginRef = value;
  }
  public resetBigiqLoginRef() {
    this._bigiqLoginRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigiqLoginRefInput() {
    return this._bigiqLoginRef;
  }

  // bigiq_password - computed: false, optional: false, required: true
  private _bigiqPassword?: string; 
  public get bigiqPassword() {
    return this.getStringAttribute('bigiq_password');
  }
  public set bigiqPassword(value: string) {
    this._bigiqPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bigiqPasswordInput() {
    return this._bigiqPassword;
  }

  // bigiq_port - computed: false, optional: true, required: false
  private _bigiqPort?: string; 
  public get bigiqPort() {
    return this.getStringAttribute('bigiq_port');
  }
  public set bigiqPort(value: string) {
    this._bigiqPort = value;
  }
  public resetBigiqPort() {
    this._bigiqPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigiqPortInput() {
    return this._bigiqPort;
  }

  // bigiq_token_auth - computed: false, optional: true, required: false
  private _bigiqTokenAuth?: boolean | cdktf.IResolvable; 
  public get bigiqTokenAuth() {
    return this.getBooleanAttribute('bigiq_token_auth');
  }
  public set bigiqTokenAuth(value: boolean | cdktf.IResolvable) {
    this._bigiqTokenAuth = value;
  }
  public resetBigiqTokenAuth() {
    this._bigiqTokenAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigiqTokenAuthInput() {
    return this._bigiqTokenAuth;
  }

  // bigiq_user - computed: false, optional: false, required: true
  private _bigiqUser?: string; 
  public get bigiqUser() {
    return this.getStringAttribute('bigiq_user');
  }
  public set bigiqUser(value: string) {
    this._bigiqUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bigiqUserInput() {
    return this._bigiqUser;
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

  // ignore_metadata - computed: false, optional: true, required: false
  private _ignoreMetadata?: boolean | cdktf.IResolvable; 
  public get ignoreMetadata() {
    return this.getBooleanAttribute('ignore_metadata');
  }
  public set ignoreMetadata(value: boolean | cdktf.IResolvable) {
    this._ignoreMetadata = value;
  }
  public resetIgnoreMetadata() {
    this._ignoreMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMetadataInput() {
    return this._ignoreMetadata;
  }

  // tenant_list - computed: true, optional: true, required: false
  private _tenantList?: string; 
  public get tenantList() {
    return this.getStringAttribute('tenant_list');
  }
  public set tenantList(value: string) {
    this._tenantList = value;
  }
  public resetTenantList() {
    this._tenantList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantListInput() {
    return this._tenantList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      as3_json: cdktf.stringToTerraform(this._as3Json),
      bigiq_address: cdktf.stringToTerraform(this._bigiqAddress),
      bigiq_login_ref: cdktf.stringToTerraform(this._bigiqLoginRef),
      bigiq_password: cdktf.stringToTerraform(this._bigiqPassword),
      bigiq_port: cdktf.stringToTerraform(this._bigiqPort),
      bigiq_token_auth: cdktf.booleanToTerraform(this._bigiqTokenAuth),
      bigiq_user: cdktf.stringToTerraform(this._bigiqUser),
      id: cdktf.stringToTerraform(this._id),
      ignore_metadata: cdktf.booleanToTerraform(this._ignoreMetadata),
      tenant_list: cdktf.stringToTerraform(this._tenantList),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      as3_json: {
        value: cdktf.stringToHclTerraform(this._as3Json),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigiq_address: {
        value: cdktf.stringToHclTerraform(this._bigiqAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigiq_login_ref: {
        value: cdktf.stringToHclTerraform(this._bigiqLoginRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigiq_password: {
        value: cdktf.stringToHclTerraform(this._bigiqPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigiq_port: {
        value: cdktf.stringToHclTerraform(this._bigiqPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigiq_token_auth: {
        value: cdktf.booleanToHclTerraform(this._bigiqTokenAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bigiq_user: {
        value: cdktf.stringToHclTerraform(this._bigiqUser),
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
      ignore_metadata: {
        value: cdktf.booleanToHclTerraform(this._ignoreMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tenant_list: {
        value: cdktf.stringToHclTerraform(this._tenantList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
