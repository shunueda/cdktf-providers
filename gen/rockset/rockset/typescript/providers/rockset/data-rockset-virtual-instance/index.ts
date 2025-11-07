// https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/virtual_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRocksetVirtualInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of seconds without queries after which the Virtual Instance is suspended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/virtual_instance#auto_suspend_seconds DataRocksetVirtualInstance#auto_suspend_seconds}
  */
  readonly autoSuspendSeconds?: number;
  /**
  * Virtual Instance current size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/virtual_instance#current_size DataRocksetVirtualInstance#current_size}
  */
  readonly currentSize?: string;
  /**
  * Virtual Instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/virtual_instance#default DataRocksetVirtualInstance#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Virtual Instance description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/virtual_instance#description DataRocksetVirtualInstance#description}
  */
  readonly description?: string;
  /**
  * Virtual Instance desired size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/virtual_instance#desired_size DataRocksetVirtualInstance#desired_size}
  */
  readonly desiredSize?: string;
  /**
  * When a Virtual Instance is resumed, it will remount all collections that were mounted when the Virtual Instance was suspended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/virtual_instance#enable_remount_on_resume DataRocksetVirtualInstance#enable_remount_on_resume}
  */
  readonly enableRemountOnResume?: boolean | cdktf.IResolvable;
  /**
  * Virtual Instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/virtual_instance#id DataRocksetVirtualInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Virtual Instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/virtual_instance#name DataRocksetVirtualInstance#name}
  */
  readonly name?: string;
  /**
  * Virtual Instance state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/virtual_instance#state DataRocksetVirtualInstance#state}
  */
  readonly state?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/virtual_instance rockset_virtual_instance}
*/
export class DataRocksetVirtualInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rockset_virtual_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRocksetVirtualInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRocksetVirtualInstance to import
  * @param importFromId The id of the existing DataRocksetVirtualInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/virtual_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRocksetVirtualInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rockset_virtual_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/virtual_instance rockset_virtual_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRocksetVirtualInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataRocksetVirtualInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'rockset_virtual_instance',
      terraformGeneratorMetadata: {
        providerName: 'rockset',
        providerVersion: '0.9.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoSuspendSeconds = config.autoSuspendSeconds;
    this._currentSize = config.currentSize;
    this._default = config.default;
    this._description = config.description;
    this._desiredSize = config.desiredSize;
    this._enableRemountOnResume = config.enableRemountOnResume;
    this._id = config.id;
    this._name = config.name;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_suspend_seconds - computed: false, optional: true, required: false
  private _autoSuspendSeconds?: number; 
  public get autoSuspendSeconds() {
    return this.getNumberAttribute('auto_suspend_seconds');
  }
  public set autoSuspendSeconds(value: number) {
    this._autoSuspendSeconds = value;
  }
  public resetAutoSuspendSeconds() {
    this._autoSuspendSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSuspendSecondsInput() {
    return this._autoSuspendSeconds;
  }

  // current_size - computed: false, optional: true, required: false
  private _currentSize?: string; 
  public get currentSize() {
    return this.getStringAttribute('current_size');
  }
  public set currentSize(value: string) {
    this._currentSize = value;
  }
  public resetCurrentSize() {
    this._currentSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentSizeInput() {
    return this._currentSize;
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

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

  // desired_size - computed: false, optional: true, required: false
  private _desiredSize?: string; 
  public get desiredSize() {
    return this.getStringAttribute('desired_size');
  }
  public set desiredSize(value: string) {
    this._desiredSize = value;
  }
  public resetDesiredSize() {
    this._desiredSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredSizeInput() {
    return this._desiredSize;
  }

  // enable_remount_on_resume - computed: false, optional: true, required: false
  private _enableRemountOnResume?: boolean | cdktf.IResolvable; 
  public get enableRemountOnResume() {
    return this.getBooleanAttribute('enable_remount_on_resume');
  }
  public set enableRemountOnResume(value: boolean | cdktf.IResolvable) {
    this._enableRemountOnResume = value;
  }
  public resetEnableRemountOnResume() {
    this._enableRemountOnResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRemountOnResumeInput() {
    return this._enableRemountOnResume;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_suspend_seconds: cdktf.numberToTerraform(this._autoSuspendSeconds),
      current_size: cdktf.stringToTerraform(this._currentSize),
      default: cdktf.booleanToTerraform(this._default),
      description: cdktf.stringToTerraform(this._description),
      desired_size: cdktf.stringToTerraform(this._desiredSize),
      enable_remount_on_resume: cdktf.booleanToTerraform(this._enableRemountOnResume),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      state: cdktf.stringToTerraform(this._state),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_suspend_seconds: {
        value: cdktf.numberToHclTerraform(this._autoSuspendSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      current_size: {
        value: cdktf.stringToHclTerraform(this._currentSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
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
      desired_size: {
        value: cdktf.stringToHclTerraform(this._desiredSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_remount_on_resume: {
        value: cdktf.booleanToHclTerraform(this._enableRemountOnResume),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
