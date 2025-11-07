// https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/role_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * A CRN that specifies the scope and resource patterns necessary for the role to bind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/role_binding#crn_pattern RoleBinding#crn_pattern}
  */
  readonly crnPattern: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/role_binding#disable_wait_for_ready RoleBinding#disable_wait_for_ready}
  */
  readonly disableWaitForReady?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/role_binding#id RoleBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The principal User to bind the role to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/role_binding#principal RoleBinding#principal}
  */
  readonly principal: string;
  /**
  * The name of the role to bind to the principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/role_binding#role_name RoleBinding#role_name}
  */
  readonly roleName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/role_binding confluent_role_binding}
*/
export class RoleBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_role_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoleBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoleBinding to import
  * @param importFromId The id of the existing RoleBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/role_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoleBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_role_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/role_binding confluent_role_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleBindingConfig
  */
  public constructor(scope: Construct, id: string, config: RoleBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_role_binding',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.51.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._crnPattern = config.crnPattern;
    this._disableWaitForReady = config.disableWaitForReady;
    this._id = config.id;
    this._principal = config.principal;
    this._roleName = config.roleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // crn_pattern - computed: false, optional: false, required: true
  private _crnPattern?: string; 
  public get crnPattern() {
    return this.getStringAttribute('crn_pattern');
  }
  public set crnPattern(value: string) {
    this._crnPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crnPatternInput() {
    return this._crnPattern;
  }

  // disable_wait_for_ready - computed: false, optional: true, required: false
  private _disableWaitForReady?: boolean | cdktf.IResolvable; 
  public get disableWaitForReady() {
    return this.getBooleanAttribute('disable_wait_for_ready');
  }
  public set disableWaitForReady(value: boolean | cdktf.IResolvable) {
    this._disableWaitForReady = value;
  }
  public resetDisableWaitForReady() {
    this._disableWaitForReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWaitForReadyInput() {
    return this._disableWaitForReady;
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

  // principal - computed: false, optional: false, required: true
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      crn_pattern: cdktf.stringToTerraform(this._crnPattern),
      disable_wait_for_ready: cdktf.booleanToTerraform(this._disableWaitForReady),
      id: cdktf.stringToTerraform(this._id),
      principal: cdktf.stringToTerraform(this._principal),
      role_name: cdktf.stringToTerraform(this._roleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      crn_pattern: {
        value: cdktf.stringToHclTerraform(this._crnPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_wait_for_ready: {
        value: cdktf.booleanToHclTerraform(this._disableWaitForReady),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal: {
        value: cdktf.stringToHclTerraform(this._principal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
