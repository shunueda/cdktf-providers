// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SegmentRoutingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing#delete_mode SegmentRouting#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing#device SegmentRouting#device}
  */
  readonly device?: string;
  /**
  * enable SR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing#enable SegmentRouting#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * SRGB Lower Bound
  *   - Range: `16000`-`1048574`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing#global_block_lower_bound SegmentRouting#global_block_lower_bound}
  */
  readonly globalBlockLowerBound?: number;
  /**
  * SRGB Upper Bound
  *   - Range: `16001`-`1048575`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing#global_block_upper_bound SegmentRouting#global_block_upper_bound}
  */
  readonly globalBlockUpperBound?: number;
  /**
  * SRLB Lower Bound
  *   - Range: `15000`-`1048574`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing#local_block_lower_bound SegmentRouting#local_block_lower_bound}
  */
  readonly localBlockLowerBound?: number;
  /**
  * SRLB Upper Bound
  *   - Range: `15001`-`1048575`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing#local_block_upper_bound SegmentRouting#local_block_upper_bound}
  */
  readonly localBlockUpperBound?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing iosxr_segment_routing}
*/
export class SegmentRouting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_segment_routing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SegmentRouting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SegmentRouting to import
  * @param importFromId The id of the existing SegmentRouting that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SegmentRouting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_segment_routing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing iosxr_segment_routing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SegmentRoutingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SegmentRoutingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_segment_routing',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
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
    this._enable = config.enable;
    this._globalBlockLowerBound = config.globalBlockLowerBound;
    this._globalBlockUpperBound = config.globalBlockUpperBound;
    this._localBlockLowerBound = config.localBlockLowerBound;
    this._localBlockUpperBound = config.localBlockUpperBound;
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

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // global_block_lower_bound - computed: false, optional: true, required: false
  private _globalBlockLowerBound?: number; 
  public get globalBlockLowerBound() {
    return this.getNumberAttribute('global_block_lower_bound');
  }
  public set globalBlockLowerBound(value: number) {
    this._globalBlockLowerBound = value;
  }
  public resetGlobalBlockLowerBound() {
    this._globalBlockLowerBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalBlockLowerBoundInput() {
    return this._globalBlockLowerBound;
  }

  // global_block_upper_bound - computed: false, optional: true, required: false
  private _globalBlockUpperBound?: number; 
  public get globalBlockUpperBound() {
    return this.getNumberAttribute('global_block_upper_bound');
  }
  public set globalBlockUpperBound(value: number) {
    this._globalBlockUpperBound = value;
  }
  public resetGlobalBlockUpperBound() {
    this._globalBlockUpperBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalBlockUpperBoundInput() {
    return this._globalBlockUpperBound;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_block_lower_bound - computed: false, optional: true, required: false
  private _localBlockLowerBound?: number; 
  public get localBlockLowerBound() {
    return this.getNumberAttribute('local_block_lower_bound');
  }
  public set localBlockLowerBound(value: number) {
    this._localBlockLowerBound = value;
  }
  public resetLocalBlockLowerBound() {
    this._localBlockLowerBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localBlockLowerBoundInput() {
    return this._localBlockLowerBound;
  }

  // local_block_upper_bound - computed: false, optional: true, required: false
  private _localBlockUpperBound?: number; 
  public get localBlockUpperBound() {
    return this.getNumberAttribute('local_block_upper_bound');
  }
  public set localBlockUpperBound(value: number) {
    this._localBlockUpperBound = value;
  }
  public resetLocalBlockUpperBound() {
    this._localBlockUpperBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localBlockUpperBoundInput() {
    return this._localBlockUpperBound;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      enable: cdktf.booleanToTerraform(this._enable),
      global_block_lower_bound: cdktf.numberToTerraform(this._globalBlockLowerBound),
      global_block_upper_bound: cdktf.numberToTerraform(this._globalBlockUpperBound),
      local_block_lower_bound: cdktf.numberToTerraform(this._localBlockLowerBound),
      local_block_upper_bound: cdktf.numberToTerraform(this._localBlockUpperBound),
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
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      global_block_lower_bound: {
        value: cdktf.numberToHclTerraform(this._globalBlockLowerBound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      global_block_upper_bound: {
        value: cdktf.numberToHclTerraform(this._globalBlockUpperBound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_block_lower_bound: {
        value: cdktf.numberToHclTerraform(this._localBlockLowerBound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_block_upper_bound: {
        value: cdktf.numberToHclTerraform(this._localBlockUpperBound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
