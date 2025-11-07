// https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/apiscope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiscopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the API scope is intended for machine clients (allow_machine_clients and allow_user_clients are mutually exclusive, and one of them has to be true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/apiscope#allow_machine_clients Apiscope#allow_machine_clients}
  */
  readonly allowMachineClients?: boolean | cdktf.IResolvable;
  /**
  * Whether the API scope is intended for user clients (allow_machine_clients and allow_user_clients are mutually exclusive, and one of them has to be true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/apiscope#allow_user_clients Apiscope#allow_user_clients}
  */
  readonly allowUserClients?: boolean | cdktf.IResolvable;
  /**
  * A description of what this API scope is used for. Please include information about what it gives access to, and in what way it differs from similar API scopes, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/apiscope#description Apiscope#description}
  */
  readonly description?: string;
  /**
  * The name of the API scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/apiscope#name Apiscope#name}
  */
  readonly name: string;
  /**
  * A change in value for this field will force recreating the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/apiscope#resource_taint_version Apiscope#resource_taint_version}
  */
  readonly resourceTaintVersion?: string;
  /**
  * User claims that are included in the token when logging in with a machine/user client that has this API scope. (The token will include the super set of claims from all granted scopes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/apiscope#user_claims Apiscope#user_claims}
  */
  readonly userClaims?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/apiscope elvid_apiscope}
*/
export class Apiscope extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elvid_apiscope";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Apiscope resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Apiscope to import
  * @param importFromId The id of the existing Apiscope that should be imported. Refer to the {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/apiscope#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Apiscope to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elvid_apiscope", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/apiscope elvid_apiscope} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiscopeConfig
  */
  public constructor(scope: Construct, id: string, config: ApiscopeConfig) {
    super(scope, id, {
      terraformResourceType: 'elvid_apiscope',
      terraformGeneratorMetadata: {
        providerName: 'elvid',
        providerVersion: '2.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowMachineClients = config.allowMachineClients;
    this._allowUserClients = config.allowUserClients;
    this._description = config.description;
    this._name = config.name;
    this._resourceTaintVersion = config.resourceTaintVersion;
    this._userClaims = config.userClaims;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_machine_clients - computed: true, optional: true, required: false
  private _allowMachineClients?: boolean | cdktf.IResolvable; 
  public get allowMachineClients() {
    return this.getBooleanAttribute('allow_machine_clients');
  }
  public set allowMachineClients(value: boolean | cdktf.IResolvable) {
    this._allowMachineClients = value;
  }
  public resetAllowMachineClients() {
    this._allowMachineClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMachineClientsInput() {
    return this._allowMachineClients;
  }

  // allow_user_clients - computed: true, optional: true, required: false
  private _allowUserClients?: boolean | cdktf.IResolvable; 
  public get allowUserClients() {
    return this.getBooleanAttribute('allow_user_clients');
  }
  public set allowUserClients(value: boolean | cdktf.IResolvable) {
    this._allowUserClients = value;
  }
  public resetAllowUserClients() {
    this._allowUserClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUserClientsInput() {
    return this._allowUserClients;
  }

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // resource_taint_version - computed: true, optional: true, required: false
  private _resourceTaintVersion?: string; 
  public get resourceTaintVersion() {
    return this.getStringAttribute('resource_taint_version');
  }
  public set resourceTaintVersion(value: string) {
    this._resourceTaintVersion = value;
  }
  public resetResourceTaintVersion() {
    this._resourceTaintVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTaintVersionInput() {
    return this._resourceTaintVersion;
  }

  // user_claims - computed: true, optional: true, required: false
  private _userClaims?: string[]; 
  public get userClaims() {
    return cdktf.Fn.tolist(this.getListAttribute('user_claims'));
  }
  public set userClaims(value: string[]) {
    this._userClaims = value;
  }
  public resetUserClaims() {
    this._userClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userClaimsInput() {
    return this._userClaims;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_machine_clients: cdktf.booleanToTerraform(this._allowMachineClients),
      allow_user_clients: cdktf.booleanToTerraform(this._allowUserClients),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      resource_taint_version: cdktf.stringToTerraform(this._resourceTaintVersion),
      user_claims: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userClaims),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_machine_clients: {
        value: cdktf.booleanToHclTerraform(this._allowMachineClients),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_user_clients: {
        value: cdktf.booleanToHclTerraform(this._allowUserClients),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      resource_taint_version: {
        value: cdktf.stringToHclTerraform(this._resourceTaintVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_claims: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userClaims),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
