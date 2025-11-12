// https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionTelnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#id ConnectionTelnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the guacamole connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#name ConnectionTelnet#name}
  */
  readonly name: string;
  /**
  * Parent identifier of the guacamole connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#parent_identifier ConnectionTelnet#parent_identifier}
  */
  readonly parentIdentifier?: string;
  /**
  * attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#attributes ConnectionTelnet#attributes}
  */
  readonly attributes?: ConnectionTelnetAttributes;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#parameters ConnectionTelnet#parameters}
  */
  readonly parameters: ConnectionTelnetParameters;
}
export interface ConnectionTelnetAttributes {
  /**
  * Use load balancing for failover only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#failover_only ConnectionTelnet#failover_only}
  */
  readonly failoverOnly?: boolean | cdktf.IResolvable;
  /**
  * Guacd proxy encryption type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#guacd_encryption ConnectionTelnet#guacd_encryption}
  */
  readonly guacdEncryption?: string;
  /**
  * Guacd proxy hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#guacd_hostname ConnectionTelnet#guacd_hostname}
  */
  readonly guacdHostname?: string;
  /**
  * Guacd proxy port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#guacd_port ConnectionTelnet#guacd_port}
  */
  readonly guacdPort?: string;
  /**
  * Maximum concurrent total connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#max_connections ConnectionTelnet#max_connections}
  */
  readonly maxConnections?: string;
  /**
  * Maximum concurrent connections per user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#max_connections_per_user ConnectionTelnet#max_connections_per_user}
  */
  readonly maxConnectionsPerUser?: string;
  /**
  * Load balancing connection weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#weight ConnectionTelnet#weight}
  */
  readonly weight?: string;
}

