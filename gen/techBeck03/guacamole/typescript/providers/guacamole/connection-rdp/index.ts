// https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionRdpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#id ConnectionRdp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the guacamole connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#name ConnectionRdp#name}
  */
  readonly name: string;
  /**
  * Parent identifier of the guacamole connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#parent_identifier ConnectionRdp#parent_identifier}
  */
  readonly parentIdentifier?: string;
  /**
  * attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#attributes ConnectionRdp#attributes}
  */
  readonly attributes?: ConnectionRdpAttributes;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#parameters ConnectionRdp#parameters}
  */
  readonly parameters: ConnectionRdpParameters;
}
export interface ConnectionRdpAttributes {
  /**
  * Use load balancing for failover only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#failover_only ConnectionRdp#failover_only}
  */
  readonly failoverOnly?: boolean | cdktf.IResolvable;
  /**
  * Guacd proxy encryption type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#guacd_encryption ConnectionRdp#guacd_encryption}
  */
  readonly guacdEncryption?: string;
  /**
  * Guacd proxy hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#guacd_hostname ConnectionRdp#guacd_hostname}
  */
  readonly guacdHostname?: string;
  /**
  * Guacd proxy port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#guacd_port ConnectionRdp#guacd_port}
  */
  readonly guacdPort?: string;
  /**
  * Maximum concurrent total connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#max_connections ConnectionRdp#max_connections}
  */
  readonly maxConnections?: string;
  /**
  * Maximum concurrent connections per user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#max_connections_per_user ConnectionRdp#max_connections_per_user}
  */
  readonly maxConnectionsPerUser?: string;
  /**
  * Load balancing connection weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#weight ConnectionRdp#weight}
  */
  readonly weight?: string;
}

export function connectionRdpAttributesToTerraform(struct?: ConnectionRdpAttributesOutputReference | ConnectionRdpAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failover_only: cdktf.booleanToTerraform(struct!.failoverOnly),
    guacd_encryption: cdktf.stringToTerraform(struct!.guacdEncryption),
    guacd_hostname: cdktf.stringToTerraform(struct!.guacdHostname),
    guacd_port: cdktf.stringToTerraform(struct!.guacdPort),
    max_connections: cdktf.stringToTerraform(struct!.maxConnections),
    max_connections_per_user: cdktf.stringToTerraform(struct!.maxConnectionsPerUser),
    weight: cdktf.stringToTerraform(struct!.weight),
  }
}


