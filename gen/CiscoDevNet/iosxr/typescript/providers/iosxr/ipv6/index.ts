// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6Config extends cdktf.TerraformMetaArguments {
  /**
  * Enable dropping the frags with incomplete header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6#assembler_frag_hdr_incomplete_enable Ipv6#assembler_frag_hdr_incomplete_enable}
  */
  readonly assemblerFragHdrIncompleteEnable?: boolean | cdktf.IResolvable;
  /**
  * Maxinum packets allowed in assembly queues
  *   - Range: `1`-`50`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6#assembler_max_packets Ipv6#assembler_max_packets}
  */
  readonly assemblerMaxPackets?: number;
  /**
  * Enable dropping the frags which are overlapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6#assembler_overlap_frag_drop_enable Ipv6#assembler_overlap_frag_drop_enable}
  */
  readonly assemblerOverlapFragDropEnable?: boolean | cdktf.IResolvable;
  /**
  * Enable dropping of reassembled ND packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6#assembler_reassembler_drop_enable Ipv6#assembler_reassembler_drop_enable}
  */
  readonly assemblerReassemblerDropEnable?: boolean | cdktf.IResolvable;
  /**
  * Number of seconds an assembly queue will hold before timeout
  *   - Range: `1`-`120`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6#assembler_timeout Ipv6#assembler_timeout}
  */
  readonly assemblerTimeout?: number;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6#delete_mode Ipv6#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6#device Ipv6#device}
  */
  readonly device?: string;
  /**
  * Configure hop count limit
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6#hop_limit Ipv6#hop_limit}
  */
  readonly hopLimit?: number;
  /**
  * Interval between ICMP error messages
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6#icmp_error_interval Ipv6#icmp_error_interval}
  */
  readonly icmpErrorInterval?: number;
  /**
  * Bucket size
  *   - Range: `1`-`200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6#icmp_error_interval_bucket_size Ipv6#icmp_error_interval_bucket_size}
  */
  readonly icmpErrorIntervalBucketSize?: number;
  /**
  * Enable ipv6 path-mtu feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6#path_mtu_enable Ipv6#path_mtu_enable}
  */
  readonly pathMtuEnable?: boolean | cdktf.IResolvable;
  /**
  * Configure path-mtu timeout value
  *   - Range: `1`-`15`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6#path_mtu_timeout Ipv6#path_mtu_timeout}
  */
  readonly pathMtuTimeout?: number;
  /**
  * Process packets with source routing header options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6#source_route Ipv6#source_route}
  */
  readonly sourceRoute?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6 iosxr_ipv6}