export function connectionTelnetAttributesToTerraform(struct?: ConnectionTelnetAttributesOutputReference | ConnectionTelnetAttributes): any {
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


export function connectionTelnetAttributesToHclTerraform(struct?: ConnectionTelnetAttributesOutputReference | ConnectionTelnetAttributes): any {
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

export class ConnectionTelnetAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionTelnetAttributes | undefined {
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

  public set internalValue(value: ConnectionTelnetAttributes | undefined) {
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
export interface ConnectionTelnetParameters {
  /**
  * Backspace key sends
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#backspace ConnectionTelnet#backspace}
  */
  readonly backspace?: string;
  /**
  * Display color scheme
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#color_scheme ConnectionTelnet#color_scheme}
  */
  readonly colorScheme?: string;
  /**
  * Disable copying from terminal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#disable_copy ConnectionTelnet#disable_copy}
  */
  readonly disableCopy?: boolean | cdktf.IResolvable;
  /**
  * Disable pasting from client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#disable_paste ConnectionTelnet#disable_paste}
  */
  readonly disablePaste?: boolean | cdktf.IResolvable;
  /**
  * Display font name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#font_name ConnectionTelnet#font_name}
  */
  readonly fontName?: string;
  /**
  * Display font size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#font_size ConnectionTelnet#font_size}
  */
  readonly fontSize?: string;
  /**
  * Hostname of target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#hostname ConnectionTelnet#hostname}
  */
  readonly hostname: string;
  /**
  * Login failure regex for telnet connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#login_failure_regex ConnectionTelnet#login_failure_regex}
  */
  readonly loginFailureRegex?: string;
  /**
  * Login success regex for telnet connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#login_success_regex ConnectionTelnet#login_success_regex}
  */
  readonly loginSuccessRegex?: string;
  /**
  * Display maximum scrollback
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#max_scrollback_size ConnectionTelnet#max_scrollback_size}
  */
  readonly maxScrollbackSize?: string;
  /**
  * Password for telnet connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#password ConnectionTelnet#password}
  */
  readonly password?: string;
  /**
  * Password regex for telnet connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#password_regex ConnectionTelnet#password_regex}
  */
  readonly passwordRegex?: string;
  /**
  * Port for target connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#port ConnectionTelnet#port}
  */
  readonly port?: string;
  /**
  * Display is readonly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#readonly ConnectionTelnet#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
  /**
  * Auto create recording path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#recording_auto_create_path ConnectionTelnet#recording_auto_create_path}
  */
  readonly recordingAutoCreatePath?: boolean | cdktf.IResolvable;
  /**
  * Exclude mouse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#recording_exclude_mouse ConnectionTelnet#recording_exclude_mouse}
  */
  readonly recordingExcludeMouse?: boolean | cdktf.IResolvable;
  /**
  * Exclude graphics/streams
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#recording_exclude_output ConnectionTelnet#recording_exclude_output}
  */
  readonly recordingExcludeOutput?: boolean | cdktf.IResolvable;
  /**
  * Include key events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#recording_include_keys ConnectionTelnet#recording_include_keys}
  */
  readonly recordingIncludeKeys?: boolean | cdktf.IResolvable;
  /**
  * Screen recording name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#recording_name ConnectionTelnet#recording_name}
  */
  readonly recordingName?: string;
  /**
  * Screen recording path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#recording_path ConnectionTelnet#recording_path}
  */
  readonly recordingPath?: string;
  /**
  * Terminal type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#terminal_type ConnectionTelnet#terminal_type}
  */
  readonly terminalType?: string;
  /**
  * Automatically create typescript path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#typescript_auto_create_path ConnectionTelnet#typescript_auto_create_path}
  */
  readonly typescriptAutoCreatePath?: boolean | cdktf.IResolvable;
  /**
  * Typescript name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#typescript_name ConnectionTelnet#typescript_name}
  */
  readonly typescriptName?: string;
  /**
  * Typescript path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#typescript_path ConnectionTelnet#typescript_path}
  */
  readonly typescriptPath?: string;
  /**
  * Username for telnet connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#username ConnectionTelnet#username}
  */
  readonly username: string;
  /**
  * Username regex for telnet connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#username_regex ConnectionTelnet#username_regex}
  */
  readonly usernameRegex?: string;
  /**
  * Host boot wait time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#wol_boot_wait_time ConnectionTelnet#wol_boot_wait_time}
  */
  readonly wolBootWaitTime?: string;
  /**
  * Broadcast address for WoL packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#wol_broadcast_address ConnectionTelnet#wol_broadcast_address}
  */
  readonly wolBroadcastAddress?: string;
  /**
  * MAC address of the remote host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#wol_mac_address ConnectionTelnet#wol_mac_address}
  */
  readonly wolMacAddress?: string;
  /**
  * Send WoL packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#wol_send_packet ConnectionTelnet#wol_send_packet}
  */
  readonly wolSendPacket?: boolean | cdktf.IResolvable;
}

export function connectionTelnetParametersToTerraform(struct?: ConnectionTelnetParametersOutputReference | ConnectionTelnetParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backspace: cdktf.stringToTerraform(struct!.backspace),
    color_scheme: cdktf.stringToTerraform(struct!.colorScheme),
    disable_copy: cdktf.booleanToTerraform(struct!.disableCopy),
    disable_paste: cdktf.booleanToTerraform(struct!.disablePaste),
    font_name: cdktf.stringToTerraform(struct!.fontName),
    font_size: cdktf.stringToTerraform(struct!.fontSize),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    login_failure_regex: cdktf.stringToTerraform(struct!.loginFailureRegex),
    login_success_regex: cdktf.stringToTerraform(struct!.loginSuccessRegex),
    max_scrollback_size: cdktf.stringToTerraform(struct!.maxScrollbackSize),
    password: cdktf.stringToTerraform(struct!.password),
    password_regex: cdktf.stringToTerraform(struct!.passwordRegex),
    port: cdktf.stringToTerraform(struct!.port),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
    recording_auto_create_path: cdktf.booleanToTerraform(struct!.recordingAutoCreatePath),
    recording_exclude_mouse: cdktf.booleanToTerraform(struct!.recordingExcludeMouse),
    recording_exclude_output: cdktf.booleanToTerraform(struct!.recordingExcludeOutput),
    recording_include_keys: cdktf.booleanToTerraform(struct!.recordingIncludeKeys),
    recording_name: cdktf.stringToTerraform(struct!.recordingName),
    recording_path: cdktf.stringToTerraform(struct!.recordingPath),
    terminal_type: cdktf.stringToTerraform(struct!.terminalType),
    typescript_auto_create_path: cdktf.booleanToTerraform(struct!.typescriptAutoCreatePath),
    typescript_name: cdktf.stringToTerraform(struct!.typescriptName),
    typescript_path: cdktf.stringToTerraform(struct!.typescriptPath),
    username: cdktf.stringToTerraform(struct!.username),
    username_regex: cdktf.stringToTerraform(struct!.usernameRegex),
    wol_boot_wait_time: cdktf.stringToTerraform(struct!.wolBootWaitTime),
    wol_broadcast_address: cdktf.stringToTerraform(struct!.wolBroadcastAddress),
    wol_mac_address: cdktf.stringToTerraform(struct!.wolMacAddress),
    wol_send_packet: cdktf.booleanToTerraform(struct!.wolSendPacket),
  }
}


export function connectionTelnetParametersToHclTerraform(struct?: ConnectionTelnetParametersOutputReference | ConnectionTelnetParameters): any {
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
    login_failure_regex: {
      value: cdktf.stringToHclTerraform(struct!.loginFailureRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_success_regex: {
      value: cdktf.stringToHclTerraform(struct!.loginSuccessRegex),
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_regex: {
      value: cdktf.stringToHclTerraform(struct!.passwordRegex),
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
    terminal_type: {
      value: cdktf.stringToHclTerraform(struct!.terminalType),
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
    username_regex: {
      value: cdktf.stringToHclTerraform(struct!.usernameRegex),
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

export class ConnectionTelnetParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionTelnetParameters | undefined {
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
    if (this._loginFailureRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginFailureRegex = this._loginFailureRegex;
    }
    if (this._loginSuccessRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginSuccessRegex = this._loginSuccessRegex;
    }
    if (this._maxScrollbackSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScrollbackSize = this._maxScrollbackSize;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordRegex = this._passwordRegex;
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
    if (this._terminalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminalType = this._terminalType;
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
    if (this._usernameRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameRegex = this._usernameRegex;
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

  public set internalValue(value: ConnectionTelnetParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backspace = undefined;
      this._colorScheme = undefined;
      this._disableCopy = undefined;
      this._disablePaste = undefined;
      this._fontName = undefined;
      this._fontSize = undefined;
      this._hostname = undefined;
      this._loginFailureRegex = undefined;
      this._loginSuccessRegex = undefined;
      this._maxScrollbackSize = undefined;
      this._password = undefined;
      this._passwordRegex = undefined;
      this._port = undefined;
      this._readonly = undefined;
      this._recordingAutoCreatePath = undefined;
      this._recordingExcludeMouse = undefined;
      this._recordingExcludeOutput = undefined;
      this._recordingIncludeKeys = undefined;
      this._recordingName = undefined;
      this._recordingPath = undefined;
      this._terminalType = undefined;
      this._typescriptAutoCreatePath = undefined;
      this._typescriptName = undefined;
      this._typescriptPath = undefined;
      this._username = undefined;
      this._usernameRegex = undefined;
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
      this._fontName = value.fontName;
      this._fontSize = value.fontSize;
      this._hostname = value.hostname;
      this._loginFailureRegex = value.loginFailureRegex;
      this._loginSuccessRegex = value.loginSuccessRegex;
      this._maxScrollbackSize = value.maxScrollbackSize;
      this._password = value.password;
      this._passwordRegex = value.passwordRegex;
      this._port = value.port;
      this._readonly = value.readonly;
      this._recordingAutoCreatePath = value.recordingAutoCreatePath;
      this._recordingExcludeMouse = value.recordingExcludeMouse;
      this._recordingExcludeOutput = value.recordingExcludeOutput;
      this._recordingIncludeKeys = value.recordingIncludeKeys;
      this._recordingName = value.recordingName;
      this._recordingPath = value.recordingPath;
      this._terminalType = value.terminalType;
      this._typescriptAutoCreatePath = value.typescriptAutoCreatePath;
      this._typescriptName = value.typescriptName;
      this._typescriptPath = value.typescriptPath;
      this._username = value.username;
      this._usernameRegex = value.usernameRegex;
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

  // login_failure_regex - computed: true, optional: true, required: false
  private _loginFailureRegex?: string; 
  public get loginFailureRegex() {
    return this.getStringAttribute('login_failure_regex');
  }
  public set loginFailureRegex(value: string) {
    this._loginFailureRegex = value;
  }
  public resetLoginFailureRegex() {
    this._loginFailureRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginFailureRegexInput() {
    return this._loginFailureRegex;
  }

  // login_success_regex - computed: true, optional: true, required: false
  private _loginSuccessRegex?: string; 
  public get loginSuccessRegex() {
    return this.getStringAttribute('login_success_regex');
  }
  public set loginSuccessRegex(value: string) {
    this._loginSuccessRegex = value;
  }
  public resetLoginSuccessRegex() {
    this._loginSuccessRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginSuccessRegexInput() {
    return this._loginSuccessRegex;
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

  // password_regex - computed: true, optional: true, required: false
  private _passwordRegex?: string; 
  public get passwordRegex() {
    return this.getStringAttribute('password_regex');
  }
  public set passwordRegex(value: string) {
    this._passwordRegex = value;
  }
  public resetPasswordRegex() {
    this._passwordRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRegexInput() {
    return this._passwordRegex;
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

  // username_regex - computed: true, optional: true, required: false
  private _usernameRegex?: string; 
  public get usernameRegex() {
    return this.getStringAttribute('username_regex');
  }
  public set usernameRegex(value: string) {
    this._usernameRegex = value;
  }
  public resetUsernameRegex() {
    this._usernameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameRegexInput() {
    return this._usernameRegex;
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
* Represents a {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet guacamole_connection_telnet}
*/
export class ConnectionTelnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "guacamole_connection_telnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectionTelnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectionTelnet to import
  * @param importFromId The id of the existing ConnectionTelnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectionTelnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "guacamole_connection_telnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_telnet guacamole_connection_telnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionTelnetConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionTelnetConfig) {
    super(scope, id, {
      terraformResourceType: 'guacamole_connection_telnet',
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
  private _attributes = new ConnectionTelnetAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: ConnectionTelnetAttributes) {
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
  private _parameters = new ConnectionTelnetParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ConnectionTelnetParameters) {
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
      attributes: connectionTelnetAttributesToTerraform(this._attributes.internalValue),
      parameters: connectionTelnetParametersToTerraform(this._parameters.internalValue),
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
        value: connectionTelnetAttributesToHclTerraform(this._attributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionTelnetAttributesList",
      },
      parameters: {
        value: connectionTelnetParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionTelnetParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
