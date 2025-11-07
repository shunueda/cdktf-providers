// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Administrative state.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_instance#admin_state BgpInstance#admin_state}
  */
  readonly adminState?: string;
  /**
  * Autonomous system number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_instance#asn BgpInstance#asn}
  */
  readonly asn?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_instance#device BgpInstance#device}
  */
  readonly device?: string;
  /**
  * Enable BGP Enhanced Error Handling.
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_instance#enhanced_error_handling BgpInstance#enhanced_error_handling}
  */
  readonly enhancedErrorHandling?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_instance nxos_bgp_instance}
*/
export class BgpInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_bgp_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpInstance to import
  * @param importFromId The id of the existing BgpInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_bgp_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_instance nxos_bgp_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpInstanceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BgpInstanceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nxos_bgp_instance',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminState = config.adminState;
    this._asn = config.asn;
    this._device = config.device;
    this._enhancedErrorHandling = config.enhancedErrorHandling;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state - computed: true, optional: true, required: false
  private _adminState?: string; 
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }
  public set adminState(value: string) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // asn - computed: false, optional: true, required: false
  private _asn?: string; 
  public get asn() {
    return this.getStringAttribute('asn');
  }
  public set asn(value: string) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
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

  // enhanced_error_handling - computed: true, optional: true, required: false
  private _enhancedErrorHandling?: boolean | cdktf.IResolvable; 
  public get enhancedErrorHandling() {
    return this.getBooleanAttribute('enhanced_error_handling');
  }
  public set enhancedErrorHandling(value: boolean | cdktf.IResolvable) {
    this._enhancedErrorHandling = value;
  }
  public resetEnhancedErrorHandling() {
    this._enhancedErrorHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedErrorHandlingInput() {
    return this._enhancedErrorHandling;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state: cdktf.stringToTerraform(this._adminState),
      asn: cdktf.stringToTerraform(this._asn),
      device: cdktf.stringToTerraform(this._device),
      enhanced_error_handling: cdktf.booleanToTerraform(this._enhancedErrorHandling),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_state: {
        value: cdktf.stringToHclTerraform(this._adminState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asn: {
        value: cdktf.stringToHclTerraform(this._asn),
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
      enhanced_error_handling: {
        value: cdktf.booleanToHclTerraform(this._enhancedErrorHandling),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
