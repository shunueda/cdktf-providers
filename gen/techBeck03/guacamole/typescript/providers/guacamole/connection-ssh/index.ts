// https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionSshConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#id ConnectionSsh#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the guacamole connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#name ConnectionSsh#name}
  */
  readonly name: string;
  /**
  * Parent identifier of the guacamole connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#parent_identifier ConnectionSsh#parent_identifier}
  */
  readonly parentIdentifier?: string;
  /**
  * attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#attributes ConnectionSsh#attributes}
  */
  readonly attributes?: ConnectionSshAttributes;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#parameters ConnectionSsh#parameters}
  */
  readonly parameters: ConnectionSshParameters;
}
export interface ConnectionSshAttributes {
  /**
  * Use load balancing for failover only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#failover_only ConnectionSsh#failover_only}
  */
  readonly failoverOnly?: boolean | cdktf.IResolvable;
  /**
  * Guacd proxy encryption type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#guacd_encryption ConnectionSsh#guacd_encryption}
  */
  readonly guacdEncryption?: string;
  /**
  * Guacd proxy hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#guacd_hostname ConnectionSsh#guacd_hostname}
  */
  readonly guacdHostname?: string;
  /**
  * Guacd proxy port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#guacd_port ConnectionSsh#guacd_port}
  */
  readonly guacdPort?: string;
  /**
  * Maximum concurrent total connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#max_connections ConnectionSsh#max_connections}
  */
  readonly maxConnections?: string;
  /**
  * Maximum concurrent connections per user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#max_connections_per_user ConnectionSsh#max_connections_per_user}
  */
  readonly maxConnectionsPerUser?: string;
  /**
  * Load balancing connection weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#weight ConnectionSsh#weight}
  */
  readonly weight?: string;
}

