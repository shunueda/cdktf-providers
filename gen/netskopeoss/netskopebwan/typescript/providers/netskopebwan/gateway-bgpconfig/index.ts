// https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_bgpconfig
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayBgpconfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_bgpconfig#bfd_interval GatewayBgpconfig#bfd_interval}
  */
  readonly bfdInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_bgpconfig#bfd_multiplier GatewayBgpconfig#bfd_multiplier}
  */
  readonly bfdMultiplier?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_bgpconfig#bfd_recv_interval GatewayBgpconfig#bfd_recv_interval}
  */
  readonly bfdRecvInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_bgpconfig#gateway_id GatewayBgpconfig#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_bgpconfig#id GatewayBgpconfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_bgpconfig#is_bfd_enabled GatewayBgpconfig#is_bfd_enabled}
  */
  readonly isBfdEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_bgpconfig#local_as GatewayBgpconfig#local_as}
  */
  readonly localAs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_bgpconfig#name GatewayBgpconfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_bgpconfig#neighbor GatewayBgpconfig#neighbor}
  */
  readonly neighbor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_bgpconfig#remote_as GatewayBgpconfig#remote_as}
  */
  readonly remoteAs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_bgpconfig#router_id GatewayBgpconfig#router_id}
  */
  readonly routerId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_bgpconfig netskopebwan_gateway_bgpconfig}
*/
export class GatewayBgpconfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskopebwan_gateway_bgpconfig";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayBgpconfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayBgpconfig to import
  * @param importFromId The id of the existing GatewayBgpconfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_bgpconfig#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayBgpconfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskopebwan_gateway_bgpconfig", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_bgpconfig netskopebwan_gateway_bgpconfig} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayBgpconfigConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayBgpconfigConfig) {
    super(scope, id, {
      terraformResourceType: 'netskopebwan_gateway_bgpconfig',
      terraformGeneratorMetadata: {
        providerName: 'netskopebwan',
        providerVersion: '0.0.2',
        providerVersionConstraint: '0.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bfdInterval = config.bfdInterval;
    this._bfdMultiplier = config.bfdMultiplier;
    this._bfdRecvInterval = config.bfdRecvInterval;
    this._gatewayId = config.gatewayId;
    this._id = config.id;
    this._isBfdEnabled = config.isBfdEnabled;
    this._localAs = config.localAs;
    this._name = config.name;
    this._neighbor = config.neighbor;
    this._remoteAs = config.remoteAs;
    this._routerId = config.routerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bfd_interval - computed: true, optional: true, required: false
  private _bfdInterval?: number; 
  public get bfdInterval() {
    return this.getNumberAttribute('bfd_interval');
  }
  public set bfdInterval(value: number) {
    this._bfdInterval = value;
  }
  public resetBfdInterval() {
    this._bfdInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdIntervalInput() {
    return this._bfdInterval;
  }

  // bfd_multiplier - computed: true, optional: true, required: false
  private _bfdMultiplier?: number; 
  public get bfdMultiplier() {
    return this.getNumberAttribute('bfd_multiplier');
  }
  public set bfdMultiplier(value: number) {
    this._bfdMultiplier = value;
  }
  public resetBfdMultiplier() {
    this._bfdMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdMultiplierInput() {
    return this._bfdMultiplier;
  }

  // bfd_recv_interval - computed: true, optional: true, required: false
  private _bfdRecvInterval?: number; 
  public get bfdRecvInterval() {
    return this.getNumberAttribute('bfd_recv_interval');
  }
  public set bfdRecvInterval(value: number) {
    this._bfdRecvInterval = value;
  }
  public resetBfdRecvInterval() {
    this._bfdRecvInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdRecvIntervalInput() {
    return this._bfdRecvInterval;
  }

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
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

  // is_bfd_enabled - computed: true, optional: true, required: false
  private _isBfdEnabled?: boolean | cdktf.IResolvable; 
  public get isBfdEnabled() {
    return this.getBooleanAttribute('is_bfd_enabled');
  }
  public set isBfdEnabled(value: boolean | cdktf.IResolvable) {
    this._isBfdEnabled = value;
  }
  public resetIsBfdEnabled() {
    this._isBfdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBfdEnabledInput() {
    return this._isBfdEnabled;
  }

  // local_as - computed: true, optional: true, required: false
  private _localAs?: number; 
  public get localAs() {
    return this.getNumberAttribute('local_as');
  }
  public set localAs(value: number) {
    this._localAs = value;
  }
  public resetLocalAs() {
    this._localAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsInput() {
    return this._localAs;
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

  // neighbor - computed: false, optional: false, required: true
  private _neighbor?: string; 
  public get neighbor() {
    return this.getStringAttribute('neighbor');
  }
  public set neighbor(value: string) {
    this._neighbor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor;
  }

  // remote_as - computed: false, optional: false, required: true
  private _remoteAs?: number; 
  public get remoteAs() {
    return this.getNumberAttribute('remote_as');
  }
  public set remoteAs(value: number) {
    this._remoteAs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsInput() {
    return this._remoteAs;
  }

  // router_id - computed: true, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bfd_interval: cdktf.numberToTerraform(this._bfdInterval),
      bfd_multiplier: cdktf.numberToTerraform(this._bfdMultiplier),
      bfd_recv_interval: cdktf.numberToTerraform(this._bfdRecvInterval),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      id: cdktf.stringToTerraform(this._id),
      is_bfd_enabled: cdktf.booleanToTerraform(this._isBfdEnabled),
      local_as: cdktf.numberToTerraform(this._localAs),
      name: cdktf.stringToTerraform(this._name),
      neighbor: cdktf.stringToTerraform(this._neighbor),
      remote_as: cdktf.numberToTerraform(this._remoteAs),
      router_id: cdktf.stringToTerraform(this._routerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bfd_interval: {
        value: cdktf.numberToHclTerraform(this._bfdInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_multiplier: {
        value: cdktf.numberToHclTerraform(this._bfdMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_recv_interval: {
        value: cdktf.numberToHclTerraform(this._bfdRecvInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
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
      is_bfd_enabled: {
        value: cdktf.booleanToHclTerraform(this._isBfdEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_as: {
        value: cdktf.numberToHclTerraform(this._localAs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neighbor: {
        value: cdktf.stringToHclTerraform(this._neighbor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_as: {
        value: cdktf.numberToHclTerraform(this._remoteAs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
