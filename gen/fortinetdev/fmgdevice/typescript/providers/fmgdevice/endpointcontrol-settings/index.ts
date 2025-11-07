// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/endpointcontrol_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointcontrolSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/endpointcontrol_settings#device_name EndpointcontrolSettings#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/endpointcontrol_settings#device_vdom EndpointcontrolSettings#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/endpointcontrol_settings#forticlient_disconnect_unsupported_client EndpointcontrolSettings#forticlient_disconnect_unsupported_client}
  */
  readonly forticlientDisconnectUnsupportedClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/endpointcontrol_settings#forticlient_keepalive_interval EndpointcontrolSettings#forticlient_keepalive_interval}
  */
  readonly forticlientKeepaliveInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/endpointcontrol_settings#forticlient_sys_update_interval EndpointcontrolSettings#forticlient_sys_update_interval}
  */
  readonly forticlientSysUpdateInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/endpointcontrol_settings#forticlient_user_avatar EndpointcontrolSettings#forticlient_user_avatar}
  */
  readonly forticlientUserAvatar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/endpointcontrol_settings#id EndpointcontrolSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/endpointcontrol_settings#override EndpointcontrolSettings#override}
  */
  readonly override?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/endpointcontrol_settings fmgdevice_endpointcontrol_settings}
*/
export class EndpointcontrolSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_endpointcontrol_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EndpointcontrolSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EndpointcontrolSettings to import
  * @param importFromId The id of the existing EndpointcontrolSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/endpointcontrol_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EndpointcontrolSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_endpointcontrol_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/endpointcontrol_settings fmgdevice_endpointcontrol_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointcontrolSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EndpointcontrolSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_endpointcontrol_settings',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._forticlientDisconnectUnsupportedClient = config.forticlientDisconnectUnsupportedClient;
    this._forticlientKeepaliveInterval = config.forticlientKeepaliveInterval;
    this._forticlientSysUpdateInterval = config.forticlientSysUpdateInterval;
    this._forticlientUserAvatar = config.forticlientUserAvatar;
    this._id = config.id;
    this._override = config.override;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      forticlient_disconnect_unsupported_client: cdktf.stringToTerraform(this._forticlientDisconnectUnsupportedClient),
      forticlient_keepalive_interval: cdktf.numberToTerraform(this._forticlientKeepaliveInterval),
      forticlient_sys_update_interval: cdktf.numberToTerraform(this._forticlientSysUpdateInterval),
      forticlient_user_avatar: cdktf.stringToTerraform(this._forticlientUserAvatar),
      id: cdktf.stringToTerraform(this._id),
      override: cdktf.stringToTerraform(this._override),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
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
      forticlient_keepalive_interval: {
        value: cdktf.numberToHclTerraform(this._forticlientKeepaliveInterval),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