export function connectionRdpAttributesToHclTerraform(struct?: ConnectionRdpAttributesOutputReference | ConnectionRdpAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failover_only: {
      value: cdktf.booleanToHclTerraform(struct!.failoverOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    guacd_encryption: {
      value: cdktf.stringToHclTerraform(struct!.guacdEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guacd_hostname: {
      value: cdktf.stringToHclTerraform(struct!.guacdHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guacd_port: {
      value: cdktf.stringToHclTerraform(struct!.guacdPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connections: {
      value: cdktf.stringToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connections_per_user: {
      value: cdktf.stringToHclTerraform(struct!.maxConnectionsPerUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.stringToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionRdpAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionRdpAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failoverOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverOnly = this._failoverOnly;
    }
    if (this._guacdEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.guacdEncryption = this._guacdEncryption;
    }
    if (this._guacdHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.guacdHostname = this._guacdHostname;
    }
    if (this._guacdPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.guacdPort = this._guacdPort;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxConnectionsPerUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionsPerUser = this._maxConnectionsPerUser;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionRdpAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failoverOnly = undefined;
      this._guacdEncryption = undefined;
      this._guacdHostname = undefined;
      this._guacdPort = undefined;
      this._maxConnections = undefined;
      this._maxConnectionsPerUser = undefined;
      this._weight = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failoverOnly = value.failoverOnly;
      this._guacdEncryption = value.guacdEncryption;
      this._guacdHostname = value.guacdHostname;
      this._guacdPort = value.guacdPort;
      this._maxConnections = value.maxConnections;
      this._maxConnectionsPerUser = value.maxConnectionsPerUser;
      this._weight = value.weight;
    }
  }

  // failover_only - computed: true, optional: true, required: false
  private _failoverOnly?: boolean | cdktf.IResolvable; 
  public get failoverOnly() {
    return this.getBooleanAttribute('failover_only');
  }
  public set failoverOnly(value: boolean | cdktf.IResolvable) {
    this._failoverOnly = value;
  }
  public resetFailoverOnly() {
    this._failoverOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverOnlyInput() {
    return this._failoverOnly;
  }

  // guacd_encryption - computed: true, optional: true, required: false
  private _guacdEncryption?: string; 
  public get guacdEncryption() {
    return this.getStringAttribute('guacd_encryption');
  }
  public set guacdEncryption(value: string) {
    this._guacdEncryption = value;
  }
  public resetGuacdEncryption() {
    this._guacdEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guacdEncryptionInput() {
    return this._guacdEncryption;
  }

  // guacd_hostname - computed: true, optional: true, required: false
  private _guacdHostname?: string; 
  public get guacdHostname() {
    return this.getStringAttribute('guacd_hostname');
  }
  public set guacdHostname(value: string) {
    this._guacdHostname = value;
  }
  public resetGuacdHostname() {
    this._guacdHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guacdHostnameInput() {
    return this._guacdHostname;
  }

  // guacd_port - computed: true, optional: true, required: false
  private _guacdPort?: string; 
  public get guacdPort() {
    return this.getStringAttribute('guacd_port');
  }
  public set guacdPort(value: string) {
    this._guacdPort = value;
  }
  public resetGuacdPort() {
    this._guacdPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guacdPortInput() {
    return this._guacdPort;
  }

  // max_connections - computed: true, optional: true, required: false
  private _maxConnections?: string; 
  public get maxConnections() {
    return this.getStringAttribute('max_connections');
  }
  public set maxConnections(value: string) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_connections_per_user - computed: true, optional: true, required: false
  private _maxConnectionsPerUser?: string; 
  public get maxConnectionsPerUser() {
    return this.getStringAttribute('max_connections_per_user');
  }
  public set maxConnectionsPerUser(value: string) {
    this._maxConnectionsPerUser = value;
  }
  public resetMaxConnectionsPerUser() {
    this._maxConnectionsPerUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsPerUserInput() {
    return this._maxConnectionsPerUser;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: string; 
  public get weight() {
    return this.getStringAttribute('weight');
  }
  public set weight(value: string) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
export interface ConnectionRdpParameters {
  /**
  * Enable administrator console
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#administrator_console ConnectionRdp#administrator_console}
  */
  readonly administratorConsole?: boolean | cdktf.IResolvable;
  /**
  * Client name for rdp connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#client_name ConnectionRdp#client_name}
  */
  readonly clientName?: string;
  /**
  * Color depth of rdp connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#color_depth ConnectionRdp#color_depth}
  */
  readonly colorDepth?: string;
  /**
  * Support audio in console
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#console_audio ConnectionRdp#console_audio}
  */
  readonly consoleAudio?: boolean | cdktf.IResolvable;
  /**
  * Create drive path for device redirection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#create_drive_path ConnectionRdp#create_drive_path}
  */
  readonly createDrivePath?: boolean | cdktf.IResolvable;
  /**
  * Disable audio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#disable_audio ConnectionRdp#disable_audio}
  */
  readonly disableAudio?: boolean | cdktf.IResolvable;
  /**
  * Disable rdp authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#disable_authentication ConnectionRdp#disable_authentication}
  */
  readonly disableAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Disable bitmap caching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#disable_bitmap_caching ConnectionRdp#disable_bitmap_caching}
  */
  readonly disableBitmapCaching?: boolean | cdktf.IResolvable;
  /**
  * Disable copying from terminal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#disable_copy ConnectionRdp#disable_copy}
  */
  readonly disableCopy?: boolean | cdktf.IResolvable;
  /**
  * Disable file download for device redirection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#disable_file_download ConnectionRdp#disable_file_download}
  */
  readonly disableFileDownload?: boolean | cdktf.IResolvable;
  /**
  * Disable file upload for device redirection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#disable_file_upload ConnectionRdp#disable_file_upload}
  */
  readonly disableFileUpload?: boolean | cdktf.IResolvable;
  /**
  * Disable glyph caching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#disable_glyph_caching ConnectionRdp#disable_glyph_caching}
  */
  readonly disableGlyphCaching?: boolean | cdktf.IResolvable;
  /**
  * Disable off-screen caching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#disable_offscreen_caching ConnectionRdp#disable_offscreen_caching}
  */
  readonly disableOffscreenCaching?: boolean | cdktf.IResolvable;
  /**
  * Disable pasting from client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#disable_paste ConnectionRdp#disable_paste}
  */
  readonly disablePaste?: boolean | cdktf.IResolvable;
  /**
  * Domain name of rdp connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#domain ConnectionRdp#domain}
  */
  readonly domain?: string;
  /**
  * Resolution (DPI) of rdp connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#dpi ConnectionRdp#dpi}
  */
  readonly dpi?: string;
  /**
  * Drive name for device redirection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#drive_name ConnectionRdp#drive_name}
  */
  readonly driveName?: string;
  /**
  * Drive path for device redirection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#drive_path ConnectionRdp#drive_path}
  */
  readonly drivePath?: string;
  /**
  * Enable audio input (microphone)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#enable_audio_input ConnectionRdp#enable_audio_input}
  */
  readonly enableAudioInput?: boolean | cdktf.IResolvable;
  /**
  * Enable desktop composition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#enable_desktop_composition ConnectionRdp#enable_desktop_composition}
  */
  readonly enableDesktopComposition?: boolean | cdktf.IResolvable;
  /**
  * Enable drive for device redirection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#enable_drive ConnectionRdp#enable_drive}
  */
  readonly enableDrive?: boolean | cdktf.IResolvable;
  /**
  * Enable font smoothing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#enable_font_smoothing ConnectionRdp#enable_font_smoothing}
  */
  readonly enableFontSmoothing?: boolean | cdktf.IResolvable;
  /**
  * Enable full window drag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#enable_full_window_drag ConnectionRdp#enable_full_window_drag}
  */
  readonly enableFullWindowDrag?: boolean | cdktf.IResolvable;
  /**
  * Enable menu animations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#enable_menu_animations ConnectionRdp#enable_menu_animations}
  */
  readonly enableMenuAnimations?: boolean | cdktf.IResolvable;
  /**
  * Enable printing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#enable_printing ConnectionRdp#enable_printing}
  */
  readonly enablePrinting?: boolean | cdktf.IResolvable;
  /**
  * Enable theming
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#enable_theming ConnectionRdp#enable_theming}
  */
  readonly enableTheming?: boolean | cdktf.IResolvable;
  /**
  * Enable wallpaper
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#enable_wallpaper ConnectionRdp#enable_wallpaper}
  */
  readonly enableWallpaper?: boolean | cdktf.IResolvable;
  /**
  * RDS gateway domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#gateway_domain ConnectionRdp#gateway_domain}
  */
  readonly gatewayDomain?: string;
  /**
  * RDS gateway hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#gateway_hostname ConnectionRdp#gateway_hostname}
  */
  readonly gatewayHostname?: string;
  /**
  * RDS gateway password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#gateway_password ConnectionRdp#gateway_password}
  */
  readonly gatewayPassword?: string;
  /**
  * RDS gateway port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#gateway_port ConnectionRdp#gateway_port}
  */
  readonly gatewayPort?: string;
  /**
  * RDS gateway username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#gateway_username ConnectionRdp#gateway_username}
  */
  readonly gatewayUsername?: string;
  /**
  * Screen height (px)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#height ConnectionRdp#height}
  */
  readonly height?: string;
  /**
  * Hostname of target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#hostname ConnectionRdp#hostname}
  */
  readonly hostname: string;
  /**
  * Ignore domain certificate warnings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#ignore_cert ConnectionRdp#ignore_cert}
  */
  readonly ignoreCert?: boolean | cdktf.IResolvable;
  /**
  * Initial program for rdp connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#initial_program ConnectionRdp#initial_program}
  */
  readonly initialProgram?: string;
  /**
  * Keyboard layout for rdp connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#keyboard_layout ConnectionRdp#keyboard_layout}
  */
  readonly keyboardLayout?: string;
  /**
  * Load balance info/cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#load_balance_info ConnectionRdp#load_balance_info}
  */
  readonly loadBalanceInfo?: string;
  /**
  * Password for rdp connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#password ConnectionRdp#password}
  */
  readonly password?: string;
  /**
  * Port for target connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#port ConnectionRdp#port}
  */
  readonly port?: string;
  /**
  * Preconnection BLOB (VM ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#preconnection_blob ConnectionRdp#preconnection_blob}
  */
  readonly preconnectionBlob?: string;
  /**
  * RDP source ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#preconnection_id ConnectionRdp#preconnection_id}
  */
  readonly preconnectionId?: string;
  /**
  * Redirected printer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#printer_name ConnectionRdp#printer_name}
  */
  readonly printerName?: string;
  /**
  * Display is readonly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#readonly ConnectionRdp#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
  /**
  * Auto create recording path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#recording_auto_create_path ConnectionRdp#recording_auto_create_path}
  */
  readonly recordingAutoCreatePath?: boolean | cdktf.IResolvable;
  /**
  * Exclude mouse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#recording_exclude_mouse ConnectionRdp#recording_exclude_mouse}
  */
  readonly recordingExcludeMouse?: boolean | cdktf.IResolvable;
  /**
  * Exclude graphics/streams
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#recording_exclude_output ConnectionRdp#recording_exclude_output}
  */
  readonly recordingExcludeOutput?: boolean | cdktf.IResolvable;
  /**
  * Include key events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#recording_include_keys ConnectionRdp#recording_include_keys}
  */
  readonly recordingIncludeKeys?: boolean | cdktf.IResolvable;
  /**
  * Screen recording name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#recording_name ConnectionRdp#recording_name}
  */
  readonly recordingName?: string;
  /**
  * Screen recording path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#recording_path ConnectionRdp#recording_path}
  */
  readonly recordingPath?: string;
  /**
  * Remote App program
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#remote_app ConnectionRdp#remote_app}
  */
  readonly remoteApp?: string;
  /**
  * Remote App parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#remote_app_parameters ConnectionRdp#remote_app_parameters}
  */
  readonly remoteAppParameters?: string;
  /**
  * Remote App working directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#remote_app_working_directory ConnectionRdp#remote_app_working_directory}
  */
  readonly remoteAppWorkingDirectory?: string;
  /**
  * Resize method rdp connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#resize_method ConnectionRdp#resize_method}
  */
  readonly resizeMethod?: string;
  /**
  * RDP security mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#security_mode ConnectionRdp#security_mode}
  */
  readonly securityMode?: string;
  /**
  * Disable file download
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#sftp_disable_file_download ConnectionRdp#sftp_disable_file_download}
  */
  readonly sftpDisableFileDownload?: boolean | cdktf.IResolvable;
  /**
  * Disable file upload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#sftp_disable_file_upload ConnectionRdp#sftp_disable_file_upload}
  */
  readonly sftpDisableFileUpload?: boolean | cdktf.IResolvable;
  /**
  * Enable sftp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#sftp_enable ConnectionRdp#sftp_enable}
  */
  readonly sftpEnable?: boolean | cdktf.IResolvable;
  /**
  * SFTP server public host key (Base64)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#sftp_host_key ConnectionRdp#sftp_host_key}
  */
  readonly sftpHostKey?: string;
  /**
  * SFTP server hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#sftp_hostname ConnectionRdp#sftp_hostname}
  */
  readonly sftpHostname?: string;
  /**
  * SFTP keepalive interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#sftp_keepalive_interval ConnectionRdp#sftp_keepalive_interval}
  */
  readonly sftpKeepaliveInterval?: string;
  /**
  * SFTP server private key passphrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#sftp_passphrase ConnectionRdp#sftp_passphrase}
  */
  readonly sftpPassphrase?: string;
  /**
  * SFTP server password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#sftp_password ConnectionRdp#sftp_password}
  */
  readonly sftpPassword?: string;
  /**
  * SFTP server port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#sftp_port ConnectionRdp#sftp_port}
  */
  readonly sftpPort?: string;
  /**
  * SFTP server private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#sftp_private_key ConnectionRdp#sftp_private_key}
  */
  readonly sftpPrivateKey?: string;
  /**
  * File browser root directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#sftp_root_directory ConnectionRdp#sftp_root_directory}
  */
  readonly sftpRootDirectory?: string;
  /**
  * SFTP default upload directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#sftp_upload_directory ConnectionRdp#sftp_upload_directory}
  */
  readonly sftpUploadDirectory?: string;
  /**
  * SFTP server username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#sftp_username ConnectionRdp#sftp_username}
  */
  readonly sftpUsername?: string;
  /**
  * Static channel names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#static_channels ConnectionRdp#static_channels}
  */
  readonly staticChannels?: string;
  /**
  * Timezone/Locale for rdp connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#timezone ConnectionRdp#timezone}
  */
  readonly timezone?: string;
  /**
  * Username for rdp connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#username ConnectionRdp#username}
  */
  readonly username: string;
  /**
  * Screen width (px)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#width ConnectionRdp#width}
  */
  readonly width?: string;
  /**
  * Host boot wait time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#wol_boot_wait_time ConnectionRdp#wol_boot_wait_time}
  */
  readonly wolBootWaitTime?: string;
  /**
  * Broadcast address for WoL packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#wol_broadcast_address ConnectionRdp#wol_broadcast_address}
  */
  readonly wolBroadcastAddress?: string;
  /**
  * MAC address of the remote host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#wol_mac_address ConnectionRdp#wol_mac_address}
  */
  readonly wolMacAddress?: string;
  /**
  * Send WoL packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#wol_send_packet ConnectionRdp#wol_send_packet}
  */
  readonly wolSendPacket?: boolean | cdktf.IResolvable;
}

export function connectionRdpParametersToTerraform(struct?: ConnectionRdpParametersOutputReference | ConnectionRdpParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    administrator_console: cdktf.booleanToTerraform(struct!.administratorConsole),
    client_name: cdktf.stringToTerraform(struct!.clientName),
    color_depth: cdktf.stringToTerraform(struct!.colorDepth),
    console_audio: cdktf.booleanToTerraform(struct!.consoleAudio),
    create_drive_path: cdktf.booleanToTerraform(struct!.createDrivePath),
    disable_audio: cdktf.booleanToTerraform(struct!.disableAudio),
    disable_authentication: cdktf.booleanToTerraform(struct!.disableAuthentication),
    disable_bitmap_caching: cdktf.booleanToTerraform(struct!.disableBitmapCaching),
    disable_copy: cdktf.booleanToTerraform(struct!.disableCopy),
    disable_file_download: cdktf.booleanToTerraform(struct!.disableFileDownload),
    disable_file_upload: cdktf.booleanToTerraform(struct!.disableFileUpload),
    disable_glyph_caching: cdktf.booleanToTerraform(struct!.disableGlyphCaching),
    disable_offscreen_caching: cdktf.booleanToTerraform(struct!.disableOffscreenCaching),
    disable_paste: cdktf.booleanToTerraform(struct!.disablePaste),
    domain: cdktf.stringToTerraform(struct!.domain),
    dpi: cdktf.stringToTerraform(struct!.dpi),
    drive_name: cdktf.stringToTerraform(struct!.driveName),
    drive_path: cdktf.stringToTerraform(struct!.drivePath),
    enable_audio_input: cdktf.booleanToTerraform(struct!.enableAudioInput),
    enable_desktop_composition: cdktf.booleanToTerraform(struct!.enableDesktopComposition),
    enable_drive: cdktf.booleanToTerraform(struct!.enableDrive),
    enable_font_smoothing: cdktf.booleanToTerraform(struct!.enableFontSmoothing),
    enable_full_window_drag: cdktf.booleanToTerraform(struct!.enableFullWindowDrag),
    enable_menu_animations: cdktf.booleanToTerraform(struct!.enableMenuAnimations),
    enable_printing: cdktf.booleanToTerraform(struct!.enablePrinting),
    enable_theming: cdktf.booleanToTerraform(struct!.enableTheming),
    enable_wallpaper: cdktf.booleanToTerraform(struct!.enableWallpaper),
    gateway_domain: cdktf.stringToTerraform(struct!.gatewayDomain),
    gateway_hostname: cdktf.stringToTerraform(struct!.gatewayHostname),
    gateway_password: cdktf.stringToTerraform(struct!.gatewayPassword),
    gateway_port: cdktf.stringToTerraform(struct!.gatewayPort),
    gateway_username: cdktf.stringToTerraform(struct!.gatewayUsername),
    height: cdktf.stringToTerraform(struct!.height),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ignore_cert: cdktf.booleanToTerraform(struct!.ignoreCert),
    initial_program: cdktf.stringToTerraform(struct!.initialProgram),
    keyboard_layout: cdktf.stringToTerraform(struct!.keyboardLayout),
    load_balance_info: cdktf.stringToTerraform(struct!.loadBalanceInfo),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    preconnection_blob: cdktf.stringToTerraform(struct!.preconnectionBlob),
    preconnection_id: cdktf.stringToTerraform(struct!.preconnectionId),
    printer_name: cdktf.stringToTerraform(struct!.printerName),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
    recording_auto_create_path: cdktf.booleanToTerraform(struct!.recordingAutoCreatePath),
    recording_exclude_mouse: cdktf.booleanToTerraform(struct!.recordingExcludeMouse),
    recording_exclude_output: cdktf.booleanToTerraform(struct!.recordingExcludeOutput),
    recording_include_keys: cdktf.booleanToTerraform(struct!.recordingIncludeKeys),
    recording_name: cdktf.stringToTerraform(struct!.recordingName),
    recording_path: cdktf.stringToTerraform(struct!.recordingPath),
    remote_app: cdktf.stringToTerraform(struct!.remoteApp),
    remote_app_parameters: cdktf.stringToTerraform(struct!.remoteAppParameters),
    remote_app_working_directory: cdktf.stringToTerraform(struct!.remoteAppWorkingDirectory),
    resize_method: cdktf.stringToTerraform(struct!.resizeMethod),
    security_mode: cdktf.stringToTerraform(struct!.securityMode),
    sftp_disable_file_download: cdktf.booleanToTerraform(struct!.sftpDisableFileDownload),
    sftp_disable_file_upload: cdktf.booleanToTerraform(struct!.sftpDisableFileUpload),
    sftp_enable: cdktf.booleanToTerraform(struct!.sftpEnable),
    sftp_host_key: cdktf.stringToTerraform(struct!.sftpHostKey),
    sftp_hostname: cdktf.stringToTerraform(struct!.sftpHostname),
    sftp_keepalive_interval: cdktf.stringToTerraform(struct!.sftpKeepaliveInterval),
    sftp_passphrase: cdktf.stringToTerraform(struct!.sftpPassphrase),
    sftp_password: cdktf.stringToTerraform(struct!.sftpPassword),
    sftp_port: cdktf.stringToTerraform(struct!.sftpPort),
    sftp_private_key: cdktf.stringToTerraform(struct!.sftpPrivateKey),
    sftp_root_directory: cdktf.stringToTerraform(struct!.sftpRootDirectory),
    sftp_upload_directory: cdktf.stringToTerraform(struct!.sftpUploadDirectory),
    sftp_username: cdktf.stringToTerraform(struct!.sftpUsername),
    static_channels: cdktf.stringToTerraform(struct!.staticChannels),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    username: cdktf.stringToTerraform(struct!.username),
    width: cdktf.stringToTerraform(struct!.width),
    wol_boot_wait_time: cdktf.stringToTerraform(struct!.wolBootWaitTime),
    wol_broadcast_address: cdktf.stringToTerraform(struct!.wolBroadcastAddress),
    wol_mac_address: cdktf.stringToTerraform(struct!.wolMacAddress),
    wol_send_packet: cdktf.booleanToTerraform(struct!.wolSendPacket),
  }
}


export function connectionRdpParametersToHclTerraform(struct?: ConnectionRdpParametersOutputReference | ConnectionRdpParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    administrator_console: {
      value: cdktf.booleanToHclTerraform(struct!.administratorConsole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_name: {
      value: cdktf.stringToHclTerraform(struct!.clientName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color_depth: {
      value: cdktf.stringToHclTerraform(struct!.colorDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    console_audio: {
      value: cdktf.booleanToHclTerraform(struct!.consoleAudio),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create_drive_path: {
      value: cdktf.booleanToHclTerraform(struct!.createDrivePath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_audio: {
      value: cdktf.booleanToHclTerraform(struct!.disableAudio),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.disableAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_bitmap_caching: {
      value: cdktf.booleanToHclTerraform(struct!.disableBitmapCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_copy: {
      value: cdktf.booleanToHclTerraform(struct!.disableCopy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_file_download: {
      value: cdktf.booleanToHclTerraform(struct!.disableFileDownload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_file_upload: {
      value: cdktf.booleanToHclTerraform(struct!.disableFileUpload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_glyph_caching: {
      value: cdktf.booleanToHclTerraform(struct!.disableGlyphCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_offscreen_caching: {
      value: cdktf.booleanToHclTerraform(struct!.disableOffscreenCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_paste: {
      value: cdktf.booleanToHclTerraform(struct!.disablePaste),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dpi: {
      value: cdktf.stringToHclTerraform(struct!.dpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drive_name: {
      value: cdktf.stringToHclTerraform(struct!.driveName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drive_path: {
      value: cdktf.stringToHclTerraform(struct!.drivePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_audio_input: {
      value: cdktf.booleanToHclTerraform(struct!.enableAudioInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_desktop_composition: {
      value: cdktf.booleanToHclTerraform(struct!.enableDesktopComposition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_drive: {
      value: cdktf.booleanToHclTerraform(struct!.enableDrive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_font_smoothing: {
      value: cdktf.booleanToHclTerraform(struct!.enableFontSmoothing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_full_window_drag: {
      value: cdktf.booleanToHclTerraform(struct!.enableFullWindowDrag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_menu_animations: {
      value: cdktf.booleanToHclTerraform(struct!.enableMenuAnimations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_printing: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrinting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_theming: {
      value: cdktf.booleanToHclTerraform(struct!.enableTheming),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_wallpaper: {
      value: cdktf.booleanToHclTerraform(struct!.enableWallpaper),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gateway_domain: {
      value: cdktf.stringToHclTerraform(struct!.gatewayDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_hostname: {
      value: cdktf.stringToHclTerraform(struct!.gatewayHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_password: {
      value: cdktf.stringToHclTerraform(struct!.gatewayPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_port: {
      value: cdktf.stringToHclTerraform(struct!.gatewayPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_username: {
      value: cdktf.stringToHclTerraform(struct!.gatewayUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height: {
      value: cdktf.stringToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_cert: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    initial_program: {
      value: cdktf.stringToHclTerraform(struct!.initialProgram),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keyboard_layout: {
      value: cdktf.stringToHclTerraform(struct!.keyboardLayout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balance_info: {
      value: cdktf.stringToHclTerraform(struct!.loadBalanceInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preconnection_blob: {
      value: cdktf.stringToHclTerraform(struct!.preconnectionBlob),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preconnection_id: {
      value: cdktf.stringToHclTerraform(struct!.preconnectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    printer_name: {
      value: cdktf.stringToHclTerraform(struct!.printerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readonly: {
      value: cdktf.booleanToHclTerraform(struct!.readonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recording_auto_create_path: {
      value: cdktf.booleanToHclTerraform(struct!.recordingAutoCreatePath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recording_exclude_mouse: {
      value: cdktf.booleanToHclTerraform(struct!.recordingExcludeMouse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recording_exclude_output: {
      value: cdktf.booleanToHclTerraform(struct!.recordingExcludeOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recording_include_keys: {
      value: cdktf.booleanToHclTerraform(struct!.recordingIncludeKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recording_name: {
      value: cdktf.stringToHclTerraform(struct!.recordingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recording_path: {
      value: cdktf.stringToHclTerraform(struct!.recordingPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_app: {
      value: cdktf.stringToHclTerraform(struct!.remoteApp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_app_parameters: {
      value: cdktf.stringToHclTerraform(struct!.remoteAppParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_app_working_directory: {
      value: cdktf.stringToHclTerraform(struct!.remoteAppWorkingDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resize_method: {
      value: cdktf.stringToHclTerraform(struct!.resizeMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_mode: {
      value: cdktf.stringToHclTerraform(struct!.securityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sftp_disable_file_download: {
      value: cdktf.booleanToHclTerraform(struct!.sftpDisableFileDownload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sftp_disable_file_upload: {
      value: cdktf.booleanToHclTerraform(struct!.sftpDisableFileUpload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sftp_enable: {
      value: cdktf.booleanToHclTerraform(struct!.sftpEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sftp_host_key: {
      value: cdktf.stringToHclTerraform(struct!.sftpHostKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sftp_hostname: {
      value: cdktf.stringToHclTerraform(struct!.sftpHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sftp_keepalive_interval: {
      value: cdktf.stringToHclTerraform(struct!.sftpKeepaliveInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sftp_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.sftpPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sftp_password: {
      value: cdktf.stringToHclTerraform(struct!.sftpPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sftp_port: {
      value: cdktf.stringToHclTerraform(struct!.sftpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sftp_private_key: {
      value: cdktf.stringToHclTerraform(struct!.sftpPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sftp_root_directory: {
      value: cdktf.stringToHclTerraform(struct!.sftpRootDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sftp_upload_directory: {
      value: cdktf.stringToHclTerraform(struct!.sftpUploadDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sftp_username: {
      value: cdktf.stringToHclTerraform(struct!.sftpUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_channels: {
      value: cdktf.stringToHclTerraform(struct!.staticChannels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.stringToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wol_boot_wait_time: {
      value: cdktf.stringToHclTerraform(struct!.wolBootWaitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wol_broadcast_address: {
      value: cdktf.stringToHclTerraform(struct!.wolBroadcastAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wol_mac_address: {
      value: cdktf.stringToHclTerraform(struct!.wolMacAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wol_send_packet: {
      value: cdktf.booleanToHclTerraform(struct!.wolSendPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionRdpParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionRdpParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._administratorConsole !== undefined) {
      hasAnyValues = true;
      internalValueResult.administratorConsole = this._administratorConsole;
    }
    if (this._clientName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientName = this._clientName;
    }
    if (this._colorDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorDepth = this._colorDepth;
    }
    if (this._consoleAudio !== undefined) {
      hasAnyValues = true;
      internalValueResult.consoleAudio = this._consoleAudio;
    }
    if (this._createDrivePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.createDrivePath = this._createDrivePath;
    }
    if (this._disableAudio !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAudio = this._disableAudio;
    }
    if (this._disableAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAuthentication = this._disableAuthentication;
    }
    if (this._disableBitmapCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableBitmapCaching = this._disableBitmapCaching;
    }
    if (this._disableCopy !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCopy = this._disableCopy;
    }
    if (this._disableFileDownload !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableFileDownload = this._disableFileDownload;
    }
    if (this._disableFileUpload !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableFileUpload = this._disableFileUpload;
    }
    if (this._disableGlyphCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableGlyphCaching = this._disableGlyphCaching;
    }
    if (this._disableOffscreenCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableOffscreenCaching = this._disableOffscreenCaching;
    }
    if (this._disablePaste !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePaste = this._disablePaste;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._dpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpi = this._dpi;
    }
    if (this._driveName !== undefined) {
      hasAnyValues = true;
      internalValueResult.driveName = this._driveName;
    }
    if (this._drivePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.drivePath = this._drivePath;
    }
    if (this._enableAudioInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAudioInput = this._enableAudioInput;
    }
    if (this._enableDesktopComposition !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDesktopComposition = this._enableDesktopComposition;
    }
    if (this._enableDrive !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDrive = this._enableDrive;
    }
    if (this._enableFontSmoothing !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFontSmoothing = this._enableFontSmoothing;
    }
    if (this._enableFullWindowDrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFullWindowDrag = this._enableFullWindowDrag;
    }
    if (this._enableMenuAnimations !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMenuAnimations = this._enableMenuAnimations;
    }
    if (this._enablePrinting !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrinting = this._enablePrinting;
    }
    if (this._enableTheming !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTheming = this._enableTheming;
    }
    if (this._enableWallpaper !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWallpaper = this._enableWallpaper;
    }
    if (this._gatewayDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayDomain = this._gatewayDomain;
    }
    if (this._gatewayHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayHostname = this._gatewayHostname;
    }
    if (this._gatewayPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayPassword = this._gatewayPassword;
    }
    if (this._gatewayPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayPort = this._gatewayPort;
    }
    if (this._gatewayUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayUsername = this._gatewayUsername;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ignoreCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCert = this._ignoreCert;
    }
    if (this._initialProgram !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialProgram = this._initialProgram;
    }
    if (this._keyboardLayout !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyboardLayout = this._keyboardLayout;
    }
    if (this._loadBalanceInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalanceInfo = this._loadBalanceInfo;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._preconnectionBlob !== undefined) {
      hasAnyValues = true;
      internalValueResult.preconnectionBlob = this._preconnectionBlob;
    }
    if (this._preconnectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.preconnectionId = this._preconnectionId;
    }
    if (this._printerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.printerName = this._printerName;
    }
    if (this._readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly;
    }
    if (this._recordingAutoCreatePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingAutoCreatePath = this._recordingAutoCreatePath;
    }
    if (this._recordingExcludeMouse !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingExcludeMouse = this._recordingExcludeMouse;
    }
    if (this._recordingExcludeOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingExcludeOutput = this._recordingExcludeOutput;
    }
    if (this._recordingIncludeKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingIncludeKeys = this._recordingIncludeKeys;
    }
    if (this._recordingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingName = this._recordingName;
    }
    if (this._recordingPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingPath = this._recordingPath;
    }
    if (this._remoteApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteApp = this._remoteApp;
    }
    if (this._remoteAppParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAppParameters = this._remoteAppParameters;
    }
    if (this._remoteAppWorkingDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAppWorkingDirectory = this._remoteAppWorkingDirectory;
    }
    if (this._resizeMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.resizeMethod = this._resizeMethod;
    }
    if (this._securityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityMode = this._securityMode;
    }
    if (this._sftpDisableFileDownload !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftpDisableFileDownload = this._sftpDisableFileDownload;
    }
    if (this._sftpDisableFileUpload !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftpDisableFileUpload = this._sftpDisableFileUpload;
    }
    if (this._sftpEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftpEnable = this._sftpEnable;
    }
    if (this._sftpHostKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftpHostKey = this._sftpHostKey;
    }
    if (this._sftpHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftpHostname = this._sftpHostname;
    }
    if (this._sftpKeepaliveInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftpKeepaliveInterval = this._sftpKeepaliveInterval;
    }
    if (this._sftpPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftpPassphrase = this._sftpPassphrase;
    }
    if (this._sftpPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftpPassword = this._sftpPassword;
    }
    if (this._sftpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftpPort = this._sftpPort;
    }
    if (this._sftpPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftpPrivateKey = this._sftpPrivateKey;
    }
    if (this._sftpRootDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftpRootDirectory = this._sftpRootDirectory;
    }
    if (this._sftpUploadDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftpUploadDirectory = this._sftpUploadDirectory;
    }
    if (this._sftpUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftpUsername = this._sftpUsername;
    }
    if (this._staticChannels !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticChannels = this._staticChannels;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._wolBootWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.wolBootWaitTime = this._wolBootWaitTime;
    }
    if (this._wolBroadcastAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.wolBroadcastAddress = this._wolBroadcastAddress;
    }
    if (this._wolMacAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.wolMacAddress = this._wolMacAddress;
    }
    if (this._wolSendPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.wolSendPacket = this._wolSendPacket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionRdpParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._administratorConsole = undefined;
      this._clientName = undefined;
      this._colorDepth = undefined;
      this._consoleAudio = undefined;
      this._createDrivePath = undefined;
      this._disableAudio = undefined;
      this._disableAuthentication = undefined;
      this._disableBitmapCaching = undefined;
      this._disableCopy = undefined;
      this._disableFileDownload = undefined;
      this._disableFileUpload = undefined;
      this._disableGlyphCaching = undefined;
      this._disableOffscreenCaching = undefined;
      this._disablePaste = undefined;
      this._domain = undefined;
      this._dpi = undefined;
      this._driveName = undefined;
      this._drivePath = undefined;
      this._enableAudioInput = undefined;
      this._enableDesktopComposition = undefined;
      this._enableDrive = undefined;
      this._enableFontSmoothing = undefined;
      this._enableFullWindowDrag = undefined;
      this._enableMenuAnimations = undefined;
      this._enablePrinting = undefined;
      this._enableTheming = undefined;
      this._enableWallpaper = undefined;
      this._gatewayDomain = undefined;
      this._gatewayHostname = undefined;
      this._gatewayPassword = undefined;
      this._gatewayPort = undefined;
      this._gatewayUsername = undefined;
      this._height = undefined;
      this._hostname = undefined;
      this._ignoreCert = undefined;
      this._initialProgram = undefined;
      this._keyboardLayout = undefined;
      this._loadBalanceInfo = undefined;
      this._password = undefined;
      this._port = undefined;
      this._preconnectionBlob = undefined;
      this._preconnectionId = undefined;
      this._printerName = undefined;
      this._readonly = undefined;
      this._recordingAutoCreatePath = undefined;
      this._recordingExcludeMouse = undefined;
      this._recordingExcludeOutput = undefined;
      this._recordingIncludeKeys = undefined;
      this._recordingName = undefined;
      this._recordingPath = undefined;
      this._remoteApp = undefined;
      this._remoteAppParameters = undefined;
      this._remoteAppWorkingDirectory = undefined;
      this._resizeMethod = undefined;
      this._securityMode = undefined;
      this._sftpDisableFileDownload = undefined;
      this._sftpDisableFileUpload = undefined;
      this._sftpEnable = undefined;
      this._sftpHostKey = undefined;
      this._sftpHostname = undefined;
      this._sftpKeepaliveInterval = undefined;
      this._sftpPassphrase = undefined;
      this._sftpPassword = undefined;
      this._sftpPort = undefined;
      this._sftpPrivateKey = undefined;
      this._sftpRootDirectory = undefined;
      this._sftpUploadDirectory = undefined;
      this._sftpUsername = undefined;
      this._staticChannels = undefined;
      this._timezone = undefined;
      this._username = undefined;
      this._width = undefined;
      this._wolBootWaitTime = undefined;
      this._wolBroadcastAddress = undefined;
      this._wolMacAddress = undefined;
      this._wolSendPacket = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._administratorConsole = value.administratorConsole;
      this._clientName = value.clientName;
      this._colorDepth = value.colorDepth;
      this._consoleAudio = value.consoleAudio;
      this._createDrivePath = value.createDrivePath;
      this._disableAudio = value.disableAudio;
      this._disableAuthentication = value.disableAuthentication;
      this._disableBitmapCaching = value.disableBitmapCaching;
      this._disableCopy = value.disableCopy;
      this._disableFileDownload = value.disableFileDownload;
      this._disableFileUpload = value.disableFileUpload;
      this._disableGlyphCaching = value.disableGlyphCaching;
      this._disableOffscreenCaching = value.disableOffscreenCaching;
      this._disablePaste = value.disablePaste;
      this._domain = value.domain;
      this._dpi = value.dpi;
      this._driveName = value.driveName;
      this._drivePath = value.drivePath;
      this._enableAudioInput = value.enableAudioInput;
      this._enableDesktopComposition = value.enableDesktopComposition;
      this._enableDrive = value.enableDrive;
      this._enableFontSmoothing = value.enableFontSmoothing;
      this._enableFullWindowDrag = value.enableFullWindowDrag;
      this._enableMenuAnimations = value.enableMenuAnimations;
      this._enablePrinting = value.enablePrinting;
      this._enableTheming = value.enableTheming;
      this._enableWallpaper = value.enableWallpaper;
      this._gatewayDomain = value.gatewayDomain;
      this._gatewayHostname = value.gatewayHostname;
      this._gatewayPassword = value.gatewayPassword;
      this._gatewayPort = value.gatewayPort;
      this._gatewayUsername = value.gatewayUsername;
      this._height = value.height;
      this._hostname = value.hostname;
      this._ignoreCert = value.ignoreCert;
      this._initialProgram = value.initialProgram;
      this._keyboardLayout = value.keyboardLayout;
      this._loadBalanceInfo = value.loadBalanceInfo;
      this._password = value.password;
      this._port = value.port;
      this._preconnectionBlob = value.preconnectionBlob;
      this._preconnectionId = value.preconnectionId;
      this._printerName = value.printerName;
      this._readonly = value.readonly;
      this._recordingAutoCreatePath = value.recordingAutoCreatePath;
      this._recordingExcludeMouse = value.recordingExcludeMouse;
      this._recordingExcludeOutput = value.recordingExcludeOutput;
      this._recordingIncludeKeys = value.recordingIncludeKeys;
      this._recordingName = value.recordingName;
      this._recordingPath = value.recordingPath;
      this._remoteApp = value.remoteApp;
      this._remoteAppParameters = value.remoteAppParameters;
      this._remoteAppWorkingDirectory = value.remoteAppWorkingDirectory;
      this._resizeMethod = value.resizeMethod;
      this._securityMode = value.securityMode;
      this._sftpDisableFileDownload = value.sftpDisableFileDownload;
      this._sftpDisableFileUpload = value.sftpDisableFileUpload;
      this._sftpEnable = value.sftpEnable;
      this._sftpHostKey = value.sftpHostKey;
      this._sftpHostname = value.sftpHostname;
      this._sftpKeepaliveInterval = value.sftpKeepaliveInterval;
      this._sftpPassphrase = value.sftpPassphrase;
      this._sftpPassword = value.sftpPassword;
      this._sftpPort = value.sftpPort;
      this._sftpPrivateKey = value.sftpPrivateKey;
      this._sftpRootDirectory = value.sftpRootDirectory;
      this._sftpUploadDirectory = value.sftpUploadDirectory;
      this._sftpUsername = value.sftpUsername;
      this._staticChannels = value.staticChannels;
      this._timezone = value.timezone;
      this._username = value.username;
      this._width = value.width;
      this._wolBootWaitTime = value.wolBootWaitTime;
      this._wolBroadcastAddress = value.wolBroadcastAddress;
      this._wolMacAddress = value.wolMacAddress;
      this._wolSendPacket = value.wolSendPacket;
    }
  }

  // administrator_console - computed: true, optional: true, required: false
  private _administratorConsole?: boolean | cdktf.IResolvable; 
  public get administratorConsole() {
    return this.getBooleanAttribute('administrator_console');
  }
  public set administratorConsole(value: boolean | cdktf.IResolvable) {
    this._administratorConsole = value;
  }
  public resetAdministratorConsole() {
    this._administratorConsole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorConsoleInput() {
    return this._administratorConsole;
  }

  // client_name - computed: true, optional: true, required: false
  private _clientName?: string; 
  public get clientName() {
    return this.getStringAttribute('client_name');
  }
  public set clientName(value: string) {
    this._clientName = value;
  }
  public resetClientName() {
    this._clientName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNameInput() {
    return this._clientName;
  }

  // color_depth - computed: true, optional: true, required: false
  private _colorDepth?: string; 
  public get colorDepth() {
    return this.getStringAttribute('color_depth');
  }
  public set colorDepth(value: string) {
    this._colorDepth = value;
  }
  public resetColorDepth() {
    this._colorDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorDepthInput() {
    return this._colorDepth;
  }

  // console_audio - computed: true, optional: true, required: false
  private _consoleAudio?: boolean | cdktf.IResolvable; 
  public get consoleAudio() {
    return this.getBooleanAttribute('console_audio');
  }
  public set consoleAudio(value: boolean | cdktf.IResolvable) {
    this._consoleAudio = value;
  }
  public resetConsoleAudio() {
    this._consoleAudio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleAudioInput() {
    return this._consoleAudio;
  }

  // create_drive_path - computed: true, optional: true, required: false
  private _createDrivePath?: boolean | cdktf.IResolvable; 
  public get createDrivePath() {
    return this.getBooleanAttribute('create_drive_path');
  }
  public set createDrivePath(value: boolean | cdktf.IResolvable) {
    this._createDrivePath = value;
  }
  public resetCreateDrivePath() {
    this._createDrivePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDrivePathInput() {
    return this._createDrivePath;
  }

  // disable_audio - computed: true, optional: true, required: false
  private _disableAudio?: boolean | cdktf.IResolvable; 
  public get disableAudio() {
    return this.getBooleanAttribute('disable_audio');
  }
  public set disableAudio(value: boolean | cdktf.IResolvable) {
    this._disableAudio = value;
  }
  public resetDisableAudio() {
    this._disableAudio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAudioInput() {
    return this._disableAudio;
  }

  // disable_authentication - computed: true, optional: true, required: false
  private _disableAuthentication?: boolean | cdktf.IResolvable; 
  public get disableAuthentication() {
    return this.getBooleanAttribute('disable_authentication');
  }
  public set disableAuthentication(value: boolean | cdktf.IResolvable) {
    this._disableAuthentication = value;
  }
  public resetDisableAuthentication() {
    this._disableAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAuthenticationInput() {
    return this._disableAuthentication;
  }

  // disable_bitmap_caching - computed: true, optional: true, required: false
  private _disableBitmapCaching?: boolean | cdktf.IResolvable; 
  public get disableBitmapCaching() {
    return this.getBooleanAttribute('disable_bitmap_caching');
  }
  public set disableBitmapCaching(value: boolean | cdktf.IResolvable) {
    this._disableBitmapCaching = value;
  }
  public resetDisableBitmapCaching() {
    this._disableBitmapCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableBitmapCachingInput() {
    return this._disableBitmapCaching;
  }

  // disable_copy - computed: true, optional: true, required: false
  private _disableCopy?: boolean | cdktf.IResolvable; 
  public get disableCopy() {
    return this.getBooleanAttribute('disable_copy');
  }
  public set disableCopy(value: boolean | cdktf.IResolvable) {
    this._disableCopy = value;
  }
  public resetDisableCopy() {
    this._disableCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCopyInput() {
    return this._disableCopy;
  }

  // disable_file_download - computed: true, optional: true, required: false
  private _disableFileDownload?: boolean | cdktf.IResolvable; 
  public get disableFileDownload() {
    return this.getBooleanAttribute('disable_file_download');
  }
  public set disableFileDownload(value: boolean | cdktf.IResolvable) {
    this._disableFileDownload = value;
  }
  public resetDisableFileDownload() {
    this._disableFileDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFileDownloadInput() {
    return this._disableFileDownload;
  }

  // disable_file_upload - computed: true, optional: true, required: false
  private _disableFileUpload?: boolean | cdktf.IResolvable; 
  public get disableFileUpload() {
    return this.getBooleanAttribute('disable_file_upload');
  }
  public set disableFileUpload(value: boolean | cdktf.IResolvable) {
    this._disableFileUpload = value;
  }
  public resetDisableFileUpload() {
    this._disableFileUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFileUploadInput() {
    return this._disableFileUpload;
  }

  // disable_glyph_caching - computed: true, optional: true, required: false
  private _disableGlyphCaching?: boolean | cdktf.IResolvable; 
  public get disableGlyphCaching() {
    return this.getBooleanAttribute('disable_glyph_caching');
  }
  public set disableGlyphCaching(value: boolean | cdktf.IResolvable) {
    this._disableGlyphCaching = value;
  }
  public resetDisableGlyphCaching() {
    this._disableGlyphCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableGlyphCachingInput() {
    return this._disableGlyphCaching;
  }

  // disable_offscreen_caching - computed: true, optional: true, required: false
  private _disableOffscreenCaching?: boolean | cdktf.IResolvable; 
  public get disableOffscreenCaching() {
    return this.getBooleanAttribute('disable_offscreen_caching');
  }
  public set disableOffscreenCaching(value: boolean | cdktf.IResolvable) {
    this._disableOffscreenCaching = value;
  }
  public resetDisableOffscreenCaching() {
    this._disableOffscreenCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOffscreenCachingInput() {
    return this._disableOffscreenCaching;
  }

  // disable_paste - computed: true, optional: true, required: false
  private _disablePaste?: boolean | cdktf.IResolvable; 
  public get disablePaste() {
    return this.getBooleanAttribute('disable_paste');
  }
  public set disablePaste(value: boolean | cdktf.IResolvable) {
    this._disablePaste = value;
  }
  public resetDisablePaste() {
    this._disablePaste = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePasteInput() {
    return this._disablePaste;
  }

  // domain - computed: true, optional: true, required: false
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

  // dpi - computed: true, optional: true, required: false
  private _dpi?: string; 
  public get dpi() {
    return this.getStringAttribute('dpi');
  }
  public set dpi(value: string) {
    this._dpi = value;
  }
  public resetDpi() {
    this._dpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpiInput() {
    return this._dpi;
  }

  // drive_name - computed: true, optional: true, required: false
  private _driveName?: string; 
  public get driveName() {
    return this.getStringAttribute('drive_name');
  }
  public set driveName(value: string) {
    this._driveName = value;
  }
  public resetDriveName() {
    this._driveName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driveNameInput() {
    return this._driveName;
  }

  // drive_path - computed: true, optional: true, required: false
  private _drivePath?: string; 
  public get drivePath() {
    return this.getStringAttribute('drive_path');
  }
  public set drivePath(value: string) {
    this._drivePath = value;
  }
  public resetDrivePath() {
    this._drivePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drivePathInput() {
    return this._drivePath;
  }

  // enable_audio_input - computed: true, optional: true, required: false
  private _enableAudioInput?: boolean | cdktf.IResolvable; 
  public get enableAudioInput() {
    return this.getBooleanAttribute('enable_audio_input');
  }
  public set enableAudioInput(value: boolean | cdktf.IResolvable) {
    this._enableAudioInput = value;
  }
  public resetEnableAudioInput() {
    this._enableAudioInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAudioInputInput() {
    return this._enableAudioInput;
  }

  // enable_desktop_composition - computed: true, optional: true, required: false
  private _enableDesktopComposition?: boolean | cdktf.IResolvable; 
  public get enableDesktopComposition() {
    return this.getBooleanAttribute('enable_desktop_composition');
  }
  public set enableDesktopComposition(value: boolean | cdktf.IResolvable) {
    this._enableDesktopComposition = value;
  }
  public resetEnableDesktopComposition() {
    this._enableDesktopComposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDesktopCompositionInput() {
    return this._enableDesktopComposition;
  }

  // enable_drive - computed: true, optional: true, required: false
  private _enableDrive?: boolean | cdktf.IResolvable; 
  public get enableDrive() {
    return this.getBooleanAttribute('enable_drive');
  }
  public set enableDrive(value: boolean | cdktf.IResolvable) {
    this._enableDrive = value;
  }
  public resetEnableDrive() {
    this._enableDrive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDriveInput() {
    return this._enableDrive;
  }

  // enable_font_smoothing - computed: true, optional: true, required: false
  private _enableFontSmoothing?: boolean | cdktf.IResolvable; 
  public get enableFontSmoothing() {
    return this.getBooleanAttribute('enable_font_smoothing');
  }
  public set enableFontSmoothing(value: boolean | cdktf.IResolvable) {
    this._enableFontSmoothing = value;
  }
  public resetEnableFontSmoothing() {
    this._enableFontSmoothing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFontSmoothingInput() {
    return this._enableFontSmoothing;
  }

  // enable_full_window_drag - computed: true, optional: true, required: false
  private _enableFullWindowDrag?: boolean | cdktf.IResolvable; 
  public get enableFullWindowDrag() {
    return this.getBooleanAttribute('enable_full_window_drag');
  }
  public set enableFullWindowDrag(value: boolean | cdktf.IResolvable) {
    this._enableFullWindowDrag = value;
  }
  public resetEnableFullWindowDrag() {
    this._enableFullWindowDrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFullWindowDragInput() {
    return this._enableFullWindowDrag;
  }

  // enable_menu_animations - computed: true, optional: true, required: false
  private _enableMenuAnimations?: boolean | cdktf.IResolvable; 
  public get enableMenuAnimations() {
    return this.getBooleanAttribute('enable_menu_animations');
  }
  public set enableMenuAnimations(value: boolean | cdktf.IResolvable) {
    this._enableMenuAnimations = value;
  }
  public resetEnableMenuAnimations() {
    this._enableMenuAnimations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMenuAnimationsInput() {
    return this._enableMenuAnimations;
  }

  // enable_printing - computed: true, optional: true, required: false
  private _enablePrinting?: boolean | cdktf.IResolvable; 
  public get enablePrinting() {
    return this.getBooleanAttribute('enable_printing');
  }
  public set enablePrinting(value: boolean | cdktf.IResolvable) {
    this._enablePrinting = value;
  }
  public resetEnablePrinting() {
    this._enablePrinting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrintingInput() {
    return this._enablePrinting;
  }

  // enable_theming - computed: true, optional: true, required: false
  private _enableTheming?: boolean | cdktf.IResolvable; 
  public get enableTheming() {
    return this.getBooleanAttribute('enable_theming');
  }
  public set enableTheming(value: boolean | cdktf.IResolvable) {
    this._enableTheming = value;
  }
  public resetEnableTheming() {
    this._enableTheming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableThemingInput() {
    return this._enableTheming;
  }

  // enable_wallpaper - computed: true, optional: true, required: false
  private _enableWallpaper?: boolean | cdktf.IResolvable; 
  public get enableWallpaper() {
    return this.getBooleanAttribute('enable_wallpaper');
  }
  public set enableWallpaper(value: boolean | cdktf.IResolvable) {
    this._enableWallpaper = value;
  }
  public resetEnableWallpaper() {
    this._enableWallpaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWallpaperInput() {
    return this._enableWallpaper;
  }

  // gateway_domain - computed: true, optional: true, required: false
  private _gatewayDomain?: string; 
  public get gatewayDomain() {
    return this.getStringAttribute('gateway_domain');
  }
  public set gatewayDomain(value: string) {
    this._gatewayDomain = value;
  }
  public resetGatewayDomain() {
    this._gatewayDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayDomainInput() {
    return this._gatewayDomain;
  }

  // gateway_hostname - computed: true, optional: true, required: false
  private _gatewayHostname?: string; 
  public get gatewayHostname() {
    return this.getStringAttribute('gateway_hostname');
  }
  public set gatewayHostname(value: string) {
    this._gatewayHostname = value;
  }
  public resetGatewayHostname() {
    this._gatewayHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayHostnameInput() {
    return this._gatewayHostname;
  }

  // gateway_password - computed: true, optional: true, required: false
  private _gatewayPassword?: string; 
  public get gatewayPassword() {
    return this.getStringAttribute('gateway_password');
  }
  public set gatewayPassword(value: string) {
    this._gatewayPassword = value;
  }
  public resetGatewayPassword() {
    this._gatewayPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayPasswordInput() {
    return this._gatewayPassword;
  }

  // gateway_port - computed: true, optional: true, required: false
  private _gatewayPort?: string; 
  public get gatewayPort() {
    return this.getStringAttribute('gateway_port');
  }
  public set gatewayPort(value: string) {
    this._gatewayPort = value;
  }
  public resetGatewayPort() {
    this._gatewayPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayPortInput() {
    return this._gatewayPort;
  }

  // gateway_username - computed: true, optional: true, required: false
  private _gatewayUsername?: string; 
  public get gatewayUsername() {
    return this.getStringAttribute('gateway_username');
  }
  public set gatewayUsername(value: string) {
    this._gatewayUsername = value;
  }
  public resetGatewayUsername() {
    this._gatewayUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayUsernameInput() {
    return this._gatewayUsername;
  }

  // height - computed: true, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ignore_cert - computed: true, optional: true, required: false
  private _ignoreCert?: boolean | cdktf.IResolvable; 
  public get ignoreCert() {
    return this.getBooleanAttribute('ignore_cert');
  }
  public set ignoreCert(value: boolean | cdktf.IResolvable) {
    this._ignoreCert = value;
  }
  public resetIgnoreCert() {
    this._ignoreCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCertInput() {
    return this._ignoreCert;
  }

  // initial_program - computed: true, optional: true, required: false
  private _initialProgram?: string; 
  public get initialProgram() {
    return this.getStringAttribute('initial_program');
  }
  public set initialProgram(value: string) {
    this._initialProgram = value;
  }
  public resetInitialProgram() {
    this._initialProgram = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialProgramInput() {
    return this._initialProgram;
  }

  // keyboard_layout - computed: true, optional: true, required: false
  private _keyboardLayout?: string; 
  public get keyboardLayout() {
    return this.getStringAttribute('keyboard_layout');
  }
  public set keyboardLayout(value: string) {
    this._keyboardLayout = value;
  }
  public resetKeyboardLayout() {
    this._keyboardLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyboardLayoutInput() {
    return this._keyboardLayout;
  }

  // load_balance_info - computed: true, optional: true, required: false
  private _loadBalanceInfo?: string; 
  public get loadBalanceInfo() {
    return this.getStringAttribute('load_balance_info');
  }
  public set loadBalanceInfo(value: string) {
    this._loadBalanceInfo = value;
  }
  public resetLoadBalanceInfo() {
    this._loadBalanceInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceInfoInput() {
    return this._loadBalanceInfo;
  }

  // password - computed: true, optional: true, required: false
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

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // preconnection_blob - computed: true, optional: true, required: false
  private _preconnectionBlob?: string; 
  public get preconnectionBlob() {
    return this.getStringAttribute('preconnection_blob');
  }
  public set preconnectionBlob(value: string) {
    this._preconnectionBlob = value;
  }
  public resetPreconnectionBlob() {
    this._preconnectionBlob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconnectionBlobInput() {
    return this._preconnectionBlob;
  }

  // preconnection_id - computed: true, optional: true, required: false
  private _preconnectionId?: string; 
  public get preconnectionId() {
    return this.getStringAttribute('preconnection_id');
  }
  public set preconnectionId(value: string) {
    this._preconnectionId = value;
  }
  public resetPreconnectionId() {
    this._preconnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconnectionIdInput() {
    return this._preconnectionId;
  }

  // printer_name - computed: true, optional: true, required: false
  private _printerName?: string; 
  public get printerName() {
    return this.getStringAttribute('printer_name');
  }
  public set printerName(value: string) {
    this._printerName = value;
  }
  public resetPrinterName() {
    this._printerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get printerNameInput() {
    return this._printerName;
  }

  // readonly - computed: true, optional: true, required: false
  private _readonly?: boolean | cdktf.IResolvable; 
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }
  public set readonly(value: boolean | cdktf.IResolvable) {
    this._readonly = value;
  }
  public resetReadonly() {
    this._readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
  }

  // recording_auto_create_path - computed: true, optional: true, required: false
  private _recordingAutoCreatePath?: boolean | cdktf.IResolvable; 
  public get recordingAutoCreatePath() {
    return this.getBooleanAttribute('recording_auto_create_path');
  }
  public set recordingAutoCreatePath(value: boolean | cdktf.IResolvable) {
    this._recordingAutoCreatePath = value;
  }
  public resetRecordingAutoCreatePath() {
    this._recordingAutoCreatePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingAutoCreatePathInput() {
    return this._recordingAutoCreatePath;
  }

  // recording_exclude_mouse - computed: true, optional: true, required: false
  private _recordingExcludeMouse?: boolean | cdktf.IResolvable; 
  public get recordingExcludeMouse() {
    return this.getBooleanAttribute('recording_exclude_mouse');
  }
  public set recordingExcludeMouse(value: boolean | cdktf.IResolvable) {
    this._recordingExcludeMouse = value;
  }
  public resetRecordingExcludeMouse() {
    this._recordingExcludeMouse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingExcludeMouseInput() {
    return this._recordingExcludeMouse;
  }

  // recording_exclude_output - computed: true, optional: true, required: false
  private _recordingExcludeOutput?: boolean | cdktf.IResolvable; 
  public get recordingExcludeOutput() {
    return this.getBooleanAttribute('recording_exclude_output');
  }
  public set recordingExcludeOutput(value: boolean | cdktf.IResolvable) {
    this._recordingExcludeOutput = value;
  }
  public resetRecordingExcludeOutput() {
    this._recordingExcludeOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingExcludeOutputInput() {
    return this._recordingExcludeOutput;
  }

  // recording_include_keys - computed: true, optional: true, required: false
  private _recordingIncludeKeys?: boolean | cdktf.IResolvable; 
  public get recordingIncludeKeys() {
    return this.getBooleanAttribute('recording_include_keys');
  }
  public set recordingIncludeKeys(value: boolean | cdktf.IResolvable) {
    this._recordingIncludeKeys = value;
  }
  public resetRecordingIncludeKeys() {
    this._recordingIncludeKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingIncludeKeysInput() {
    return this._recordingIncludeKeys;
  }

  // recording_name - computed: true, optional: true, required: false
  private _recordingName?: string; 
  public get recordingName() {
    return this.getStringAttribute('recording_name');
  }
  public set recordingName(value: string) {
    this._recordingName = value;
  }
  public resetRecordingName() {
    this._recordingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingNameInput() {
    return this._recordingName;
  }

  // recording_path - computed: true, optional: true, required: false
  private _recordingPath?: string; 
  public get recordingPath() {
    return this.getStringAttribute('recording_path');
  }
  public set recordingPath(value: string) {
    this._recordingPath = value;
  }
  public resetRecordingPath() {
    this._recordingPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingPathInput() {
    return this._recordingPath;
  }

  // remote_app - computed: true, optional: true, required: false
  private _remoteApp?: string; 
  public get remoteApp() {
    return this.getStringAttribute('remote_app');
  }
  public set remoteApp(value: string) {
    this._remoteApp = value;
  }
  public resetRemoteApp() {
    this._remoteApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAppInput() {
    return this._remoteApp;
  }

  // remote_app_parameters - computed: true, optional: true, required: false
  private _remoteAppParameters?: string; 
  public get remoteAppParameters() {
    return this.getStringAttribute('remote_app_parameters');
  }
  public set remoteAppParameters(value: string) {
    this._remoteAppParameters = value;
  }
  public resetRemoteAppParameters() {
    this._remoteAppParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAppParametersInput() {
    return this._remoteAppParameters;
  }

  // remote_app_working_directory - computed: true, optional: true, required: false
  private _remoteAppWorkingDirectory?: string; 
  public get remoteAppWorkingDirectory() {
    return this.getStringAttribute('remote_app_working_directory');
  }
  public set remoteAppWorkingDirectory(value: string) {
    this._remoteAppWorkingDirectory = value;
  }
  public resetRemoteAppWorkingDirectory() {
    this._remoteAppWorkingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAppWorkingDirectoryInput() {
    return this._remoteAppWorkingDirectory;
  }

  // resize_method - computed: true, optional: true, required: false
  private _resizeMethod?: string; 
  public get resizeMethod() {
    return this.getStringAttribute('resize_method');
  }
  public set resizeMethod(value: string) {
    this._resizeMethod = value;
  }
  public resetResizeMethod() {
    this._resizeMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeMethodInput() {
    return this._resizeMethod;
  }

  // security_mode - computed: true, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }

  // sftp_disable_file_download - computed: true, optional: true, required: false
  private _sftpDisableFileDownload?: boolean | cdktf.IResolvable; 
  public get sftpDisableFileDownload() {
    return this.getBooleanAttribute('sftp_disable_file_download');
  }
  public set sftpDisableFileDownload(value: boolean | cdktf.IResolvable) {
    this._sftpDisableFileDownload = value;
  }
  public resetSftpDisableFileDownload() {
    this._sftpDisableFileDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpDisableFileDownloadInput() {
    return this._sftpDisableFileDownload;
  }

  // sftp_disable_file_upload - computed: true, optional: true, required: false
  private _sftpDisableFileUpload?: boolean | cdktf.IResolvable; 
  public get sftpDisableFileUpload() {
    return this.getBooleanAttribute('sftp_disable_file_upload');
  }
  public set sftpDisableFileUpload(value: boolean | cdktf.IResolvable) {
    this._sftpDisableFileUpload = value;
  }
  public resetSftpDisableFileUpload() {
    this._sftpDisableFileUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpDisableFileUploadInput() {
    return this._sftpDisableFileUpload;
  }

  // sftp_enable - computed: true, optional: true, required: false
  private _sftpEnable?: boolean | cdktf.IResolvable; 
  public get sftpEnable() {
    return this.getBooleanAttribute('sftp_enable');
  }
  public set sftpEnable(value: boolean | cdktf.IResolvable) {
    this._sftpEnable = value;
  }
  public resetSftpEnable() {
    this._sftpEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpEnableInput() {
    return this._sftpEnable;
  }

  // sftp_host_key - computed: true, optional: true, required: false
  private _sftpHostKey?: string; 
  public get sftpHostKey() {
    return this.getStringAttribute('sftp_host_key');
  }
  public set sftpHostKey(value: string) {
    this._sftpHostKey = value;
  }
  public resetSftpHostKey() {
    this._sftpHostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpHostKeyInput() {
    return this._sftpHostKey;
  }

  // sftp_hostname - computed: true, optional: true, required: false
  private _sftpHostname?: string; 
  public get sftpHostname() {
    return this.getStringAttribute('sftp_hostname');
  }
  public set sftpHostname(value: string) {
    this._sftpHostname = value;
  }
  public resetSftpHostname() {
    this._sftpHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpHostnameInput() {
    return this._sftpHostname;
  }

  // sftp_keepalive_interval - computed: true, optional: true, required: false
  private _sftpKeepaliveInterval?: string; 
  public get sftpKeepaliveInterval() {
    return this.getStringAttribute('sftp_keepalive_interval');
  }
  public set sftpKeepaliveInterval(value: string) {
    this._sftpKeepaliveInterval = value;
  }
  public resetSftpKeepaliveInterval() {
    this._sftpKeepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpKeepaliveIntervalInput() {
    return this._sftpKeepaliveInterval;
  }

  // sftp_passphrase - computed: true, optional: true, required: false
  private _sftpPassphrase?: string; 
  public get sftpPassphrase() {
    return this.getStringAttribute('sftp_passphrase');
  }
  public set sftpPassphrase(value: string) {
    this._sftpPassphrase = value;
  }
  public resetSftpPassphrase() {
    this._sftpPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpPassphraseInput() {
    return this._sftpPassphrase;
  }

  // sftp_password - computed: true, optional: true, required: false
  private _sftpPassword?: string; 
  public get sftpPassword() {
    return this.getStringAttribute('sftp_password');
  }
  public set sftpPassword(value: string) {
    this._sftpPassword = value;
  }
  public resetSftpPassword() {
    this._sftpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpPasswordInput() {
    return this._sftpPassword;
  }

  // sftp_port - computed: true, optional: true, required: false
  private _sftpPort?: string; 
  public get sftpPort() {
    return this.getStringAttribute('sftp_port');
  }
  public set sftpPort(value: string) {
    this._sftpPort = value;
  }
  public resetSftpPort() {
    this._sftpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpPortInput() {
    return this._sftpPort;
  }

  // sftp_private_key - computed: true, optional: true, required: false
  private _sftpPrivateKey?: string; 
  public get sftpPrivateKey() {
    return this.getStringAttribute('sftp_private_key');
  }
  public set sftpPrivateKey(value: string) {
    this._sftpPrivateKey = value;
  }
  public resetSftpPrivateKey() {
    this._sftpPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpPrivateKeyInput() {
    return this._sftpPrivateKey;
  }

  // sftp_root_directory - computed: true, optional: true, required: false
  private _sftpRootDirectory?: string; 
  public get sftpRootDirectory() {
    return this.getStringAttribute('sftp_root_directory');
  }
  public set sftpRootDirectory(value: string) {
    this._sftpRootDirectory = value;
  }
  public resetSftpRootDirectory() {
    this._sftpRootDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpRootDirectoryInput() {
    return this._sftpRootDirectory;
  }

  // sftp_upload_directory - computed: true, optional: true, required: false
  private _sftpUploadDirectory?: string; 
  public get sftpUploadDirectory() {
    return this.getStringAttribute('sftp_upload_directory');
  }
  public set sftpUploadDirectory(value: string) {
    this._sftpUploadDirectory = value;
  }
  public resetSftpUploadDirectory() {
    this._sftpUploadDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpUploadDirectoryInput() {
    return this._sftpUploadDirectory;
  }

  // sftp_username - computed: true, optional: true, required: false
  private _sftpUsername?: string; 
  public get sftpUsername() {
    return this.getStringAttribute('sftp_username');
  }
  public set sftpUsername(value: string) {
    this._sftpUsername = value;
  }
  public resetSftpUsername() {
    this._sftpUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpUsernameInput() {
    return this._sftpUsername;
  }

  // static_channels - computed: true, optional: true, required: false
  private _staticChannels?: string; 
  public get staticChannels() {
    return this.getStringAttribute('static_channels');
  }
  public set staticChannels(value: string) {
    this._staticChannels = value;
  }
  public resetStaticChannels() {
    this._staticChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticChannelsInput() {
    return this._staticChannels;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // width - computed: true, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // wol_boot_wait_time - computed: true, optional: true, required: false
  private _wolBootWaitTime?: string; 
  public get wolBootWaitTime() {
    return this.getStringAttribute('wol_boot_wait_time');
  }
  public set wolBootWaitTime(value: string) {
    this._wolBootWaitTime = value;
  }
  public resetWolBootWaitTime() {
    this._wolBootWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wolBootWaitTimeInput() {
    return this._wolBootWaitTime;
  }

  // wol_broadcast_address - computed: true, optional: true, required: false
  private _wolBroadcastAddress?: string; 
  public get wolBroadcastAddress() {
    return this.getStringAttribute('wol_broadcast_address');
  }
  public set wolBroadcastAddress(value: string) {
    this._wolBroadcastAddress = value;
  }
  public resetWolBroadcastAddress() {
    this._wolBroadcastAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wolBroadcastAddressInput() {
    return this._wolBroadcastAddress;
  }

  // wol_mac_address - computed: true, optional: true, required: false
  private _wolMacAddress?: string; 
  public get wolMacAddress() {
    return this.getStringAttribute('wol_mac_address');
  }
  public set wolMacAddress(value: string) {
    this._wolMacAddress = value;
  }
  public resetWolMacAddress() {
    this._wolMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wolMacAddressInput() {
    return this._wolMacAddress;
  }

  // wol_send_packet - computed: true, optional: true, required: false
  private _wolSendPacket?: boolean | cdktf.IResolvable; 
  public get wolSendPacket() {
    return this.getBooleanAttribute('wol_send_packet');
  }
  public set wolSendPacket(value: boolean | cdktf.IResolvable) {
    this._wolSendPacket = value;
  }
  public resetWolSendPacket() {
    this._wolSendPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wolSendPacketInput() {
    return this._wolSendPacket;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp guacamole_connection_rdp}
*/
export class ConnectionRdp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "guacamole_connection_rdp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectionRdp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectionRdp to import
  * @param importFromId The id of the existing ConnectionRdp that should be imported. Refer to the {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectionRdp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "guacamole_connection_rdp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_rdp guacamole_connection_rdp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionRdpConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionRdpConfig) {
    super(scope, id, {
      terraformResourceType: 'guacamole_connection_rdp',
      terraformGeneratorMetadata: {
        providerName: 'guacamole',
        providerVersion: '1.4.1',
        providerVersionConstraint: '1.4.1'
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
    this._name = config.name;
    this._parentIdentifier = config.parentIdentifier;
    this._attributes.internalValue = config.attributes;
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_connections - computed: true, optional: false, required: false
  public get activeConnections() {
    return this.getNumberAttribute('active_connections');
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

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
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

  // parent_identifier - computed: false, optional: true, required: false
  private _parentIdentifier?: string; 
  public get parentIdentifier() {
    return this.getStringAttribute('parent_identifier');
  }
  public set parentIdentifier(value: string) {
    this._parentIdentifier = value;
  }
  public resetParentIdentifier() {
    this._parentIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdentifierInput() {
    return this._parentIdentifier;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new ConnectionRdpAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: ConnectionRdpAttributes) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new ConnectionRdpParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ConnectionRdpParameters) {
    this._parameters.internalValue = value;
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
      name: cdktf.stringToTerraform(this._name),
      parent_identifier: cdktf.stringToTerraform(this._parentIdentifier),
      attributes: connectionRdpAttributesToTerraform(this._attributes.internalValue),
      parameters: connectionRdpParametersToTerraform(this._parameters.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_identifier: {
        value: cdktf.stringToHclTerraform(this._parentIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attributes: {
        value: connectionRdpAttributesToHclTerraform(this._attributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionRdpAttributesList",
      },
      parameters: {
        value: connectionRdpParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionRdpParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
