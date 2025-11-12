// https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/authentication_execution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationExecutionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/authentication_execution#authenticator AuthenticationExecution#authenticator}
  */
  readonly authenticator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/authentication_execution#id AuthenticationExecution#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/authentication_execution#parent_flow_alias AuthenticationExecution#parent_flow_alias}
  */
  readonly parentFlowAlias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/authentication_execution#priority AuthenticationExecution#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/authentication_execution#realm_id AuthenticationExecution#realm_id}
  */
  readonly realmId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/authentication_execution#requirement AuthenticationExecution#requirement}
  */
  readonly requirement?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/authentication_execution keycloak_authentication_execution}
*/
export class AuthenticationExecution extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_authentication_execution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationExecution resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationExecution to import
  * @param importFromId The id of the existing AuthenticationExecution that should be imported. Refer to the {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/authentication_execution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationExecution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_authentication_execution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/authentication_execution keycloak_authentication_execution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationExecutionConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationExecutionConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_authentication_execution',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '5.5.0',
        providerVersionConstraint: '5.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticator = config.authenticator;
    this._id = config.id;
    this._parentFlowAlias = config.parentFlowAlias;
    this._priority = config.priority;
    this._realmId = config.realmId;
    this._requirement = config.requirement;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authenticator - computed: false, optional: false, required: true
  private _authenticator?: string; 
  public get authenticator() {
    return this.getStringAttribute('authenticator');
  }
  public set authenticator(value: string) {
    this._authenticator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorInput() {
    return this._authenticator;
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

  // parent_flow_alias - computed: false, optional: false, required: true
  private _parentFlowAlias?: string; 
  public get parentFlowAlias() {
    return this.getStringAttribute('parent_flow_alias');
  }
  public set parentFlowAlias(value: string) {
    this._parentFlowAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentFlowAliasInput() {
    return this._parentFlowAlias;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // requirement - computed: false, optional: true, required: false
  private _requirement?: string; 
  public get requirement() {
    return this.getStringAttribute('requirement');
  }
  public set requirement(value: string) {
    this._requirement = value;
  }
  public resetRequirement() {
    this._requirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementInput() {
    return this._requirement;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authenticator: cdktf.stringToTerraform(this._authenticator),
      id: cdktf.stringToTerraform(this._id),
      parent_flow_alias: cdktf.stringToTerraform(this._parentFlowAlias),
      priority: cdktf.numberToTerraform(this._priority),
      realm_id: cdktf.stringToTerraform(this._realmId),
      requirement: cdktf.stringToTerraform(this._requirement),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authenticator: {
        value: cdktf.stringToHclTerraform(this._authenticator),
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
      parent_flow_alias: {
        value: cdktf.stringToHclTerraform(this._parentFlowAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requirement: {
        value: cdktf.stringToHclTerraform(this._requirement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
