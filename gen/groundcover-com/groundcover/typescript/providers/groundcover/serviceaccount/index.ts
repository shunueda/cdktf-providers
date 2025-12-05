// https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.1/docs/resources/serviceaccount
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceaccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description for the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.1/docs/resources/serviceaccount#description Serviceaccount#description}
  */
  readonly description?: string;
  /**
  * The email associated with the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.1/docs/resources/serviceaccount#email Serviceaccount#email}
  */
  readonly email: string;
  /**
  * The name of the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.1/docs/resources/serviceaccount#name Serviceaccount#name}
  */
  readonly name: string;
  /**
  * List of policy UUIDs to assign to the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.1/docs/resources/serviceaccount#policy_uuids Serviceaccount#policy_uuids}
  */
  readonly policyUuids: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.1/docs/resources/serviceaccount groundcover_serviceaccount}
*/
export class Serviceaccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "groundcover_serviceaccount";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Serviceaccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Serviceaccount to import
  * @param importFromId The id of the existing Serviceaccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.1/docs/resources/serviceaccount#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Serviceaccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "groundcover_serviceaccount", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.1/docs/resources/serviceaccount groundcover_serviceaccount} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceaccountConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceaccountConfig) {
    super(scope, id, {
      terraformResourceType: 'groundcover_serviceaccount',
      terraformGeneratorMetadata: {
        providerName: 'groundcover',
        providerVersion: '1.4.1',
        providerVersionConstraint: '1.4.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._email = config.email;
    this._name = config.name;
    this._policyUuids = config.policyUuids;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // policy_uuids - computed: false, optional: false, required: true
  private _policyUuids?: string[]; 
  public get policyUuids() {
    return this.getListAttribute('policy_uuids');
  }
  public set policyUuids(value: string[]) {
    this._policyUuids = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyUuidsInput() {
    return this._policyUuids;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      email: cdktf.stringToTerraform(this._email),
      name: cdktf.stringToTerraform(this._name),
      policy_uuids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyUuids),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      policy_uuids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policyUuids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
