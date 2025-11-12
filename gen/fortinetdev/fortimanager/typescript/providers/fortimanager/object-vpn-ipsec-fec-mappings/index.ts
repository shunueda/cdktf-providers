// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ipsec_fec_mappings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectVpnIpsecFecMappingsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ipsec_fec_mappings#adom ObjectVpnIpsecFecMappingsA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ipsec_fec_mappings#bandwidth_bi_threshold ObjectVpnIpsecFecMappingsA#bandwidth_bi_threshold}
  */
  readonly bandwidthBiThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ipsec_fec_mappings#bandwidth_down_threshold ObjectVpnIpsecFecMappingsA#bandwidth_down_threshold}
  */
  readonly bandwidthDownThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ipsec_fec_mappings#bandwidth_up_threshold ObjectVpnIpsecFecMappingsA#bandwidth_up_threshold}
  */
  readonly bandwidthUpThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ipsec_fec_mappings#base ObjectVpnIpsecFecMappingsA#base}
  */
  readonly base?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ipsec_fec_mappings#fec ObjectVpnIpsecFecMappingsA#fec}
  */
  readonly fec: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ipsec_fec_mappings#id ObjectVpnIpsecFecMappingsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ipsec_fec_mappings#latency_threshold ObjectVpnIpsecFecMappingsA#latency_threshold}
  */
  readonly latencyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ipsec_fec_mappings#packet_loss_threshold ObjectVpnIpsecFecMappingsA#packet_loss_threshold}
  */
  readonly packetLossThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ipsec_fec_mappings#redundant ObjectVpnIpsecFecMappingsA#redundant}
  */
  readonly redundant?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ipsec_fec_mappings#scopetype ObjectVpnIpsecFecMappingsA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ipsec_fec_mappings#seqno ObjectVpnIpsecFecMappingsA#seqno}
  */
  readonly seqno?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ipsec_fec_mappings fortimanager_object_vpn_ipsec_fec_mappings}
