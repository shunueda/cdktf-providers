// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OverlayTunnelOptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable the inner-fragmentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_options#fragmentation_mode_inner OverlayTunnelOptions#fragmentation_mode_inner}
  */
  readonly fragmentationModeInner?: number;
  /**
  * MAC to be used with Gateway segment Id (MAC Address for the Gateway segment)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_options#gateway_mac OverlayTunnelOptions#gateway_mac}
  */
  readonly gatewayMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_options#id OverlayTunnelOptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Copy DSCP bits from inner IP to outer IP header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_options#ip_dscp_preserve OverlayTunnelOptions#ip_dscp_preserve}
  */
  readonly ipDscpPreserve?: number;
  /**
  * Disable Flow-ID computation for NVGRE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_options#nvgre_disable_flow_id OverlayTunnelOptions#nvgre_disable_flow_id}
  */
  readonly nvgreDisableFlowId?: number;
  /**
  * Use the lower 24-bits of the GRE key as the VSID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_options#nvgre_key_mode_lower24 OverlayTunnelOptions#nvgre_key_mode_lower24}
  */
  readonly nvgreKeyModeLower24?: number;
  /**
  * Disable TCP MSS adjustment in SYN packet for tunnels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_options#tcp_mss_adjust_disable OverlayTunnelOptions#tcp_mss_adjust_disable}
  */
  readonly tcpMssAdjustDisable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_options#uuid OverlayTunnelOptions#uuid}
  */
  readonly uuid?: string;
  /**
  * VXLAN UDP Destination Port (UDP Port Number (default 4789))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_options#vxlan_dest_port OverlayTunnelOptions#vxlan_dest_port}
  */
  readonly vxlanDestPort?: number;
  /**
  * src_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_options#src_port_range OverlayTunnelOptions#src_port_range}
  */
  readonly srcPortRange?: OverlayTunnelOptionsSrcPortRange;
}
export interface OverlayTunnelOptionsSrcPortRange {
  /**
  * Maximum Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_options#max_port OverlayTunnelOptions#max_port}
  */
  readonly maxPort?: number;
  /**
  * Minimum Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_options#min_port OverlayTunnelOptions#min_port}
  */
  readonly minPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_options#uuid OverlayTunnelOptions#uuid}
  */
  readonly uuid?: string;
}

