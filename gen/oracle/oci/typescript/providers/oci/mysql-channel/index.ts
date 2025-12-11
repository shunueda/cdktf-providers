// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#compartment_id MysqlChannel#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#defined_tags MysqlChannel#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#description MysqlChannel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#display_name MysqlChannel#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#freeform_tags MysqlChannel#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#id MysqlChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#is_enabled MysqlChannel#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#source MysqlChannel#source}
  */
  readonly source: MysqlChannelSource;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#target MysqlChannel#target}
  */
  readonly target: MysqlChannelTarget;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#timeouts MysqlChannel#timeouts}
  */
  readonly timeouts?: MysqlChannelTimeouts;
}
export interface MysqlChannelSourceAnonymousTransactionsHandling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#last_configured_log_filename MysqlChannel#last_configured_log_filename}
  */
  readonly lastConfiguredLogFilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#last_configured_log_offset MysqlChannel#last_configured_log_offset}
  */
  readonly lastConfiguredLogOffset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#policy MysqlChannel#policy}
  */
  readonly policy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#uuid MysqlChannel#uuid}
  */
  readonly uuid?: string;
}

export function mysqlChannelSourceAnonymousTransactionsHandlingToTerraform(struct?: MysqlChannelSourceAnonymousTransactionsHandlingOutputReference | MysqlChannelSourceAnonymousTransactionsHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_configured_log_filename: cdktf.stringToTerraform(struct!.lastConfiguredLogFilename),
    last_configured_log_offset: cdktf.stringToTerraform(struct!.lastConfiguredLogOffset),
    policy: cdktf.stringToTerraform(struct!.policy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function mysqlChannelSourceAnonymousTransactionsHandlingToHclTerraform(struct?: MysqlChannelSourceAnonymousTransactionsHandlingOutputReference | MysqlChannelSourceAnonymousTransactionsHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    last_configured_log_filename: {
      value: cdktf.stringToHclTerraform(struct!.lastConfiguredLogFilename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_configured_log_offset: {
      value: cdktf.stringToHclTerraform(struct!.lastConfiguredLogOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlChannelSourceAnonymousTransactionsHandlingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlChannelSourceAnonymousTransactionsHandling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lastConfiguredLogFilename !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastConfiguredLogFilename = this._lastConfiguredLogFilename;
    }
    if (this._lastConfiguredLogOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastConfiguredLogOffset = this._lastConfiguredLogOffset;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlChannelSourceAnonymousTransactionsHandling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lastConfiguredLogFilename = undefined;
      this._lastConfiguredLogOffset = undefined;
      this._policy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lastConfiguredLogFilename = value.lastConfiguredLogFilename;
      this._lastConfiguredLogOffset = value.lastConfiguredLogOffset;
      this._policy = value.policy;
      this._uuid = value.uuid;
    }
  }

  // last_configured_log_filename - computed: true, optional: true, required: false
  private _lastConfiguredLogFilename?: string; 
  public get lastConfiguredLogFilename() {
    return this.getStringAttribute('last_configured_log_filename');
  }
  public set lastConfiguredLogFilename(value: string) {
    this._lastConfiguredLogFilename = value;
  }
  public resetLastConfiguredLogFilename() {
    this._lastConfiguredLogFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastConfiguredLogFilenameInput() {
    return this._lastConfiguredLogFilename;
  }

  // last_configured_log_offset - computed: true, optional: true, required: false
  private _lastConfiguredLogOffset?: string; 
  public get lastConfiguredLogOffset() {
    return this.getStringAttribute('last_configured_log_offset');
  }
  public set lastConfiguredLogOffset(value: string) {
    this._lastConfiguredLogOffset = value;
  }
  public resetLastConfiguredLogOffset() {
    this._lastConfiguredLogOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastConfiguredLogOffsetInput() {
    return this._lastConfiguredLogOffset;
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface MysqlChannelSourceSslCaCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#certificate_type MysqlChannel#certificate_type}
  */
  readonly certificateType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#contents MysqlChannel#contents}
  */
  readonly contents: string;
}

export function mysqlChannelSourceSslCaCertificateToTerraform(struct?: MysqlChannelSourceSslCaCertificateOutputReference | MysqlChannelSourceSslCaCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_type: cdktf.stringToTerraform(struct!.certificateType),
    contents: cdktf.stringToTerraform(struct!.contents),
  }
}


export function mysqlChannelSourceSslCaCertificateToHclTerraform(struct?: MysqlChannelSourceSslCaCertificateOutputReference | MysqlChannelSourceSslCaCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_type: {
      value: cdktf.stringToHclTerraform(struct!.certificateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contents: {
      value: cdktf.stringToHclTerraform(struct!.contents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlChannelSourceSslCaCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlChannelSourceSslCaCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateType = this._certificateType;
    }
    if (this._contents !== undefined) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlChannelSourceSslCaCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateType = undefined;
      this._contents = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateType = value.certificateType;
      this._contents = value.contents;
    }
  }

  // certificate_type - computed: false, optional: false, required: true
  private _certificateType?: string; 
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }
  public set certificateType(value: string) {
    this._certificateType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTypeInput() {
    return this._certificateType;
  }

  // contents - computed: false, optional: false, required: true
  private _contents?: string; 
  public get contents() {
    return this.getStringAttribute('contents');
  }
  public set contents(value: string) {
    this._contents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents;
  }
}
export interface MysqlChannelSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#hostname MysqlChannel#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#password MysqlChannel#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#port MysqlChannel#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#source_type MysqlChannel#source_type}
  */
  readonly sourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#ssl_mode MysqlChannel#ssl_mode}
  */
  readonly sslMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#username MysqlChannel#username}
  */
  readonly username: string;
  /**
  * anonymous_transactions_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#anonymous_transactions_handling MysqlChannel#anonymous_transactions_handling}
  */
  readonly anonymousTransactionsHandling?: MysqlChannelSourceAnonymousTransactionsHandling;
  /**
  * ssl_ca_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#ssl_ca_certificate MysqlChannel#ssl_ca_certificate}
  */
  readonly sslCaCertificate?: MysqlChannelSourceSslCaCertificate;
}

export function mysqlChannelSourceToTerraform(struct?: MysqlChannelSourceOutputReference | MysqlChannelSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    ssl_mode: cdktf.stringToTerraform(struct!.sslMode),
    username: cdktf.stringToTerraform(struct!.username),
    anonymous_transactions_handling: mysqlChannelSourceAnonymousTransactionsHandlingToTerraform(struct!.anonymousTransactionsHandling),
    ssl_ca_certificate: mysqlChannelSourceSslCaCertificateToTerraform(struct!.sslCaCertificate),
  }
}


export function mysqlChannelSourceToHclTerraform(struct?: MysqlChannelSourceOutputReference | MysqlChannelSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_mode: {
      value: cdktf.stringToHclTerraform(struct!.sslMode),
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
    anonymous_transactions_handling: {
      value: mysqlChannelSourceAnonymousTransactionsHandlingToHclTerraform(struct!.anonymousTransactionsHandling),
      isBlock: true,
      type: "list",
      storageClassType: "MysqlChannelSourceAnonymousTransactionsHandlingList",
    },
    ssl_ca_certificate: {
      value: mysqlChannelSourceSslCaCertificateToHclTerraform(struct!.sslCaCertificate),
      isBlock: true,
      type: "list",
      storageClassType: "MysqlChannelSourceSslCaCertificateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlChannelSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlChannelSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._anonymousTransactionsHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymousTransactionsHandling = this._anonymousTransactionsHandling?.internalValue;
    }
    if (this._sslCaCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCaCertificate = this._sslCaCertificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlChannelSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._password = undefined;
      this._port = undefined;
      this._sourceType = undefined;
      this._sslMode = undefined;
      this._username = undefined;
      this._anonymousTransactionsHandling.internalValue = undefined;
      this._sslCaCertificate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._password = value.password;
      this._port = value.port;
      this._sourceType = value.sourceType;
      this._sslMode = value.sslMode;
      this._username = value.username;
      this._anonymousTransactionsHandling.internalValue = value.anonymousTransactionsHandling;
      this._sslCaCertificate.internalValue = value.sslCaCertificate;
    }
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
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

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // ssl_mode - computed: false, optional: false, required: true
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
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

  // anonymous_transactions_handling - computed: false, optional: true, required: false
  private _anonymousTransactionsHandling = new MysqlChannelSourceAnonymousTransactionsHandlingOutputReference(this, "anonymous_transactions_handling");
  public get anonymousTransactionsHandling() {
    return this._anonymousTransactionsHandling;
  }
  public putAnonymousTransactionsHandling(value: MysqlChannelSourceAnonymousTransactionsHandling) {
    this._anonymousTransactionsHandling.internalValue = value;
  }
  public resetAnonymousTransactionsHandling() {
    this._anonymousTransactionsHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousTransactionsHandlingInput() {
    return this._anonymousTransactionsHandling.internalValue;
  }

  // ssl_ca_certificate - computed: false, optional: true, required: false
  private _sslCaCertificate = new MysqlChannelSourceSslCaCertificateOutputReference(this, "ssl_ca_certificate");
  public get sslCaCertificate() {
    return this._sslCaCertificate;
  }
  public putSslCaCertificate(value: MysqlChannelSourceSslCaCertificate) {
    this._sslCaCertificate.internalValue = value;
  }
  public resetSslCaCertificate() {
    this._sslCaCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCaCertificateInput() {
    return this._sslCaCertificate.internalValue;
  }
}
export interface MysqlChannelTargetFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#type MysqlChannel#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#value MysqlChannel#value}
  */
  readonly value: string;
}

export function mysqlChannelTargetFiltersToTerraform(struct?: MysqlChannelTargetFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function mysqlChannelTargetFiltersToHclTerraform(struct?: MysqlChannelTargetFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlChannelTargetFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlChannelTargetFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlChannelTargetFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MysqlChannelTargetFiltersList extends cdktf.ComplexList {
  public internalValue? : MysqlChannelTargetFilters[] | cdktf.IResolvable

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
  public get(index: number): MysqlChannelTargetFiltersOutputReference {
    return new MysqlChannelTargetFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlChannelTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#applier_username MysqlChannel#applier_username}
  */
  readonly applierUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#channel_name MysqlChannel#channel_name}
  */
  readonly channelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#db_system_id MysqlChannel#db_system_id}
  */
  readonly dbSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#delay_in_seconds MysqlChannel#delay_in_seconds}
  */
  readonly delayInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#tables_without_primary_key_handling MysqlChannel#tables_without_primary_key_handling}
  */
  readonly tablesWithoutPrimaryKeyHandling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#target_type MysqlChannel#target_type}
  */
  readonly targetType: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#filters MysqlChannel#filters}
  */
  readonly filters?: MysqlChannelTargetFilters[] | cdktf.IResolvable;
}

export function mysqlChannelTargetToTerraform(struct?: MysqlChannelTargetOutputReference | MysqlChannelTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applier_username: cdktf.stringToTerraform(struct!.applierUsername),
    channel_name: cdktf.stringToTerraform(struct!.channelName),
    db_system_id: cdktf.stringToTerraform(struct!.dbSystemId),
    delay_in_seconds: cdktf.numberToTerraform(struct!.delayInSeconds),
    tables_without_primary_key_handling: cdktf.stringToTerraform(struct!.tablesWithoutPrimaryKeyHandling),
    target_type: cdktf.stringToTerraform(struct!.targetType),
    filters: cdktf.listMapper(mysqlChannelTargetFiltersToTerraform, true)(struct!.filters),
  }
}


export function mysqlChannelTargetToHclTerraform(struct?: MysqlChannelTargetOutputReference | MysqlChannelTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applier_username: {
      value: cdktf.stringToHclTerraform(struct!.applierUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_name: {
      value: cdktf.stringToHclTerraform(struct!.channelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_system_id: {
      value: cdktf.stringToHclTerraform(struct!.dbSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delay_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.delayInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tables_without_primary_key_handling: {
      value: cdktf.stringToHclTerraform(struct!.tablesWithoutPrimaryKeyHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters: {
      value: cdktf.listMapperHcl(mysqlChannelTargetFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "MysqlChannelTargetFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlChannelTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlChannelTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applierUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.applierUsername = this._applierUsername;
    }
    if (this._channelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelName = this._channelName;
    }
    if (this._dbSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbSystemId = this._dbSystemId;
    }
    if (this._delayInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayInSeconds = this._delayInSeconds;
    }
    if (this._tablesWithoutPrimaryKeyHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.tablesWithoutPrimaryKeyHandling = this._tablesWithoutPrimaryKeyHandling;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlChannelTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applierUsername = undefined;
      this._channelName = undefined;
      this._dbSystemId = undefined;
      this._delayInSeconds = undefined;
      this._tablesWithoutPrimaryKeyHandling = undefined;
      this._targetType = undefined;
      this._filters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applierUsername = value.applierUsername;
      this._channelName = value.channelName;
      this._dbSystemId = value.dbSystemId;
      this._delayInSeconds = value.delayInSeconds;
      this._tablesWithoutPrimaryKeyHandling = value.tablesWithoutPrimaryKeyHandling;
      this._targetType = value.targetType;
      this._filters.internalValue = value.filters;
    }
  }

  // applier_username - computed: true, optional: true, required: false
  private _applierUsername?: string; 
  public get applierUsername() {
    return this.getStringAttribute('applier_username');
  }
  public set applierUsername(value: string) {
    this._applierUsername = value;
  }
  public resetApplierUsername() {
    this._applierUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applierUsernameInput() {
    return this._applierUsername;
  }

  // channel_name - computed: true, optional: true, required: false
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  public resetChannelName() {
    this._channelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // db_system_id - computed: false, optional: false, required: true
  private _dbSystemId?: string; 
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }
  public set dbSystemId(value: string) {
    this._dbSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemIdInput() {
    return this._dbSystemId;
  }

  // delay_in_seconds - computed: true, optional: true, required: false
  private _delayInSeconds?: number; 
  public get delayInSeconds() {
    return this.getNumberAttribute('delay_in_seconds');
  }
  public set delayInSeconds(value: number) {
    this._delayInSeconds = value;
  }
  public resetDelayInSeconds() {
    this._delayInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInSecondsInput() {
    return this._delayInSeconds;
  }

  // tables_without_primary_key_handling - computed: true, optional: true, required: false
  private _tablesWithoutPrimaryKeyHandling?: string; 
  public get tablesWithoutPrimaryKeyHandling() {
    return this.getStringAttribute('tables_without_primary_key_handling');
  }
  public set tablesWithoutPrimaryKeyHandling(value: string) {
    this._tablesWithoutPrimaryKeyHandling = value;
  }
  public resetTablesWithoutPrimaryKeyHandling() {
    this._tablesWithoutPrimaryKeyHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesWithoutPrimaryKeyHandlingInput() {
    return this._tablesWithoutPrimaryKeyHandling;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new MysqlChannelTargetFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: MysqlChannelTargetFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface MysqlChannelTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#create MysqlChannel#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#delete MysqlChannel#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#update MysqlChannel#update}
  */
  readonly update?: string;
}

export function mysqlChannelTimeoutsToTerraform(struct?: MysqlChannelTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function mysqlChannelTimeoutsToHclTerraform(struct?: MysqlChannelTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlChannelTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MysqlChannelTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlChannelTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel oci_mysql_channel}
*/
export class MysqlChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_mysql_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlChannel to import
  * @param importFromId The id of the existing MysqlChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_mysql_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/mysql_channel oci_mysql_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlChannelConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_mysql_channel',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._source.internalValue = config.source;
    this._target.internalValue = config.target;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // source - computed: false, optional: false, required: true
  private _source = new MysqlChannelSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: MysqlChannelSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new MysqlChannelTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: MysqlChannelTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MysqlChannelTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MysqlChannelTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      source: mysqlChannelSourceToTerraform(this._source.internalValue),
      target: mysqlChannelTargetToTerraform(this._target.internalValue),
      timeouts: mysqlChannelTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source: {
        value: mysqlChannelSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlChannelSourceList",
      },
      target: {
        value: mysqlChannelTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlChannelTargetList",
      },
      timeouts: {
        value: mysqlChannelTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MysqlChannelTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
