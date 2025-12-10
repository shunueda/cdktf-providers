// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#delete_mode Vtp#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#device Vtp#device}
  */
  readonly device?: string;
  /**
  * Set the name of the VTP administrative domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#domain Vtp#domain}
  */
  readonly domain?: string;
  /**
  * Configure IFS filesystem file where VTP configuration is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#file Vtp#file}
  */
  readonly file?: string;
  /**
  * The name of the interface providing the VTP updater ID for this device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#interface Vtp#interface}
  */
  readonly interface?: string;
  /**
  * Use only this interface's IP address as the VTP IP updater address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#interface_only Vtp#interface_only}
  */
  readonly interfaceOnly?: boolean | cdktf.IResolvable;
  /**
  * Set the device to client mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#mode_client Vtp#mode_client}
  */
  readonly modeClient?: boolean | cdktf.IResolvable;
  /**
  * Set the mode for MST VTP instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#mode_client_mst Vtp#mode_client_mst}
  */
  readonly modeClientMst?: boolean | cdktf.IResolvable;
  /**
  * Set the mode for unknown VTP instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#mode_client_unknown Vtp#mode_client_unknown}
  */
  readonly modeClientUnknown?: boolean | cdktf.IResolvable;
  /**
  * Set the mode for VLAN VTP instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#mode_client_vlan Vtp#mode_client_vlan}
  */
  readonly modeClientVlan?: boolean | cdktf.IResolvable;
  /**
  * Set the device to off mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#mode_off Vtp#mode_off}
  */
  readonly modeOff?: boolean | cdktf.IResolvable;
  /**
  * Set the mode for MST VTP instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#mode_off_mst Vtp#mode_off_mst}
  */
  readonly modeOffMst?: boolean | cdktf.IResolvable;
  /**
  * Set the mode for unknown VTP instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#mode_off_unknown Vtp#mode_off_unknown}
  */
  readonly modeOffUnknown?: boolean | cdktf.IResolvable;
  /**
  * Set the mode for VLAN VTP instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#mode_off_vlan Vtp#mode_off_vlan}
  */
  readonly modeOffVlan?: boolean | cdktf.IResolvable;
  /**
  * Set the device to server mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#mode_server Vtp#mode_server}
  */
  readonly modeServer?: boolean | cdktf.IResolvable;
  /**
  * Set the mode for MST VTP instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#mode_server_mst Vtp#mode_server_mst}
  */
  readonly modeServerMst?: boolean | cdktf.IResolvable;
  /**
  * Set the mode for unknown VTP instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#mode_server_unknown Vtp#mode_server_unknown}
  */
  readonly modeServerUnknown?: boolean | cdktf.IResolvable;
  /**
  * Set the mode for VLAN VTP instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#mode_server_vlan Vtp#mode_server_vlan}
  */
  readonly modeServerVlan?: boolean | cdktf.IResolvable;
  /**
  * Set the device to transparent mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#mode_transparent Vtp#mode_transparent}
  */
  readonly modeTransparent?: boolean | cdktf.IResolvable;
  /**
  * Set the mode for MST VTP instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#mode_transparent_mst Vtp#mode_transparent_mst}
  */
  readonly modeTransparentMst?: boolean | cdktf.IResolvable;
  /**
  * Set the mode for unknown VTP instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#mode_transparent_unknown Vtp#mode_transparent_unknown}
  */
  readonly modeTransparentUnknown?: boolean | cdktf.IResolvable;
  /**
  * Set the mode for VLAN VTP instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#mode_transparent_vlan Vtp#mode_transparent_vlan}
  */
  readonly modeTransparentVlan?: boolean | cdktf.IResolvable;
  /**
  * The ascii password for the VTP administrative domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#password Vtp#password}
  */
  readonly password?: string;
  /**
  * Set the VTP password hidden option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#password_hidden Vtp#password_hidden}
  */
  readonly passwordHidden?: boolean | cdktf.IResolvable;
  /**
  * Specify the vtp password in encrypted form
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#password_secret Vtp#password_secret}
  */
  readonly passwordSecret?: boolean | cdktf.IResolvable;
  /**
  * Set the administrative domain to permit pruning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#pruning Vtp#pruning}
  */
  readonly pruning?: boolean | cdktf.IResolvable;
  /**
  * Set the administrative domain to VTP version
  *   - Range: `1`-`3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#version Vtp#version}
  */
  readonly version?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp iosxe_vtp}
