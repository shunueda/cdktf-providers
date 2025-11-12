// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_bgp_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcBgpInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * BGP Autonomous System Number (integer representation supports only). Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_bgp_instance#asn DcBgpInstance#asn}
  */
  readonly asn: number;
  /**
  * BGP Router ID (IP address that represent BGP router in BGP network). Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_bgp_instance#bgp_router_id DcBgpInstance#bgp_router_id}
  */
  readonly bgpRouterId: string;
  /**
  * Direct Connect Router ID to attach. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_bgp_instance#dc_router_id DcBgpInstance#dc_router_id}
  */
  readonly dcRouterId: string;
  /**
  * Description of the router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_bgp_instance#description DcBgpInstance#description}
  */
  readonly description?: string;
  /**
  * Enable BGP ECMP behaviour on router. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_bgp_instance#ecmp_enabled DcBgpInstance#ecmp_enabled}
  */
  readonly ecmpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable item. Default is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_bgp_instance#enabled DcBgpInstance#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Enable BGP Graceful Restart feature. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_bgp_instance#graceful_restart DcBgpInstance#graceful_restart}
  */
  readonly gracefulRestart?: boolean | cdktf.IResolvable;
  /**
  * Enable BGP Long Lived Graceful Restart feature. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_bgp_instance#long_lived_graceful_restart DcBgpInstance#long_lived_graceful_restart}
  */
  readonly longLivedGracefulRestart?: boolean | cdktf.IResolvable;
  /**
  * Name of the router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_bgp_instance#name DcBgpInstance#name}
  */
  readonly name?: string;
  /**
  * The `region` to fetch availability zones from, defaults to the provider's `region`. Changing this creates a new bgp_instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_bgp_instance#region DcBgpInstance#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_bgp_instance vkcs_dc_bgp_instance}
*/
export class DcBgpInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_dc_bgp_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcBgpInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcBgpInstance to import
  * @param importFromId The id of the existing DcBgpInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_bgp_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcBgpInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_dc_bgp_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_bgp_instance vkcs_dc_bgp_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcBgpInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DcBgpInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'vkcs_dc_bgp_instance',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asn = config.asn;
    this._bgpRouterId = config.bgpRouterId;
    this._dcRouterId = config.dcRouterId;
    this._description = config.description;
    this._ecmpEnabled = config.ecmpEnabled;
    this._enabled = config.enabled;
    this._gracefulRestart = config.gracefulRestart;
    this._longLivedGracefulRestart = config.longLivedGracefulRestart;
    this._name = config.name;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asn - computed: false, optional: false, required: true
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // bgp_router_id - computed: false, optional: false, required: true
  private _bgpRouterId?: string; 
  public get bgpRouterId() {
    return this.getStringAttribute('bgp_router_id');
  }
  public set bgpRouterId(value: string) {
    this._bgpRouterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRouterIdInput() {
    return this._bgpRouterId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dc_router_id - computed: false, optional: false, required: true
  private _dcRouterId?: string; 
  public get dcRouterId() {
    return this.getStringAttribute('dc_router_id');
  }
  public set dcRouterId(value: string) {
    this._dcRouterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dcRouterIdInput() {
    return this._dcRouterId;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // ecmp_enabled - computed: true, optional: true, required: false
  private _ecmpEnabled?: boolean | cdktf.IResolvable; 
  public get ecmpEnabled() {
    return this.getBooleanAttribute('ecmp_enabled');
  }
  public set ecmpEnabled(value: boolean | cdktf.IResolvable) {
    this._ecmpEnabled = value;
  }
  public resetEcmpEnabled() {
    this._ecmpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmpEnabledInput() {
    return this._ecmpEnabled;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // graceful_restart - computed: true, optional: true, required: false
  private _gracefulRestart?: boolean | cdktf.IResolvable; 
  public get gracefulRestart() {
    return this.getBooleanAttribute('graceful_restart');
  }
  public set gracefulRestart(value: boolean | cdktf.IResolvable) {
    this._gracefulRestart = value;
  }
  public resetGracefulRestart() {
    this._gracefulRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartInput() {
    return this._gracefulRestart;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // long_lived_graceful_restart - computed: true, optional: true, required: false
  private _longLivedGracefulRestart?: boolean | cdktf.IResolvable; 
  public get longLivedGracefulRestart() {
    return this.getBooleanAttribute('long_lived_graceful_restart');
  }
  public set longLivedGracefulRestart(value: boolean | cdktf.IResolvable) {
    this._longLivedGracefulRestart = value;
  }
  public resetLongLivedGracefulRestart() {
    this._longLivedGracefulRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longLivedGracefulRestartInput() {
    return this._longLivedGracefulRestart;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asn: cdktf.numberToTerraform(this._asn),
      bgp_router_id: cdktf.stringToTerraform(this._bgpRouterId),
      dc_router_id: cdktf.stringToTerraform(this._dcRouterId),
      description: cdktf.stringToTerraform(this._description),
      ecmp_enabled: cdktf.booleanToTerraform(this._ecmpEnabled),
      enabled: cdktf.booleanToTerraform(this._enabled),
      graceful_restart: cdktf.booleanToTerraform(this._gracefulRestart),
      long_lived_graceful_restart: cdktf.booleanToTerraform(this._longLivedGracefulRestart),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asn: {
        value: cdktf.numberToHclTerraform(this._asn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgp_router_id: {
        value: cdktf.stringToHclTerraform(this._bgpRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dc_router_id: {
        value: cdktf.stringToHclTerraform(this._dcRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecmp_enabled: {
        value: cdktf.booleanToHclTerraform(this._ecmpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      graceful_restart: {
        value: cdktf.booleanToHclTerraform(this._gracefulRestart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      long_lived_graceful_restart: {
        value: cdktf.booleanToHclTerraform(this._longLivedGracefulRestart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
