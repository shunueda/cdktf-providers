// https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/data-sources/ftd_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSccfmFtdDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A human-readable name for the Cisco Secure Firewall Threat Defense (FTD). This name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/data-sources/ftd_device#name DataSccfmFtdDevice#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/data-sources/ftd_device sccfm_ftd_device}
*/
export class DataSccfmFtdDevice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sccfm_ftd_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSccfmFtdDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSccfmFtdDevice to import
  * @param importFromId The id of the existing DataSccfmFtdDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/data-sources/ftd_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSccfmFtdDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sccfm_ftd_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/data-sources/ftd_device sccfm_ftd_device} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSccfmFtdDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: DataSccfmFtdDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'sccfm_ftd_device',
      terraformGeneratorMetadata: {
        providerName: 'sccfm',
        providerVersion: '0.2.5'
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

  // access_policy_id - computed: true, optional: false, required: false
  public get accessPolicyId() {
    return this.getStringAttribute('access_policy_id');
  }

  // access_policy_name - computed: true, optional: false, required: false
  public get accessPolicyName() {
    return this.getStringAttribute('access_policy_name');
  }

  // generated_command - computed: true, optional: false, required: false
  public get generatedCommand() {
    return this.getStringAttribute('generated_command');
  }

  // grouped_labels - computed: true, optional: false, required: false
  private _groupedLabels = new cdktf.StringListMap(this, "grouped_labels");
  public get groupedLabels() {
    return this._groupedLabels;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }

  // licenses - computed: true, optional: false, required: false
  public get licenses() {
    return this.getListAttribute('licenses');
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

  // nat_id - computed: true, optional: false, required: false
  public get natId() {
    return this.getStringAttribute('nat_id');
  }

  // performance_tier - computed: true, optional: false, required: false
  public get performanceTier() {
    return this.getStringAttribute('performance_tier');
  }

  // reg_key - computed: true, optional: false, required: false
  public get regKey() {
    return this.getStringAttribute('reg_key');
  }

  // virtual - computed: true, optional: false, required: false
  public get virtual() {
    return this.getBooleanAttribute('virtual');
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
