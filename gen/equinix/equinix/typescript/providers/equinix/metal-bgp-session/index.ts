// https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_bgp_session
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetalBgpSessionConfig extends cdktf.TerraformMetaArguments {
  /**
  * ipv4 or ipv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_bgp_session#address_family MetalBgpSession#address_family}
  */
  readonly addressFamily: string;
  /**
  * Boolean flag to set the default route policy. False by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_bgp_session#default_route MetalBgpSession#default_route}
  */
  readonly defaultRoute?: boolean | cdktf.IResolvable;
  /**
  * ID of device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_bgp_session#device_id MetalBgpSession#device_id}
  */
  readonly deviceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_bgp_session#id MetalBgpSession#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_bgp_session equinix_metal_bgp_session}
*/
export class MetalBgpSession extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_metal_bgp_session";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetalBgpSession resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetalBgpSession to import
  * @param importFromId The id of the existing MetalBgpSession that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_bgp_session#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetalBgpSession to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_metal_bgp_session", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_bgp_session equinix_metal_bgp_session} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetalBgpSessionConfig
  */
  public constructor(scope: Construct, id: string, config: MetalBgpSessionConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_metal_bgp_session',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.12.0',
        providerVersionConstraint: '4.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressFamily = config.addressFamily;
    this._defaultRoute = config.defaultRoute;
    this._deviceId = config.deviceId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_family - computed: false, optional: false, required: true
  private _addressFamily?: string; 
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily;
  }

  // default_route - computed: false, optional: true, required: false
  private _defaultRoute?: boolean | cdktf.IResolvable; 
  public get defaultRoute() {
    return this.getBooleanAttribute('default_route');
  }
  public set defaultRoute(value: boolean | cdktf.IResolvable) {
    this._defaultRoute = value;
  }
  public resetDefaultRoute() {
    this._defaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteInput() {
    return this._defaultRoute;
  }

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_family: cdktf.stringToTerraform(this._addressFamily),
      default_route: cdktf.booleanToTerraform(this._defaultRoute),
      device_id: cdktf.stringToTerraform(this._deviceId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_family: {
        value: cdktf.stringToHclTerraform(this._addressFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_route: {
        value: cdktf.booleanToHclTerraform(this._defaultRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
