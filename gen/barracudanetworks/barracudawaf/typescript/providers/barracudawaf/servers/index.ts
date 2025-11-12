// https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#address_version Servers#address_version}
  */
  readonly addressVersion?: string;
  /**
  * Comments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#comments Servers#comments}
  */
  readonly comments?: string;
  /**
  * Hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#hostname Servers#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#id Servers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#identifier Servers#identifier}
  */
  readonly identifier?: string;
  /**
  * Server IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#ip_address Servers#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Server Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#name Servers#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#parent Servers#parent}
  */
  readonly parent: string[];
  /**
  * Server Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#port Servers#port}
  */
  readonly port?: string;
  /**
  * Status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#status Servers#status}
  */
  readonly status?: string;
  /**
  * connection_pooling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#connection_pooling Servers#connection_pooling}
  */
  readonly connectionPooling?: ServersConnectionPooling[] | cdktf.IResolvable;
  /**
  * ssl_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#ssl_policy Servers#ssl_policy}
  */
  readonly sslPolicy?: ServersSslPolicy[] | cdktf.IResolvable;
}
export interface ServersConnectionPooling {
  /**
  * Enable Connection Pooling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#enable_connection_pooling Servers#enable_connection_pooling}
  */
  readonly enableConnectionPooling?: string;
  /**
  * Keepalive Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#keepalive_timeout Servers#keepalive_timeout}
  */
  readonly keepaliveTimeout?: string;
}

export function serversConnectionPoolingToTerraform(struct?: ServersConnectionPooling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_connection_pooling: cdktf.stringToTerraform(struct!.enableConnectionPooling),
    keepalive_timeout: cdktf.stringToTerraform(struct!.keepaliveTimeout),
  }
}


