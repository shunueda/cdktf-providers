// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_cert_download
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnCertDownloadConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the VPN Certificate download is enabled. Supported Values: "true", "false"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_cert_download#download_enabled VpnCertDownload#download_enabled}
  */
  readonly downloadEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_cert_download#id VpnCertDownload#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of SAML endpoint names for which the downloading should be enabled . Currently, only a single endpoint is supported. Example: ["saml_endpoint_1"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_cert_download#saml_endpoints VpnCertDownload#saml_endpoints}
  */
  readonly samlEndpoints?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_cert_download aviatrix_vpn_cert_download}
*/
export class VpnCertDownload extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_vpn_cert_download";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnCertDownload resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnCertDownload to import
  * @param importFromId The id of the existing VpnCertDownload that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_cert_download#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnCertDownload to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_vpn_cert_download", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_cert_download aviatrix_vpn_cert_download} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnCertDownloadConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VpnCertDownloadConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_vpn_cert_download',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._downloadEnabled = config.downloadEnabled;
    this._id = config.id;
    this._samlEndpoints = config.samlEndpoints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // download_enabled - computed: false, optional: true, required: false
  private _downloadEnabled?: boolean | cdktf.IResolvable; 
  public get downloadEnabled() {
    return this.getBooleanAttribute('download_enabled');
  }
  public set downloadEnabled(value: boolean | cdktf.IResolvable) {
    this._downloadEnabled = value;
  }
  public resetDownloadEnabled() {
    this._downloadEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadEnabledInput() {
    return this._downloadEnabled;
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

  // saml_endpoints - computed: false, optional: true, required: false
  private _samlEndpoints?: string[]; 
  public get samlEndpoints() {
    return cdktf.Fn.tolist(this.getListAttribute('saml_endpoints'));
  }
  public set samlEndpoints(value: string[]) {
    this._samlEndpoints = value;
  }
  public resetSamlEndpoints() {
    this._samlEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlEndpointsInput() {
    return this._samlEndpoints;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      download_enabled: cdktf.booleanToTerraform(this._downloadEnabled),
      id: cdktf.stringToTerraform(this._id),
      saml_endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(this._samlEndpoints),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      download_enabled: {
        value: cdktf.booleanToHclTerraform(this._downloadEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_endpoints: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._samlEndpoints),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
