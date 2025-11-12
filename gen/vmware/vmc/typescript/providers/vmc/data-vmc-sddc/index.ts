// https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/sddc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVmcSddcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/sddc#id DataVmcSddc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sddc ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/sddc#sddc_id DataVmcSddc#sddc_id}
  */
  readonly sddcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/sddc vmc_sddc}
*/
export class DataVmcSddc extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vmc_sddc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVmcSddc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVmcSddc to import
  * @param importFromId The id of the existing DataVmcSddc that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/sddc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVmcSddc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vmc_sddc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/sddc vmc_sddc} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVmcSddcConfig
  */
  public constructor(scope: Construct, id: string, config: DataVmcSddcConfig) {
    super(scope, id, {
      terraformResourceType: 'vmc_sddc',
      terraformGeneratorMetadata: {
        providerName: 'vmc',
        providerVersion: '1.15.5',
        providerVersionConstraint: '1.15.5'
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
    this._sddcId = config.sddcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_link_state - computed: true, optional: false, required: false
  public get accountLinkState() {
    return this.getStringAttribute('account_link_state');
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // cloud_username - computed: true, optional: false, required: false
  public get cloudUsername() {
    return this.getStringAttribute('cloud_username');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
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

  // nsxt_cloudadmin - computed: true, optional: false, required: false
  public get nsxtCloudadmin() {
    return this.getStringAttribute('nsxt_cloudadmin');
  }

  // nsxt_cloudadmin_password - computed: true, optional: false, required: false
  public get nsxtCloudadminPassword() {
    return this.getStringAttribute('nsxt_cloudadmin_password');
  }

  // nsxt_cloudaudit - computed: true, optional: false, required: false
  public get nsxtCloudaudit() {
    return this.getStringAttribute('nsxt_cloudaudit');
  }

  // nsxt_cloudaudit_password - computed: true, optional: false, required: false
  public get nsxtCloudauditPassword() {
    return this.getStringAttribute('nsxt_cloudaudit_password');
  }

  // nsxt_private_ip - computed: true, optional: false, required: false
  public get nsxtPrivateIp() {
    return this.getStringAttribute('nsxt_private_ip');
  }

  // nsxt_private_url - computed: true, optional: false, required: false
  public get nsxtPrivateUrl() {
    return this.getStringAttribute('nsxt_private_url');
  }

  // nsxt_reverse_proxy_url - computed: true, optional: false, required: false
  public get nsxtReverseProxyUrl() {
    return this.getStringAttribute('nsxt_reverse_proxy_url');
  }

  // nsxt_ui - computed: true, optional: false, required: false
  public get nsxtUi() {
    return this.getBooleanAttribute('nsxt_ui');
  }

  // num_host - computed: true, optional: false, required: false
  public get numHost() {
    return this.getNumberAttribute('num_host');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // provider_type - computed: true, optional: false, required: false
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // sddc_access_state - computed: true, optional: false, required: false
  public get sddcAccessState() {
    return this.getStringAttribute('sddc_access_state');
  }

  // sddc_id - computed: false, optional: false, required: true
  private _sddcId?: string; 
  public get sddcId() {
    return this.getStringAttribute('sddc_id');
  }
  public set sddcId(value: string) {
    this._sddcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sddcIdInput() {
    return this._sddcId;
  }

  // sddc_name - computed: true, optional: false, required: false
  public get sddcName() {
    return this.getStringAttribute('sddc_name');
  }

  // sddc_state - computed: true, optional: false, required: false
  public get sddcState() {
    return this.getStringAttribute('sddc_state');
  }

  // sddc_type - computed: true, optional: false, required: false
  public get sddcType() {
    return this.getStringAttribute('sddc_type');
  }

  // skip_creating_vxlan - computed: true, optional: false, required: false
  public get skipCreatingVxlan() {
    return this.getBooleanAttribute('skip_creating_vxlan');
  }

  // sso_domain - computed: true, optional: false, required: false
  public get ssoDomain() {
    return this.getStringAttribute('sso_domain');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // updated_by_user_id - computed: true, optional: false, required: false
  public get updatedByUserId() {
    return this.getStringAttribute('updated_by_user_id');
  }

  // updated_by_user_name - computed: true, optional: false, required: false
  public get updatedByUserName() {
    return this.getStringAttribute('updated_by_user_name');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // vc_url - computed: true, optional: false, required: false
  public get vcUrl() {
    return this.getStringAttribute('vc_url');
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
      id: cdktf.stringToTerraform(this._id),
      sddc_id: cdktf.stringToTerraform(this._sddcId),
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
      sddc_id: {
        value: cdktf.stringToHclTerraform(this._sddcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
