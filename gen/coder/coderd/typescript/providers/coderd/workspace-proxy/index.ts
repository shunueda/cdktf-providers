// https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/workspace_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Display name of the workspace proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/workspace_proxy#display_name WorkspaceProxy#display_name}
  */
  readonly displayName?: string;
  /**
  * Relative path or external URL that specifies an icon to be displayed in the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/workspace_proxy#icon WorkspaceProxy#icon}
  */
  readonly icon: string;
  /**
  * Name of the workspace proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/workspace_proxy#name WorkspaceProxy#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/workspace_proxy coderd_workspace_proxy}
*/
export class WorkspaceProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coderd_workspace_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceProxy to import
  * @param importFromId The id of the existing WorkspaceProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/workspace_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coderd_workspace_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/workspace_proxy coderd_workspace_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceProxyConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'coderd_workspace_proxy',
      terraformGeneratorMetadata: {
        providerName: 'coderd',
        providerVersion: '0.0.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._icon = config.icon;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // icon - computed: false, optional: false, required: true
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
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

  // session_token - computed: true, optional: false, required: false
  public get sessionToken() {
    return this.getStringAttribute('session_token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      icon: cdktf.stringToTerraform(this._icon),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon: {
        value: cdktf.stringToHclTerraform(this._icon),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
