// https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/virtual_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of seconds without queries after which the Virtual Instance is suspended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/virtual_instance#auto_suspend_seconds VirtualInstance#auto_suspend_seconds}
  */
  readonly autoSuspendSeconds?: number;
  /**
  * Description of the virtual instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/virtual_instance#description VirtualInstance#description}
  */
  readonly description?: string;
  /**
  * Name of the virtual instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/virtual_instance#name VirtualInstance#name}
  */
  readonly name: string;
  /**
  * When a Virtual Instance is resumed, remount all collections that were mounted when the Virtual Instance was suspended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/virtual_instance#remount_on_resume VirtualInstance#remount_on_resume}
  */
  readonly remountOnResume?: boolean | cdktf.IResolvable;
  /**
  * Requested virtual instance size. Note that this field is called type in the API documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/virtual_instance#size VirtualInstance#size}
  */
  readonly size: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/virtual_instance rockset_virtual_instance}
*/
export class VirtualInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rockset_virtual_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualInstance to import
  * @param importFromId The id of the existing VirtualInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/virtual_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rockset_virtual_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/virtual_instance rockset_virtual_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'rockset_virtual_instance',
      terraformGeneratorMetadata: {
        providerName: 'rockset',
        providerVersion: '0.9.8',
        providerVersionConstraint: '0.9.8'
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
    this._description = config.description;
    this._name = config.name;
    this._remountOnResume = config.remountOnResume;
    this._size = config.size;
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

  // current_size - computed: true, optional: false, required: false
  public get currentSize() {
    return this.getStringAttribute('current_size');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
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

  // desired_size - computed: true, optional: false, required: false
  public get desiredSize() {
    return this.getStringAttribute('desired_size');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // monitoring_enabled - computed: true, optional: false, required: false
  public get monitoringEnabled() {
    return this.getBooleanAttribute('monitoring_enabled');
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

  // remount_on_resume - computed: false, optional: true, required: false
  private _remountOnResume?: boolean | cdktf.IResolvable; 
  public get remountOnResume() {
    return this.getBooleanAttribute('remount_on_resume');
  }
  public set remountOnResume(value: boolean | cdktf.IResolvable) {
    this._remountOnResume = value;
  }
  public resetRemountOnResume() {
    this._remountOnResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remountOnResumeInput() {
    return this._remountOnResume;
  }

  // rrn - computed: true, optional: false, required: false
  public get rrn() {
    return this.getStringAttribute('rrn');
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_suspend_seconds: cdktf.numberToTerraform(this._autoSuspendSeconds),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      remount_on_resume: cdktf.booleanToTerraform(this._remountOnResume),
      size: cdktf.stringToTerraform(this._size),
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
      remount_on_resume: {
        value: cdktf.booleanToHclTerraform(this._remountOnResume),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
