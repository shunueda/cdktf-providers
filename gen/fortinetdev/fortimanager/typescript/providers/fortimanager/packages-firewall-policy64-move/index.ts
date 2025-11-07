// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy64_move
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackagesFirewallPolicy64MoveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy64_move#adom PackagesFirewallPolicy64Move#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy64_move#id PackagesFirewallPolicy64Move#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy64_move#option PackagesFirewallPolicy64Move#option}
  */
  readonly option: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy64_move#pkg PackagesFirewallPolicy64Move#pkg}
  */
  readonly pkg: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy64_move#pkg_folder_path PackagesFirewallPolicy64Move#pkg_folder_path}
  */
  readonly pkgFolderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy64_move#policy64 PackagesFirewallPolicy64Move#policy64}
  */
  readonly policy64: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy64_move#scopetype PackagesFirewallPolicy64Move#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy64_move#state_pos PackagesFirewallPolicy64Move#state_pos}
  */
  readonly statePos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy64_move#target PackagesFirewallPolicy64Move#target}
  */
  readonly target: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy64_move fortimanager_packages_firewall_policy64_move}
*/
export class PackagesFirewallPolicy64Move extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_packages_firewall_policy64_move";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackagesFirewallPolicy64Move resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackagesFirewallPolicy64Move to import
  * @param importFromId The id of the existing PackagesFirewallPolicy64Move that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy64_move#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackagesFirewallPolicy64Move to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_packages_firewall_policy64_move", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy64_move fortimanager_packages_firewall_policy64_move} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackagesFirewallPolicy64MoveConfig
  */
  public constructor(scope: Construct, id: string, config: PackagesFirewallPolicy64MoveConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_packages_firewall_policy64_move',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._id = config.id;
    this._option = config.option;
    this._pkg = config.pkg;
    this._pkgFolderPath = config.pkgFolderPath;
    this._policy64 = config.policy64;
    this._scopetype = config.scopetype;
    this._statePos = config.statePos;
    this._target = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
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

  // option - computed: false, optional: false, required: true
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }

  // pkg - computed: false, optional: false, required: true
  private _pkg?: string; 
  public get pkg() {
    return this.getStringAttribute('pkg');
  }
  public set pkg(value: string) {
    this._pkg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgInput() {
    return this._pkg;
  }

  // pkg_folder_path - computed: false, optional: true, required: false
  private _pkgFolderPath?: string; 
  public get pkgFolderPath() {
    return this.getStringAttribute('pkg_folder_path');
  }
  public set pkgFolderPath(value: string) {
    this._pkgFolderPath = value;
  }
  public resetPkgFolderPath() {
    this._pkgFolderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgFolderPathInput() {
    return this._pkgFolderPath;
  }

  // policy64 - computed: false, optional: false, required: true
  private _policy64?: string; 
  public get policy64() {
    return this.getStringAttribute('policy64');
  }
  public set policy64(value: string) {
    this._policy64 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policy64Input() {
    return this._policy64;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // state_pos - computed: true, optional: true, required: false
  private _statePos?: string; 
  public get statePos() {
    return this.getStringAttribute('state_pos');
  }
  public set statePos(value: string) {
    this._statePos = value;
  }
  public resetStatePos() {
    this._statePos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statePosInput() {
    return this._statePos;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      id: cdktf.stringToTerraform(this._id),
      option: cdktf.stringToTerraform(this._option),
      pkg: cdktf.stringToTerraform(this._pkg),
      pkg_folder_path: cdktf.stringToTerraform(this._pkgFolderPath),
      policy64: cdktf.stringToTerraform(this._policy64),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      state_pos: cdktf.stringToTerraform(this._statePos),
      target: cdktf.stringToTerraform(this._target),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
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
      option: {
        value: cdktf.stringToHclTerraform(this._option),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkg: {
        value: cdktf.stringToHclTerraform(this._pkg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkg_folder_path: {
        value: cdktf.stringToHclTerraform(this._pkgFolderPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy64: {
        value: cdktf.stringToHclTerraform(this._policy64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_pos: {
        value: cdktf.stringToHclTerraform(this._statePos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
