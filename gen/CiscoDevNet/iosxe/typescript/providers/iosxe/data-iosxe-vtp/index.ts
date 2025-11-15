// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/vtp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeVtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/vtp#device DataIosxeVtp#device}
  */
  readonly device?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/vtp iosxe_vtp}
*/
export class DataIosxeVtp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_vtp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeVtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeVtp to import
  * @param importFromId The id of the existing DataIosxeVtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/vtp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeVtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_vtp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/vtp iosxe_vtp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeVtpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeVtpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_vtp',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.2',
        providerVersionConstraint: '0.10.2'
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

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // file - computed: true, optional: false, required: false
  public get file() {
    return this.getStringAttribute('file');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // interface_only - computed: true, optional: false, required: false
  public get interfaceOnly() {
    return this.getBooleanAttribute('interface_only');
  }

  // mode_client - computed: true, optional: false, required: false
  public get modeClient() {
    return this.getBooleanAttribute('mode_client');
  }

  // mode_client_mst - computed: true, optional: false, required: false
  public get modeClientMst() {
    return this.getBooleanAttribute('mode_client_mst');
  }

  // mode_client_unknown - computed: true, optional: false, required: false
  public get modeClientUnknown() {
    return this.getBooleanAttribute('mode_client_unknown');
  }

  // mode_client_vlan - computed: true, optional: false, required: false
  public get modeClientVlan() {
    return this.getBooleanAttribute('mode_client_vlan');
  }

  // mode_off - computed: true, optional: false, required: false
  public get modeOff() {
    return this.getBooleanAttribute('mode_off');
  }

  // mode_off_mst - computed: true, optional: false, required: false
  public get modeOffMst() {
    return this.getBooleanAttribute('mode_off_mst');
  }

  // mode_off_unknown - computed: true, optional: false, required: false
  public get modeOffUnknown() {
    return this.getBooleanAttribute('mode_off_unknown');
  }

  // mode_off_vlan - computed: true, optional: false, required: false
  public get modeOffVlan() {
    return this.getBooleanAttribute('mode_off_vlan');
  }

  // mode_server - computed: true, optional: false, required: false
  public get modeServer() {
    return this.getBooleanAttribute('mode_server');
  }

  // mode_server_mst - computed: true, optional: false, required: false
  public get modeServerMst() {
    return this.getBooleanAttribute('mode_server_mst');
  }

  // mode_server_unknown - computed: true, optional: false, required: false
  public get modeServerUnknown() {
    return this.getBooleanAttribute('mode_server_unknown');
  }

  // mode_server_vlan - computed: true, optional: false, required: false
  public get modeServerVlan() {
    return this.getBooleanAttribute('mode_server_vlan');
  }

  // mode_transparent - computed: true, optional: false, required: false
  public get modeTransparent() {
    return this.getBooleanAttribute('mode_transparent');
  }

  // mode_transparent_mst - computed: true, optional: false, required: false
  public get modeTransparentMst() {
    return this.getBooleanAttribute('mode_transparent_mst');
  }

  // mode_transparent_unknown - computed: true, optional: false, required: false
  public get modeTransparentUnknown() {
    return this.getBooleanAttribute('mode_transparent_unknown');
  }

  // mode_transparent_vlan - computed: true, optional: false, required: false
  public get modeTransparentVlan() {
    return this.getBooleanAttribute('mode_transparent_vlan');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_hidden - computed: true, optional: false, required: false
  public get passwordHidden() {
    return this.getBooleanAttribute('password_hidden');
  }

  // password_secret - computed: true, optional: false, required: false
  public get passwordSecret() {
    return this.getBooleanAttribute('password_secret');
  }

  // pruning - computed: true, optional: false, required: false
  public get pruning() {
    return this.getBooleanAttribute('pruning');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
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
