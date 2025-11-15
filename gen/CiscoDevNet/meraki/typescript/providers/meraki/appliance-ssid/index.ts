// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_ssid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceSsidConfig extends cdktf.TerraformMetaArguments {
  /**
  * The association control method for the SSID (`open`, `psk`, `8021x-meraki` or `8021x-radius`).
  *   - Choices: `8021x-meraki`, `8021x-radius`, `open`, `psk`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_ssid#auth_mode ApplianceSsid#auth_mode}
  */
  readonly authMode?: string;
  /**
  * The VLAN ID of the VLAN associated to this SSID. This parameter is only valid if the network is in routed mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_ssid#default_vlan_id ApplianceSsid#default_vlan_id}
  */
  readonly defaultVlanId?: number;
  /**
  * Enable DCHP Enforced Deauthentication on the SSID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_ssid#dhcp_enforced_deauthentication_enabled ApplianceSsid#dhcp_enforced_deauthentication_enabled}
  */
  readonly dhcpEnforcedDeauthenticationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether 802.11w is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_ssid#dot11w_enabled ApplianceSsid#dot11w_enabled}
  */
  readonly dot11WEnabled?: boolean | cdktf.IResolvable;
  /**
  * (Optional) Whether 802.11w is required or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_ssid#dot11w_required ApplianceSsid#dot11w_required}
  */
  readonly dot11WRequired?: boolean | cdktf.IResolvable;
  /**
  * Whether or not the SSID is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_ssid#enabled ApplianceSsid#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The psk encryption mode for the SSID (`wep` or `wpa`). This param is only valid if the authMode is `psk`.
  *   - Choices: `wep`, `wpa`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_ssid#encryption_mode ApplianceSsid#encryption_mode}
  */
  readonly encryptionMode?: string;
  /**
  * The name of the SSID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_ssid#name ApplianceSsid#name}
  */
  readonly name?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_ssid#network_id ApplianceSsid#network_id}
  */
  readonly networkId: string;
  /**
  * Wireless SSID number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_ssid#number ApplianceSsid#number}
  */
  readonly number: string;
  /**
  * The passkey for the SSID. This param is only valid if the authMode is `psk`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_ssid#psk ApplianceSsid#psk}
  */
  readonly psk?: string;
  /**
  * The RADIUS 802.1x servers to be used for authentication. This param is only valid if the authMode is `8021x-radius`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_ssid#radius_servers ApplianceSsid#radius_servers}
  */
  readonly radiusServers?: ApplianceSsidRadiusServers[] | cdktf.IResolvable;
  /**
  * Boolean indicating whether the MX should advertise or hide this SSID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_ssid#visible ApplianceSsid#visible}
  */
  readonly visible?: boolean | cdktf.IResolvable;
  /**
  * The types of WPA encryption. (`WPA1 and WPA2`, `WPA2 only`, `WPA3 Transition Mode` or `WPA3 only`). This param is only valid if (1) the authMode is `psk` & the encryptionMode is `wpa` OR (2) the authMode is `8021x-meraki` OR (3) the authMode is `8021x-radius`
  *   - Choices: `WPA1 and WPA2`, `WPA2 only`, `WPA3 Transition Mode`, `WPA3 only`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_ssid#wpa_encryption_mode ApplianceSsid#wpa_encryption_mode}
  */
  readonly wpaEncryptionMode?: string;
}
export interface ApplianceSsidRadiusServers {
  /**
  * The IP address of your RADIUS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_ssid#host ApplianceSsid#host}
  */
  readonly host?: string;
  /**
  * The UDP port your RADIUS servers listens on for Access-requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_ssid#port ApplianceSsid#port}
  */
  readonly port?: number;
  /**
  * The RADIUS client shared secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_ssid#secret ApplianceSsid#secret}
  */
  readonly secret?: string;
}

