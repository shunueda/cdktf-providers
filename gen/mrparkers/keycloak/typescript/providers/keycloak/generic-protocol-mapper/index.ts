// https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/generic_protocol_mapper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GenericProtocolMapperConfig extends cdktf.TerraformMetaArguments {
  /**
  * The mapper's associated client. Cannot be used at the same time as client_scope_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/generic_protocol_mapper#client_id GenericProtocolMapper#client_id}
  */
  readonly clientId?: string;
  /**
  * The mapper's associated client scope. Cannot be used at the same time as client_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/generic_protocol_mapper#client_scope_id GenericProtocolMapper#client_scope_id}
  */
  readonly clientScopeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/generic_protocol_mapper#config GenericProtocolMapper#config}
  */
  readonly config: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/generic_protocol_mapper#id GenericProtocolMapper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A human-friendly name that will appear in the Keycloak console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/generic_protocol_mapper#name GenericProtocolMapper#name}
  */
  readonly name: string;
  /**
  * The protocol of the client (openid-connect / saml).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/generic_protocol_mapper#protocol GenericProtocolMapper#protocol}
  */
  readonly protocol: string;
  /**
  * The type of the protocol mapper.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/generic_protocol_mapper#protocol_mapper GenericProtocolMapper#protocol_mapper}
  */
  readonly protocolMapper: string;
  /**
  * The realm id where the associated client or client scope exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/generic_protocol_mapper#realm_id GenericProtocolMapper#realm_id}
  */
  readonly realmId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/generic_protocol_mapper keycloak_generic_protocol_mapper}
*/
export class GenericProtocolMapper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_generic_protocol_mapper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GenericProtocolMapper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GenericProtocolMapper to import
  * @param importFromId The id of the existing GenericProtocolMapper that should be imported. Refer to the {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/generic_protocol_mapper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GenericProtocolMapper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_generic_protocol_mapper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/generic_protocol_mapper keycloak_generic_protocol_mapper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GenericProtocolMapperConfig
  */
  public constructor(scope: Construct, id: string, config: GenericProtocolMapperConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_generic_protocol_mapper',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '4.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientId = config.clientId;
    this._clientScopeId = config.clientScopeId;
    this._config = config.config;
    this._id = config.id;
    this._name = config.name;
    this._protocol = config.protocol;
    this._protocolMapper = config.protocolMapper;
    this._realmId = config.realmId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_scope_id - computed: false, optional: true, required: false
  private _clientScopeId?: string; 
  public get clientScopeId() {
    return this.getStringAttribute('client_scope_id');
  }
  public set clientScopeId(value: string) {
    this._clientScopeId = value;
  }
  public resetClientScopeId() {
    this._clientScopeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientScopeIdInput() {
    return this._clientScopeId;
  }

  // config - computed: false, optional: false, required: true
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_mapper - computed: false, optional: false, required: true
  private _protocolMapper?: string; 
  public get protocolMapper() {
    return this.getStringAttribute('protocol_mapper');
  }
  public set protocolMapper(value: string) {
    this._protocolMapper = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolMapperInput() {
    return this._protocolMapper;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      client_scope_id: cdktf.stringToTerraform(this._clientScopeId),
      config: cdktf.hashMapper(cdktf.stringToTerraform)(this._config),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_mapper: cdktf.stringToTerraform(this._protocolMapper),
      realm_id: cdktf.stringToTerraform(this._realmId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_scope_id: {
        value: cdktf.stringToHclTerraform(this._clientScopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._config),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_mapper: {
        value: cdktf.stringToHclTerraform(this._protocolMapper),
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
