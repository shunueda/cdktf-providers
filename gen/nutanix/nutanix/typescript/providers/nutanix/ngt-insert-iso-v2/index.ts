// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_insert_iso_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NgtInsertIsoV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_insert_iso_v2#action NgtInsertIsoV2#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_insert_iso_v2#capablities NgtInsertIsoV2#capablities}
  */
  readonly capablities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_insert_iso_v2#ext_id NgtInsertIsoV2#ext_id}
  */
  readonly extId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_insert_iso_v2#id NgtInsertIsoV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_insert_iso_v2#is_config_only NgtInsertIsoV2#is_config_only}
  */
  readonly isConfigOnly?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_insert_iso_v2 nutanix_ngt_insert_iso_v2}
*/
export class NgtInsertIsoV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_ngt_insert_iso_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NgtInsertIsoV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NgtInsertIsoV2 to import
  * @param importFromId The id of the existing NgtInsertIsoV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_insert_iso_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NgtInsertIsoV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_ngt_insert_iso_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_insert_iso_v2 nutanix_ngt_insert_iso_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NgtInsertIsoV2Config
  */
  public constructor(scope: Construct, id: string, config: NgtInsertIsoV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_ngt_insert_iso_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
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
    this._capablities = config.capablities;
    this._extId = config.extId;
    this._id = config.id;
    this._isConfigOnly = config.isConfigOnly;
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

  // available_version - computed: true, optional: false, required: false
  public get availableVersion() {
    return this.getStringAttribute('available_version');
  }

  // capablities - computed: true, optional: true, required: false
  private _capablities?: string[]; 
  public get capablities() {
    return this.getListAttribute('capablities');
  }
  public set capablities(value: string[]) {
    this._capablities = value;
  }
  public resetCapablities() {
    this._capablities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capablitiesInput() {
    return this._capablities;
  }

  // cdrom_ext_id - computed: true, optional: false, required: false
  public get cdromExtId() {
    return this.getStringAttribute('cdrom_ext_id');
  }

  // ext_id - computed: false, optional: false, required: true
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }

  // guest_os_version - computed: true, optional: false, required: false
  public get guestOsVersion() {
    return this.getStringAttribute('guest_os_version');
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

  // is_config_only - computed: true, optional: true, required: false
  private _isConfigOnly?: boolean | cdktf.IResolvable; 
  public get isConfigOnly() {
    return this.getBooleanAttribute('is_config_only');
  }
  public set isConfigOnly(value: boolean | cdktf.IResolvable) {
    this._isConfigOnly = value;
  }
  public resetIsConfigOnly() {
    this._isConfigOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConfigOnlyInput() {
    return this._isConfigOnly;
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // is_installed - computed: true, optional: false, required: false
  public get isInstalled() {
    return this.getBooleanAttribute('is_installed');
  }

  // is_iso_inserted - computed: true, optional: false, required: false
  public get isIsoInserted() {
    return this.getBooleanAttribute('is_iso_inserted');
  }

  // is_reachable - computed: true, optional: false, required: false
  public get isReachable() {
    return this.getBooleanAttribute('is_reachable');
  }

  // is_vm_mobility_drivers_installed - computed: true, optional: false, required: false
  public get isVmMobilityDriversInstalled() {
    return this.getBooleanAttribute('is_vm_mobility_drivers_installed');
  }

  // is_vss_snapshot_capable - computed: true, optional: false, required: false
  public get isVssSnapshotCapable() {
    return this.getBooleanAttribute('is_vss_snapshot_capable');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vm_ext_id - computed: true, optional: false, required: false
  public get vmExtId() {
    return this.getStringAttribute('vm_ext_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      capablities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._capablities),
      ext_id: cdktf.stringToTerraform(this._extId),
      id: cdktf.stringToTerraform(this._id),
      is_config_only: cdktf.booleanToTerraform(this._isConfigOnly),
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
      capablities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._capablities),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
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
      is_config_only: {
        value: cdktf.booleanToHclTerraform(this._isConfigOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
