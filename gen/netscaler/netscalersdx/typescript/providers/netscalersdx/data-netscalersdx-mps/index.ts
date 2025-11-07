// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/mps
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetscalersdxMpsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/mps#id DataNetscalersdxMps#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/mps netscalersdx_mps}
*/
export class DataNetscalersdxMps extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_mps";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetscalersdxMps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetscalersdxMps to import
  * @param importFromId The id of the existing DataNetscalersdxMps that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/mps#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetscalersdxMps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_mps", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/mps netscalersdx_mps} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetscalersdxMpsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetscalersdxMpsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_mps',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_motd - computed: true, optional: false, required: false
  public get configMotd() {
    return this.getBooleanAttribute('config_motd');
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // hist_mig_inprog - computed: true, optional: false, required: false
  public get histMigInprog() {
    return this.getBooleanAttribute('hist_mig_inprog');
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

  // is_cloud - computed: true, optional: false, required: false
  public get isCloud() {
    return this.getBooleanAttribute('is_cloud');
  }

  // is_container - computed: true, optional: false, required: false
  public get isContainer() {
    return this.getBooleanAttribute('is_container');
  }

  // is_member_of_default_group - computed: true, optional: false, required: false
  public get isMemberOfDefaultGroup() {
    return this.getBooleanAttribute('is_member_of_default_group');
  }

  // is_passive - computed: true, optional: false, required: false
  public get isPassive() {
    return this.getBooleanAttribute('is_passive');
  }

  // is_thirdparty_vm_supported - computed: true, optional: false, required: false
  public get isThirdpartyVmSupported() {
    return this.getBooleanAttribute('is_thirdparty_vm_supported');
  }

  // maps_apikey - computed: true, optional: false, required: false
  public get mapsApikey() {
    return this.getStringAttribute('maps_apikey');
  }

  // motd - computed: true, optional: false, required: false
  public get motd() {
    return this.getStringAttribute('motd');
  }

  // privilege_feature - computed: true, optional: false, required: false
  public get privilegeFeature() {
    return this.getStringAttribute('privilege_feature');
  }

  // upgrade_agent_version - computed: true, optional: false, required: false
  public get upgradeAgentVersion() {
    return this.getStringAttribute('upgrade_agent_version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