*/
export class Ipv6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_ipv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6 to import
  * @param importFromId The id of the existing Ipv6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_ipv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6 iosxr_ipv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6Config = {}
  */
  public constructor(scope: Construct, id: string, config: Ipv6Config = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_ipv6',
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
    this._assemblerFragHdrIncompleteEnable = config.assemblerFragHdrIncompleteEnable;
    this._assemblerMaxPackets = config.assemblerMaxPackets;
    this._assemblerOverlapFragDropEnable = config.assemblerOverlapFragDropEnable;
    this._assemblerReassemblerDropEnable = config.assemblerReassemblerDropEnable;
    this._assemblerTimeout = config.assemblerTimeout;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._hopLimit = config.hopLimit;
    this._icmpErrorInterval = config.icmpErrorInterval;
    this._icmpErrorIntervalBucketSize = config.icmpErrorIntervalBucketSize;
    this._pathMtuEnable = config.pathMtuEnable;
    this._pathMtuTimeout = config.pathMtuTimeout;
    this._sourceRoute = config.sourceRoute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assembler_frag_hdr_incomplete_enable - computed: false, optional: true, required: false
  private _assemblerFragHdrIncompleteEnable?: boolean | cdktf.IResolvable; 
  public get assemblerFragHdrIncompleteEnable() {
    return this.getBooleanAttribute('assembler_frag_hdr_incomplete_enable');
  }
  public set assemblerFragHdrIncompleteEnable(value: boolean | cdktf.IResolvable) {
    this._assemblerFragHdrIncompleteEnable = value;
  }
  public resetAssemblerFragHdrIncompleteEnable() {
    this._assemblerFragHdrIncompleteEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assemblerFragHdrIncompleteEnableInput() {
    return this._assemblerFragHdrIncompleteEnable;
  }

  // assembler_max_packets - computed: false, optional: true, required: false
  private _assemblerMaxPackets?: number; 
  public get assemblerMaxPackets() {
    return this.getNumberAttribute('assembler_max_packets');
  }
  public set assemblerMaxPackets(value: number) {
    this._assemblerMaxPackets = value;
  }
  public resetAssemblerMaxPackets() {
    this._assemblerMaxPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assemblerMaxPacketsInput() {
    return this._assemblerMaxPackets;
  }

  // assembler_overlap_frag_drop_enable - computed: false, optional: true, required: false
  private _assemblerOverlapFragDropEnable?: boolean | cdktf.IResolvable; 
  public get assemblerOverlapFragDropEnable() {
    return this.getBooleanAttribute('assembler_overlap_frag_drop_enable');
  }
  public set assemblerOverlapFragDropEnable(value: boolean | cdktf.IResolvable) {
    this._assemblerOverlapFragDropEnable = value;
  }
  public resetAssemblerOverlapFragDropEnable() {
    this._assemblerOverlapFragDropEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assemblerOverlapFragDropEnableInput() {
    return this._assemblerOverlapFragDropEnable;
  }

  // assembler_reassembler_drop_enable - computed: false, optional: true, required: false
  private _assemblerReassemblerDropEnable?: boolean | cdktf.IResolvable; 
  public get assemblerReassemblerDropEnable() {
    return this.getBooleanAttribute('assembler_reassembler_drop_enable');
  }
  public set assemblerReassemblerDropEnable(value: boolean | cdktf.IResolvable) {
    this._assemblerReassemblerDropEnable = value;
  }
  public resetAssemblerReassemblerDropEnable() {
    this._assemblerReassemblerDropEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assemblerReassemblerDropEnableInput() {
    return this._assemblerReassemblerDropEnable;
  }

  // assembler_timeout - computed: false, optional: true, required: false
  private _assemblerTimeout?: number; 
  public get assemblerTimeout() {
    return this.getNumberAttribute('assembler_timeout');
  }
  public set assemblerTimeout(value: number) {
    this._assemblerTimeout = value;
  }
  public resetAssemblerTimeout() {
    this._assemblerTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assemblerTimeoutInput() {
    return this._assemblerTimeout;
  }

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

  // hop_limit - computed: false, optional: true, required: false
  private _hopLimit?: number; 
  public get hopLimit() {
    return this.getNumberAttribute('hop_limit');
  }
  public set hopLimit(value: number) {
    this._hopLimit = value;
  }
  public resetHopLimit() {
    this._hopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hopLimitInput() {
    return this._hopLimit;
  }

  // icmp_error_interval - computed: false, optional: true, required: false
  private _icmpErrorInterval?: number; 
  public get icmpErrorInterval() {
    return this.getNumberAttribute('icmp_error_interval');
  }
  public set icmpErrorInterval(value: number) {
    this._icmpErrorInterval = value;
  }
  public resetIcmpErrorInterval() {
    this._icmpErrorInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpErrorIntervalInput() {
    return this._icmpErrorInterval;
  }

  // icmp_error_interval_bucket_size - computed: false, optional: true, required: false
  private _icmpErrorIntervalBucketSize?: number; 
  public get icmpErrorIntervalBucketSize() {
    return this.getNumberAttribute('icmp_error_interval_bucket_size');
  }
  public set icmpErrorIntervalBucketSize(value: number) {
    this._icmpErrorIntervalBucketSize = value;
  }
  public resetIcmpErrorIntervalBucketSize() {
    this._icmpErrorIntervalBucketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpErrorIntervalBucketSizeInput() {
    return this._icmpErrorIntervalBucketSize;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // path_mtu_enable - computed: false, optional: true, required: false
  private _pathMtuEnable?: boolean | cdktf.IResolvable; 
  public get pathMtuEnable() {
    return this.getBooleanAttribute('path_mtu_enable');
  }
  public set pathMtuEnable(value: boolean | cdktf.IResolvable) {
    this._pathMtuEnable = value;
  }
  public resetPathMtuEnable() {
    this._pathMtuEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMtuEnableInput() {
    return this._pathMtuEnable;
  }

  // path_mtu_timeout - computed: false, optional: true, required: false
  private _pathMtuTimeout?: number; 
  public get pathMtuTimeout() {
    return this.getNumberAttribute('path_mtu_timeout');
  }
  public set pathMtuTimeout(value: number) {
    this._pathMtuTimeout = value;
  }
  public resetPathMtuTimeout() {
    this._pathMtuTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMtuTimeoutInput() {
    return this._pathMtuTimeout;
  }

  // source_route - computed: false, optional: true, required: false
  private _sourceRoute?: boolean | cdktf.IResolvable; 
  public get sourceRoute() {
    return this.getBooleanAttribute('source_route');
  }
  public set sourceRoute(value: boolean | cdktf.IResolvable) {
    this._sourceRoute = value;
  }
  public resetSourceRoute() {
    this._sourceRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRouteInput() {
    return this._sourceRoute;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assembler_frag_hdr_incomplete_enable: cdktf.booleanToTerraform(this._assemblerFragHdrIncompleteEnable),
      assembler_max_packets: cdktf.numberToTerraform(this._assemblerMaxPackets),
      assembler_overlap_frag_drop_enable: cdktf.booleanToTerraform(this._assemblerOverlapFragDropEnable),
      assembler_reassembler_drop_enable: cdktf.booleanToTerraform(this._assemblerReassemblerDropEnable),
      assembler_timeout: cdktf.numberToTerraform(this._assemblerTimeout),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      hop_limit: cdktf.numberToTerraform(this._hopLimit),
      icmp_error_interval: cdktf.numberToTerraform(this._icmpErrorInterval),
      icmp_error_interval_bucket_size: cdktf.numberToTerraform(this._icmpErrorIntervalBucketSize),
      path_mtu_enable: cdktf.booleanToTerraform(this._pathMtuEnable),
      path_mtu_timeout: cdktf.numberToTerraform(this._pathMtuTimeout),
      source_route: cdktf.booleanToTerraform(this._sourceRoute),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assembler_frag_hdr_incomplete_enable: {
        value: cdktf.booleanToHclTerraform(this._assemblerFragHdrIncompleteEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      assembler_max_packets: {
        value: cdktf.numberToHclTerraform(this._assemblerMaxPackets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      assembler_overlap_frag_drop_enable: {
        value: cdktf.booleanToHclTerraform(this._assemblerOverlapFragDropEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      assembler_reassembler_drop_enable: {
        value: cdktf.booleanToHclTerraform(this._assemblerReassemblerDropEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      assembler_timeout: {
        value: cdktf.numberToHclTerraform(this._assemblerTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      hop_limit: {
        value: cdktf.numberToHclTerraform(this._hopLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp_error_interval: {
        value: cdktf.numberToHclTerraform(this._icmpErrorInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp_error_interval_bucket_size: {
        value: cdktf.numberToHclTerraform(this._icmpErrorIntervalBucketSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      path_mtu_enable: {
        value: cdktf.booleanToHclTerraform(this._pathMtuEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      path_mtu_timeout: {
        value: cdktf.numberToHclTerraform(this._pathMtuTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_route: {
        value: cdktf.booleanToHclTerraform(this._sourceRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
