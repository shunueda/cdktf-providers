// https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/region_enumeration_vmc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVraRegionEnumerationVmcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to accept self signed certificate when connecting to the vCenter Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/region_enumeration_vmc#accept_self_signed_cert DataVraRegionEnumerationVmc#accept_self_signed_cert}
  */
  readonly acceptSelfSignedCert?: boolean | cdktf.IResolvable;
  /**
  * VMC API access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/region_enumeration_vmc#api_token DataVraRegionEnumerationVmc#api_token}
  */
  readonly apiToken: string;
  /**
  * Identifier of a data collector vm deployed in the on premise infrastructure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/region_enumeration_vmc#dc_id DataVraRegionEnumerationVmc#dc_id}
  */
  readonly dcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/region_enumeration_vmc#id DataVraRegionEnumerationVmc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IP address of the NSX Manager server in the specified SDDC / FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/region_enumeration_vmc#nsx_hostname DataVraRegionEnumerationVmc#nsx_hostname}
  */
  readonly nsxHostname: string;
  /**
  * Identifier of the on-premise SDDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/region_enumeration_vmc#sddc_name DataVraRegionEnumerationVmc#sddc_name}
  */
  readonly sddcName: string;
  /**
  * IP address or FQDN of the vCenter Server in the specified SDDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/region_enumeration_vmc#vcenter_hostname DataVraRegionEnumerationVmc#vcenter_hostname}
  */
  readonly vcenterHostname: string;
  /**
  * Password of the vCenter Server in the specified SDDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/region_enumeration_vmc#vcenter_password DataVraRegionEnumerationVmc#vcenter_password}
  */
  readonly vcenterPassword: string;
  /**
  * Username of the vCenter Server in the specified SDDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/region_enumeration_vmc#vcenter_username DataVraRegionEnumerationVmc#vcenter_username}
  */
  readonly vcenterUsername: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/region_enumeration_vmc vra_region_enumeration_vmc}
*/
export class DataVraRegionEnumerationVmc extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vra_region_enumeration_vmc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVraRegionEnumerationVmc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVraRegionEnumerationVmc to import
  * @param importFromId The id of the existing DataVraRegionEnumerationVmc that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/region_enumeration_vmc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVraRegionEnumerationVmc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vra_region_enumeration_vmc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/region_enumeration_vmc vra_region_enumeration_vmc} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVraRegionEnumerationVmcConfig
  */
  public constructor(scope: Construct, id: string, config: DataVraRegionEnumerationVmcConfig) {
    super(scope, id, {
      terraformResourceType: 'vra_region_enumeration_vmc',
      terraformGeneratorMetadata: {
        providerName: 'vra',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptSelfSignedCert = config.acceptSelfSignedCert;
    this._apiToken = config.apiToken;
    this._dcId = config.dcId;
    this._id = config.id;
    this._nsxHostname = config.nsxHostname;
    this._sddcName = config.sddcName;
    this._vcenterHostname = config.vcenterHostname;
    this._vcenterPassword = config.vcenterPassword;
    this._vcenterUsername = config.vcenterUsername;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_self_signed_cert - computed: false, optional: true, required: false
  private _acceptSelfSignedCert?: boolean | cdktf.IResolvable; 
  public get acceptSelfSignedCert() {
    return this.getBooleanAttribute('accept_self_signed_cert');
  }
  public set acceptSelfSignedCert(value: boolean | cdktf.IResolvable) {
    this._acceptSelfSignedCert = value;
  }
  public resetAcceptSelfSignedCert() {
    this._acceptSelfSignedCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptSelfSignedCertInput() {
    return this._acceptSelfSignedCert;
  }

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // dc_id - computed: false, optional: true, required: false
  private _dcId?: string; 
  public get dcId() {
    return this.getStringAttribute('dc_id');
  }
  public set dcId(value: string) {
    this._dcId = value;
  }
  public resetDcId() {
    this._dcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcIdInput() {
    return this._dcId;
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

  // nsx_hostname - computed: false, optional: false, required: true
  private _nsxHostname?: string; 
  public get nsxHostname() {
    return this.getStringAttribute('nsx_hostname');
  }
  public set nsxHostname(value: string) {
    this._nsxHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxHostnameInput() {
    return this._nsxHostname;
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }

  // sddc_name - computed: false, optional: false, required: true
  private _sddcName?: string; 
  public get sddcName() {
    return this.getStringAttribute('sddc_name');
  }
  public set sddcName(value: string) {
    this._sddcName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sddcNameInput() {
    return this._sddcName;
  }

  // vcenter_hostname - computed: false, optional: false, required: true
  private _vcenterHostname?: string; 
  public get vcenterHostname() {
    return this.getStringAttribute('vcenter_hostname');
  }
  public set vcenterHostname(value: string) {
    this._vcenterHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterHostnameInput() {
    return this._vcenterHostname;
  }

  // vcenter_password - computed: false, optional: false, required: true
  private _vcenterPassword?: string; 
  public get vcenterPassword() {
    return this.getStringAttribute('vcenter_password');
  }
  public set vcenterPassword(value: string) {
    this._vcenterPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterPasswordInput() {
    return this._vcenterPassword;
  }

  // vcenter_username - computed: false, optional: false, required: true
  private _vcenterUsername?: string; 
  public get vcenterUsername() {
    return this.getStringAttribute('vcenter_username');
  }
  public set vcenterUsername(value: string) {
    this._vcenterUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterUsernameInput() {
    return this._vcenterUsername;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_self_signed_cert: cdktf.booleanToTerraform(this._acceptSelfSignedCert),
      api_token: cdktf.stringToTerraform(this._apiToken),
      dc_id: cdktf.stringToTerraform(this._dcId),
      id: cdktf.stringToTerraform(this._id),
      nsx_hostname: cdktf.stringToTerraform(this._nsxHostname),
      sddc_name: cdktf.stringToTerraform(this._sddcName),
      vcenter_hostname: cdktf.stringToTerraform(this._vcenterHostname),
      vcenter_password: cdktf.stringToTerraform(this._vcenterPassword),
      vcenter_username: cdktf.stringToTerraform(this._vcenterUsername),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_self_signed_cert: {
        value: cdktf.booleanToHclTerraform(this._acceptSelfSignedCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dc_id: {
        value: cdktf.stringToHclTerraform(this._dcId),
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
      nsx_hostname: {
        value: cdktf.stringToHclTerraform(this._nsxHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sddc_name: {
        value: cdktf.stringToHclTerraform(this._sddcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcenter_hostname: {
        value: cdktf.stringToHclTerraform(this._vcenterHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcenter_password: {
        value: cdktf.stringToHclTerraform(this._vcenterPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcenter_username: {
        value: cdktf.stringToHclTerraform(this._vcenterUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
