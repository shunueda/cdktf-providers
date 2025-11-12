// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_log_stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityLogStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Selects the type of events that may be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_log_stream#category SecurityLogStream#category}
  */
  readonly category?: string[];
  /**
  * Threat-attack security events are logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_log_stream#filter_threat_attack SecurityLogStream#filter_threat_attack}
  */
  readonly filterThreatAttack?: boolean | cdktf.IResolvable;
  /**
  * Specify the log stream format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_log_stream#format SecurityLogStream#format}
  */
  readonly format?: string;
  /**
  * Name of security log stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_log_stream#name SecurityLogStream#name}
  */
  readonly name: string;
  /**
  * Rate-limit for security logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_log_stream#rate_limit SecurityLogStream#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * Severity threshold for security logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_log_stream#severity SecurityLogStream#severity}
  */
  readonly severity?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_log_stream#file SecurityLogStream#file}
  */
  readonly file?: SecurityLogStreamFile;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_log_stream#host SecurityLogStream#host}
  */
  readonly host?: SecurityLogStreamHost;
  /**
  * transport block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_log_stream#transport SecurityLogStream#transport}
  */
  readonly transport?: SecurityLogStreamTransport;
}
export interface SecurityLogStreamFile {
  /**
  * To disable log consolidation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_log_stream#allow_duplicates SecurityLogStream#allow_duplicates}
  */
  readonly allowDuplicates?: boolean | cdktf.IResolvable;
  /**
  * Name of local log file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_log_stream#name SecurityLogStream#name}
  */
  readonly name?: string;
  /**
  * Maximum number of rotate files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_log_stream#rotation SecurityLogStream#rotation}
  */
  readonly rotation?: number;
  /**
  * Maximum size of local log file in megabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_log_stream#size SecurityLogStream#size}
  */
  readonly size?: number;
}