export function serversConnectionPoolingToHclTerraform(struct?: ServersConnectionPooling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_connection_pooling: {
      value: cdktf.stringToHclTerraform(struct!.enableConnectionPooling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_timeout: {
      value: cdktf.stringToHclTerraform(struct!.keepaliveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServersConnectionPoolingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServersConnectionPooling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableConnectionPooling !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConnectionPooling = this._enableConnectionPooling;
    }
    if (this._keepaliveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveTimeout = this._keepaliveTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServersConnectionPooling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableConnectionPooling = undefined;
      this._keepaliveTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableConnectionPooling = value.enableConnectionPooling;
      this._keepaliveTimeout = value.keepaliveTimeout;
    }
  }

  // enable_connection_pooling - computed: false, optional: true, required: false
  private _enableConnectionPooling?: string; 
  public get enableConnectionPooling() {
    return this.getStringAttribute('enable_connection_pooling');
  }
  public set enableConnectionPooling(value: string) {
    this._enableConnectionPooling = value;
  }
  public resetEnableConnectionPooling() {
    this._enableConnectionPooling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConnectionPoolingInput() {
    return this._enableConnectionPooling;
  }

  // keepalive_timeout - computed: false, optional: true, required: false
  private _keepaliveTimeout?: string; 
  public get keepaliveTimeout() {
    return this.getStringAttribute('keepalive_timeout');
  }
  public set keepaliveTimeout(value: string) {
    this._keepaliveTimeout = value;
  }
  public resetKeepaliveTimeout() {
    this._keepaliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeoutInput() {
    return this._keepaliveTimeout;
  }
}

export class ServersConnectionPoolingList extends cdktf.ComplexList {
  public internalValue? : ServersConnectionPooling[] | cdktf.IResolvable

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
  public get(index: number): ServersConnectionPoolingOutputReference {
    return new ServersConnectionPoolingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServersSslPolicy {
  /**
  * Client Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#client_certificate Servers#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Server uses SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#enable_https Servers#enable_https}
  */
  readonly enableHttps?: string;
  /**
  * Enable SNI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#enable_sni Servers#enable_sni}
  */
  readonly enableSni?: string;
  /**
  * SSL 3.0 (Insecure)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#enable_ssl_3 Servers#enable_ssl_3}
  */
  readonly enableSsl3?: string;
  /**
  * Enable SSL Compatibility Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#enable_ssl_compatibility_mode Servers#enable_ssl_compatibility_mode}
  */
  readonly enableSslCompatibilityMode?: string;
  /**
  * TLS 1.0 (Insecure)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#enable_tls_1 Servers#enable_tls_1}
  */
  readonly enableTls1?: string;
  /**
  * TLS 1.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#enable_tls_1_1 Servers#enable_tls_1_1}
  */
  readonly enableTls11?: string;
  /**
  * TLS 1.2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#enable_tls_1_2 Servers#enable_tls_1_2}
  */
  readonly enableTls12?: string;
  /**
  * TLS 1.3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#enable_tls_1_3 Servers#enable_tls_1_3}
  */
  readonly enableTls13?: string;
  /**
  * Validate Server Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#validate_certificate Servers#validate_certificate}
  */
  readonly validateCertificate?: string;
}

export function serversSslPolicyToTerraform(struct?: ServersSslPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    enable_https: cdktf.stringToTerraform(struct!.enableHttps),
    enable_sni: cdktf.stringToTerraform(struct!.enableSni),
    enable_ssl_3: cdktf.stringToTerraform(struct!.enableSsl3),
    enable_ssl_compatibility_mode: cdktf.stringToTerraform(struct!.enableSslCompatibilityMode),
    enable_tls_1: cdktf.stringToTerraform(struct!.enableTls1),
    enable_tls_1_1: cdktf.stringToTerraform(struct!.enableTls11),
    enable_tls_1_2: cdktf.stringToTerraform(struct!.enableTls12),
    enable_tls_1_3: cdktf.stringToTerraform(struct!.enableTls13),
    validate_certificate: cdktf.stringToTerraform(struct!.validateCertificate),
  }
}


export function serversSslPolicyToHclTerraform(struct?: ServersSslPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_https: {
      value: cdktf.stringToHclTerraform(struct!.enableHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_sni: {
      value: cdktf.stringToHclTerraform(struct!.enableSni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_ssl_3: {
      value: cdktf.stringToHclTerraform(struct!.enableSsl3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_ssl_compatibility_mode: {
      value: cdktf.stringToHclTerraform(struct!.enableSslCompatibilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_tls_1: {
      value: cdktf.stringToHclTerraform(struct!.enableTls1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_tls_1_1: {
      value: cdktf.stringToHclTerraform(struct!.enableTls11),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_tls_1_2: {
      value: cdktf.stringToHclTerraform(struct!.enableTls12),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_tls_1_3: {
      value: cdktf.stringToHclTerraform(struct!.enableTls13),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validate_certificate: {
      value: cdktf.stringToHclTerraform(struct!.validateCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServersSslPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServersSslPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._enableHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHttps = this._enableHttps;
    }
    if (this._enableSni !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSni = this._enableSni;
    }
    if (this._enableSsl3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSsl3 = this._enableSsl3;
    }
    if (this._enableSslCompatibilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSslCompatibilityMode = this._enableSslCompatibilityMode;
    }
    if (this._enableTls1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTls1 = this._enableTls1;
    }
    if (this._enableTls11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTls11 = this._enableTls11;
    }
    if (this._enableTls12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTls12 = this._enableTls12;
    }
    if (this._enableTls13 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTls13 = this._enableTls13;
    }
    if (this._validateCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateCertificate = this._validateCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServersSslPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCertificate = undefined;
      this._enableHttps = undefined;
      this._enableSni = undefined;
      this._enableSsl3 = undefined;
      this._enableSslCompatibilityMode = undefined;
      this._enableTls1 = undefined;
      this._enableTls11 = undefined;
      this._enableTls12 = undefined;
      this._enableTls13 = undefined;
      this._validateCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCertificate = value.clientCertificate;
      this._enableHttps = value.enableHttps;
      this._enableSni = value.enableSni;
      this._enableSsl3 = value.enableSsl3;
      this._enableSslCompatibilityMode = value.enableSslCompatibilityMode;
      this._enableTls1 = value.enableTls1;
      this._enableTls11 = value.enableTls11;
      this._enableTls12 = value.enableTls12;
      this._enableTls13 = value.enableTls13;
      this._validateCertificate = value.validateCertificate;
    }
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // enable_https - computed: false, optional: true, required: false
  private _enableHttps?: string; 
  public get enableHttps() {
    return this.getStringAttribute('enable_https');
  }
  public set enableHttps(value: string) {
    this._enableHttps = value;
  }
  public resetEnableHttps() {
    this._enableHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpsInput() {
    return this._enableHttps;
  }

  // enable_sni - computed: false, optional: true, required: false
  private _enableSni?: string; 
  public get enableSni() {
    return this.getStringAttribute('enable_sni');
  }
  public set enableSni(value: string) {
    this._enableSni = value;
  }
  public resetEnableSni() {
    this._enableSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSniInput() {
    return this._enableSni;
  }

  // enable_ssl_3 - computed: false, optional: true, required: false
  private _enableSsl3?: string; 
  public get enableSsl3() {
    return this.getStringAttribute('enable_ssl_3');
  }
  public set enableSsl3(value: string) {
    this._enableSsl3 = value;
  }
  public resetEnableSsl3() {
    this._enableSsl3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSsl3Input() {
    return this._enableSsl3;
  }

  // enable_ssl_compatibility_mode - computed: false, optional: true, required: false
  private _enableSslCompatibilityMode?: string; 
  public get enableSslCompatibilityMode() {
    return this.getStringAttribute('enable_ssl_compatibility_mode');
  }
  public set enableSslCompatibilityMode(value: string) {
    this._enableSslCompatibilityMode = value;
  }
  public resetEnableSslCompatibilityMode() {
    this._enableSslCompatibilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSslCompatibilityModeInput() {
    return this._enableSslCompatibilityMode;
  }

  // enable_tls_1 - computed: false, optional: true, required: false
  private _enableTls1?: string; 
  public get enableTls1() {
    return this.getStringAttribute('enable_tls_1');
  }
  public set enableTls1(value: string) {
    this._enableTls1 = value;
  }
  public resetEnableTls1() {
    this._enableTls1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTls1Input() {
    return this._enableTls1;
  }

  // enable_tls_1_1 - computed: false, optional: true, required: false
  private _enableTls11?: string; 
  public get enableTls11() {
    return this.getStringAttribute('enable_tls_1_1');
  }
  public set enableTls11(value: string) {
    this._enableTls11 = value;
  }
  public resetEnableTls11() {
    this._enableTls11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTls11Input() {
    return this._enableTls11;
  }

  // enable_tls_1_2 - computed: false, optional: true, required: false
  private _enableTls12?: string; 
  public get enableTls12() {
    return this.getStringAttribute('enable_tls_1_2');
  }
  public set enableTls12(value: string) {
    this._enableTls12 = value;
  }
  public resetEnableTls12() {
    this._enableTls12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTls12Input() {
    return this._enableTls12;
  }

  // enable_tls_1_3 - computed: false, optional: true, required: false
  private _enableTls13?: string; 
  public get enableTls13() {
    return this.getStringAttribute('enable_tls_1_3');
  }
  public set enableTls13(value: string) {
    this._enableTls13 = value;
  }
  public resetEnableTls13() {
    this._enableTls13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTls13Input() {
    return this._enableTls13;
  }

  // validate_certificate - computed: false, optional: true, required: false
  private _validateCertificate?: string; 
  public get validateCertificate() {
    return this.getStringAttribute('validate_certificate');
  }
  public set validateCertificate(value: string) {
    this._validateCertificate = value;
  }
  public resetValidateCertificate() {
    this._validateCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateCertificateInput() {
    return this._validateCertificate;
  }
}

export class ServersSslPolicyList extends cdktf.ComplexList {
  public internalValue? : ServersSslPolicy[] | cdktf.IResolvable

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
  public get(index: number): ServersSslPolicyOutputReference {
    return new ServersSslPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers barracudawaf_servers}
*/
export class Servers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "barracudawaf_servers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Servers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Servers to import
  * @param importFromId The id of the existing Servers that should be imported. Refer to the {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Servers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "barracudawaf_servers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/servers barracudawaf_servers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServersConfig
  */
  public constructor(scope: Construct, id: string, config: ServersConfig) {
    super(scope, id, {
      terraformResourceType: 'barracudawaf_servers',
      terraformGeneratorMetadata: {
        providerName: 'barracudawaf',
        providerVersion: '1.0.10',
        providerVersionConstraint: '1.0.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressVersion = config.addressVersion;
    this._comments = config.comments;
    this._hostname = config.hostname;
    this._id = config.id;
    this._identifier = config.identifier;
    this._ipAddress = config.ipAddress;
    this._name = config.name;
    this._parent = config.parent;
    this._port = config.port;
    this._status = config.status;
    this._connectionPooling.internalValue = config.connectionPooling;
    this._sslPolicy.internalValue = config.sslPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_version - computed: false, optional: true, required: false
  private _addressVersion?: string; 
  public get addressVersion() {
    return this.getStringAttribute('address_version');
  }
  public set addressVersion(value: string) {
    this._addressVersion = value;
  }
  public resetAddressVersion() {
    this._addressVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressVersionInput() {
    return this._addressVersion;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // parent - computed: false, optional: false, required: true
  private _parent?: string[]; 
  public get parent() {
    return this.getListAttribute('parent');
  }
  public set parent(value: string[]) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // port - computed: false, optional: true, required: false
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // connection_pooling - computed: false, optional: true, required: false
  private _connectionPooling = new ServersConnectionPoolingList(this, "connection_pooling", false);
  public get connectionPooling() {
    return this._connectionPooling;
  }
  public putConnectionPooling(value: ServersConnectionPooling[] | cdktf.IResolvable) {
    this._connectionPooling.internalValue = value;
  }
  public resetConnectionPooling() {
    this._connectionPooling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolingInput() {
    return this._connectionPooling.internalValue;
  }

  // ssl_policy - computed: false, optional: true, required: false
  private _sslPolicy = new ServersSslPolicyList(this, "ssl_policy", false);
  public get sslPolicy() {
    return this._sslPolicy;
  }
  public putSslPolicy(value: ServersSslPolicy[] | cdktf.IResolvable) {
    this._sslPolicy.internalValue = value;
  }
  public resetSslPolicy() {
    this._sslPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPolicyInput() {
    return this._sslPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_version: cdktf.stringToTerraform(this._addressVersion),
      comments: cdktf.stringToTerraform(this._comments),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      name: cdktf.stringToTerraform(this._name),
      parent: cdktf.listMapper(cdktf.stringToTerraform, false)(this._parent),
      port: cdktf.stringToTerraform(this._port),
      status: cdktf.stringToTerraform(this._status),
      connection_pooling: cdktf.listMapper(serversConnectionPoolingToTerraform, true)(this._connectionPooling.internalValue),
      ssl_policy: cdktf.listMapper(serversSslPolicyToTerraform, true)(this._sslPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_version: {
        value: cdktf.stringToHclTerraform(this._addressVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
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
      parent: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._parent),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_pooling: {
        value: cdktf.listMapperHcl(serversConnectionPoolingToHclTerraform, true)(this._connectionPooling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServersConnectionPoolingList",
      },
      ssl_policy: {
        value: cdktf.listMapperHcl(serversSslPolicyToHclTerraform, true)(this._sslPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServersSslPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
