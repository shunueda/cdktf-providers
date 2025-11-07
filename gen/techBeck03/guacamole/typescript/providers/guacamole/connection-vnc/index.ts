// https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionVncConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#id ConnectionVnc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the guacamole connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#name ConnectionVnc#name}
  */
  readonly name: string;
  /**
  * Parent identifier of the guacamole connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#parent_identifier ConnectionVnc#parent_identifier}
  */
  readonly parentIdentifier?: string;
  /**
  * attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#attributes ConnectionVnc#attributes}
  */
  readonly attributes?: ConnectionVncAttributes;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#parameters ConnectionVnc#parameters}
  */
  readonly parameters: ConnectionVncParameters;
}
export interface ConnectionVncAttributes {
  /**
  * Use load balancing for failover only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#failover_only ConnectionVnc#failover_only}
  */
  readonly failoverOnly?: boolean | cdktf.IResolvable;
  /**
  * Guacd proxy encryption type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#guacd_encryption ConnectionVnc#guacd_encryption}
  */
  readonly guacdEncryption?: string;
  /**
  * Guacd proxy hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#guacd_hostname ConnectionVnc#guacd_hostname}
  */
  readonly guacdHostname?: string;
  /**
  * Guacd proxy port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#guacd_port ConnectionVnc#guacd_port}
  */
  readonly guacdPort?: string;
  /**
  * Maximum concurrent total connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#max_connections ConnectionVnc#max_connections}
  */
  readonly maxConnections?: string;
  /**
  * Maximum concurrent connections per user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#max_connections_per_user ConnectionVnc#max_connections_per_user}
  */
  readonly maxConnectionsPerUser?: string;
  /**
  * Load balancing connection weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#weight ConnectionVnc#weight}
  */
  readonly weight?: string;
}