export function applianceSsidRadiusServersToTerraform(struct?: ApplianceSsidRadiusServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function applianceSsidRadiusServersToHclTerraform(struct?: ApplianceSsidRadiusServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceSsidRadiusServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplianceSsidRadiusServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceSsidRadiusServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
      this._secret = value.secret;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}

export class ApplianceSsidRadiusServersList extends cdktf.ComplexList {
  public internalValue? : ApplianceSsidRadiusServers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplianceSsidRadiusServersOutputReference {
    return new ApplianceSsidRadiusServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_ssid meraki_appliance_ssid}
*/
export class ApplianceSsid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_ssid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceSsid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceSsid to import
  * @param importFromId The id of the existing ApplianceSsid that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_ssid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceSsid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_ssid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_ssid meraki_appliance_ssid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceSsidConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceSsidConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_ssid',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authMode = config.authMode;
    this._defaultVlanId = config.defaultVlanId;
    this._dhcpEnforcedDeauthenticationEnabled = config.dhcpEnforcedDeauthenticationEnabled;
    this._dot11WEnabled = config.dot11WEnabled;
    this._dot11WRequired = config.dot11WRequired;
    this._enabled = config.enabled;
    this._encryptionMode = config.encryptionMode;
    this._name = config.name;
    this._networkId = config.networkId;
    this._number = config.number;
    this._psk = config.psk;
    this._radiusServers.internalValue = config.radiusServers;
    this._visible = config.visible;
    this._wpaEncryptionMode = config.wpaEncryptionMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_mode - computed: false, optional: true, required: false
  private _authMode?: string; 
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }
  public set authMode(value: string) {
    this._authMode = value;
  }
  public resetAuthMode() {
    this._authMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeInput() {
    return this._authMode;
  }

  // default_vlan_id - computed: false, optional: true, required: false
  private _defaultVlanId?: number; 
  public get defaultVlanId() {
    return this.getNumberAttribute('default_vlan_id');
  }
  public set defaultVlanId(value: number) {
    this._defaultVlanId = value;
  }
  public resetDefaultVlanId() {
    this._defaultVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVlanIdInput() {
    return this._defaultVlanId;
  }

  // dhcp_enforced_deauthentication_enabled - computed: false, optional: true, required: false
  private _dhcpEnforcedDeauthenticationEnabled?: boolean | cdktf.IResolvable; 
  public get dhcpEnforcedDeauthenticationEnabled() {
    return this.getBooleanAttribute('dhcp_enforced_deauthentication_enabled');
  }
  public set dhcpEnforcedDeauthenticationEnabled(value: boolean | cdktf.IResolvable) {
    this._dhcpEnforcedDeauthenticationEnabled = value;
  }
  public resetDhcpEnforcedDeauthenticationEnabled() {
    this._dhcpEnforcedDeauthenticationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpEnforcedDeauthenticationEnabledInput() {
    return this._dhcpEnforcedDeauthenticationEnabled;
  }

  // dot11w_enabled - computed: false, optional: true, required: false
  private _dot11WEnabled?: boolean | cdktf.IResolvable; 
  public get dot11WEnabled() {
    return this.getBooleanAttribute('dot11w_enabled');
  }
  public set dot11WEnabled(value: boolean | cdktf.IResolvable) {
    this._dot11WEnabled = value;
  }
  public resetDot11WEnabled() {
    this._dot11WEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot11WEnabledInput() {
    return this._dot11WEnabled;
  }

  // dot11w_required - computed: false, optional: true, required: false
  private _dot11WRequired?: boolean | cdktf.IResolvable; 
  public get dot11WRequired() {
    return this.getBooleanAttribute('dot11w_required');
  }
  public set dot11WRequired(value: boolean | cdktf.IResolvable) {
    this._dot11WRequired = value;
  }
  public resetDot11WRequired() {
    this._dot11WRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot11WRequiredInput() {
    return this._dot11WRequired;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // encryption_mode - computed: false, optional: true, required: false
  private _encryptionMode?: string; 
  public get encryptionMode() {
    return this.getStringAttribute('encryption_mode');
  }
  public set encryptionMode(value: string) {
    this._encryptionMode = value;
  }
  public resetEncryptionMode() {
    this._encryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionModeInput() {
    return this._encryptionMode;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // number - computed: false, optional: false, required: true
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // psk - computed: false, optional: true, required: false
  private _psk?: string; 
  public get psk() {
    return this.getStringAttribute('psk');
  }
  public set psk(value: string) {
    this._psk = value;
  }
  public resetPsk() {
    this._psk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pskInput() {
    return this._psk;
  }

  // radius_servers - computed: false, optional: true, required: false
  private _radiusServers = new ApplianceSsidRadiusServersList(this, "radius_servers", false);
  public get radiusServers() {
    return this._radiusServers;
  }
  public putRadiusServers(value: ApplianceSsidRadiusServers[] | cdktf.IResolvable) {
    this._radiusServers.internalValue = value;
  }
  public resetRadiusServers() {
    this._radiusServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServersInput() {
    return this._radiusServers.internalValue;
  }

  // visible - computed: false, optional: true, required: false
  private _visible?: boolean | cdktf.IResolvable; 
  public get visible() {
    return this.getBooleanAttribute('visible');
  }
  public set visible(value: boolean | cdktf.IResolvable) {
    this._visible = value;
  }
  public resetVisible() {
    this._visible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleInput() {
    return this._visible;
  }

  // wpa_encryption_mode - computed: false, optional: true, required: false
  private _wpaEncryptionMode?: string; 
  public get wpaEncryptionMode() {
    return this.getStringAttribute('wpa_encryption_mode');
  }
  public set wpaEncryptionMode(value: string) {
    this._wpaEncryptionMode = value;
  }
  public resetWpaEncryptionMode() {
    this._wpaEncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wpaEncryptionModeInput() {
    return this._wpaEncryptionMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_mode: cdktf.stringToTerraform(this._authMode),
      default_vlan_id: cdktf.numberToTerraform(this._defaultVlanId),
      dhcp_enforced_deauthentication_enabled: cdktf.booleanToTerraform(this._dhcpEnforcedDeauthenticationEnabled),
      dot11w_enabled: cdktf.booleanToTerraform(this._dot11WEnabled),
      dot11w_required: cdktf.booleanToTerraform(this._dot11WRequired),
      enabled: cdktf.booleanToTerraform(this._enabled),
      encryption_mode: cdktf.stringToTerraform(this._encryptionMode),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      number: cdktf.stringToTerraform(this._number),
      psk: cdktf.stringToTerraform(this._psk),
      radius_servers: cdktf.listMapper(applianceSsidRadiusServersToTerraform, false)(this._radiusServers.internalValue),
      visible: cdktf.booleanToTerraform(this._visible),
      wpa_encryption_mode: cdktf.stringToTerraform(this._wpaEncryptionMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_mode: {
        value: cdktf.stringToHclTerraform(this._authMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_vlan_id: {
        value: cdktf.numberToHclTerraform(this._defaultVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcp_enforced_deauthentication_enabled: {
        value: cdktf.booleanToHclTerraform(this._dhcpEnforcedDeauthenticationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dot11w_enabled: {
        value: cdktf.booleanToHclTerraform(this._dot11WEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dot11w_required: {
        value: cdktf.booleanToHclTerraform(this._dot11WRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_mode: {
        value: cdktf.stringToHclTerraform(this._encryptionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number: {
        value: cdktf.stringToHclTerraform(this._number),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psk: {
        value: cdktf.stringToHclTerraform(this._psk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_servers: {
        value: cdktf.listMapperHcl(applianceSsidRadiusServersToHclTerraform, false)(this._radiusServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplianceSsidRadiusServersList",
      },
      visible: {
        value: cdktf.booleanToHclTerraform(this._visible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wpa_encryption_mode: {
        value: cdktf.stringToHclTerraform(this._wpaEncryptionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
