// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/license
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeLicenseConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/license#device DataIosxeLicense#device}
  */
  readonly device?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/license iosxe_license}
*/
export class DataIosxeLicense extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_license";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeLicense resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeLicense to import
  * @param importFromId The id of the existing DataIosxeLicense that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/license#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeLicense to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_license", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/license iosxe_license} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeLicenseConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeLicenseConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_license',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.4',
        providerVersionConstraint: '0.14.4'
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

  // accept_agreement - computed: true, optional: false, required: false
  public get acceptAgreement() {
    return this.getBooleanAttribute('accept_agreement');
  }

  // accept_end - computed: true, optional: false, required: false
  public get acceptEnd() {
    return this.getBooleanAttribute('accept_end');
  }

  // accept_user - computed: true, optional: false, required: false
  public get acceptUser() {
    return this.getBooleanAttribute('accept_user');
  }

  // boot_level_network_advantage - computed: true, optional: false, required: false
  public get bootLevelNetworkAdvantage() {
    return this.getBooleanAttribute('boot_level_network_advantage');
  }

  // boot_level_network_advantage_addon - computed: true, optional: false, required: false
  public get bootLevelNetworkAdvantageAddon() {
    return this.getStringAttribute('boot_level_network_advantage_addon');
  }

  // boot_level_network_essentials - computed: true, optional: false, required: false
  public get bootLevelNetworkEssentials() {
    return this.getBooleanAttribute('boot_level_network_essentials');
  }

  // boot_level_network_essentials_addon - computed: true, optional: false, required: false
  public get bootLevelNetworkEssentialsAddon() {
    return this.getStringAttribute('boot_level_network_essentials_addon');
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

  // feature_name - computed: true, optional: false, required: false
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }

  // feature_port_b_6xonegig - computed: true, optional: false, required: false
  public get featurePortB6Xonegig() {
    return this.getNumberAttribute('feature_port_b_6xonegig');
  }

  // feature_port_bulk - computed: true, optional: false, required: false
  public get featurePortBulk() {
    return this.getBooleanAttribute('feature_port_bulk');
  }

  // feature_port_onegig - computed: true, optional: false, required: false
  public get featurePortOnegig() {
    return this.getNumberAttribute('feature_port_onegig');
  }

  // feature_port_tengig - computed: true, optional: false, required: false
  public get featurePortTengig() {
    return this.getNumberAttribute('feature_port_tengig');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // smart_transport_type - computed: true, optional: false, required: false
  public get smartTransportType() {
    return this.getStringAttribute('smart_transport_type');
  }

  // smart_url_cslu - computed: true, optional: false, required: false
  public get smartUrlCslu() {
    return this.getStringAttribute('smart_url_cslu');
  }

  // udi_pid - computed: true, optional: false, required: false
  public get udiPid() {
    return this.getStringAttribute('udi_pid');
  }

  // udi_sn - computed: true, optional: false, required: false
  public get udiSn() {
    return this.getStringAttribute('udi_sn');
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
