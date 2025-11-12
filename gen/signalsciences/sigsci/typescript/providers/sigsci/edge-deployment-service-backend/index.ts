// https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment_service_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeDeploymentServiceBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Currently active version of the VCL service. Required to run to sync the VCL services origins to the NGWAF service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment_service_backend#fastly_service_vcl_active_version EdgeDeploymentServiceBackend#fastly_service_vcl_active_version}
  */
  readonly fastlyServiceVclActiveVersion: number;
  /**
  * Fastly service ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment_service_backend#fastly_sid EdgeDeploymentServiceBackend#fastly_sid}
  */
  readonly fastlySid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment_service_backend#id EdgeDeploymentServiceBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Site short name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment_service_backend#site_short_name EdgeDeploymentServiceBackend#site_short_name}
  */
  readonly siteShortName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment_service_backend sigsci_edge_deployment_service_backend}
*/
export class EdgeDeploymentServiceBackend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sigsci_edge_deployment_service_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeDeploymentServiceBackend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeDeploymentServiceBackend to import
  * @param importFromId The id of the existing EdgeDeploymentServiceBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment_service_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeDeploymentServiceBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sigsci_edge_deployment_service_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment_service_backend sigsci_edge_deployment_service_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeDeploymentServiceBackendConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeDeploymentServiceBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'sigsci_edge_deployment_service_backend',
      terraformGeneratorMetadata: {
        providerName: 'sigsci',
        providerVersion: '3.7.1',
        providerVersionConstraint: '3.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fastlyServiceVclActiveVersion = config.fastlyServiceVclActiveVersion;
    this._fastlySid = config.fastlySid;
    this._id = config.id;
    this._siteShortName = config.siteShortName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fastly_service_vcl_active_version - computed: false, optional: false, required: true
  private _fastlyServiceVclActiveVersion?: number; 
  public get fastlyServiceVclActiveVersion() {
    return this.getNumberAttribute('fastly_service_vcl_active_version');
  }
  public set fastlyServiceVclActiveVersion(value: number) {
    this._fastlyServiceVclActiveVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fastlyServiceVclActiveVersionInput() {
    return this._fastlyServiceVclActiveVersion;
  }

  // fastly_sid - computed: false, optional: false, required: true
  private _fastlySid?: string; 
  public get fastlySid() {
    return this.getStringAttribute('fastly_sid');
  }
  public set fastlySid(value: string) {
    this._fastlySid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fastlySidInput() {
    return this._fastlySid;
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

  // site_short_name - computed: false, optional: false, required: true
  private _siteShortName?: string; 
  public get siteShortName() {
    return this.getStringAttribute('site_short_name');
  }
  public set siteShortName(value: string) {
    this._siteShortName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteShortNameInput() {
    return this._siteShortName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fastly_service_vcl_active_version: cdktf.numberToTerraform(this._fastlyServiceVclActiveVersion),
      fastly_sid: cdktf.stringToTerraform(this._fastlySid),
      id: cdktf.stringToTerraform(this._id),
      site_short_name: cdktf.stringToTerraform(this._siteShortName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fastly_service_vcl_active_version: {
        value: cdktf.numberToHclTerraform(this._fastlyServiceVclActiveVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fastly_sid: {
        value: cdktf.stringToHclTerraform(this._fastlySid),
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
      site_short_name: {
        value: cdktf.stringToHclTerraform(this._siteShortName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
