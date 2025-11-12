// https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionKubernetesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#id ConnectionKubernetes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the guacamole connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#name ConnectionKubernetes#name}
  */
  readonly name: string;
  /**
  * Parent identifier of the guacamole connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#parent_identifier ConnectionKubernetes#parent_identifier}
  */
  readonly parentIdentifier?: string;
  /**
  * attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#attributes ConnectionKubernetes#attributes}
  */
  readonly attributes?: ConnectionKubernetesAttributes;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#parameters ConnectionKubernetes#parameters}
  */
  readonly parameters: ConnectionKubernetesParameters;
}
export interface ConnectionKubernetesAttributes {
  /**
  * Use load balancing for failover only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#failover_only ConnectionKubernetes#failover_only}
  */
  readonly failoverOnly?: boolean | cdktf.IResolvable;
  /**
  * Guacd proxy encryption type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#guacd_encryption ConnectionKubernetes#guacd_encryption}
  */
  readonly guacdEncryption?: string;
  /**
  * Guacd proxy hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#guacd_hostname ConnectionKubernetes#guacd_hostname}
  */
  readonly guacdHostname?: string;
  /**
  * Guacd proxy port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#guacd_port ConnectionKubernetes#guacd_port}
  */
  readonly guacdPort?: string;
  /**
  * Maximum concurrent total connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#max_connections ConnectionKubernetes#max_connections}
  */
  readonly maxConnections?: string;
  /**
  * Maximum concurrent connections per user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#max_connections_per_user ConnectionKubernetes#max_connections_per_user}
  */
  readonly maxConnectionsPerUser?: string;
  /**
  * Load balancing connection weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#weight ConnectionKubernetes#weight}
  */
  readonly weight?: string;
}