export function overlayTunnelOptionsSrcPortRangeToTerraform(struct?: OverlayTunnelOptionsSrcPortRangeOutputReference | OverlayTunnelOptionsSrcPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_port: cdktf.numberToTerraform(struct!.maxPort),
    min_port: cdktf.numberToTerraform(struct!.minPort),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function overlayTunnelOptionsSrcPortRangeToHclTerraform(struct?: OverlayTunnelOptionsSrcPortRangeOutputReference | OverlayTunnelOptionsSrcPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_port: {
      value: cdktf.numberToHclTerraform(struct!.maxPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_port: {
      value: cdktf.numberToHclTerraform(struct!.minPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OverlayTunnelOptionsSrcPortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OverlayTunnelOptionsSrcPortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPort = this._maxPort;
    }
    if (this._minPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPort = this._minPort;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverlayTunnelOptionsSrcPortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxPort = undefined;
      this._minPort = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxPort = value.maxPort;
      this._minPort = value.minPort;
      this._uuid = value.uuid;
    }
  }

  // max_port - computed: false, optional: true, required: false
  private _maxPort?: number; 
  public get maxPort() {
    return this.getNumberAttribute('max_port');
  }
  public set maxPort(value: number) {
    this._maxPort = value;
  }
  public resetMaxPort() {
    this._maxPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPortInput() {
    return this._maxPort;
  }

  // min_port - computed: false, optional: true, required: false
  private _minPort?: number; 
  public get minPort() {
    return this.getNumberAttribute('min_port');
  }
  public set minPort(value: number) {
    this._minPort = value;
  }
  public resetMinPort() {
    this._minPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPortInput() {
    return this._minPort;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_options thunder_overlay_tunnel_options}
*/
export class OverlayTunnelOptions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_overlay_tunnel_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OverlayTunnelOptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OverlayTunnelOptions to import
  * @param importFromId The id of the existing OverlayTunnelOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OverlayTunnelOptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_overlay_tunnel_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_options thunder_overlay_tunnel_options} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OverlayTunnelOptionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OverlayTunnelOptionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_overlay_tunnel_options',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fragmentationModeInner = config.fragmentationModeInner;
    this._gatewayMac = config.gatewayMac;
    this._id = config.id;
    this._ipDscpPreserve = config.ipDscpPreserve;
    this._nvgreDisableFlowId = config.nvgreDisableFlowId;
    this._nvgreKeyModeLower24 = config.nvgreKeyModeLower24;
    this._tcpMssAdjustDisable = config.tcpMssAdjustDisable;
    this._uuid = config.uuid;
    this._vxlanDestPort = config.vxlanDestPort;
    this._srcPortRange.internalValue = config.srcPortRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fragmentation_mode_inner - computed: false, optional: true, required: false
  private _fragmentationModeInner?: number; 
  public get fragmentationModeInner() {
    return this.getNumberAttribute('fragmentation_mode_inner');
  }
  public set fragmentationModeInner(value: number) {
    this._fragmentationModeInner = value;
  }
  public resetFragmentationModeInner() {
    this._fragmentationModeInner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentationModeInnerInput() {
    return this._fragmentationModeInner;
  }

  // gateway_mac - computed: false, optional: true, required: false
  private _gatewayMac?: string; 
  public get gatewayMac() {
    return this.getStringAttribute('gateway_mac');
  }
  public set gatewayMac(value: string) {
    this._gatewayMac = value;
  }
  public resetGatewayMac() {
    this._gatewayMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayMacInput() {
    return this._gatewayMac;
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

  // ip_dscp_preserve - computed: false, optional: true, required: false
  private _ipDscpPreserve?: number; 
  public get ipDscpPreserve() {
    return this.getNumberAttribute('ip_dscp_preserve');
  }
  public set ipDscpPreserve(value: number) {
    this._ipDscpPreserve = value;
  }
  public resetIpDscpPreserve() {
    this._ipDscpPreserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDscpPreserveInput() {
    return this._ipDscpPreserve;
  }

  // nvgre_disable_flow_id - computed: false, optional: true, required: false
  private _nvgreDisableFlowId?: number; 
  public get nvgreDisableFlowId() {
    return this.getNumberAttribute('nvgre_disable_flow_id');
  }
  public set nvgreDisableFlowId(value: number) {
    this._nvgreDisableFlowId = value;
  }
  public resetNvgreDisableFlowId() {
    this._nvgreDisableFlowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvgreDisableFlowIdInput() {
    return this._nvgreDisableFlowId;
  }

  // nvgre_key_mode_lower24 - computed: false, optional: true, required: false
  private _nvgreKeyModeLower24?: number; 
  public get nvgreKeyModeLower24() {
    return this.getNumberAttribute('nvgre_key_mode_lower24');
  }
  public set nvgreKeyModeLower24(value: number) {
    this._nvgreKeyModeLower24 = value;
  }
  public resetNvgreKeyModeLower24() {
    this._nvgreKeyModeLower24 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvgreKeyModeLower24Input() {
    return this._nvgreKeyModeLower24;
  }

  // tcp_mss_adjust_disable - computed: false, optional: true, required: false
  private _tcpMssAdjustDisable?: number; 
  public get tcpMssAdjustDisable() {
    return this.getNumberAttribute('tcp_mss_adjust_disable');
  }
  public set tcpMssAdjustDisable(value: number) {
    this._tcpMssAdjustDisable = value;
  }
  public resetTcpMssAdjustDisable() {
    this._tcpMssAdjustDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssAdjustDisableInput() {
    return this._tcpMssAdjustDisable;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vxlan_dest_port - computed: false, optional: true, required: false
  private _vxlanDestPort?: number; 
  public get vxlanDestPort() {
    return this.getNumberAttribute('vxlan_dest_port');
  }
  public set vxlanDestPort(value: number) {
    this._vxlanDestPort = value;
  }
  public resetVxlanDestPort() {
    this._vxlanDestPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanDestPortInput() {
    return this._vxlanDestPort;
  }

  // src_port_range - computed: false, optional: true, required: false
  private _srcPortRange = new OverlayTunnelOptionsSrcPortRangeOutputReference(this, "src_port_range");
  public get srcPortRange() {
    return this._srcPortRange;
  }
  public putSrcPortRange(value: OverlayTunnelOptionsSrcPortRange) {
    this._srcPortRange.internalValue = value;
  }
  public resetSrcPortRange() {
    this._srcPortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortRangeInput() {
    return this._srcPortRange.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fragmentation_mode_inner: cdktf.numberToTerraform(this._fragmentationModeInner),
      gateway_mac: cdktf.stringToTerraform(this._gatewayMac),
      id: cdktf.stringToTerraform(this._id),
      ip_dscp_preserve: cdktf.numberToTerraform(this._ipDscpPreserve),
      nvgre_disable_flow_id: cdktf.numberToTerraform(this._nvgreDisableFlowId),
      nvgre_key_mode_lower24: cdktf.numberToTerraform(this._nvgreKeyModeLower24),
      tcp_mss_adjust_disable: cdktf.numberToTerraform(this._tcpMssAdjustDisable),
      uuid: cdktf.stringToTerraform(this._uuid),
      vxlan_dest_port: cdktf.numberToTerraform(this._vxlanDestPort),
      src_port_range: overlayTunnelOptionsSrcPortRangeToTerraform(this._srcPortRange.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fragmentation_mode_inner: {
        value: cdktf.numberToHclTerraform(this._fragmentationModeInner),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gateway_mac: {
        value: cdktf.stringToHclTerraform(this._gatewayMac),
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
      ip_dscp_preserve: {
        value: cdktf.numberToHclTerraform(this._ipDscpPreserve),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nvgre_disable_flow_id: {
        value: cdktf.numberToHclTerraform(this._nvgreDisableFlowId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nvgre_key_mode_lower24: {
        value: cdktf.numberToHclTerraform(this._nvgreKeyModeLower24),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_mss_adjust_disable: {
        value: cdktf.numberToHclTerraform(this._tcpMssAdjustDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vxlan_dest_port: {
        value: cdktf.numberToHclTerraform(this._vxlanDestPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_port_range: {
        value: overlayTunnelOptionsSrcPortRangeToHclTerraform(this._srcPortRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OverlayTunnelOptionsSrcPortRangeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
