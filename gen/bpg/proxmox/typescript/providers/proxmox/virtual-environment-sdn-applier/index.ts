// https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_applier
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentSdnApplierConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to apply SDN configuration on resource creation. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_applier#on_create VirtualEnvironmentSdnApplier#on_create}
  */
  readonly onCreate?: boolean | cdktf.IResolvable;
  /**
  * Whether to apply SDN configuration on resource destruction. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_applier#on_destroy VirtualEnvironmentSdnApplier#on_destroy}
  */
  readonly onDestroy?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_applier proxmox_virtual_environment_sdn_applier}
*/
export class VirtualEnvironmentSdnApplier extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_sdn_applier";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentSdnApplier resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentSdnApplier to import
  * @param importFromId The id of the existing VirtualEnvironmentSdnApplier that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_applier#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentSdnApplier to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_sdn_applier", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_applier proxmox_virtual_environment_sdn_applier} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentSdnApplierConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentSdnApplierConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_sdn_applier',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.89.0',
        providerVersionConstraint: '0.89.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._onCreate = config.onCreate;
    this._onDestroy = config.onDestroy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // on_create - computed: true, optional: true, required: false
  private _onCreate?: boolean | cdktf.IResolvable; 
  public get onCreate() {
    return this.getBooleanAttribute('on_create');
  }
  public set onCreate(value: boolean | cdktf.IResolvable) {
    this._onCreate = value;
  }
  public resetOnCreate() {
    this._onCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onCreateInput() {
    return this._onCreate;
  }

  // on_destroy - computed: true, optional: true, required: false
  private _onDestroy?: boolean | cdktf.IResolvable; 
  public get onDestroy() {
    return this.getBooleanAttribute('on_destroy');
  }
  public set onDestroy(value: boolean | cdktf.IResolvable) {
    this._onDestroy = value;
  }
  public resetOnDestroy() {
    this._onDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDestroyInput() {
    return this._onDestroy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      on_create: cdktf.booleanToTerraform(this._onCreate),
      on_destroy: cdktf.booleanToTerraform(this._onDestroy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      on_create: {
        value: cdktf.booleanToHclTerraform(this._onCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_destroy: {
        value: cdktf.booleanToHclTerraform(this._onDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
