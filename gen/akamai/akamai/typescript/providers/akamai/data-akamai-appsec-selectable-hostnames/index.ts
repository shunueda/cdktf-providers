// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_selectable_hostnames
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiAppsecSelectableHostnamesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to return names of hosts selected in production
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_selectable_hostnames#active_in_production DataAkamaiAppsecSelectableHostnames#active_in_production}
  */
  readonly activeInProduction?: boolean | cdktf.IResolvable;
  /**
  * Whether to return names of hosts selected in staging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_selectable_hostnames#active_in_staging DataAkamaiAppsecSelectableHostnames#active_in_staging}
  */
  readonly activeInStaging?: boolean | cdktf.IResolvable;
  /**
  * Unique identifier of the security configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_selectable_hostnames#config_id DataAkamaiAppsecSelectableHostnames#config_id}
  */
  readonly configId?: number;
  /**
  * Unique identifier of an Akamai contract
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_selectable_hostnames#contractid DataAkamaiAppsecSelectableHostnames#contractid}
  */
  readonly contractid?: string;
  /**
  * Unique identifier of a contract group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_selectable_hostnames#groupid DataAkamaiAppsecSelectableHostnames#groupid}
  */
  readonly groupid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_selectable_hostnames#id DataAkamaiAppsecSelectableHostnames#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_selectable_hostnames akamai_appsec_selectable_hostnames}
*/
export class DataAkamaiAppsecSelectableHostnames extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_appsec_selectable_hostnames";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiAppsecSelectableHostnames resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiAppsecSelectableHostnames to import
  * @param importFromId The id of the existing DataAkamaiAppsecSelectableHostnames that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_selectable_hostnames#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiAppsecSelectableHostnames to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_appsec_selectable_hostnames", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_selectable_hostnames akamai_appsec_selectable_hostnames} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiAppsecSelectableHostnamesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiAppsecSelectableHostnamesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akamai_appsec_selectable_hostnames',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeInProduction = config.activeInProduction;
    this._activeInStaging = config.activeInStaging;
    this._configId = config.configId;
    this._contractid = config.contractid;
    this._groupid = config.groupid;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_in_production - computed: false, optional: true, required: false
  private _activeInProduction?: boolean | cdktf.IResolvable; 
  public get activeInProduction() {
    return this.getBooleanAttribute('active_in_production');
  }
  public set activeInProduction(value: boolean | cdktf.IResolvable) {
    this._activeInProduction = value;
  }
  public resetActiveInProduction() {
    this._activeInProduction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInProductionInput() {
    return this._activeInProduction;
  }

  // active_in_staging - computed: false, optional: true, required: false
  private _activeInStaging?: boolean | cdktf.IResolvable; 
  public get activeInStaging() {
    return this.getBooleanAttribute('active_in_staging');
  }
  public set activeInStaging(value: boolean | cdktf.IResolvable) {
    this._activeInStaging = value;
  }
  public resetActiveInStaging() {
    this._activeInStaging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInStagingInput() {
    return this._activeInStaging;
  }

  // config_id - computed: false, optional: true, required: false
  private _configId?: number; 
  public get configId() {
    return this.getNumberAttribute('config_id');
  }
  public set configId(value: number) {
    this._configId = value;
  }
  public resetConfigId() {
    this._configId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // contractid - computed: false, optional: true, required: false
  private _contractid?: string; 
  public get contractid() {
    return this.getStringAttribute('contractid');
  }
  public set contractid(value: string) {
    this._contractid = value;
  }
  public resetContractid() {
    this._contractid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractidInput() {
    return this._contractid;
  }

  // groupid - computed: false, optional: true, required: false
  private _groupid?: number; 
  public get groupid() {
    return this.getNumberAttribute('groupid');
  }
  public set groupid(value: number) {
    this._groupid = value;
  }
  public resetGroupid() {
    this._groupid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupidInput() {
    return this._groupid;
  }

  // hostnames - computed: true, optional: false, required: false
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }

  // hostnames_json - computed: true, optional: false, required: false
  public get hostnamesJson() {
    return this.getStringAttribute('hostnames_json');
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

  // output_text - computed: true, optional: false, required: false
  public get outputText() {
    return this.getStringAttribute('output_text');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_in_production: cdktf.booleanToTerraform(this._activeInProduction),
      active_in_staging: cdktf.booleanToTerraform(this._activeInStaging),
      config_id: cdktf.numberToTerraform(this._configId),
      contractid: cdktf.stringToTerraform(this._contractid),
      groupid: cdktf.numberToTerraform(this._groupid),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_in_production: {
        value: cdktf.booleanToHclTerraform(this._activeInProduction),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      active_in_staging: {
        value: cdktf.booleanToHclTerraform(this._activeInStaging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config_id: {
        value: cdktf.numberToHclTerraform(this._configId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      contractid: {
        value: cdktf.stringToHclTerraform(this._contractid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groupid: {
        value: cdktf.numberToHclTerraform(this._groupid),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
