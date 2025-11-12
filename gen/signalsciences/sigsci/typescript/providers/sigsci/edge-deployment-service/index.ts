// https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeDeploymentServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * activate Fastly service version after clone. Possible values are true or false. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment_service#activate_version EdgeDeploymentService#activate_version}
  */
  readonly activateVersion?: boolean | cdktf.IResolvable;
  /**
  * enable to prevent Fastly-Client-IP from being overwritten by the NGWAF. Intended for advanced use cases. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment_service#custom_client_ip EdgeDeploymentService#custom_client_ip}
  */
  readonly customClientIp?: boolean | cdktf.IResolvable;
  /**
  * Fastly service ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment_service#fastly_sid EdgeDeploymentService#fastly_sid}
  */
  readonly fastlySid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment_service#id EdgeDeploymentService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * percentage of traffic to send to NGWAF@Edge. Possible values are integers values 0 to 100. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment_service#percent_enabled EdgeDeploymentService#percent_enabled}
  */
  readonly percentEnabled?: number;
  /**
  * Site short name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment_service#site_short_name EdgeDeploymentService#site_short_name}
  */
  readonly siteShortName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment_service sigsci_edge_deployment_service}
*/
export class EdgeDeploymentService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sigsci_edge_deployment_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeDeploymentService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeDeploymentService to import
  * @param importFromId The id of the existing EdgeDeploymentService that should be imported. Refer to the {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeDeploymentService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sigsci_edge_deployment_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment_service sigsci_edge_deployment_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeDeploymentServiceConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeDeploymentServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'sigsci_edge_deployment_service',
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
    this._activateVersion = config.activateVersion;
    this._customClientIp = config.customClientIp;
    this._fastlySid = config.fastlySid;
    this._id = config.id;
    this._percentEnabled = config.percentEnabled;
    this._siteShortName = config.siteShortName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activate_version - computed: false, optional: true, required: false
  private _activateVersion?: boolean | cdktf.IResolvable; 
  public get activateVersion() {
    return this.getBooleanAttribute('activate_version');
  }
  public set activateVersion(value: boolean | cdktf.IResolvable) {
    this._activateVersion = value;
  }
  public resetActivateVersion() {
    this._activateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateVersionInput() {
    return this._activateVersion;
  }

  // custom_client_ip - computed: false, optional: true, required: false
  private _customClientIp?: boolean | cdktf.IResolvable; 
  public get customClientIp() {
    return this.getBooleanAttribute('custom_client_ip');
  }
  public set customClientIp(value: boolean | cdktf.IResolvable) {
    this._customClientIp = value;
  }
  public resetCustomClientIp() {
    this._customClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customClientIpInput() {
    return this._customClientIp;
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

  // percent_enabled - computed: false, optional: true, required: false
  private _percentEnabled?: number; 
  public get percentEnabled() {
    return this.getNumberAttribute('percent_enabled');
  }
  public set percentEnabled(value: number) {
    this._percentEnabled = value;
  }
  public resetPercentEnabled() {
    this._percentEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentEnabledInput() {
    return this._percentEnabled;
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
      activate_version: cdktf.booleanToTerraform(this._activateVersion),
      custom_client_ip: cdktf.booleanToTerraform(this._customClientIp),
      fastly_sid: cdktf.stringToTerraform(this._fastlySid),
      id: cdktf.stringToTerraform(this._id),
      percent_enabled: cdktf.numberToTerraform(this._percentEnabled),
      site_short_name: cdktf.stringToTerraform(this._siteShortName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activate_version: {
        value: cdktf.booleanToHclTerraform(this._activateVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_client_ip: {
        value: cdktf.booleanToHclTerraform(this._customClientIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      percent_enabled: {
        value: cdktf.numberToHclTerraform(this._percentEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
