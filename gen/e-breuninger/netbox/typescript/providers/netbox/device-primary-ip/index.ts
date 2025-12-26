// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device_primary_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevicePrimaryIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device_primary_ip#device_id DevicePrimaryIp#device_id}
  */
  readonly deviceId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device_primary_ip#id DevicePrimaryIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device_primary_ip#ip_address_id DevicePrimaryIp#ip_address_id}
  */
  readonly ipAddressId: number;
  /**
  * Defaults to `4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device_primary_ip#ip_address_version DevicePrimaryIp#ip_address_version}
  */
  readonly ipAddressVersion?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device_primary_ip netbox_device_primary_ip}
*/
export class DevicePrimaryIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_device_primary_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DevicePrimaryIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevicePrimaryIp to import
  * @param importFromId The id of the existing DevicePrimaryIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device_primary_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevicePrimaryIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_device_primary_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device_primary_ip netbox_device_primary_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevicePrimaryIpConfig
  */
  public constructor(scope: Construct, id: string, config: DevicePrimaryIpConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_device_primary_ip',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '5.0.1',
        providerVersionConstraint: '5.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceId = config.deviceId;
    this._id = config.id;
    this._ipAddressId = config.ipAddressId;
    this._ipAddressVersion = config.ipAddressVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
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

  // ip_address_id - computed: false, optional: false, required: true
  private _ipAddressId?: number; 
  public get ipAddressId() {
    return this.getNumberAttribute('ip_address_id');
  }
  public set ipAddressId(value: number) {
    this._ipAddressId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressIdInput() {
    return this._ipAddressId;
  }

  // ip_address_version - computed: false, optional: true, required: false
  private _ipAddressVersion?: number; 
  public get ipAddressVersion() {
    return this.getNumberAttribute('ip_address_version');
  }
  public set ipAddressVersion(value: number) {
    this._ipAddressVersion = value;
  }
  public resetIpAddressVersion() {
    this._ipAddressVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressVersionInput() {
    return this._ipAddressVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_id: cdktf.numberToTerraform(this._deviceId),
      id: cdktf.stringToTerraform(this._id),
      ip_address_id: cdktf.numberToTerraform(this._ipAddressId),
      ip_address_version: cdktf.numberToTerraform(this._ipAddressVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_id: {
        value: cdktf.numberToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address_id: {
        value: cdktf.numberToHclTerraform(this._ipAddressId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_address_version: {
        value: cdktf.numberToHclTerraform(this._ipAddressVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
