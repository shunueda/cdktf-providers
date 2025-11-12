// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/ipv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrIpv6Config extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/ipv6#device DataIosxrIpv6#device}
  */
  readonly device?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/ipv6 iosxr_ipv6}
*/
export class DataIosxrIpv6 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_ipv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrIpv6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrIpv6 to import
  * @param importFromId The id of the existing DataIosxrIpv6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/ipv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrIpv6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_ipv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/ipv6 iosxr_ipv6} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrIpv6Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxrIpv6Config = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_ipv6',
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
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assembler_frag_hdr_incomplete_enable - computed: true, optional: false, required: false
  public get assemblerFragHdrIncompleteEnable() {
    return this.getBooleanAttribute('assembler_frag_hdr_incomplete_enable');
  }

  // assembler_max_packets - computed: true, optional: false, required: false
  public get assemblerMaxPackets() {
    return this.getNumberAttribute('assembler_max_packets');
  }

  // assembler_overlap_frag_drop_enable - computed: true, optional: false, required: false
  public get assemblerOverlapFragDropEnable() {
    return this.getBooleanAttribute('assembler_overlap_frag_drop_enable');
  }

  // assembler_reassembler_drop_enable - computed: true, optional: false, required: false
  public get assemblerReassemblerDropEnable() {
    return this.getBooleanAttribute('assembler_reassembler_drop_enable');
  }

  // assembler_timeout - computed: true, optional: false, required: false
  public get assemblerTimeout() {
    return this.getNumberAttribute('assembler_timeout');
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

  // hop_limit - computed: true, optional: false, required: false
  public get hopLimit() {
    return this.getNumberAttribute('hop_limit');
  }

  // icmp_error_interval - computed: true, optional: false, required: false
  public get icmpErrorInterval() {
    return this.getNumberAttribute('icmp_error_interval');
  }

  // icmp_error_interval_bucket_size - computed: true, optional: false, required: false
  public get icmpErrorIntervalBucketSize() {
    return this.getNumberAttribute('icmp_error_interval_bucket_size');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // path_mtu_enable - computed: true, optional: false, required: false
  public get pathMtuEnable() {
    return this.getBooleanAttribute('path_mtu_enable');
  }

  // path_mtu_timeout - computed: true, optional: false, required: false
  public get pathMtuTimeout() {
    return this.getNumberAttribute('path_mtu_timeout');
  }

  // source_route - computed: true, optional: false, required: false
  public get sourceRoute() {
    return this.getBooleanAttribute('source_route');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
