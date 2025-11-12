// https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/data-sources/asa_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSccfmAsaDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The human-readable name of the device. This is the name displayed on the Firewall Security Devices page on Security Cloud Control. Device names are unique across a SCC Firewall Manager tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/data-sources/asa_device#name DataSccfmAsaDevice#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/data-sources/asa_device sccfm_asa_device}
*/
export class DataSccfmAsaDevice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sccfm_asa_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSccfmAsaDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSccfmAsaDevice to import
  * @param importFromId The id of the existing DataSccfmAsaDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/data-sources/asa_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSccfmAsaDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sccfm_asa_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/data-sources/asa_device sccfm_asa_device} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSccfmAsaDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: DataSccfmAsaDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'sccfm_asa_device',
      terraformGeneratorMetadata: {
        providerName: 'sccfm',
        providerVersion: '0.2.5',
        providerVersionConstraint: '0.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connector_type - computed: true, optional: false, required: false
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }

  // grouped_labels - computed: true, optional: false, required: false
  private _groupedLabels = new cdktf.StringListMap(this, "grouped_labels");
  public get groupedLabels() {
    return this._groupedLabels;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_certificate - computed: true, optional: false, required: false
  public get ignoreCertificate() {
    return this.getBooleanAttribute('ignore_certificate');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getListAttribute('labels');
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

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // sdc_name - computed: true, optional: false, required: false
  public get sdcName() {
    return this.getStringAttribute('sdc_name');
  }

  // socket_address - computed: true, optional: false, required: false
  public get socketAddress() {
    return this.getStringAttribute('socket_address');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
