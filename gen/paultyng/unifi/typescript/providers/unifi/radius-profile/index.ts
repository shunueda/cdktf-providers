// https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/radius_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RadiusProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether to use RADIUS accounting. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/radius_profile#accounting_enabled RadiusProfile#accounting_enabled}
  */
  readonly accountingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to use interim_update. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/radius_profile#interim_update_enabled RadiusProfile#interim_update_enabled}
  */
  readonly interimUpdateEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies interim_update interval. Defaults to `3600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/radius_profile#interim_update_interval RadiusProfile#interim_update_interval}
  */
  readonly interimUpdateInterval?: number;
  /**
  * The name of the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/radius_profile#name RadiusProfile#name}
  */
  readonly name: string;
  /**
  * The name of the site to associate the settings with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/radius_profile#site RadiusProfile#site}
  */
  readonly site?: string;
  /**
  * Specifies whether to use usg as a RADIUS accounting server. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/radius_profile#use_usg_acct_server RadiusProfile#use_usg_acct_server}
  */
  readonly useUsgAcctServer?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to use usg as a RADIUS authentication server. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/radius_profile#use_usg_auth_server RadiusProfile#use_usg_auth_server}
  */
  readonly useUsgAuthServer?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to use vlan on wired connections. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/radius_profile#vlan_enabled RadiusProfile#vlan_enabled}
  */
  readonly vlanEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to use vlan on wireless connections. Must be one of `disabled`, `optional`, or `required`. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/radius_profile#vlan_wlan_mode RadiusProfile#vlan_wlan_mode}
  */
  readonly vlanWlanMode?: string;
  /**
  * acct_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/radius_profile#acct_server RadiusProfile#acct_server}
  */
  readonly acctServer?: RadiusProfileAcctServer[] | cdktf.IResolvable;
  /**
  * auth_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/radius_profile#auth_server RadiusProfile#auth_server}
  */
  readonly authServer?: RadiusProfileAuthServer[] | cdktf.IResolvable;
}
export interface RadiusProfileAcctServer {
  /**
  * IP address of accounting service server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/radius_profile#ip RadiusProfile#ip}
  */
  readonly ip: string;
  /**
  * Port of accounting service. Defaults to `1813`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/radius_profile#port RadiusProfile#port}
  */
  readonly port?: number;
  /**
  * RADIUS secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/radius_profile#xsecret RadiusProfile#xsecret}
  */
  readonly xsecret: string;
}

export function radiusProfileAcctServerToTerraform(struct?: RadiusProfileAcctServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
    xsecret: cdktf.stringToTerraform(struct!.xsecret),
  }
}


export function radiusProfileAcctServerToHclTerraform(struct?: RadiusProfileAcctServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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
    xsecret: {
      value: cdktf.stringToHclTerraform(struct!.xsecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RadiusProfileAcctServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RadiusProfileAcctServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._xsecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.xsecret = this._xsecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RadiusProfileAcctServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._port = undefined;
      this._xsecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._port = value.port;
      this._xsecret = value.xsecret;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

  // xsecret - computed: false, optional: false, required: true
  private _xsecret?: string; 
  public get xsecret() {
    return this.getStringAttribute('xsecret');
  }
  public set xsecret(value: string) {
    this._xsecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xsecretInput() {
    return this._xsecret;
  }
}

export class RadiusProfileAcctServerList extends cdktf.ComplexList {
  public internalValue? : RadiusProfileAcctServer[] | cdktf.IResolvable

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
  public get(index: number): RadiusProfileAcctServerOutputReference {
    return new RadiusProfileAcctServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RadiusProfileAuthServer {
  /**
  * IP address of authentication service server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/radius_profile#ip RadiusProfile#ip}
  */
  readonly ip: string;
  /**
  * Port of authentication service. Defaults to `1812`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/radius_profile#port RadiusProfile#port}
  */
  readonly port?: number;
  /**
  * RADIUS secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/radius_profile#xsecret RadiusProfile#xsecret}
  */
  readonly xsecret: string;
}

export function radiusProfileAuthServerToTerraform(struct?: RadiusProfileAuthServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
    xsecret: cdktf.stringToTerraform(struct!.xsecret),
  }
}


export function radiusProfileAuthServerToHclTerraform(struct?: RadiusProfileAuthServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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
    xsecret: {
      value: cdktf.stringToHclTerraform(struct!.xsecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RadiusProfileAuthServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RadiusProfileAuthServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._xsecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.xsecret = this._xsecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RadiusProfileAuthServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._port = undefined;
      this._xsecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._port = value.port;
      this._xsecret = value.xsecret;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

  // xsecret - computed: false, optional: false, required: true
  private _xsecret?: string; 
  public get xsecret() {
    return this.getStringAttribute('xsecret');
  }
  public set xsecret(value: string) {
    this._xsecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xsecretInput() {
    return this._xsecret;
  }
}

export class RadiusProfileAuthServerList extends cdktf.ComplexList {
  public internalValue? : RadiusProfileAuthServer[] | cdktf.IResolvable

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
  public get(index: number): RadiusProfileAuthServerOutputReference {
    return new RadiusProfileAuthServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/radius_profile unifi_radius_profile}
*/
export class RadiusProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "unifi_radius_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RadiusProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RadiusProfile to import
  * @param importFromId The id of the existing RadiusProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/radius_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RadiusProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "unifi_radius_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/radius_profile unifi_radius_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RadiusProfileConfig
  */
  public constructor(scope: Construct, id: string, config: RadiusProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'unifi_radius_profile',
      terraformGeneratorMetadata: {
        providerName: 'unifi',
        providerVersion: '0.41.0',
        providerVersionConstraint: '0.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountingEnabled = config.accountingEnabled;
    this._interimUpdateEnabled = config.interimUpdateEnabled;
    this._interimUpdateInterval = config.interimUpdateInterval;
    this._name = config.name;
    this._site = config.site;
    this._useUsgAcctServer = config.useUsgAcctServer;
    this._useUsgAuthServer = config.useUsgAuthServer;
    this._vlanEnabled = config.vlanEnabled;
    this._vlanWlanMode = config.vlanWlanMode;
    this._acctServer.internalValue = config.acctServer;
    this._authServer.internalValue = config.authServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounting_enabled - computed: false, optional: true, required: false
  private _accountingEnabled?: boolean | cdktf.IResolvable; 
  public get accountingEnabled() {
    return this.getBooleanAttribute('accounting_enabled');
  }
  public set accountingEnabled(value: boolean | cdktf.IResolvable) {
    this._accountingEnabled = value;
  }
  public resetAccountingEnabled() {
    this._accountingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingEnabledInput() {
    return this._accountingEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interim_update_enabled - computed: false, optional: true, required: false
  private _interimUpdateEnabled?: boolean | cdktf.IResolvable; 
  public get interimUpdateEnabled() {
    return this.getBooleanAttribute('interim_update_enabled');
  }
  public set interimUpdateEnabled(value: boolean | cdktf.IResolvable) {
    this._interimUpdateEnabled = value;
  }
  public resetInterimUpdateEnabled() {
    this._interimUpdateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interimUpdateEnabledInput() {
    return this._interimUpdateEnabled;
  }

  // interim_update_interval - computed: false, optional: true, required: false
  private _interimUpdateInterval?: number; 
  public get interimUpdateInterval() {
    return this.getNumberAttribute('interim_update_interval');
  }
  public set interimUpdateInterval(value: number) {
    this._interimUpdateInterval = value;
  }
  public resetInterimUpdateInterval() {
    this._interimUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interimUpdateIntervalInput() {
    return this._interimUpdateInterval;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // site - computed: true, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // use_usg_acct_server - computed: false, optional: true, required: false
  private _useUsgAcctServer?: boolean | cdktf.IResolvable; 
  public get useUsgAcctServer() {
    return this.getBooleanAttribute('use_usg_acct_server');
  }
  public set useUsgAcctServer(value: boolean | cdktf.IResolvable) {
    this._useUsgAcctServer = value;
  }
  public resetUseUsgAcctServer() {
    this._useUsgAcctServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useUsgAcctServerInput() {
    return this._useUsgAcctServer;
  }

  // use_usg_auth_server - computed: false, optional: true, required: false
  private _useUsgAuthServer?: boolean | cdktf.IResolvable; 
  public get useUsgAuthServer() {
    return this.getBooleanAttribute('use_usg_auth_server');
  }
  public set useUsgAuthServer(value: boolean | cdktf.IResolvable) {
    this._useUsgAuthServer = value;
  }
  public resetUseUsgAuthServer() {
    this._useUsgAuthServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useUsgAuthServerInput() {
    return this._useUsgAuthServer;
  }

  // vlan_enabled - computed: false, optional: true, required: false
  private _vlanEnabled?: boolean | cdktf.IResolvable; 
  public get vlanEnabled() {
    return this.getBooleanAttribute('vlan_enabled');
  }
  public set vlanEnabled(value: boolean | cdktf.IResolvable) {
    this._vlanEnabled = value;
  }
  public resetVlanEnabled() {
    this._vlanEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanEnabledInput() {
    return this._vlanEnabled;
  }

  // vlan_wlan_mode - computed: false, optional: true, required: false
  private _vlanWlanMode?: string; 
  public get vlanWlanMode() {
    return this.getStringAttribute('vlan_wlan_mode');
  }
  public set vlanWlanMode(value: string) {
    this._vlanWlanMode = value;
  }
  public resetVlanWlanMode() {
    this._vlanWlanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanWlanModeInput() {
    return this._vlanWlanMode;
  }

  // acct_server - computed: false, optional: true, required: false
  private _acctServer = new RadiusProfileAcctServerList(this, "acct_server", false);
  public get acctServer() {
    return this._acctServer;
  }
  public putAcctServer(value: RadiusProfileAcctServer[] | cdktf.IResolvable) {
    this._acctServer.internalValue = value;
  }
  public resetAcctServer() {
    this._acctServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctServerInput() {
    return this._acctServer.internalValue;
  }

  // auth_server - computed: false, optional: true, required: false
  private _authServer = new RadiusProfileAuthServerList(this, "auth_server", false);
  public get authServer() {
    return this._authServer;
  }
  public putAuthServer(value: RadiusProfileAuthServer[] | cdktf.IResolvable) {
    this._authServer.internalValue = value;
  }
  public resetAuthServer() {
    this._authServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServerInput() {
    return this._authServer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accounting_enabled: cdktf.booleanToTerraform(this._accountingEnabled),
      interim_update_enabled: cdktf.booleanToTerraform(this._interimUpdateEnabled),
      interim_update_interval: cdktf.numberToTerraform(this._interimUpdateInterval),
      name: cdktf.stringToTerraform(this._name),
      site: cdktf.stringToTerraform(this._site),
      use_usg_acct_server: cdktf.booleanToTerraform(this._useUsgAcctServer),
      use_usg_auth_server: cdktf.booleanToTerraform(this._useUsgAuthServer),
      vlan_enabled: cdktf.booleanToTerraform(this._vlanEnabled),
      vlan_wlan_mode: cdktf.stringToTerraform(this._vlanWlanMode),
      acct_server: cdktf.listMapper(radiusProfileAcctServerToTerraform, true)(this._acctServer.internalValue),
      auth_server: cdktf.listMapper(radiusProfileAuthServerToTerraform, true)(this._authServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accounting_enabled: {
        value: cdktf.booleanToHclTerraform(this._accountingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interim_update_enabled: {
        value: cdktf.booleanToHclTerraform(this._interimUpdateEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interim_update_interval: {
        value: cdktf.numberToHclTerraform(this._interimUpdateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site: {
        value: cdktf.stringToHclTerraform(this._site),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_usg_acct_server: {
        value: cdktf.booleanToHclTerraform(this._useUsgAcctServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_usg_auth_server: {
        value: cdktf.booleanToHclTerraform(this._useUsgAuthServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan_enabled: {
        value: cdktf.booleanToHclTerraform(this._vlanEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan_wlan_mode: {
        value: cdktf.stringToHclTerraform(this._vlanWlanMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acct_server: {
        value: cdktf.listMapperHcl(radiusProfileAcctServerToHclTerraform, true)(this._acctServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RadiusProfileAcctServerList",
      },
      auth_server: {
        value: cdktf.listMapperHcl(radiusProfileAuthServerToHclTerraform, true)(this._authServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RadiusProfileAuthServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