export function securityLogStreamFileToTerraform(struct?: SecurityLogStreamFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_duplicates: cdktf.booleanToTerraform(struct!.allowDuplicates),
    name: cdktf.stringToTerraform(struct!.name),
    rotation: cdktf.numberToTerraform(struct!.rotation),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function securityLogStreamFileToHclTerraform(struct?: SecurityLogStreamFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_duplicates: {
      value: cdktf.booleanToHclTerraform(struct!.allowDuplicates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rotation: {
      value: cdktf.numberToHclTerraform(struct!.rotation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityLogStreamFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityLogStreamFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowDuplicates !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDuplicates = this._allowDuplicates;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotation = this._rotation;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityLogStreamFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowDuplicates = undefined;
      this._name = undefined;
      this._rotation = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowDuplicates = value.allowDuplicates;
      this._name = value.name;
      this._rotation = value.rotation;
      this._size = value.size;
    }
  }

  // allow_duplicates - computed: false, optional: true, required: false
  private _allowDuplicates?: boolean | cdktf.IResolvable; 
  public get allowDuplicates() {
    return this.getBooleanAttribute('allow_duplicates');
  }
  public set allowDuplicates(value: boolean | cdktf.IResolvable) {
    this._allowDuplicates = value;
  }
  public resetAllowDuplicates() {
    this._allowDuplicates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDuplicatesInput() {
    return this._allowDuplicates;
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

  // rotation - computed: false, optional: true, required: false
  private _rotation?: number; 
  public get rotation() {
    return this.getNumberAttribute('rotation');
  }
  public set rotation(value: number) {
    this._rotation = value;
  }
  public resetRotation() {
    this._rotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationInput() {
    return this._rotation;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface SecurityLogStreamHost {
  /**
  * IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_log_stream#ip_address SecurityLogStream#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Host port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_log_stream#port SecurityLogStream#port}
  */
  readonly port?: number;
  /**
  * Routing instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_log_stream#routing_instance SecurityLogStream#routing_instance}
  */
  readonly routingInstance?: string;
}

export function securityLogStreamHostToTerraform(struct?: SecurityLogStreamHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    port: cdktf.numberToTerraform(struct!.port),
    routing_instance: cdktf.stringToTerraform(struct!.routingInstance),
  }
}


export function securityLogStreamHostToHclTerraform(struct?: SecurityLogStreamHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
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
    routing_instance: {
      value: cdktf.stringToHclTerraform(struct!.routingInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityLogStreamHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityLogStreamHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._routingInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingInstance = this._routingInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityLogStreamHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._port = undefined;
      this._routingInstance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._port = value.port;
      this._routingInstance = value.routingInstance;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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

  // routing_instance - computed: false, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }
}
export interface SecurityLogStreamTransport {
  /**
  * Set security log transport protocol for the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_log_stream#protocol SecurityLogStream#protocol}
  */
  readonly protocol?: string;
  /**
  * Set tcp connection number per-stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_log_stream#tcp_connections SecurityLogStream#tcp_connections}
  */
  readonly tcpConnections?: number;
  /**
  * TLS profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_log_stream#tls_profile SecurityLogStream#tls_profile}
  */
  readonly tlsProfile?: string;
}

export function securityLogStreamTransportToTerraform(struct?: SecurityLogStreamTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    tcp_connections: cdktf.numberToTerraform(struct!.tcpConnections),
    tls_profile: cdktf.stringToTerraform(struct!.tlsProfile),
  }
}


export function securityLogStreamTransportToHclTerraform(struct?: SecurityLogStreamTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_connections: {
      value: cdktf.numberToHclTerraform(struct!.tcpConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_profile: {
      value: cdktf.stringToHclTerraform(struct!.tlsProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityLogStreamTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityLogStreamTransport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._tcpConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpConnections = this._tcpConnections;
    }
    if (this._tlsProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsProfile = this._tlsProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityLogStreamTransport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocol = undefined;
      this._tcpConnections = undefined;
      this._tlsProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocol = value.protocol;
      this._tcpConnections = value.tcpConnections;
      this._tlsProfile = value.tlsProfile;
    }
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // tcp_connections - computed: false, optional: true, required: false
  private _tcpConnections?: number; 
  public get tcpConnections() {
    return this.getNumberAttribute('tcp_connections');
  }
  public set tcpConnections(value: number) {
    this._tcpConnections = value;
  }
  public resetTcpConnections() {
    this._tcpConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpConnectionsInput() {
    return this._tcpConnections;
  }

  // tls_profile - computed: false, optional: true, required: false
  private _tlsProfile?: string; 
  public get tlsProfile() {
    return this.getStringAttribute('tls_profile');
  }
  public set tlsProfile(value: string) {
    this._tlsProfile = value;
  }
  public resetTlsProfile() {
    this._tlsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsProfileInput() {
    return this._tlsProfile;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_log_stream junos_security_log_stream}
*/
export class SecurityLogStream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_log_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityLogStream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityLogStream to import
  * @param importFromId The id of the existing SecurityLogStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_log_stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityLogStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_log_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_log_stream junos_security_log_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityLogStreamConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityLogStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_log_stream',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._filterThreatAttack = config.filterThreatAttack;
    this._format = config.format;
    this._name = config.name;
    this._rateLimit = config.rateLimit;
    this._severity = config.severity;
    this._file.internalValue = config.file;
    this._host.internalValue = config.host;
    this._transport.internalValue = config.transport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: true, required: false
  private _category?: string[]; 
  public get category() {
    return this.getListAttribute('category');
  }
  public set category(value: string[]) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // filter_threat_attack - computed: false, optional: true, required: false
  private _filterThreatAttack?: boolean | cdktf.IResolvable; 
  public get filterThreatAttack() {
    return this.getBooleanAttribute('filter_threat_attack');
  }
  public set filterThreatAttack(value: boolean | cdktf.IResolvable) {
    this._filterThreatAttack = value;
  }
  public resetFilterThreatAttack() {
    this._filterThreatAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterThreatAttackInput() {
    return this._filterThreatAttack;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // file - computed: false, optional: true, required: false
  private _file = new SecurityLogStreamFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: SecurityLogStreamFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host = new SecurityLogStreamHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }
  public putHost(value: SecurityLogStreamHost) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // transport - computed: false, optional: true, required: false
  private _transport = new SecurityLogStreamTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }
  public putTransport(value: SecurityLogStreamTransport) {
    this._transport.internalValue = value;
  }
  public resetTransport() {
    this._transport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.listMapper(cdktf.stringToTerraform, false)(this._category),
      filter_threat_attack: cdktf.booleanToTerraform(this._filterThreatAttack),
      format: cdktf.stringToTerraform(this._format),
      name: cdktf.stringToTerraform(this._name),
      rate_limit: cdktf.numberToTerraform(this._rateLimit),
      severity: cdktf.stringToTerraform(this._severity),
      file: securityLogStreamFileToTerraform(this._file.internalValue),
      host: securityLogStreamHostToTerraform(this._host.internalValue),
      transport: securityLogStreamTransportToTerraform(this._transport.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._category),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filter_threat_attack: {
        value: cdktf.booleanToHclTerraform(this._filterThreatAttack),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      rate_limit: {
        value: cdktf.numberToHclTerraform(this._rateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file: {
        value: securityLogStreamFileToHclTerraform(this._file.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityLogStreamFile",
      },
      host: {
        value: securityLogStreamHostToHclTerraform(this._host.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityLogStreamHost",
      },
      transport: {
        value: securityLogStreamTransportToHclTerraform(this._transport.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityLogStreamTransport",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
