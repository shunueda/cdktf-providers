// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointcontrolSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_settings#download_custom_link EndpointcontrolSettings#download_custom_link}
  */
  readonly downloadCustomLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_settings#download_location EndpointcontrolSettings#download_location}
  */
  readonly downloadLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_settings#forticlient_avdb_update_interval EndpointcontrolSettings#forticlient_avdb_update_interval}
  */
  readonly forticlientAvdbUpdateInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_settings#forticlient_dereg_unsupported_client EndpointcontrolSettings#forticlient_dereg_unsupported_client}
  */
  readonly forticlientDeregUnsupportedClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_settings#forticlient_disconnect_unsupported_client EndpointcontrolSettings#forticlient_disconnect_unsupported_client}
  */
  readonly forticlientDisconnectUnsupportedClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_settings#forticlient_ems_rest_api_call_timeout EndpointcontrolSettings#forticlient_ems_rest_api_call_timeout}
  */
  readonly forticlientEmsRestApiCallTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_settings#forticlient_keepalive_interval EndpointcontrolSettings#forticlient_keepalive_interval}
  */
  readonly forticlientKeepaliveInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_settings#forticlient_offline_grace EndpointcontrolSettings#forticlient_offline_grace}
  */
  readonly forticlientOfflineGrace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_settings#forticlient_offline_grace_interval EndpointcontrolSettings#forticlient_offline_grace_interval}
  */
  readonly forticlientOfflineGraceInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_settings#forticlient_reg_key EndpointcontrolSettings#forticlient_reg_key}
  */
  readonly forticlientRegKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_settings#forticlient_reg_key_enforce EndpointcontrolSettings#forticlient_reg_key_enforce}
  */
  readonly forticlientRegKeyEnforce?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_settings#forticlient_reg_timeout EndpointcontrolSettings#forticlient_reg_timeout}
  */
  readonly forticlientRegTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_settings#forticlient_sys_update_interval EndpointcontrolSettings#forticlient_sys_update_interval}
  */
  readonly forticlientSysUpdateInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_settings#forticlient_user_avatar EndpointcontrolSettings#forticlient_user_avatar}
  */
  readonly forticlientUserAvatar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_settings#forticlient_warning_interval EndpointcontrolSettings#forticlient_warning_interval}
  */
  readonly forticlientWarningInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_settings#id EndpointcontrolSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_settings#override EndpointcontrolSettings#override}
  */
  readonly override?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_settings#vdomparam EndpointcontrolSettings#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_settings fortios_endpointcontrol_settings}
