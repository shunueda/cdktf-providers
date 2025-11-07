// https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_rdp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGuacamoleConnectionRdpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_rdp#id DataGuacamoleConnectionRdp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Numeric identifier of the guacamole connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_rdp#identifier DataGuacamoleConnectionRdp#identifier}
  */
  readonly identifier?: string;
  /**
  * Path of connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_rdp#path DataGuacamoleConnectionRdp#path}
  */
  readonly path?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_rdp#parameters DataGuacamoleConnectionRdp#parameters}
  */
  readonly parameters?: DataGuacamoleConnectionRdpParameters;
}
export interface DataGuacamoleConnectionRdpAttributes {
}

export function dataGuacamoleConnectionRdpAttributesToTerraform(struct?: DataGuacamoleConnectionRdpAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGuacamoleConnectionRdpAttributesToHclTerraform(struct?: DataGuacamoleConnectionRdpAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGuacamoleConnectionRdpAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGuacamoleConnectionRdpAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGuacamoleConnectionRdpAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failover_only - computed: true, optional: false, required: false
  public get failoverOnly() {
    return this.getBooleanAttribute('failover_only');
  }

  // guacd_encryption - computed: true, optional: false, required: false
  public get guacdEncryption() {
    return this.getStringAttribute('guacd_encryption');
  }

  // guacd_hostname - computed: true, optional: false, required: false
  public get guacdHostname() {
    return this.getStringAttribute('guacd_hostname');
  }

  // guacd_port - computed: true, optional: false, required: false
  public get guacdPort() {
    return this.getStringAttribute('guacd_port');
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getStringAttribute('max_connections');
  }

  // max_connections_per_user - computed: true, optional: false, required: false
  public get maxConnectionsPerUser() {
    return this.getStringAttribute('max_connections_per_user');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getStringAttribute('weight');
  }
}

export class DataGuacamoleConnectionRdpAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataGuacamoleConnectionRdpAttributesOutputReference {
    return new DataGuacamoleConnectionRdpAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGuacamoleConnectionRdpParameters {
}

export function dataGuacamoleConnectionRdpParametersToTerraform(struct?: DataGuacamoleConnectionRdpParametersOutputReference | DataGuacamoleConnectionRdpParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGuacamoleConnectionRdpParametersToHclTerraform(struct?: DataGuacamoleConnectionRdpParametersOutputReference | DataGuacamoleConnectionRdpParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGuacamoleConnectionRdpParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataGuacamoleConnectionRdpParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGuacamoleConnectionRdpParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // administrator_console - computed: true, optional: false, required: false
  public get administratorConsole() {
    return this.getBooleanAttribute('administrator_console');
  }

  // client_name - computed: true, optional: false, required: false
  public get clientName() {
    return this.getStringAttribute('client_name');
  }

  // color_depth - computed: true, optional: false, required: false
  public get colorDepth() {
    return this.getStringAttribute('color_depth');
  }

  // console_audio - computed: true, optional: false, required: false
  public get consoleAudio() {
    return this.getBooleanAttribute('console_audio');
  }

  // create_drive_path - computed: true, optional: false, required: false
  public get createDrivePath() {
    return this.getBooleanAttribute('create_drive_path');
  }

  // disable_audio - computed: true, optional: false, required: false
  public get disableAudio() {
    return this.getBooleanAttribute('disable_audio');
  }

  // disable_authentication - computed: true, optional: false, required: false
  public get disableAuthentication() {
    return this.getBooleanAttribute('disable_authentication');
  }

  // disable_bitmap_caching - computed: true, optional: false, required: false
  public get disableBitmapCaching() {
    return this.getBooleanAttribute('disable_bitmap_caching');
  }

  // disable_copy - computed: true, optional: false, required: false
  public get disableCopy() {
    return this.getBooleanAttribute('disable_copy');
  }

  // disable_file_download - computed: true, optional: false, required: false
  public get disableFileDownload() {
    return this.getBooleanAttribute('disable_file_download');
  }

  // disable_file_upload - computed: true, optional: false, required: false
  public get disableFileUpload() {
    return this.getBooleanAttribute('disable_file_upload');
  }

  // disable_glyph_caching - computed: true, optional: false, required: false
  public get disableGlyphCaching() {
    return this.getBooleanAttribute('disable_glyph_caching');
  }

  // disable_offscreen_caching - computed: true, optional: false, required: false
  public get disableOffscreenCaching() {
    return this.getBooleanAttribute('disable_offscreen_caching');
  }

  // disable_paste - computed: true, optional: false, required: false
  public get disablePaste() {
    return this.getBooleanAttribute('disable_paste');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // dpi - computed: true, optional: false, required: false
  public get dpi() {
    return this.getStringAttribute('dpi');
  }

  // drive_name - computed: true, optional: false, required: false
  public get driveName() {
    return this.getStringAttribute('drive_name');
  }

  // drive_path - computed: true, optional: false, required: false
  public get drivePath() {
    return this.getStringAttribute('drive_path');
  }

  // enable_audio_input - computed: true, optional: false, required: false
  public get enableAudioInput() {
    return this.getBooleanAttribute('enable_audio_input');
  }

  // enable_desktop_composition - computed: true, optional: false, required: false
  public get enableDesktopComposition() {
    return this.getBooleanAttribute('enable_desktop_composition');
  }

  // enable_drive - computed: true, optional: false, required: false
  public get enableDrive() {
    return this.getBooleanAttribute('enable_drive');
  }

  // enable_font_smoothing - computed: true, optional: false, required: false
  public get enableFontSmoothing() {
    return this.getBooleanAttribute('enable_font_smoothing');
  }

  // enable_full_window_drag - computed: true, optional: false, required: false
  public get enableFullWindowDrag() {
    return this.getBooleanAttribute('enable_full_window_drag');
  }

  // enable_menu_animations - computed: true, optional: false, required: false
  public get enableMenuAnimations() {
    return this.getBooleanAttribute('enable_menu_animations');
  }

  // enable_printing - computed: true, optional: false, required: false
  public get enablePrinting() {
    return this.getBooleanAttribute('enable_printing');
  }

  // enable_theming - computed: true, optional: false, required: false
  public get enableTheming() {
    return this.getBooleanAttribute('enable_theming');
  }

  // enable_wallpaper - computed: true, optional: false, required: false
  public get enableWallpaper() {
    return this.getBooleanAttribute('enable_wallpaper');
  }

  // gateway_domain - computed: true, optional: false, required: false
  public get gatewayDomain() {
    return this.getStringAttribute('gateway_domain');
  }

  // gateway_hostname - computed: true, optional: false, required: false
  public get gatewayHostname() {
    return this.getStringAttribute('gateway_hostname');
  }

  // gateway_password - computed: true, optional: false, required: false
  public get gatewayPassword() {
    return this.getStringAttribute('gateway_password');
  }

  // gateway_port - computed: true, optional: false, required: false
  public get gatewayPort() {
    return this.getStringAttribute('gateway_port');
  }

  // gateway_username - computed: true, optional: false, required: false
  public get gatewayUsername() {
    return this.getStringAttribute('gateway_username');
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getStringAttribute('height');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ignore_cert - computed: true, optional: false, required: false
  public get ignoreCert() {
    return this.getBooleanAttribute('ignore_cert');
  }

  // initial_program - computed: true, optional: false, required: false
  public get initialProgram() {
    return this.getStringAttribute('initial_program');
  }

  // keyboard_layout - computed: true, optional: false, required: false
  public get keyboardLayout() {
    return this.getStringAttribute('keyboard_layout');
  }

  // load_balance_info - computed: true, optional: false, required: false
  public get loadBalanceInfo() {
    return this.getStringAttribute('load_balance_info');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // preconnection_blob - computed: true, optional: false, required: false
  public get preconnectionBlob() {
    return this.getStringAttribute('preconnection_blob');
  }

  // preconnection_id - computed: true, optional: false, required: false
  public get preconnectionId() {
    return this.getStringAttribute('preconnection_id');
  }

  // printer_name - computed: true, optional: false, required: false
  public get printerName() {
    return this.getStringAttribute('printer_name');
  }

  // readonly - computed: true, optional: false, required: false
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }

  // recording_auto_create_path - computed: true, optional: false, required: false
  public get recordingAutoCreatePath() {
    return this.getBooleanAttribute('recording_auto_create_path');
  }

  // recording_exclude_mouse - computed: true, optional: false, required: false
  public get recordingExcludeMouse() {
    return this.getBooleanAttribute('recording_exclude_mouse');
  }

  // recording_exclude_output - computed: true, optional: false, required: false
  public get recordingExcludeOutput() {
    return this.getBooleanAttribute('recording_exclude_output');
  }

  // recording_include_keys - computed: true, optional: false, required: false
  public get recordingIncludeKeys() {
    return this.getBooleanAttribute('recording_include_keys');
  }

  // recording_name - computed: true, optional: false, required: false
  public get recordingName() {
    return this.getStringAttribute('recording_name');
  }

  // recording_path - computed: true, optional: false, required: false
  public get recordingPath() {
    return this.getStringAttribute('recording_path');
  }

  // remote_app - computed: true, optional: false, required: false
  public get remoteApp() {
    return this.getStringAttribute('remote_app');
  }

  // remote_app_parameters - computed: true, optional: false, required: false
  public get remoteAppParameters() {
    return this.getStringAttribute('remote_app_parameters');
  }

  // remote_app_working_directory - computed: true, optional: false, required: false
  public get remoteAppWorkingDirectory() {
    return this.getStringAttribute('remote_app_working_directory');
  }

  // resize_method - computed: true, optional: false, required: false
  public get resizeMethod() {
    return this.getStringAttribute('resize_method');
  }

  // security_mode - computed: true, optional: false, required: false
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }

  // sftp_disable_file_download - computed: true, optional: false, required: false
  public get sftpDisableFileDownload() {
    return this.getBooleanAttribute('sftp_disable_file_download');
  }

  // sftp_disable_file_upload - computed: true, optional: false, required: false
  public get sftpDisableFileUpload() {
    return this.getBooleanAttribute('sftp_disable_file_upload');
  }

  // sftp_enable - computed: true, optional: false, required: false
  public get sftpEnable() {
    return this.getBooleanAttribute('sftp_enable');
  }

  // sftp_host_key - computed: true, optional: false, required: false
  public get sftpHostKey() {
    return this.getStringAttribute('sftp_host_key');
  }

  // sftp_hostname - computed: true, optional: false, required: false
  public get sftpHostname() {
    return this.getStringAttribute('sftp_hostname');
  }

  // sftp_keepalive_interval - computed: true, optional: false, required: false
  public get sftpKeepaliveInterval() {
    return this.getStringAttribute('sftp_keepalive_interval');
  }

  // sftp_passphrase - computed: true, optional: false, required: false
  public get sftpPassphrase() {
    return this.getStringAttribute('sftp_passphrase');
  }

  // sftp_password - computed: true, optional: false, required: false
  public get sftpPassword() {
    return this.getStringAttribute('sftp_password');
  }

  // sftp_port - computed: true, optional: false, required: false
  public get sftpPort() {
    return this.getStringAttribute('sftp_port');
  }

  // sftp_private_key - computed: true, optional: false, required: false
  public get sftpPrivateKey() {
    return this.getStringAttribute('sftp_private_key');
  }

  // sftp_root_directory - computed: true, optional: false, required: false
  public get sftpRootDirectory() {
    return this.getStringAttribute('sftp_root_directory');
  }

  // sftp_upload_directory - computed: true, optional: false, required: false
  public get sftpUploadDirectory() {
    return this.getStringAttribute('sftp_upload_directory');
  }

  // sftp_username - computed: true, optional: false, required: false
  public get sftpUsername() {
    return this.getStringAttribute('sftp_username');
  }

  // static_channels - computed: true, optional: false, required: false
  public get staticChannels() {
    return this.getStringAttribute('static_channels');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getStringAttribute('width');
  }

  // wol_boot_wait_time - computed: true, optional: false, required: false
  public get wolBootWaitTime() {
    return this.getStringAttribute('wol_boot_wait_time');
  }

  // wol_broadcast_address - computed: true, optional: false, required: false
  public get wolBroadcastAddress() {
    return this.getStringAttribute('wol_broadcast_address');
  }

  // wol_mac_address - computed: true, optional: false, required: false
  public get wolMacAddress() {
    return this.getStringAttribute('wol_mac_address');
  }

  // wol_send_packet - computed: true, optional: false, required: false
  public get wolSendPacket() {
    return this.getBooleanAttribute('wol_send_packet');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_rdp guacamole_connection_rdp}
*/
export class DataGuacamoleConnectionRdp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "guacamole_connection_rdp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGuacamoleConnectionRdp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGuacamoleConnectionRdp to import
  * @param importFromId The id of the existing DataGuacamoleConnectionRdp that should be imported. Refer to the {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_rdp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGuacamoleConnectionRdp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "guacamole_connection_rdp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_rdp guacamole_connection_rdp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGuacamoleConnectionRdpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGuacamoleConnectionRdpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'guacamole_connection_rdp',
      terraformGeneratorMetadata: {
        providerName: 'guacamole',
        providerVersion: '1.4.1'
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
    this._identifier = config.identifier;
    this._path = config.path;
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_connections - computed: true, optional: false, required: false
  public get activeConnections() {
    return this.getNumberAttribute('active_connections');
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataGuacamoleConnectionRdpAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
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

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_identifier - computed: true, optional: false, required: false
  public get parentIdentifier() {
    return this.getStringAttribute('parent_identifier');
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataGuacamoleConnectionRdpParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataGuacamoleConnectionRdpParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      path: cdktf.stringToTerraform(this._path),
      parameters: dataGuacamoleConnectionRdpParametersToTerraform(this._parameters.internalValue),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: dataGuacamoleConnectionRdpParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataGuacamoleConnectionRdpParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
