// https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/principal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrincipalConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of simultaneous actions allowed for a permissions group. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/principal#action_limit Principal#action_limit}
  */
  readonly actionLimit?: number;
  /**
  * If a permissions group is allowed to perform "administer" actions. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/principal#administer_permission Principal#administer_permission}
  */
  readonly administerPermission?: boolean | cdktf.IResolvable;
  /**
  * If a permissions group is allowed to perform "configure" actions. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/principal#configure_permission Principal#configure_permission}
  */
  readonly configurePermission?: boolean | cdktf.IResolvable;
  /**
  * The number of simultaneous linux (shell) commands allowed for a permissions group. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/principal#execute_limit Principal#execute_limit}
  */
  readonly executeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/principal#id Principal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The email address or provider's (e.g. Okta) group-name for a permissions group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/principal#identity Principal#identity}
  */
  readonly identity: string;
  /**
  * The Identity Provider's name. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/principal#idp_name Principal#idp_name}
  */
  readonly idpName?: string;
  /**
  * The name/symbol for the object within Shoreline and the op language (must be unique, only alphanumeric/underscore).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/principal#name Principal#name}
  */
  readonly name: string;
  /**
  * The number of simultaneous metrics allowed for a permissions group. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/principal#view_limit Principal#view_limit}
  */
  readonly viewLimit?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/principal shoreline_principal}
*/
export class Principal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "shoreline_principal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Principal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Principal to import
  * @param importFromId The id of the existing Principal that should be imported. Refer to the {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/principal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Principal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "shoreline_principal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/principal shoreline_principal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrincipalConfig
  */
  public constructor(scope: Construct, id: string, config: PrincipalConfig) {
    super(scope, id, {
      terraformResourceType: 'shoreline_principal',
      terraformGeneratorMetadata: {
        providerName: 'shoreline',
        providerVersion: '1.15.38',
        providerVersionConstraint: '1.15.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionLimit = config.actionLimit;
    this._administerPermission = config.administerPermission;
    this._configurePermission = config.configurePermission;
    this._executeLimit = config.executeLimit;
    this._id = config.id;
    this._identity = config.identity;
    this._idpName = config.idpName;
    this._name = config.name;
    this._viewLimit = config.viewLimit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_limit - computed: false, optional: true, required: false
  private _actionLimit?: number; 
  public get actionLimit() {
    return this.getNumberAttribute('action_limit');
  }
  public set actionLimit(value: number) {
    this._actionLimit = value;
  }
  public resetActionLimit() {
    this._actionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionLimitInput() {
    return this._actionLimit;
  }

  // administer_permission - computed: false, optional: true, required: false
  private _administerPermission?: boolean | cdktf.IResolvable; 
  public get administerPermission() {
    return this.getBooleanAttribute('administer_permission');
  }
  public set administerPermission(value: boolean | cdktf.IResolvable) {
    this._administerPermission = value;
  }
  public resetAdministerPermission() {
    this._administerPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administerPermissionInput() {
    return this._administerPermission;
  }

  // configure_permission - computed: false, optional: true, required: false
  private _configurePermission?: boolean | cdktf.IResolvable; 
  public get configurePermission() {
    return this.getBooleanAttribute('configure_permission');
  }
  public set configurePermission(value: boolean | cdktf.IResolvable) {
    this._configurePermission = value;
  }
  public resetConfigurePermission() {
    this._configurePermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurePermissionInput() {
    return this._configurePermission;
  }

  // execute_limit - computed: false, optional: true, required: false
  private _executeLimit?: number; 
  public get executeLimit() {
    return this.getNumberAttribute('execute_limit');
  }
  public set executeLimit(value: number) {
    this._executeLimit = value;
  }
  public resetExecuteLimit() {
    this._executeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeLimitInput() {
    return this._executeLimit;
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

  // identity - computed: false, optional: false, required: true
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // idp_name - computed: false, optional: true, required: false
  private _idpName?: string; 
  public get idpName() {
    return this.getStringAttribute('idp_name');
  }
  public set idpName(value: string) {
    this._idpName = value;
  }
  public resetIdpName() {
    this._idpName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpNameInput() {
    return this._idpName;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // view_limit - computed: false, optional: true, required: false
  private _viewLimit?: number; 
  public get viewLimit() {
    return this.getNumberAttribute('view_limit');
  }
  public set viewLimit(value: number) {
    this._viewLimit = value;
  }
  public resetViewLimit() {
    this._viewLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewLimitInput() {
    return this._viewLimit;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_limit: cdktf.numberToTerraform(this._actionLimit),
      administer_permission: cdktf.booleanToTerraform(this._administerPermission),
      configure_permission: cdktf.booleanToTerraform(this._configurePermission),
      execute_limit: cdktf.numberToTerraform(this._executeLimit),
      id: cdktf.stringToTerraform(this._id),
      identity: cdktf.stringToTerraform(this._identity),
      idp_name: cdktf.stringToTerraform(this._idpName),
      name: cdktf.stringToTerraform(this._name),
      view_limit: cdktf.numberToTerraform(this._viewLimit),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_limit: {
        value: cdktf.numberToHclTerraform(this._actionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      administer_permission: {
        value: cdktf.booleanToHclTerraform(this._administerPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      configure_permission: {
        value: cdktf.booleanToHclTerraform(this._configurePermission),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      execute_limit: {
        value: cdktf.numberToHclTerraform(this._executeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity: {
        value: cdktf.stringToHclTerraform(this._identity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_name: {
        value: cdktf.stringToHclTerraform(this._idpName),
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
      view_limit: {
        value: cdktf.numberToHclTerraform(this._viewLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
