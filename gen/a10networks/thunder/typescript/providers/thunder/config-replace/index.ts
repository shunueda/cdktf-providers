// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/config_replace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigReplaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'skip': Skip object and its children; 'accept': Skip siblings of object and its parents;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/config_replace#action ConfigReplace#action}
  */
  readonly action?: string;
  /**
  * Set scope of objects by specifying object class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/config_replace#filter ConfigReplace#filter}
  */
  readonly filter?: string;
  /**
  * Turn off syncing changes to GSLB Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/config_replace#gslb_syncing_off ConfigReplace#gslb_syncing_off}
  */
  readonly gslbSyncingOff?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/config_replace#id ConfigReplace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ignore errors and continue to apply changes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/config_replace#ignore_error ConfigReplace#ignore_error}
  */
  readonly ignoreError?: number;
  /**
  * Log errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/config_replace#log_error ConfigReplace#log_error}
  */
  readonly logError?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/config_replace thunder_config_replace}
*/
export class ConfigReplace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_config_replace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigReplace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigReplace to import
  * @param importFromId The id of the existing ConfigReplace that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/config_replace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigReplace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_config_replace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/config_replace thunder_config_replace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigReplaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ConfigReplaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_config_replace',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._filter = config.filter;
    this._gslbSyncingOff = config.gslbSyncingOff;
    this._id = config.id;
    this._ignoreError = config.ignoreError;
    this._logError = config.logError;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // gslb_syncing_off - computed: false, optional: true, required: false
  private _gslbSyncingOff?: number; 
  public get gslbSyncingOff() {
    return this.getNumberAttribute('gslb_syncing_off');
  }
  public set gslbSyncingOff(value: number) {
    this._gslbSyncingOff = value;
  }
  public resetGslbSyncingOff() {
    this._gslbSyncingOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSyncingOffInput() {
    return this._gslbSyncingOff;
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

  // ignore_error - computed: false, optional: true, required: false
  private _ignoreError?: number; 
  public get ignoreError() {
    return this.getNumberAttribute('ignore_error');
  }
  public set ignoreError(value: number) {
    this._ignoreError = value;
  }
  public resetIgnoreError() {
    this._ignoreError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorInput() {
    return this._ignoreError;
  }

  // log_error - computed: false, optional: true, required: false
  private _logError?: number; 
  public get logError() {
    return this.getNumberAttribute('log_error');
  }
  public set logError(value: number) {
    this._logError = value;
  }
  public resetLogError() {
    this._logError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logErrorInput() {
    return this._logError;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      filter: cdktf.stringToTerraform(this._filter),
      gslb_syncing_off: cdktf.numberToTerraform(this._gslbSyncingOff),
      id: cdktf.stringToTerraform(this._id),
      ignore_error: cdktf.numberToTerraform(this._ignoreError),
      log_error: cdktf.numberToTerraform(this._logError),
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
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gslb_syncing_off: {
        value: cdktf.numberToHclTerraform(this._gslbSyncingOff),
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
      ignore_error: {
        value: cdktf.numberToHclTerraform(this._ignoreError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_error: {
        value: cdktf.numberToHclTerraform(this._logError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
