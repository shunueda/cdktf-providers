// https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/clickwrap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClickwrapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Body text of Clickwrap (supports Markdown formatting).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/clickwrap#body Clickwrap#body}
  */
  readonly body?: string;
  /**
  * Name of the Clickwrap agreement (used when selecting from multiple Clickwrap agreements.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/clickwrap#name Clickwrap#name}
  */
  readonly name?: string;
  /**
  * Use this Clickwrap for Bundles?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/clickwrap#use_with_bundles Clickwrap#use_with_bundles}
  */
  readonly useWithBundles?: string;
  /**
  * Use this Clickwrap for Inboxes?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/clickwrap#use_with_inboxes Clickwrap#use_with_inboxes}
  */
  readonly useWithInboxes?: string;
  /**
  * Use this Clickwrap for User Registrations?  Note: This only applies to User Registrations where the User is invited to your Files.com site using an E-Mail invitation process where they then set their own password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/clickwrap#use_with_users Clickwrap#use_with_users}
  */
  readonly useWithUsers?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/clickwrap files_clickwrap}
*/
export class Clickwrap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_clickwrap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Clickwrap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Clickwrap to import
  * @param importFromId The id of the existing Clickwrap that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/clickwrap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Clickwrap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_clickwrap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/clickwrap files_clickwrap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClickwrapConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ClickwrapConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'files_clickwrap',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.392',
        providerVersionConstraint: '0.1.392'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._body = config.body;
    this._name = config.name;
    this._useWithBundles = config.useWithBundles;
    this._useWithInboxes = config.useWithInboxes;
    this._useWithUsers = config.useWithUsers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // use_with_bundles - computed: true, optional: true, required: false
  private _useWithBundles?: string; 
  public get useWithBundles() {
    return this.getStringAttribute('use_with_bundles');
  }
  public set useWithBundles(value: string) {
    this._useWithBundles = value;
  }
  public resetUseWithBundles() {
    this._useWithBundles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useWithBundlesInput() {
    return this._useWithBundles;
  }

  // use_with_inboxes - computed: true, optional: true, required: false
  private _useWithInboxes?: string; 
  public get useWithInboxes() {
    return this.getStringAttribute('use_with_inboxes');
  }
  public set useWithInboxes(value: string) {
    this._useWithInboxes = value;
  }
  public resetUseWithInboxes() {
    this._useWithInboxes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useWithInboxesInput() {
    return this._useWithInboxes;
  }

  // use_with_users - computed: true, optional: true, required: false
  private _useWithUsers?: string; 
  public get useWithUsers() {
    return this.getStringAttribute('use_with_users');
  }
  public set useWithUsers(value: string) {
    this._useWithUsers = value;
  }
  public resetUseWithUsers() {
    this._useWithUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useWithUsersInput() {
    return this._useWithUsers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body: cdktf.stringToTerraform(this._body),
      name: cdktf.stringToTerraform(this._name),
      use_with_bundles: cdktf.stringToTerraform(this._useWithBundles),
      use_with_inboxes: cdktf.stringToTerraform(this._useWithInboxes),
      use_with_users: cdktf.stringToTerraform(this._useWithUsers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      body: {
        value: cdktf.stringToHclTerraform(this._body),
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
      use_with_bundles: {
        value: cdktf.stringToHclTerraform(this._useWithBundles),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_with_inboxes: {
        value: cdktf.stringToHclTerraform(this._useWithInboxes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_with_users: {
        value: cdktf.stringToHclTerraform(this._useWithUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