export function connectionKubernetesAttributesToTerraform(struct?: ConnectionKubernetesAttributesOutputReference | ConnectionKubernetesAttributes): any {
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


export function connectionKubernetesAttributesToHclTerraform(struct?: ConnectionKubernetesAttributesOutputReference | ConnectionKubernetesAttributes): any {
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

export class ConnectionKubernetesAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionKubernetesAttributes | undefined {
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

  public set internalValue(value: ConnectionKubernetesAttributes | undefined) {
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
export interface ConnectionKubernetesParameters {
  /**
  * Backspace key sends
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#backspace ConnectionKubernetes#backspace}
  */
  readonly backspace?: string;
  /**
  * Certificate authority certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#ca_cert ConnectionKubernetes#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Client certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#client_cert ConnectionKubernetes#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Client key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#client_key ConnectionKubernetes#client_key}
  */
  readonly clientKey?: string;
  /**
  * Display color scheme
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#color_scheme ConnectionKubernetes#color_scheme}
  */
  readonly colorScheme?: string;
  /**
  * Container name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#container ConnectionKubernetes#container}
  */
  readonly container?: string;
  /**
  * Display font name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#font_name ConnectionKubernetes#font_name}
  */
  readonly fontName?: string;
  /**
  * Display font size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#font_size ConnectionKubernetes#font_size}
  */
  readonly fontSize?: string;
  /**
  * Hostname of target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#hostname ConnectionKubernetes#hostname}
  */
  readonly hostname: string;
  /**
  * Ignore certificate errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#ignore_cert ConnectionKubernetes#ignore_cert}
  */
  readonly ignoreCert?: boolean | cdktf.IResolvable;
  /**
  * Display maximum scrollback
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#max_scrollback_size ConnectionKubernetes#max_scrollback_size}
  */
  readonly maxScrollbackSize?: string;
  /**
  * Namespace name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#namespace ConnectionKubernetes#namespace}
  */
  readonly namespace?: string;
  /**
  * Pod name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#pod ConnectionKubernetes#pod}
  */
  readonly pod?: string;
  /**
  * Port for target connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#port ConnectionKubernetes#port}
  */
  readonly port?: string;
  /**
  * Display is readonly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#readonly ConnectionKubernetes#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
  /**
  * Auto create recording path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#recording_auto_create_path ConnectionKubernetes#recording_auto_create_path}
  */
  readonly recordingAutoCreatePath?: boolean | cdktf.IResolvable;
  /**
  * Exclude mouse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#recording_exclude_mouse ConnectionKubernetes#recording_exclude_mouse}
  */
  readonly recordingExcludeMouse?: boolean | cdktf.IResolvable;
  /**
  * Exclude graphics/streams
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#recording_exclude_output ConnectionKubernetes#recording_exclude_output}
  */
  readonly recordingExcludeOutput?: boolean | cdktf.IResolvable;
  /**
  * Include key events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#recording_include_keys ConnectionKubernetes#recording_include_keys}
  */
  readonly recordingIncludeKeys?: boolean | cdktf.IResolvable;
  /**
  * Screen recording name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#recording_name ConnectionKubernetes#recording_name}
  */
  readonly recordingName?: string;
  /**
  * Screen recording path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#recording_path ConnectionKubernetes#recording_path}
  */
  readonly recordingPath?: string;
  /**
  * Automatically create typescript path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#typescript_auto_create_path ConnectionKubernetes#typescript_auto_create_path}
  */
  readonly typescriptAutoCreatePath?: boolean | cdktf.IResolvable;
  /**
  * Typescript name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#typescript_name ConnectionKubernetes#typescript_name}
  */
  readonly typescriptName?: string;
  /**
  * Typescript path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#typescript_path ConnectionKubernetes#typescript_path}
  */
  readonly typescriptPath?: string;
  /**
  * Use SSL/TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#use_ssl ConnectionKubernetes#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
}

export function connectionKubernetesParametersToTerraform(struct?: ConnectionKubernetesParametersOutputReference | ConnectionKubernetesParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backspace: cdktf.stringToTerraform(struct!.backspace),
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    color_scheme: cdktf.stringToTerraform(struct!.colorScheme),
    container: cdktf.stringToTerraform(struct!.container),
    font_name: cdktf.stringToTerraform(struct!.fontName),
    font_size: cdktf.stringToTerraform(struct!.fontSize),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ignore_cert: cdktf.booleanToTerraform(struct!.ignoreCert),
    max_scrollback_size: cdktf.stringToTerraform(struct!.maxScrollbackSize),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    pod: cdktf.stringToTerraform(struct!.pod),
    port: cdktf.stringToTerraform(struct!.port),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
    recording_auto_create_path: cdktf.booleanToTerraform(struct!.recordingAutoCreatePath),
    recording_exclude_mouse: cdktf.booleanToTerraform(struct!.recordingExcludeMouse),
    recording_exclude_output: cdktf.booleanToTerraform(struct!.recordingExcludeOutput),
    recording_include_keys: cdktf.booleanToTerraform(struct!.recordingIncludeKeys),
    recording_name: cdktf.stringToTerraform(struct!.recordingName),
    recording_path: cdktf.stringToTerraform(struct!.recordingPath),
    typescript_auto_create_path: cdktf.booleanToTerraform(struct!.typescriptAutoCreatePath),
    typescript_name: cdktf.stringToTerraform(struct!.typescriptName),
    typescript_path: cdktf.stringToTerraform(struct!.typescriptPath),
    use_ssl: cdktf.booleanToTerraform(struct!.useSsl),
  }
}


export function connectionKubernetesParametersToHclTerraform(struct?: ConnectionKubernetesParametersOutputReference | ConnectionKubernetesParameters): any {
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
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
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
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
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
    ignore_cert: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_scrollback_size: {
      value: cdktf.stringToHclTerraform(struct!.maxScrollbackSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod: {
      value: cdktf.stringToHclTerraform(struct!.pod),
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
    use_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.useSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionKubernetesParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionKubernetesParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.backspace = this._backspace;
    }
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._colorScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorScheme = this._colorScheme;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
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
    if (this._ignoreCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCert = this._ignoreCert;
    }
    if (this._maxScrollbackSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScrollbackSize = this._maxScrollbackSize;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._pod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod;
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
    if (this._useSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSsl = this._useSsl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionKubernetesParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backspace = undefined;
      this._caCert = undefined;
      this._clientCert = undefined;
      this._clientKey = undefined;
      this._colorScheme = undefined;
      this._container = undefined;
      this._fontName = undefined;
      this._fontSize = undefined;
      this._hostname = undefined;
      this._ignoreCert = undefined;
      this._maxScrollbackSize = undefined;
      this._namespace = undefined;
      this._pod = undefined;
      this._port = undefined;
      this._readonly = undefined;
      this._recordingAutoCreatePath = undefined;
      this._recordingExcludeMouse = undefined;
      this._recordingExcludeOutput = undefined;
      this._recordingIncludeKeys = undefined;
      this._recordingName = undefined;
      this._recordingPath = undefined;
      this._typescriptAutoCreatePath = undefined;
      this._typescriptName = undefined;
      this._typescriptPath = undefined;
      this._useSsl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backspace = value.backspace;
      this._caCert = value.caCert;
      this._clientCert = value.clientCert;
      this._clientKey = value.clientKey;
      this._colorScheme = value.colorScheme;
      this._container = value.container;
      this._fontName = value.fontName;
      this._fontSize = value.fontSize;
      this._hostname = value.hostname;
      this._ignoreCert = value.ignoreCert;
      this._maxScrollbackSize = value.maxScrollbackSize;
      this._namespace = value.namespace;
      this._pod = value.pod;
      this._port = value.port;
      this._readonly = value.readonly;
      this._recordingAutoCreatePath = value.recordingAutoCreatePath;
      this._recordingExcludeMouse = value.recordingExcludeMouse;
      this._recordingExcludeOutput = value.recordingExcludeOutput;
      this._recordingIncludeKeys = value.recordingIncludeKeys;
      this._recordingName = value.recordingName;
      this._recordingPath = value.recordingPath;
      this._typescriptAutoCreatePath = value.typescriptAutoCreatePath;
      this._typescriptName = value.typescriptName;
      this._typescriptPath = value.typescriptPath;
      this._useSsl = value.useSsl;
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

  // ca_cert - computed: true, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // client_cert - computed: true, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: true, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
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

  // container - computed: true, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
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

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // pod - computed: true, optional: true, required: false
  private _pod?: string; 
  public get pod() {
    return this.getStringAttribute('pod');
  }
  public set pod(value: string) {
    this._pod = value;
  }
  public resetPod() {
    this._pod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod;
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

  // use_ssl - computed: true, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable; 
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }
  public set useSsl(value: boolean | cdktf.IResolvable) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes guacamole_connection_kubernetes}
*/
export class ConnectionKubernetes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "guacamole_connection_kubernetes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectionKubernetes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectionKubernetes to import
  * @param importFromId The id of the existing ConnectionKubernetes that should be imported. Refer to the {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectionKubernetes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "guacamole_connection_kubernetes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_kubernetes guacamole_connection_kubernetes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionKubernetesConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionKubernetesConfig) {
    super(scope, id, {
      terraformResourceType: 'guacamole_connection_kubernetes',
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
  private _attributes = new ConnectionKubernetesAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: ConnectionKubernetesAttributes) {
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
  private _parameters = new ConnectionKubernetesParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ConnectionKubernetesParameters) {
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
      attributes: connectionKubernetesAttributesToTerraform(this._attributes.internalValue),
      parameters: connectionKubernetesParametersToTerraform(this._parameters.internalValue),
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
        value: connectionKubernetesAttributesToHclTerraform(this._attributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionKubernetesAttributesList",
      },
      parameters: {
        value: connectionKubernetesParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionKubernetesParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