export function connectionVncAttributesToTerraform(struct?: ConnectionVncAttributesOutputReference | ConnectionVncAttributes): any {
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


export function connectionVncAttributesToHclTerraform(struct?: ConnectionVncAttributesOutputReference | ConnectionVncAttributes): any {
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

export class ConnectionVncAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionVncAttributes | undefined {
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

  public set internalValue(value: ConnectionVncAttributes | undefined) {
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
export interface ConnectionVncParameters {
  /**
  * Audio server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#audio_server_name ConnectionVnc#audio_server_name}
  */
  readonly audioServerName?: string;
  /**
  * Clipboard encoding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#clipboard_encoding ConnectionVnc#clipboard_encoding}
  */
  readonly clipboardEncoding?: string;
  /**
  * Color depth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#color_depth ConnectionVnc#color_depth}
  */
  readonly colorDepth?: string;
  /**
  * Local or remote cursor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#cursor ConnectionVnc#cursor}
  */
  readonly cursor?: string;
  /**
  * VNC repeater destination host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#destination_host ConnectionVnc#destination_host}
  */
  readonly destinationHost?: string;
  /**
  * VN repeater destination port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#destination_port ConnectionVnc#destination_port}
  */
  readonly destinationPort?: string;
  /**
  * Disable copying from terminal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#disable_copy ConnectionVnc#disable_copy}
  */
  readonly disableCopy?: boolean | cdktf.IResolvable;
  /**
  * Disable pasting from client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#disable_paste ConnectionVnc#disable_paste}
  */
  readonly disablePaste?: boolean | cdktf.IResolvable;
  /**
  * Enable audio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#enable_audio ConnectionVnc#enable_audio}
  */
  readonly enableAudio?: boolean | cdktf.IResolvable;
  /**
  * Hostname of target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#hostname ConnectionVnc#hostname}
  */
  readonly hostname: string;
  /**
  * Password for vnc connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#password ConnectionVnc#password}
  */
  readonly password?: string;
  /**
  * Port for target connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#port ConnectionVnc#port}
  */
  readonly port?: string;
  /**
  * Display is readonly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#readonly ConnectionVnc#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
  /**
  * Auto create recording path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#recording_auto_create_path ConnectionVnc#recording_auto_create_path}
  */
  readonly recordingAutoCreatePath?: boolean | cdktf.IResolvable;
  /**
  * Exclude mouse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#recording_exclude_mouse ConnectionVnc#recording_exclude_mouse}
  */
  readonly recordingExcludeMouse?: boolean | cdktf.IResolvable;
  /**
  * Exclude graphics/streams
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#recording_exclude_output ConnectionVnc#recording_exclude_output}
  */
  readonly recordingExcludeOutput?: boolean | cdktf.IResolvable;
  /**
  * Include key events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#recording_include_keys ConnectionVnc#recording_include_keys}
  */
  readonly recordingIncludeKeys?: boolean | cdktf.IResolvable;
  /**
  * Screen recording name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#recording_name ConnectionVnc#recording_name}
  */
  readonly recordingName?: string;
  /**
  * Screen recording path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#recording_path ConnectionVnc#recording_path}
  */
  readonly recordingPath?: string;
  /**
  * Disable file download
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#sftp_disable_file_download ConnectionVnc#sftp_disable_file_download}
  */
  readonly sftpDisableFileDownload?: boolean | cdktf.IResolvable;
  /**
  * Disable file upload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#sftp_disable_file_upload ConnectionVnc#sftp_disable_file_upload}
  */
  readonly sftpDisableFileUpload?: boolean | cdktf.IResolvable;
  /**
  * Enable sftp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#sftp_enable ConnectionVnc#sftp_enable}
  */
  readonly sftpEnable?: boolean | cdktf.IResolvable;
  /**
  * SFTP server public host key (Base64)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#sftp_host_key ConnectionVnc#sftp_host_key}
  */
  readonly sftpHostKey?: string;
  /**
  * SFTP server hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#sftp_hostname ConnectionVnc#sftp_hostname}
  */
  readonly sftpHostname?: string;
  /**
  * SFTP keepalive interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#sftp_keepalive_interval ConnectionVnc#sftp_keepalive_interval}
  */
  readonly sftpKeepaliveInterval?: string;
  /**
  * SFTP server private key passphrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#sftp_passphrase ConnectionVnc#sftp_passphrase}
  */
  readonly sftpPassphrase?: string;
  /**
  * SFTP server password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#sftp_password ConnectionVnc#sftp_password}
  */
  readonly sftpPassword?: string;
  /**
  * SFTP server port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#sftp_port ConnectionVnc#sftp_port}
  */
  readonly sftpPort?: string;
  /**
  * SFTP server private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#sftp_private_key ConnectionVnc#sftp_private_key}
  */
  readonly sftpPrivateKey?: string;
  /**
  * File browser root directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#sftp_root_directory ConnectionVnc#sftp_root_directory}
  */
  readonly sftpRootDirectory?: string;
  /**
  * SFTP default upload directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#sftp_upload_directory ConnectionVnc#sftp_upload_directory}
  */
  readonly sftpUploadDirectory?: string;
  /**
  * SFTP server username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#sftp_username ConnectionVnc#sftp_username}
  */
  readonly sftpUsername?: string;
  /**
  * Swap red/blue Components
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#swap_red_blue ConnectionVnc#swap_red_blue}
  */
  readonly swapRedBlue?: boolean | cdktf.IResolvable;
  /**
  * Username for vnc connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#username ConnectionVnc#username}
  */
  readonly username: string;
  /**
  * Host boot wait time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#wol_boot_wait_time ConnectionVnc#wol_boot_wait_time}
  */
  readonly wolBootWaitTime?: string;
  /**
  * Broadcast address for WoL packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#wol_broadcast_address ConnectionVnc#wol_broadcast_address}
  */
  readonly wolBroadcastAddress?: string;
  /**
  * MAC address of the remote host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#wol_mac_address ConnectionVnc#wol_mac_address}
  */
  readonly wolMacAddress?: string;
  /**
  * Send WoL packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#wol_send_packet ConnectionVnc#wol_send_packet}
  */
  readonly wolSendPacket?: boolean | cdktf.IResolvable;
}

export function connectionVncParametersToTerraform(struct?: ConnectionVncParametersOutputReference | ConnectionVncParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_server_name: cdktf.stringToTerraform(struct!.audioServerName),
    clipboard_encoding: cdktf.stringToTerraform(struct!.clipboardEncoding),
    color_depth: cdktf.stringToTerraform(struct!.colorDepth),
    cursor: cdktf.stringToTerraform(struct!.cursor),
    destination_host: cdktf.stringToTerraform(struct!.destinationHost),
    destination_port: cdktf.stringToTerraform(struct!.destinationPort),
    disable_copy: cdktf.booleanToTerraform(struct!.disableCopy),
    disable_paste: cdktf.booleanToTerraform(struct!.disablePaste),
    enable_audio: cdktf.booleanToTerraform(struct!.enableAudio),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
    recording_auto_create_path: cdktf.booleanToTerraform(struct!.recordingAutoCreatePath),
    recording_exclude_mouse: cdktf.booleanToTerraform(struct!.recordingExcludeMouse),
    recording_exclude_output: cdktf.booleanToTerraform(struct!.recordingExcludeOutput),
    recording_include_keys: cdktf.booleanToTerraform(struct!.recordingIncludeKeys),
    recording_name: cdktf.stringToTerraform(struct!.recordingName),
    recording_path: cdktf.stringToTerraform(struct!.recordingPath),
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
    swap_red_blue: cdktf.booleanToTerraform(struct!.swapRedBlue),
    username: cdktf.stringToTerraform(struct!.username),
    wol_boot_wait_time: cdktf.stringToTerraform(struct!.wolBootWaitTime),
    wol_broadcast_address: cdktf.stringToTerraform(struct!.wolBroadcastAddress),
    wol_mac_address: cdktf.stringToTerraform(struct!.wolMacAddress),
    wol_send_packet: cdktf.booleanToTerraform(struct!.wolSendPacket),
  }
}


export function connectionVncParametersToHclTerraform(struct?: ConnectionVncParametersOutputReference | ConnectionVncParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio_server_name: {
      value: cdktf.stringToHclTerraform(struct!.audioServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clipboard_encoding: {
      value: cdktf.stringToHclTerraform(struct!.clipboardEncoding),
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
    cursor: {
      value: cdktf.stringToHclTerraform(struct!.cursor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_host: {
      value: cdktf.stringToHclTerraform(struct!.destinationHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port: {
      value: cdktf.stringToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_copy: {
      value: cdktf.booleanToHclTerraform(struct!.disableCopy),
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
    enable_audio: {
      value: cdktf.booleanToHclTerraform(struct!.enableAudio),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
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
    swap_red_blue: {
      value: cdktf.booleanToHclTerraform(struct!.swapRedBlue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
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

export class ConnectionVncParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionVncParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioServerName = this._audioServerName;
    }
    if (this._clipboardEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.clipboardEncoding = this._clipboardEncoding;
    }
    if (this._colorDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorDepth = this._colorDepth;
    }
    if (this._cursor !== undefined) {
      hasAnyValues = true;
      internalValueResult.cursor = this._cursor;
    }
    if (this._destinationHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationHost = this._destinationHost;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._disableCopy !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCopy = this._disableCopy;
    }
    if (this._disablePaste !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePaste = this._disablePaste;
    }
    if (this._enableAudio !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAudio = this._enableAudio;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
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
    if (this._swapRedBlue !== undefined) {
      hasAnyValues = true;
      internalValueResult.swapRedBlue = this._swapRedBlue;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
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

  public set internalValue(value: ConnectionVncParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioServerName = undefined;
      this._clipboardEncoding = undefined;
      this._colorDepth = undefined;
      this._cursor = undefined;
      this._destinationHost = undefined;
      this._destinationPort = undefined;
      this._disableCopy = undefined;
      this._disablePaste = undefined;
      this._enableAudio = undefined;
      this._hostname = undefined;
      this._password = undefined;
      this._port = undefined;
      this._readonly = undefined;
      this._recordingAutoCreatePath = undefined;
      this._recordingExcludeMouse = undefined;
      this._recordingExcludeOutput = undefined;
      this._recordingIncludeKeys = undefined;
      this._recordingName = undefined;
      this._recordingPath = undefined;
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
      this._swapRedBlue = undefined;
      this._username = undefined;
      this._wolBootWaitTime = undefined;
      this._wolBroadcastAddress = undefined;
      this._wolMacAddress = undefined;
      this._wolSendPacket = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioServerName = value.audioServerName;
      this._clipboardEncoding = value.clipboardEncoding;
      this._colorDepth = value.colorDepth;
      this._cursor = value.cursor;
      this._destinationHost = value.destinationHost;
      this._destinationPort = value.destinationPort;
      this._disableCopy = value.disableCopy;
      this._disablePaste = value.disablePaste;
      this._enableAudio = value.enableAudio;
      this._hostname = value.hostname;
      this._password = value.password;
      this._port = value.port;
      this._readonly = value.readonly;
      this._recordingAutoCreatePath = value.recordingAutoCreatePath;
      this._recordingExcludeMouse = value.recordingExcludeMouse;
      this._recordingExcludeOutput = value.recordingExcludeOutput;
      this._recordingIncludeKeys = value.recordingIncludeKeys;
      this._recordingName = value.recordingName;
      this._recordingPath = value.recordingPath;
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
      this._swapRedBlue = value.swapRedBlue;
      this._username = value.username;
      this._wolBootWaitTime = value.wolBootWaitTime;
      this._wolBroadcastAddress = value.wolBroadcastAddress;
      this._wolMacAddress = value.wolMacAddress;
      this._wolSendPacket = value.wolSendPacket;
    }
  }

  // audio_server_name - computed: true, optional: true, required: false
  private _audioServerName?: string; 
  public get audioServerName() {
    return this.getStringAttribute('audio_server_name');
  }
  public set audioServerName(value: string) {
    this._audioServerName = value;
  }
  public resetAudioServerName() {
    this._audioServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioServerNameInput() {
    return this._audioServerName;
  }

  // clipboard_encoding - computed: true, optional: true, required: false
  private _clipboardEncoding?: string; 
  public get clipboardEncoding() {
    return this.getStringAttribute('clipboard_encoding');
  }
  public set clipboardEncoding(value: string) {
    this._clipboardEncoding = value;
  }
  public resetClipboardEncoding() {
    this._clipboardEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clipboardEncodingInput() {
    return this._clipboardEncoding;
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

  // cursor - computed: true, optional: true, required: false
  private _cursor?: string; 
  public get cursor() {
    return this.getStringAttribute('cursor');
  }
  public set cursor(value: string) {
    this._cursor = value;
  }
  public resetCursor() {
    this._cursor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cursorInput() {
    return this._cursor;
  }

  // destination_host - computed: true, optional: true, required: false
  private _destinationHost?: string; 
  public get destinationHost() {
    return this.getStringAttribute('destination_host');
  }
  public set destinationHost(value: string) {
    this._destinationHost = value;
  }
  public resetDestinationHost() {
    this._destinationHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationHostInput() {
    return this._destinationHost;
  }

  // destination_port - computed: true, optional: true, required: false
  private _destinationPort?: string; 
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }
  public set destinationPort(value: string) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
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

  // enable_audio - computed: true, optional: true, required: false
  private _enableAudio?: boolean | cdktf.IResolvable; 
  public get enableAudio() {
    return this.getBooleanAttribute('enable_audio');
  }
  public set enableAudio(value: boolean | cdktf.IResolvable) {
    this._enableAudio = value;
  }
  public resetEnableAudio() {
    this._enableAudio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAudioInput() {
    return this._enableAudio;
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

  // swap_red_blue - computed: true, optional: true, required: false
  private _swapRedBlue?: boolean | cdktf.IResolvable; 
  public get swapRedBlue() {
    return this.getBooleanAttribute('swap_red_blue');
  }
  public set swapRedBlue(value: boolean | cdktf.IResolvable) {
    this._swapRedBlue = value;
  }
  public resetSwapRedBlue() {
    this._swapRedBlue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapRedBlueInput() {
    return this._swapRedBlue;
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
* Represents a {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc guacamole_connection_vnc}
*/
export class ConnectionVnc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "guacamole_connection_vnc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectionVnc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectionVnc to import
  * @param importFromId The id of the existing ConnectionVnc that should be imported. Refer to the {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectionVnc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "guacamole_connection_vnc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_vnc guacamole_connection_vnc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionVncConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionVncConfig) {
    super(scope, id, {
      terraformResourceType: 'guacamole_connection_vnc',
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
  private _attributes = new ConnectionVncAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: ConnectionVncAttributes) {
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
  private _parameters = new ConnectionVncParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ConnectionVncParameters) {
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
      attributes: connectionVncAttributesToTerraform(this._attributes.internalValue),
      parameters: connectionVncParametersToTerraform(this._parameters.internalValue),
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
        value: connectionVncAttributesToHclTerraform(this._attributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionVncAttributesList",
      },
      parameters: {
        value: connectionVncParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionVncParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