*/
export class Vtp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_vtp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vtp to import
  * @param importFromId The id of the existing Vtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_vtp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/vtp iosxe_vtp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VtpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VtpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_vtp',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._domain = config.domain;
    this._file = config.file;
    this._interface = config.interface;
    this._interfaceOnly = config.interfaceOnly;
    this._modeClient = config.modeClient;
    this._modeClientMst = config.modeClientMst;
    this._modeClientUnknown = config.modeClientUnknown;
    this._modeClientVlan = config.modeClientVlan;
    this._modeOff = config.modeOff;
    this._modeOffMst = config.modeOffMst;
    this._modeOffUnknown = config.modeOffUnknown;
    this._modeOffVlan = config.modeOffVlan;
    this._modeServer = config.modeServer;
    this._modeServerMst = config.modeServerMst;
    this._modeServerUnknown = config.modeServerUnknown;
    this._modeServerVlan = config.modeServerVlan;
    this._modeTransparent = config.modeTransparent;
    this._modeTransparentMst = config.modeTransparentMst;
    this._modeTransparentUnknown = config.modeTransparentUnknown;
    this._modeTransparentVlan = config.modeTransparentVlan;
    this._password = config.password;
    this._passwordHidden = config.passwordHidden;
    this._passwordSecret = config.passwordSecret;
    this._pruning = config.pruning;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_only - computed: false, optional: true, required: false
  private _interfaceOnly?: boolean | cdktf.IResolvable; 
  public get interfaceOnly() {
    return this.getBooleanAttribute('interface_only');
  }
  public set interfaceOnly(value: boolean | cdktf.IResolvable) {
    this._interfaceOnly = value;
  }
  public resetInterfaceOnly() {
    this._interfaceOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceOnlyInput() {
    return this._interfaceOnly;
  }

  // mode_client - computed: false, optional: true, required: false
  private _modeClient?: boolean | cdktf.IResolvable; 
  public get modeClient() {
    return this.getBooleanAttribute('mode_client');
  }
  public set modeClient(value: boolean | cdktf.IResolvable) {
    this._modeClient = value;
  }
  public resetModeClient() {
    this._modeClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeClientInput() {
    return this._modeClient;
  }

  // mode_client_mst - computed: false, optional: true, required: false
  private _modeClientMst?: boolean | cdktf.IResolvable; 
  public get modeClientMst() {
    return this.getBooleanAttribute('mode_client_mst');
  }
  public set modeClientMst(value: boolean | cdktf.IResolvable) {
    this._modeClientMst = value;
  }
  public resetModeClientMst() {
    this._modeClientMst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeClientMstInput() {
    return this._modeClientMst;
  }

  // mode_client_unknown - computed: false, optional: true, required: false
  private _modeClientUnknown?: boolean | cdktf.IResolvable; 
  public get modeClientUnknown() {
    return this.getBooleanAttribute('mode_client_unknown');
  }
  public set modeClientUnknown(value: boolean | cdktf.IResolvable) {
    this._modeClientUnknown = value;
  }
  public resetModeClientUnknown() {
    this._modeClientUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeClientUnknownInput() {
    return this._modeClientUnknown;
  }

  // mode_client_vlan - computed: false, optional: true, required: false
  private _modeClientVlan?: boolean | cdktf.IResolvable; 
  public get modeClientVlan() {
    return this.getBooleanAttribute('mode_client_vlan');
  }
  public set modeClientVlan(value: boolean | cdktf.IResolvable) {
    this._modeClientVlan = value;
  }
  public resetModeClientVlan() {
    this._modeClientVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeClientVlanInput() {
    return this._modeClientVlan;
  }

  // mode_off - computed: false, optional: true, required: false
  private _modeOff?: boolean | cdktf.IResolvable; 
  public get modeOff() {
    return this.getBooleanAttribute('mode_off');
  }
  public set modeOff(value: boolean | cdktf.IResolvable) {
    this._modeOff = value;
  }
  public resetModeOff() {
    this._modeOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeOffInput() {
    return this._modeOff;
  }

  // mode_off_mst - computed: false, optional: true, required: false
  private _modeOffMst?: boolean | cdktf.IResolvable; 
  public get modeOffMst() {
    return this.getBooleanAttribute('mode_off_mst');
  }
  public set modeOffMst(value: boolean | cdktf.IResolvable) {
    this._modeOffMst = value;
  }
  public resetModeOffMst() {
    this._modeOffMst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeOffMstInput() {
    return this._modeOffMst;
  }

  // mode_off_unknown - computed: false, optional: true, required: false
  private _modeOffUnknown?: boolean | cdktf.IResolvable; 
  public get modeOffUnknown() {
    return this.getBooleanAttribute('mode_off_unknown');
  }
  public set modeOffUnknown(value: boolean | cdktf.IResolvable) {
    this._modeOffUnknown = value;
  }
  public resetModeOffUnknown() {
    this._modeOffUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeOffUnknownInput() {
    return this._modeOffUnknown;
  }

  // mode_off_vlan - computed: false, optional: true, required: false
  private _modeOffVlan?: boolean | cdktf.IResolvable; 
  public get modeOffVlan() {
    return this.getBooleanAttribute('mode_off_vlan');
  }
  public set modeOffVlan(value: boolean | cdktf.IResolvable) {
    this._modeOffVlan = value;
  }
  public resetModeOffVlan() {
    this._modeOffVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeOffVlanInput() {
    return this._modeOffVlan;
  }

  // mode_server - computed: false, optional: true, required: false
  private _modeServer?: boolean | cdktf.IResolvable; 
  public get modeServer() {
    return this.getBooleanAttribute('mode_server');
  }
  public set modeServer(value: boolean | cdktf.IResolvable) {
    this._modeServer = value;
  }
  public resetModeServer() {
    this._modeServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeServerInput() {
    return this._modeServer;
  }

  // mode_server_mst - computed: false, optional: true, required: false
  private _modeServerMst?: boolean | cdktf.IResolvable; 
  public get modeServerMst() {
    return this.getBooleanAttribute('mode_server_mst');
  }
  public set modeServerMst(value: boolean | cdktf.IResolvable) {
    this._modeServerMst = value;
  }
  public resetModeServerMst() {
    this._modeServerMst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeServerMstInput() {
    return this._modeServerMst;
  }

  // mode_server_unknown - computed: false, optional: true, required: false
  private _modeServerUnknown?: boolean | cdktf.IResolvable; 
  public get modeServerUnknown() {
    return this.getBooleanAttribute('mode_server_unknown');
  }
  public set modeServerUnknown(value: boolean | cdktf.IResolvable) {
    this._modeServerUnknown = value;
  }
  public resetModeServerUnknown() {
    this._modeServerUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeServerUnknownInput() {
    return this._modeServerUnknown;
  }

  // mode_server_vlan - computed: false, optional: true, required: false
  private _modeServerVlan?: boolean | cdktf.IResolvable; 
  public get modeServerVlan() {
    return this.getBooleanAttribute('mode_server_vlan');
  }
  public set modeServerVlan(value: boolean | cdktf.IResolvable) {
    this._modeServerVlan = value;
  }
  public resetModeServerVlan() {
    this._modeServerVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeServerVlanInput() {
    return this._modeServerVlan;
  }

  // mode_transparent - computed: false, optional: true, required: false
  private _modeTransparent?: boolean | cdktf.IResolvable; 
  public get modeTransparent() {
    return this.getBooleanAttribute('mode_transparent');
  }
  public set modeTransparent(value: boolean | cdktf.IResolvable) {
    this._modeTransparent = value;
  }
  public resetModeTransparent() {
    this._modeTransparent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeTransparentInput() {
    return this._modeTransparent;
  }

  // mode_transparent_mst - computed: false, optional: true, required: false
  private _modeTransparentMst?: boolean | cdktf.IResolvable; 
  public get modeTransparentMst() {
    return this.getBooleanAttribute('mode_transparent_mst');
  }
  public set modeTransparentMst(value: boolean | cdktf.IResolvable) {
    this._modeTransparentMst = value;
  }
  public resetModeTransparentMst() {
    this._modeTransparentMst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeTransparentMstInput() {
    return this._modeTransparentMst;
  }

  // mode_transparent_unknown - computed: false, optional: true, required: false
  private _modeTransparentUnknown?: boolean | cdktf.IResolvable; 
  public get modeTransparentUnknown() {
    return this.getBooleanAttribute('mode_transparent_unknown');
  }
  public set modeTransparentUnknown(value: boolean | cdktf.IResolvable) {
    this._modeTransparentUnknown = value;
  }
  public resetModeTransparentUnknown() {
    this._modeTransparentUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeTransparentUnknownInput() {
    return this._modeTransparentUnknown;
  }

  // mode_transparent_vlan - computed: false, optional: true, required: false
  private _modeTransparentVlan?: boolean | cdktf.IResolvable; 
  public get modeTransparentVlan() {
    return this.getBooleanAttribute('mode_transparent_vlan');
  }
  public set modeTransparentVlan(value: boolean | cdktf.IResolvable) {
    this._modeTransparentVlan = value;
  }
  public resetModeTransparentVlan() {
    this._modeTransparentVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeTransparentVlanInput() {
    return this._modeTransparentVlan;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_hidden - computed: false, optional: true, required: false
  private _passwordHidden?: boolean | cdktf.IResolvable; 
  public get passwordHidden() {
    return this.getBooleanAttribute('password_hidden');
  }
  public set passwordHidden(value: boolean | cdktf.IResolvable) {
    this._passwordHidden = value;
  }
  public resetPasswordHidden() {
    this._passwordHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordHiddenInput() {
    return this._passwordHidden;
  }

  // password_secret - computed: false, optional: true, required: false
  private _passwordSecret?: boolean | cdktf.IResolvable; 
  public get passwordSecret() {
    return this.getBooleanAttribute('password_secret');
  }
  public set passwordSecret(value: boolean | cdktf.IResolvable) {
    this._passwordSecret = value;
  }
  public resetPasswordSecret() {
    this._passwordSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretInput() {
    return this._passwordSecret;
  }

  // pruning - computed: false, optional: true, required: false
  private _pruning?: boolean | cdktf.IResolvable; 
  public get pruning() {
    return this.getBooleanAttribute('pruning');
  }
  public set pruning(value: boolean | cdktf.IResolvable) {
    this._pruning = value;
  }
  public resetPruning() {
    this._pruning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pruningInput() {
    return this._pruning;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      domain: cdktf.stringToTerraform(this._domain),
      file: cdktf.stringToTerraform(this._file),
      interface: cdktf.stringToTerraform(this._interface),
      interface_only: cdktf.booleanToTerraform(this._interfaceOnly),
      mode_client: cdktf.booleanToTerraform(this._modeClient),
      mode_client_mst: cdktf.booleanToTerraform(this._modeClientMst),
      mode_client_unknown: cdktf.booleanToTerraform(this._modeClientUnknown),
      mode_client_vlan: cdktf.booleanToTerraform(this._modeClientVlan),
      mode_off: cdktf.booleanToTerraform(this._modeOff),
      mode_off_mst: cdktf.booleanToTerraform(this._modeOffMst),
      mode_off_unknown: cdktf.booleanToTerraform(this._modeOffUnknown),
      mode_off_vlan: cdktf.booleanToTerraform(this._modeOffVlan),
      mode_server: cdktf.booleanToTerraform(this._modeServer),
      mode_server_mst: cdktf.booleanToTerraform(this._modeServerMst),
      mode_server_unknown: cdktf.booleanToTerraform(this._modeServerUnknown),
      mode_server_vlan: cdktf.booleanToTerraform(this._modeServerVlan),
      mode_transparent: cdktf.booleanToTerraform(this._modeTransparent),
      mode_transparent_mst: cdktf.booleanToTerraform(this._modeTransparentMst),
      mode_transparent_unknown: cdktf.booleanToTerraform(this._modeTransparentUnknown),
      mode_transparent_vlan: cdktf.booleanToTerraform(this._modeTransparentVlan),
      password: cdktf.stringToTerraform(this._password),
      password_hidden: cdktf.booleanToTerraform(this._passwordHidden),
      password_secret: cdktf.booleanToTerraform(this._passwordSecret),
      pruning: cdktf.booleanToTerraform(this._pruning),
      version: cdktf.numberToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file: {
        value: cdktf.stringToHclTerraform(this._file),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_only: {
        value: cdktf.booleanToHclTerraform(this._interfaceOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_client: {
        value: cdktf.booleanToHclTerraform(this._modeClient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_client_mst: {
        value: cdktf.booleanToHclTerraform(this._modeClientMst),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_client_unknown: {
        value: cdktf.booleanToHclTerraform(this._modeClientUnknown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_client_vlan: {
        value: cdktf.booleanToHclTerraform(this._modeClientVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_off: {
        value: cdktf.booleanToHclTerraform(this._modeOff),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_off_mst: {
        value: cdktf.booleanToHclTerraform(this._modeOffMst),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_off_unknown: {
        value: cdktf.booleanToHclTerraform(this._modeOffUnknown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_off_vlan: {
        value: cdktf.booleanToHclTerraform(this._modeOffVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_server: {
        value: cdktf.booleanToHclTerraform(this._modeServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_server_mst: {
        value: cdktf.booleanToHclTerraform(this._modeServerMst),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_server_unknown: {
        value: cdktf.booleanToHclTerraform(this._modeServerUnknown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_server_vlan: {
        value: cdktf.booleanToHclTerraform(this._modeServerVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_transparent: {
        value: cdktf.booleanToHclTerraform(this._modeTransparent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_transparent_mst: {
        value: cdktf.booleanToHclTerraform(this._modeTransparentMst),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_transparent_unknown: {
        value: cdktf.booleanToHclTerraform(this._modeTransparentUnknown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_transparent_vlan: {
        value: cdktf.booleanToHclTerraform(this._modeTransparentVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_hidden: {
        value: cdktf.booleanToHclTerraform(this._passwordHidden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_secret: {
        value: cdktf.booleanToHclTerraform(this._passwordSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pruning: {
        value: cdktf.booleanToHclTerraform(this._pruning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
