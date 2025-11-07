// https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_client_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenidClientClientPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_client_policy#clients OpenidClientClientPolicy#clients}
  */
  readonly clients: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_client_policy#decision_strategy OpenidClientClientPolicy#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_client_policy#description OpenidClientClientPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_client_policy#id OpenidClientClientPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_client_policy#logic OpenidClientClientPolicy#logic}
  */
  readonly logic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_client_policy#name OpenidClientClientPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_client_policy#realm_id OpenidClientClientPolicy#realm_id}
  */
  readonly realmId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_client_policy#resource_server_id OpenidClientClientPolicy#resource_server_id}
  */
  readonly resourceServerId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_client_policy keycloak_openid_client_client_policy}
*/
export class OpenidClientClientPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_openid_client_client_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenidClientClientPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenidClientClientPolicy to import
  * @param importFromId The id of the existing OpenidClientClientPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_client_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenidClientClientPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_openid_client_client_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_client_policy keycloak_openid_client_client_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenidClientClientPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: OpenidClientClientPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_openid_client_client_policy',
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
    this._clients = config.clients;
    this._decisionStrategy = config.decisionStrategy;
    this._description = config.description;
    this._id = config.id;
    this._logic = config.logic;
    this._name = config.name;
    this._realmId = config.realmId;
    this._resourceServerId = config.resourceServerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clients - computed: false, optional: false, required: true
  private _clients?: string[]; 
  public get clients() {
    return cdktf.Fn.tolist(this.getListAttribute('clients'));
  }
  public set clients(value: string[]) {
    this._clients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients;
  }

  // decision_strategy - computed: false, optional: true, required: false
  private _decisionStrategy?: string; 
  public get decisionStrategy() {
    return this.getStringAttribute('decision_strategy');
  }
  public set decisionStrategy(value: string) {
    this._decisionStrategy = value;
  }
  public resetDecisionStrategy() {
    this._decisionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decisionStrategyInput() {
    return this._decisionStrategy;
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

  // logic - computed: false, optional: true, required: false
  private _logic?: string; 
  public get logic() {
    return this.getStringAttribute('logic');
  }
  public set logic(value: string) {
    this._logic = value;
  }
  public resetLogic() {
    this._logic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicInput() {
    return this._logic;
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

  // resource_server_id - computed: false, optional: false, required: true
  private _resourceServerId?: string; 
  public get resourceServerId() {
    return this.getStringAttribute('resource_server_id');
  }
  public set resourceServerId(value: string) {
    this._resourceServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceServerIdInput() {
    return this._resourceServerId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clients: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clients),
      decision_strategy: cdktf.stringToTerraform(this._decisionStrategy),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      logic: cdktf.stringToTerraform(this._logic),
      name: cdktf.stringToTerraform(this._name),
      realm_id: cdktf.stringToTerraform(this._realmId),
      resource_server_id: cdktf.stringToTerraform(this._resourceServerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clients: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clients),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      decision_strategy: {
        value: cdktf.stringToHclTerraform(this._decisionStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      logic: {
        value: cdktf.stringToHclTerraform(this._logic),
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
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_server_id: {
        value: cdktf.stringToHclTerraform(this._resourceServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