*/
export class EndpointcontrolSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_endpointcontrol_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EndpointcontrolSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EndpointcontrolSettings to import
  * @param importFromId The id of the existing EndpointcontrolSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EndpointcontrolSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_endpointcontrol_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_settings fortios_endpointcontrol_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointcontrolSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EndpointcontrolSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_endpointcontrol_settings',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._downloadCustomLink = config.downloadCustomLink;
    this._downloadLocation = config.downloadLocation;
    this._forticlientAvdbUpdateInterval = config.forticlientAvdbUpdateInterval;
    this._forticlientDeregUnsupportedClient = config.forticlientDeregUnsupportedClient;
    this._forticlientDisconnectUnsupportedClient = config.forticlientDisconnectUnsupportedClient;
    this._forticlientEmsRestApiCallTimeout = config.forticlientEmsRestApiCallTimeout;
    this._forticlientKeepaliveInterval = config.forticlientKeepaliveInterval;
    this._forticlientOfflineGrace = config.forticlientOfflineGrace;
    this._forticlientOfflineGraceInterval = config.forticlientOfflineGraceInterval;
    this._forticlientRegKey = config.forticlientRegKey;
    this._forticlientRegKeyEnforce = config.forticlientRegKeyEnforce;
    this._forticlientRegTimeout = config.forticlientRegTimeout;
    this._forticlientSysUpdateInterval = config.forticlientSysUpdateInterval;
    this._forticlientUserAvatar = config.forticlientUserAvatar;
    this._forticlientWarningInterval = config.forticlientWarningInterval;
    this._id = config.id;
    this._override = config.override;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // download_custom_link - computed: false, optional: true, required: false
  private _downloadCustomLink?: string; 
  public get downloadCustomLink() {
    return this.getStringAttribute('download_custom_link');
  }
  public set downloadCustomLink(value: string) {
    this._downloadCustomLink = value;
  }
  public resetDownloadCustomLink() {
    this._downloadCustomLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadCustomLinkInput() {
    return this._downloadCustomLink;
  }

  // download_location - computed: false, optional: true, required: false
  private _downloadLocation?: string; 
  public get downloadLocation() {
    return this.getStringAttribute('download_location');
  }
  public set downloadLocation(value: string) {
    this._downloadLocation = value;
  }
  public resetDownloadLocation() {
    this._downloadLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadLocationInput() {
    return this._downloadLocation;
  }

  // forticlient_avdb_update_interval - computed: false, optional: true, required: false
  private _forticlientAvdbUpdateInterval?: number; 
  public get forticlientAvdbUpdateInterval() {
    return this.getNumberAttribute('forticlient_avdb_update_interval');
  }
  public set forticlientAvdbUpdateInterval(value: number) {
    this._forticlientAvdbUpdateInterval = value;
  }
  public resetForticlientAvdbUpdateInterval() {
    this._forticlientAvdbUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientAvdbUpdateIntervalInput() {
    return this._forticlientAvdbUpdateInterval;
  }

  // forticlient_dereg_unsupported_client - computed: false, optional: true, required: false
  private _forticlientDeregUnsupportedClient?: string; 
  public get forticlientDeregUnsupportedClient() {
    return this.getStringAttribute('forticlient_dereg_unsupported_client');
  }
  public set forticlientDeregUnsupportedClient(value: string) {
    this._forticlientDeregUnsupportedClient = value;
  }
  public resetForticlientDeregUnsupportedClient() {
    this._forticlientDeregUnsupportedClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientDeregUnsupportedClientInput() {
    return this._forticlientDeregUnsupportedClient;
  }

  // forticlient_disconnect_unsupported_client - computed: false, optional: true, required: false
  private _forticlientDisconnectUnsupportedClient?: string; 
  public get forticlientDisconnectUnsupportedClient() {
    return this.getStringAttribute('forticlient_disconnect_unsupported_client');
  }
  public set forticlientDisconnectUnsupportedClient(value: string) {
    this._forticlientDisconnectUnsupportedClient = value;
  }
  public resetForticlientDisconnectUnsupportedClient() {
    this._forticlientDisconnectUnsupportedClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientDisconnectUnsupportedClientInput() {
    return this._forticlientDisconnectUnsupportedClient;
  }

  // forticlient_ems_rest_api_call_timeout - computed: false, optional: true, required: false
  private _forticlientEmsRestApiCallTimeout?: number; 
  public get forticlientEmsRestApiCallTimeout() {
    return this.getNumberAttribute('forticlient_ems_rest_api_call_timeout');
  }
  public set forticlientEmsRestApiCallTimeout(value: number) {
    this._forticlientEmsRestApiCallTimeout = value;
  }
  public resetForticlientEmsRestApiCallTimeout() {
    this._forticlientEmsRestApiCallTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientEmsRestApiCallTimeoutInput() {
    return this._forticlientEmsRestApiCallTimeout;
  }

  // forticlient_keepalive_interval - computed: false, optional: true, required: false
  private _forticlientKeepaliveInterval?: number; 
  public get forticlientKeepaliveInterval() {
    return this.getNumberAttribute('forticlient_keepalive_interval');
  }
  public set forticlientKeepaliveInterval(value: number) {
    this._forticlientKeepaliveInterval = value;
  }
  public resetForticlientKeepaliveInterval() {
    this._forticlientKeepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientKeepaliveIntervalInput() {
    return this._forticlientKeepaliveInterval;
  }

  // forticlient_offline_grace - computed: false, optional: true, required: false
  private _forticlientOfflineGrace?: string; 
  public get forticlientOfflineGrace() {
    return this.getStringAttribute('forticlient_offline_grace');
  }
  public set forticlientOfflineGrace(value: string) {
    this._forticlientOfflineGrace = value;
  }
  public resetForticlientOfflineGrace() {
    this._forticlientOfflineGrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientOfflineGraceInput() {
    return this._forticlientOfflineGrace;
  }

  // forticlient_offline_grace_interval - computed: false, optional: true, required: false
  private _forticlientOfflineGraceInterval?: number; 
  public get forticlientOfflineGraceInterval() {
    return this.getNumberAttribute('forticlient_offline_grace_interval');
  }
  public set forticlientOfflineGraceInterval(value: number) {
    this._forticlientOfflineGraceInterval = value;
  }
  public resetForticlientOfflineGraceInterval() {
    this._forticlientOfflineGraceInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientOfflineGraceIntervalInput() {
    return this._forticlientOfflineGraceInterval;
  }

  // forticlient_reg_key - computed: false, optional: true, required: false
  private _forticlientRegKey?: string; 
  public get forticlientRegKey() {
    return this.getStringAttribute('forticlient_reg_key');
  }
  public set forticlientRegKey(value: string) {
    this._forticlientRegKey = value;
  }
  public resetForticlientRegKey() {
    this._forticlientRegKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientRegKeyInput() {
    return this._forticlientRegKey;
  }

  // forticlient_reg_key_enforce - computed: false, optional: true, required: false
  private _forticlientRegKeyEnforce?: string; 
  public get forticlientRegKeyEnforce() {
    return this.getStringAttribute('forticlient_reg_key_enforce');
  }
  public set forticlientRegKeyEnforce(value: string) {
    this._forticlientRegKeyEnforce = value;
  }
  public resetForticlientRegKeyEnforce() {
    this._forticlientRegKeyEnforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientRegKeyEnforceInput() {
    return this._forticlientRegKeyEnforce;
  }

  // forticlient_reg_timeout - computed: false, optional: true, required: false
  private _forticlientRegTimeout?: number; 
  public get forticlientRegTimeout() {
    return this.getNumberAttribute('forticlient_reg_timeout');
  }
  public set forticlientRegTimeout(value: number) {
    this._forticlientRegTimeout = value;
  }
  public resetForticlientRegTimeout() {
    this._forticlientRegTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientRegTimeoutInput() {
    return this._forticlientRegTimeout;
  }

  // forticlient_sys_update_interval - computed: false, optional: true, required: false
  private _forticlientSysUpdateInterval?: number; 
  public get forticlientSysUpdateInterval() {
    return this.getNumberAttribute('forticlient_sys_update_interval');
  }
  public set forticlientSysUpdateInterval(value: number) {
    this._forticlientSysUpdateInterval = value;
  }
  public resetForticlientSysUpdateInterval() {
    this._forticlientSysUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientSysUpdateIntervalInput() {
    return this._forticlientSysUpdateInterval;
  }

  // forticlient_user_avatar - computed: false, optional: true, required: false
  private _forticlientUserAvatar?: string; 
  public get forticlientUserAvatar() {
    return this.getStringAttribute('forticlient_user_avatar');
  }
  public set forticlientUserAvatar(value: string) {
    this._forticlientUserAvatar = value;
  }
  public resetForticlientUserAvatar() {
    this._forticlientUserAvatar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientUserAvatarInput() {
    return this._forticlientUserAvatar;
  }

  // forticlient_warning_interval - computed: false, optional: true, required: false
  private _forticlientWarningInterval?: number; 
  public get forticlientWarningInterval() {
    return this.getNumberAttribute('forticlient_warning_interval');
  }
  public set forticlientWarningInterval(value: number) {
    this._forticlientWarningInterval = value;
  }
  public resetForticlientWarningInterval() {
    this._forticlientWarningInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientWarningIntervalInput() {
    return this._forticlientWarningInterval;
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

  // override - computed: true, optional: true, required: false
  private _override?: string; 
  public get override() {
    return this.getStringAttribute('override');
  }
  public set override(value: string) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      download_custom_link: cdktf.stringToTerraform(this._downloadCustomLink),
      download_location: cdktf.stringToTerraform(this._downloadLocation),
      forticlient_avdb_update_interval: cdktf.numberToTerraform(this._forticlientAvdbUpdateInterval),
      forticlient_dereg_unsupported_client: cdktf.stringToTerraform(this._forticlientDeregUnsupportedClient),
      forticlient_disconnect_unsupported_client: cdktf.stringToTerraform(this._forticlientDisconnectUnsupportedClient),
      forticlient_ems_rest_api_call_timeout: cdktf.numberToTerraform(this._forticlientEmsRestApiCallTimeout),
      forticlient_keepalive_interval: cdktf.numberToTerraform(this._forticlientKeepaliveInterval),
      forticlient_offline_grace: cdktf.stringToTerraform(this._forticlientOfflineGrace),
      forticlient_offline_grace_interval: cdktf.numberToTerraform(this._forticlientOfflineGraceInterval),
      forticlient_reg_key: cdktf.stringToTerraform(this._forticlientRegKey),
      forticlient_reg_key_enforce: cdktf.stringToTerraform(this._forticlientRegKeyEnforce),
      forticlient_reg_timeout: cdktf.numberToTerraform(this._forticlientRegTimeout),
      forticlient_sys_update_interval: cdktf.numberToTerraform(this._forticlientSysUpdateInterval),
      forticlient_user_avatar: cdktf.stringToTerraform(this._forticlientUserAvatar),
      forticlient_warning_interval: cdktf.numberToTerraform(this._forticlientWarningInterval),
      id: cdktf.stringToTerraform(this._id),
      override: cdktf.stringToTerraform(this._override),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      download_custom_link: {
        value: cdktf.stringToHclTerraform(this._downloadCustomLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      download_location: {
        value: cdktf.stringToHclTerraform(this._downloadLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forticlient_avdb_update_interval: {
        value: cdktf.numberToHclTerraform(this._forticlientAvdbUpdateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forticlient_dereg_unsupported_client: {
        value: cdktf.stringToHclTerraform(this._forticlientDeregUnsupportedClient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forticlient_disconnect_unsupported_client: {
        value: cdktf.stringToHclTerraform(this._forticlientDisconnectUnsupportedClient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forticlient_ems_rest_api_call_timeout: {
        value: cdktf.numberToHclTerraform(this._forticlientEmsRestApiCallTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forticlient_keepalive_interval: {
        value: cdktf.numberToHclTerraform(this._forticlientKeepaliveInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forticlient_offline_grace: {
        value: cdktf.stringToHclTerraform(this._forticlientOfflineGrace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forticlient_offline_grace_interval: {
        value: cdktf.numberToHclTerraform(this._forticlientOfflineGraceInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forticlient_reg_key: {
        value: cdktf.stringToHclTerraform(this._forticlientRegKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forticlient_reg_key_enforce: {
        value: cdktf.stringToHclTerraform(this._forticlientRegKeyEnforce),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forticlient_reg_timeout: {
        value: cdktf.numberToHclTerraform(this._forticlientRegTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forticlient_sys_update_interval: {
        value: cdktf.numberToHclTerraform(this._forticlientSysUpdateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forticlient_user_avatar: {
        value: cdktf.stringToHclTerraform(this._forticlientUserAvatar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forticlient_warning_interval: {
        value: cdktf.numberToHclTerraform(this._forticlientWarningInterval),
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
      override: {
        value: cdktf.stringToHclTerraform(this._override),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