export function connectionSshAttributesToTerraform(struct?: ConnectionSshAttributesOutputReference | ConnectionSshAttributes): any {
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


export function connectionSshAttributesToHclTerraform(struct?: ConnectionSshAttributesOutputReference | ConnectionSshAttributes): any {
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

export class ConnectionSshAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionSshAttributes | undefined {
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

  public set internalValue(value: ConnectionSshAttributes | undefined) {
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
export interface ConnectionSshParameters {
  /**
  * Backspace key sends
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#backspace ConnectionSsh#backspace}
  */
  readonly backspace?: string;
  /**
  * Display color scheme
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#color_scheme ConnectionSsh#color_scheme}
  */
  readonly colorScheme?: string;
  /**
  * Disable copying from terminal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#disable_copy ConnectionSsh#disable_copy}
  */
  readonly disableCopy?: boolean | cdktf.IResolvable;
  /**
  * Disable pasting from client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#disable_paste ConnectionSsh#disable_paste}
  */
  readonly disablePaste?: boolean | cdktf.IResolvable;
  /**
  * Execute command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#execute_command ConnectionSsh#execute_command}
  */
  readonly executeCommand?: string;
  /**
  * Display font name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#font_name ConnectionSsh#font_name}
  */
  readonly fontName?: string;
  /**
  * Display font size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#font_size ConnectionSsh#font_size}
  */
  readonly fontSize?: string;
  /**
  * Hostname of target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#hostname ConnectionSsh#hostname}
  */
  readonly hostname: string;
  /**
  * Language/Locale
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#locale ConnectionSsh#locale}
  */
  readonly locale?: string;
  /**
  * Display maximum scrollback
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#max_scrollback_size ConnectionSsh#max_scrollback_size}
  */
  readonly maxScrollbackSize?: string;
  /**
  * Private key passphrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#passphrase ConnectionSsh#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Password for ssh connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#password ConnectionSsh#password}
  */
  readonly password?: string;
  /**
  * Port for target connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#port ConnectionSsh#port}
  */
  readonly port?: string;
  /**
  * Private key for ssh connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#private_key ConnectionSsh#private_key}
  */
  readonly privateKey?: string;
  /**
  * Public host key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#public_host_key ConnectionSsh#public_host_key}
  */
  readonly publicHostKey?: string;
  /**
  * Display is readonly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#readonly ConnectionSsh#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
  /**
  * Auto create recording path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#recording_auto_create_path ConnectionSsh#recording_auto_create_path}
  */
  readonly recordingAutoCreatePath?: boolean | cdktf.IResolvable;
  /**
  * Exclude mouse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#recording_exclude_mouse ConnectionSsh#recording_exclude_mouse}
  */
  readonly recordingExcludeMouse?: boolean | cdktf.IResolvable;
  /**
  * Exclude graphics/streams
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#recording_exclude_output ConnectionSsh#recording_exclude_output}
  */
  readonly recordingExcludeOutput?: boolean | cdktf.IResolvable;
  /**
  * Include key events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#recording_include_keys ConnectionSsh#recording_include_keys}
  */
  readonly recordingIncludeKeys?: boolean | cdktf.IResolvable;
  /**
  * Screen recording name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#recording_name ConnectionSsh#recording_name}
  */
  readonly recordingName?: string;
  /**
  * Screen recording path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#recording_path ConnectionSsh#recording_path}
  */
  readonly recordingPath?: string;
  /**
  * Server keepalive interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#server_keepalive ConnectionSsh#server_keepalive}
  */
  readonly serverKeepalive?: string;
  /**
  * Disable file download
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#sftp_disable_file_download ConnectionSsh#sftp_disable_file_download}
  */
  readonly sftpDisableFileDownload?: boolean | cdktf.IResolvable;
  /**
  * Disable file upload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#sftp_disable_file_upload ConnectionSsh#sftp_disable_file_upload}
  */
  readonly sftpDisableFileUpload?: boolean | cdktf.IResolvable;
  /**
  * Enable sftp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#sftp_enable ConnectionSsh#sftp_enable}
  */
  readonly sftpEnable?: boolean | cdktf.IResolvable;
  /**
  * File browser root directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#sftp_root_directory ConnectionSsh#sftp_root_directory}
  */
  readonly sftpRootDirectory?: string;
  /**
  * Terminal type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#terminal_type ConnectionSsh#terminal_type}
  */
  readonly terminalType?: string;
  /**
  * Timezone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#timezone ConnectionSsh#timezone}
  */
  readonly timezone?: string;
  /**
  * Automatically create typescript path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#typescript_auto_create_path ConnectionSsh#typescript_auto_create_path}
  */
  readonly typescriptAutoCreatePath?: boolean | cdktf.IResolvable;
  /**
  * Typescript name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#typescript_name ConnectionSsh#typescript_name}
  */
  readonly typescriptName?: string;
  /**
  * Typescript path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#typescript_path ConnectionSsh#typescript_path}
  */
  readonly typescriptPath?: string;
  /**
  * Username for ssh connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#username ConnectionSsh#username}
  */
  readonly username: string;
  /**
  * Host boot wait time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#wol_boot_wait_time ConnectionSsh#wol_boot_wait_time}
  */
  readonly wolBootWaitTime?: string;
  /**
  * Broadcast address for WoL packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#wol_broadcast_address ConnectionSsh#wol_broadcast_address}
  */
  readonly wolBroadcastAddress?: string;
  /**
  * MAC address of the remote host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#wol_mac_address ConnectionSsh#wol_mac_address}
  */
  readonly wolMacAddress?: string;
  /**
  * Send WoL packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#wol_send_packet ConnectionSsh#wol_send_packet}
  */
  readonly wolSendPacket?: boolean | cdktf.IResolvable;
}

export function connectionSshParametersToTerraform(struct?: ConnectionSshParametersOutputReference | ConnectionSshParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backspace: cdktf.stringToTerraform(struct!.backspace),
    color_scheme: cdktf.stringToTerraform(struct!.colorScheme),
    disable_copy: cdktf.booleanToTerraform(struct!.disableCopy),
    disable_paste: cdktf.booleanToTerraform(struct!.disablePaste),
    execute_command: cdktf.stringToTerraform(struct!.executeCommand),
    font_name: cdktf.stringToTerraform(struct!.fontName),
    font_size: cdktf.stringToTerraform(struct!.fontSize),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    locale: cdktf.stringToTerraform(struct!.locale),
    max_scrollback_size: cdktf.stringToTerraform(struct!.maxScrollbackSize),
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    public_host_key: cdktf.stringToTerraform(struct!.publicHostKey),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
    recording_auto_create_path: cdktf.booleanToTerraform(struct!.recordingAutoCreatePath),
    recording_exclude_mouse: cdktf.booleanToTerraform(struct!.recordingExcludeMouse),
    recording_exclude_output: cdktf.booleanToTerraform(struct!.recordingExcludeOutput),
    recording_include_keys: cdktf.booleanToTerraform(struct!.recordingIncludeKeys),
    recording_name: cdktf.stringToTerraform(struct!.recordingName),
    recording_path: cdktf.stringToTerraform(struct!.recordingPath),
    server_keepalive: cdktf.stringToTerraform(struct!.serverKeepalive),
    sftp_disable_file_download: cdktf.booleanToTerraform(struct!.sftpDisableFileDownload),
    sftp_disable_file_upload: cdktf.booleanToTerraform(struct!.sftpDisableFileUpload),
    sftp_enable: cdktf.booleanToTerraform(struct!.sftpEnable),
    sftp_root_directory: cdktf.stringToTerraform(struct!.sftpRootDirectory),
    terminal_type: cdktf.stringToTerraform(struct!.terminalType),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    typescript_auto_create_path: cdktf.booleanToTerraform(struct!.typescriptAutoCreatePath),
    typescript_name: cdktf.stringToTerraform(struct!.typescriptName),
    typescript_path: cdktf.stringToTerraform(struct!.typescriptPath),
    username: cdktf.stringToTerraform(struct!.username),
    wol_boot_wait_time: cdktf.stringToTerraform(struct!.wolBootWaitTime),
    wol_broadcast_address: cdktf.stringToTerraform(struct!.wolBroadcastAddress),
    wol_mac_address: cdktf.stringToTerraform(struct!.wolMacAddress),
    wol_send_packet: cdktf.booleanToTerraform(struct!.wolSendPacket),
  }
}


export function connectionSshParametersToHclTerraform(struct?: ConnectionSshParametersOutputReference | ConnectionSshParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backspace: {
      value: cdktf.stringToHclTerraform(struct!.backspace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color_scheme: {
      value: cdktf.stringToHclTerraform(struct!.colorScheme),
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
    execute_command: {
      value: cdktf.stringToHclTerraform(struct!.executeCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_name: {
      value: cdktf.stringToHclTerraform(struct!.fontName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktf.stringToHclTerraform(struct!.fontSize),
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
    locale: {
      value: cdktf.stringToHclTerraform(struct!.locale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_scrollback_size: {
      value: cdktf.stringToHclTerraform(struct!.maxScrollbackSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
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
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_host_key: {
      value: cdktf.stringToHclTerraform(struct!.publicHostKey),
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
    server_keepalive: {
      value: cdktf.stringToHclTerraform(struct!.serverKeepalive),
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
    sftp_root_directory: {
      value: cdktf.stringToHclTerraform(struct!.sftpRootDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    terminal_type: {
      value: cdktf.stringToHclTerraform(struct!.terminalType),
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
    typescript_auto_create_path: {
      value: cdktf.booleanToHclTerraform(struct!.typescriptAutoCreatePath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    typescript_name: {
      value: cdktf.stringToHclTerraform(struct!.typescriptName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    typescript_path: {
      value: cdktf.stringToHclTerraform(struct!.typescriptPath),
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

export class ConnectionSshParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionSshParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.backspace = this._backspace;
    }
    if (this._colorScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorScheme = this._colorScheme;
    }
    if (this._disableCopy !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCopy = this._disableCopy;
    }
    if (this._disablePaste !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePaste = this._disablePaste;
    }
    if (this._executeCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeCommand = this._executeCommand;
    }
    if (this._fontName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontName = this._fontName;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._locale !== undefined) {
      hasAnyValues = true;
      internalValueResult.locale = this._locale;
    }
    if (this._maxScrollbackSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScrollbackSize = this._maxScrollbackSize;
    }
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._publicHostKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicHostKey = this._publicHostKey;
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
    if (this._serverKeepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverKeepalive = this._serverKeepalive;
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
    if (this._sftpRootDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftpRootDirectory = this._sftpRootDirectory;
    }
    if (this._terminalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminalType = this._terminalType;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._typescriptAutoCreatePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.typescriptAutoCreatePath = this._typescriptAutoCreatePath;
    }
    if (this._typescriptName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typescriptName = this._typescriptName;
    }
    if (this._typescriptPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.typescriptPath = this._typescriptPath;
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

  public set internalValue(value: ConnectionSshParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backspace = undefined;
      this._colorScheme = undefined;
      this._disableCopy = undefined;
      this._disablePaste = undefined;
      this._executeCommand = undefined;
      this._fontName = undefined;
      this._fontSize = undefined;
      this._hostname = undefined;
      this._locale = undefined;
      this._maxScrollbackSize = undefined;
      this._passphrase = undefined;
      this._password = undefined;
      this._port = undefined;
      this._privateKey = undefined;
      this._publicHostKey = undefined;
      this._readonly = undefined;
      this._recordingAutoCreatePath = undefined;
      this._recordingExcludeMouse = undefined;
      this._recordingExcludeOutput = undefined;
      this._recordingIncludeKeys = undefined;
      this._recordingName = undefined;
      this._recordingPath = undefined;
      this._serverKeepalive = undefined;
      this._sftpDisableFileDownload = undefined;
      this._sftpDisableFileUpload = undefined;
      this._sftpEnable = undefined;
      this._sftpRootDirectory = undefined;
      this._terminalType = undefined;
      this._timezone = undefined;
      this._typescriptAutoCreatePath = undefined;
      this._typescriptName = undefined;
      this._typescriptPath = undefined;
      this._username = undefined;
      this._wolBootWaitTime = undefined;
      this._wolBroadcastAddress = undefined;
      this._wolMacAddress = undefined;
      this._wolSendPacket = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backspace = value.backspace;
      this._colorScheme = value.colorScheme;
      this._disableCopy = value.disableCopy;
      this._disablePaste = value.disablePaste;
      this._executeCommand = value.executeCommand;
      this._fontName = value.fontName;
      this._fontSize = value.fontSize;
      this._hostname = value.hostname;
      this._locale = value.locale;
      this._maxScrollbackSize = value.maxScrollbackSize;
      this._passphrase = value.passphrase;
      this._password = value.password;
      this._port = value.port;
      this._privateKey = value.privateKey;
      this._publicHostKey = value.publicHostKey;
      this._readonly = value.readonly;
      this._recordingAutoCreatePath = value.recordingAutoCreatePath;
      this._recordingExcludeMouse = value.recordingExcludeMouse;
      this._recordingExcludeOutput = value.recordingExcludeOutput;
      this._recordingIncludeKeys = value.recordingIncludeKeys;
      this._recordingName = value.recordingName;
      this._recordingPath = value.recordingPath;
      this._serverKeepalive = value.serverKeepalive;
      this._sftpDisableFileDownload = value.sftpDisableFileDownload;
      this._sftpDisableFileUpload = value.sftpDisableFileUpload;
      this._sftpEnable = value.sftpEnable;
      this._sftpRootDirectory = value.sftpRootDirectory;
      this._terminalType = value.terminalType;
      this._timezone = value.timezone;
      this._typescriptAutoCreatePath = value.typescriptAutoCreatePath;
      this._typescriptName = value.typescriptName;
      this._typescriptPath = value.typescriptPath;
      this._username = value.username;
      this._wolBootWaitTime = value.wolBootWaitTime;
      this._wolBroadcastAddress = value.wolBroadcastAddress;
      this._wolMacAddress = value.wolMacAddress;
      this._wolSendPacket = value.wolSendPacket;
    }
  }

  // backspace - computed: true, optional: true, required: false
  private _backspace?: string; 
  public get backspace() {
    return this.getStringAttribute('backspace');
  }
  public set backspace(value: string) {
    this._backspace = value;
  }
  public resetBackspace() {
    this._backspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backspaceInput() {
    return this._backspace;
  }

  // color_scheme - computed: true, optional: true, required: false
  private _colorScheme?: string; 
  public get colorScheme() {
    return this.getStringAttribute('color_scheme');
  }
  public set colorScheme(value: string) {
    this._colorScheme = value;
  }
  public resetColorScheme() {
    this._colorScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorSchemeInput() {
    return this._colorScheme;
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

  // execute_command - computed: true, optional: true, required: false
  private _executeCommand?: string; 
  public get executeCommand() {
    return this.getStringAttribute('execute_command');
  }
  public set executeCommand(value: string) {
    this._executeCommand = value;
  }
  public resetExecuteCommand() {
    this._executeCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeCommandInput() {
    return this._executeCommand;
  }

  // font_name - computed: true, optional: true, required: false
  private _fontName?: string; 
  public get fontName() {
    return this.getStringAttribute('font_name');
  }
  public set fontName(value: string) {
    this._fontName = value;
  }
  public resetFontName() {
    this._fontName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontNameInput() {
    return this._fontName;
  }

  // font_size - computed: true, optional: true, required: false
  private _fontSize?: string; 
  public get fontSize() {
    return this.getStringAttribute('font_size');
  }
  public set fontSize(value: string) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
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

  // locale - computed: true, optional: true, required: false
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // max_scrollback_size - computed: true, optional: true, required: false
  private _maxScrollbackSize?: string; 
  public get maxScrollbackSize() {
    return this.getStringAttribute('max_scrollback_size');
  }
  public set maxScrollbackSize(value: string) {
    this._maxScrollbackSize = value;
  }
  public resetMaxScrollbackSize() {
    this._maxScrollbackSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScrollbackSizeInput() {
    return this._maxScrollbackSize;
  }

  // passphrase - computed: true, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
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

  // private_key - computed: true, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // public_host_key - computed: true, optional: true, required: false
  private _publicHostKey?: string; 
  public get publicHostKey() {
    return this.getStringAttribute('public_host_key');
  }
  public set publicHostKey(value: string) {
    this._publicHostKey = value;
  }
  public resetPublicHostKey() {
    this._publicHostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicHostKeyInput() {
    return this._publicHostKey;
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

  // server_keepalive - computed: true, optional: true, required: false
  private _serverKeepalive?: string; 
  public get serverKeepalive() {
    return this.getStringAttribute('server_keepalive');
  }
  public set serverKeepalive(value: string) {
    this._serverKeepalive = value;
  }
  public resetServerKeepalive() {
    this._serverKeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverKeepaliveInput() {
    return this._serverKeepalive;
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

  // terminal_type - computed: true, optional: true, required: false
  private _terminalType?: string; 
  public get terminalType() {
    return this.getStringAttribute('terminal_type');
  }
  public set terminalType(value: string) {
    this._terminalType = value;
  }
  public resetTerminalType() {
    this._terminalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalTypeInput() {
    return this._terminalType;
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

  // typescript_auto_create_path - computed: true, optional: true, required: false
  private _typescriptAutoCreatePath?: boolean | cdktf.IResolvable; 
  public get typescriptAutoCreatePath() {
    return this.getBooleanAttribute('typescript_auto_create_path');
  }
  public set typescriptAutoCreatePath(value: boolean | cdktf.IResolvable) {
    this._typescriptAutoCreatePath = value;
  }
  public resetTypescriptAutoCreatePath() {
    this._typescriptAutoCreatePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typescriptAutoCreatePathInput() {
    return this._typescriptAutoCreatePath;
  }

  // typescript_name - computed: true, optional: true, required: false
  private _typescriptName?: string; 
  public get typescriptName() {
    return this.getStringAttribute('typescript_name');
  }
  public set typescriptName(value: string) {
    this._typescriptName = value;
  }
  public resetTypescriptName() {
    this._typescriptName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typescriptNameInput() {
    return this._typescriptName;
  }

  // typescript_path - computed: true, optional: true, required: false
  private _typescriptPath?: string; 
  public get typescriptPath() {
    return this.getStringAttribute('typescript_path');
  }
  public set typescriptPath(value: string) {
    this._typescriptPath = value;
  }
  public resetTypescriptPath() {
    this._typescriptPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typescriptPathInput() {
    return this._typescriptPath;
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
* Represents a {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh guacamole_connection_ssh}
*/
export class ConnectionSsh extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "guacamole_connection_ssh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectionSsh resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectionSsh to import
  * @param importFromId The id of the existing ConnectionSsh that should be imported. Refer to the {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectionSsh to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "guacamole_connection_ssh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_ssh guacamole_connection_ssh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionSshConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionSshConfig) {
    super(scope, id, {
      terraformResourceType: 'guacamole_connection_ssh',
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
  private _attributes = new ConnectionSshAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: ConnectionSshAttributes) {
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
  private _parameters = new ConnectionSshParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ConnectionSshParameters) {
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
      attributes: connectionSshAttributesToTerraform(this._attributes.internalValue),
      parameters: connectionSshParametersToTerraform(this._parameters.internalValue),
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
        value: connectionSshAttributesToHclTerraform(this._attributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionSshAttributesList",
      },
      parameters: {
        value: connectionSshParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionSshParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
