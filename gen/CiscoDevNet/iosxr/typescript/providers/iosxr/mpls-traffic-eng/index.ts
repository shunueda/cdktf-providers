// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_traffic_eng
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MplsTrafficEngConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_traffic_eng#delete_mode MplsTrafficEng#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_traffic_eng#device MplsTrafficEng#device}
  */
  readonly device?: string;
  /**
  * Go into the MPLS-TE submode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_traffic_eng#traffic_eng MplsTrafficEng#traffic_eng}
  */
  readonly trafficEng?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_traffic_eng iosxr_mpls_traffic_eng}
*/
export class MplsTrafficEng extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_mpls_traffic_eng";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MplsTrafficEng resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MplsTrafficEng to import
  * @param importFromId The id of the existing MplsTrafficEng that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_traffic_eng#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MplsTrafficEng to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_mpls_traffic_eng", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_traffic_eng iosxr_mpls_traffic_eng} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MplsTrafficEngConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MplsTrafficEngConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_mpls_traffic_eng',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._trafficEng = config.trafficEng;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // traffic_eng - computed: false, optional: true, required: false
  private _trafficEng?: boolean | cdktf.IResolvable; 
  public get trafficEng() {
    return this.getBooleanAttribute('traffic_eng');
  }
  public set trafficEng(value: boolean | cdktf.IResolvable) {
    this._trafficEng = value;
  }
  public resetTrafficEng() {
    this._trafficEng = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficEngInput() {
    return this._trafficEng;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      traffic_eng: cdktf.booleanToTerraform(this._trafficEng),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_eng: {
        value: cdktf.booleanToHclTerraform(this._trafficEng),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
