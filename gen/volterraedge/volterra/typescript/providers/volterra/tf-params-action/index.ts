// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/tf_params_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TfParamsActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/tf_params_action#action TfParamsAction#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/tf_params_action#id TfParamsAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/tf_params_action#ignore_on_update TfParamsAction#ignore_on_update}
  */
  readonly ignoreOnUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/tf_params_action#site_kind TfParamsAction#site_kind}
  */
  readonly siteKind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/tf_params_action#site_name TfParamsAction#site_name}
  */
  readonly siteName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/tf_params_action#wait_for_action TfParamsAction#wait_for_action}
  */
  readonly waitForAction?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/tf_params_action volterra_tf_params_action}
*/
export class TfParamsAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_tf_params_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TfParamsAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfParamsAction to import
  * @param importFromId The id of the existing TfParamsAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/tf_params_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfParamsAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_tf_params_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/tf_params_action volterra_tf_params_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfParamsActionConfig
  */
  public constructor(scope: Construct, id: string, config: TfParamsActionConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_tf_params_action',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44',
        providerVersionConstraint: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._id = config.id;
    this._ignoreOnUpdate = config.ignoreOnUpdate;
    this._siteKind = config.siteKind;
    this._siteName = config.siteName;
    this._waitForAction = config.waitForAction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // ignore_on_update - computed: false, optional: true, required: false
  private _ignoreOnUpdate?: boolean | cdktf.IResolvable; 
  public get ignoreOnUpdate() {
    return this.getBooleanAttribute('ignore_on_update');
  }
  public set ignoreOnUpdate(value: boolean | cdktf.IResolvable) {
    this._ignoreOnUpdate = value;
  }
  public resetIgnoreOnUpdate() {
    this._ignoreOnUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreOnUpdateInput() {
    return this._ignoreOnUpdate;
  }

  // site_kind - computed: false, optional: false, required: true
  private _siteKind?: string; 
  public get siteKind() {
    return this.getStringAttribute('site_kind');
  }
  public set siteKind(value: string) {
    this._siteKind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteKindInput() {
    return this._siteKind;
  }

  // site_name - computed: false, optional: false, required: true
  private _siteName?: string; 
  public get siteName() {
    return this.getStringAttribute('site_name');
  }
  public set siteName(value: string) {
    this._siteName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameInput() {
    return this._siteName;
  }

  // tf_output - computed: true, optional: false, required: false
  public get tfOutput() {
    return this.getStringAttribute('tf_output');
  }

  // wait_for_action - computed: false, optional: true, required: false
  private _waitForAction?: boolean | cdktf.IResolvable; 
  public get waitForAction() {
    return this.getBooleanAttribute('wait_for_action');
  }
  public set waitForAction(value: boolean | cdktf.IResolvable) {
    this._waitForAction = value;
  }
  public resetWaitForAction() {
    this._waitForAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForActionInput() {
    return this._waitForAction;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      ignore_on_update: cdktf.booleanToTerraform(this._ignoreOnUpdate),
      site_kind: cdktf.stringToTerraform(this._siteKind),
      site_name: cdktf.stringToTerraform(this._siteName),
      wait_for_action: cdktf.booleanToTerraform(this._waitForAction),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      ignore_on_update: {
        value: cdktf.booleanToHclTerraform(this._ignoreOnUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      site_kind: {
        value: cdktf.stringToHclTerraform(this._siteKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_name: {
        value: cdktf.stringToHclTerraform(this._siteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_action: {
        value: cdktf.booleanToHclTerraform(this._waitForAction),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