*/
export class ObjectVpnIpsecFecMappingsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_vpn_ipsec_fec_mappings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectVpnIpsecFecMappingsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectVpnIpsecFecMappingsA to import
  * @param importFromId The id of the existing ObjectVpnIpsecFecMappingsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ipsec_fec_mappings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectVpnIpsecFecMappingsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_vpn_ipsec_fec_mappings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ipsec_fec_mappings fortimanager_object_vpn_ipsec_fec_mappings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectVpnIpsecFecMappingsAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectVpnIpsecFecMappingsAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_vpn_ipsec_fec_mappings',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._bandwidthBiThreshold = config.bandwidthBiThreshold;
    this._bandwidthDownThreshold = config.bandwidthDownThreshold;
    this._bandwidthUpThreshold = config.bandwidthUpThreshold;
    this._base = config.base;
    this._fec = config.fec;
    this._id = config.id;
    this._latencyThreshold = config.latencyThreshold;
    this._packetLossThreshold = config.packetLossThreshold;
    this._redundant = config.redundant;
    this._scopetype = config.scopetype;
    this._seqno = config.seqno;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // bandwidth_bi_threshold - computed: false, optional: true, required: false
  private _bandwidthBiThreshold?: number; 
  public get bandwidthBiThreshold() {
    return this.getNumberAttribute('bandwidth_bi_threshold');
  }
  public set bandwidthBiThreshold(value: number) {
    this._bandwidthBiThreshold = value;
  }
  public resetBandwidthBiThreshold() {
    this._bandwidthBiThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthBiThresholdInput() {
    return this._bandwidthBiThreshold;
  }

  // bandwidth_down_threshold - computed: false, optional: true, required: false
  private _bandwidthDownThreshold?: number; 
  public get bandwidthDownThreshold() {
    return this.getNumberAttribute('bandwidth_down_threshold');
  }
  public set bandwidthDownThreshold(value: number) {
    this._bandwidthDownThreshold = value;
  }
  public resetBandwidthDownThreshold() {
    this._bandwidthDownThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthDownThresholdInput() {
    return this._bandwidthDownThreshold;
  }

  // bandwidth_up_threshold - computed: false, optional: true, required: false
  private _bandwidthUpThreshold?: number; 
  public get bandwidthUpThreshold() {
    return this.getNumberAttribute('bandwidth_up_threshold');
  }
  public set bandwidthUpThreshold(value: number) {
    this._bandwidthUpThreshold = value;
  }
  public resetBandwidthUpThreshold() {
    this._bandwidthUpThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthUpThresholdInput() {
    return this._bandwidthUpThreshold;
  }

  // base - computed: false, optional: true, required: false
  private _base?: number; 
  public get base() {
    return this.getNumberAttribute('base');
  }
  public set base(value: number) {
    this._base = value;
  }
  public resetBase() {
    this._base = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // fec - computed: false, optional: false, required: true
  private _fec?: string; 
  public get fec() {
    return this.getStringAttribute('fec');
  }
  public set fec(value: string) {
    this._fec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fecInput() {
    return this._fec;
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

  // latency_threshold - computed: false, optional: true, required: false
  private _latencyThreshold?: number; 
  public get latencyThreshold() {
    return this.getNumberAttribute('latency_threshold');
  }
  public set latencyThreshold(value: number) {
    this._latencyThreshold = value;
  }
  public resetLatencyThreshold() {
    this._latencyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyThresholdInput() {
    return this._latencyThreshold;
  }

  // packet_loss_threshold - computed: false, optional: true, required: false
  private _packetLossThreshold?: number; 
  public get packetLossThreshold() {
    return this.getNumberAttribute('packet_loss_threshold');
  }
  public set packetLossThreshold(value: number) {
    this._packetLossThreshold = value;
  }
  public resetPacketLossThreshold() {
    this._packetLossThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLossThresholdInput() {
    return this._packetLossThreshold;
  }

  // redundant - computed: false, optional: true, required: false
  private _redundant?: number; 
  public get redundant() {
    return this.getNumberAttribute('redundant');
  }
  public set redundant(value: number) {
    this._redundant = value;
  }
  public resetRedundant() {
    this._redundant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundantInput() {
    return this._redundant;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // seqno - computed: true, optional: true, required: false
  private _seqno?: number; 
  public get seqno() {
    return this.getNumberAttribute('seqno');
  }
  public set seqno(value: number) {
    this._seqno = value;
  }
  public resetSeqno() {
    this._seqno = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqnoInput() {
    return this._seqno;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      bandwidth_bi_threshold: cdktf.numberToTerraform(this._bandwidthBiThreshold),
      bandwidth_down_threshold: cdktf.numberToTerraform(this._bandwidthDownThreshold),
      bandwidth_up_threshold: cdktf.numberToTerraform(this._bandwidthUpThreshold),
      base: cdktf.numberToTerraform(this._base),
      fec: cdktf.stringToTerraform(this._fec),
      id: cdktf.stringToTerraform(this._id),
      latency_threshold: cdktf.numberToTerraform(this._latencyThreshold),
      packet_loss_threshold: cdktf.numberToTerraform(this._packetLossThreshold),
      redundant: cdktf.numberToTerraform(this._redundant),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      seqno: cdktf.numberToTerraform(this._seqno),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_bi_threshold: {
        value: cdktf.numberToHclTerraform(this._bandwidthBiThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bandwidth_down_threshold: {
        value: cdktf.numberToHclTerraform(this._bandwidthDownThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bandwidth_up_threshold: {
        value: cdktf.numberToHclTerraform(this._bandwidthUpThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      base: {
        value: cdktf.numberToHclTerraform(this._base),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fec: {
        value: cdktf.stringToHclTerraform(this._fec),
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
      latency_threshold: {
        value: cdktf.numberToHclTerraform(this._latencyThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      packet_loss_threshold: {
        value: cdktf.numberToHclTerraform(this._packetLossThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redundant: {
        value: cdktf.numberToHclTerraform(this._redundant),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      seqno: {
        value: cdktf.numberToHclTerraform(this._seqno),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
