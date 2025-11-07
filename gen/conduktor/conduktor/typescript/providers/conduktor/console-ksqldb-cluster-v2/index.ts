// https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_ksqldb_cluster_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsoleKsqldbClusterV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Kafka cluster name linked with the current KsqlDB cluster. Must already exist in Conduktor Console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_ksqldb_cluster_v2#cluster ConsoleKsqldbClusterV2#cluster}
  */
  readonly cluster: string;
  /**
  * KsqlDB cluster name, must be unique, acts as an ID for import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_ksqldb_cluster_v2#name ConsoleKsqldbClusterV2#name}
  */
  readonly name: string;
  /**
  * KsqlDB cluster specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_ksqldb_cluster_v2#spec ConsoleKsqldbClusterV2#spec}
  */
  readonly spec: ConsoleKsqldbClusterV2Spec;
}
export interface ConsoleKsqldbClusterV2SpecSecurityBasicAuth {
  /**
  * KsqlDB cluster basic auth password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_ksqldb_cluster_v2#password ConsoleKsqldbClusterV2#password}
  */
  readonly password: string;
  /**
  * KsqlDB cluster basic auth username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_ksqldb_cluster_v2#username ConsoleKsqldbClusterV2#username}
  */
  readonly username: string;
}

export function consoleKsqldbClusterV2SpecSecurityBasicAuthToTerraform(struct?: ConsoleKsqldbClusterV2SpecSecurityBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function consoleKsqldbClusterV2SpecSecurityBasicAuthToHclTerraform(struct?: ConsoleKsqldbClusterV2SpecSecurityBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleKsqldbClusterV2SpecSecurityBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleKsqldbClusterV2SpecSecurityBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleKsqldbClusterV2SpecSecurityBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
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
}
export interface ConsoleKsqldbClusterV2SpecSecurityBearerToken {
  /**
  * KsqlDB cluster bearer token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_ksqldb_cluster_v2#token ConsoleKsqldbClusterV2#token}
  */
  readonly token: string;
}

export function consoleKsqldbClusterV2SpecSecurityBearerTokenToTerraform(struct?: ConsoleKsqldbClusterV2SpecSecurityBearerToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function consoleKsqldbClusterV2SpecSecurityBearerTokenToHclTerraform(struct?: ConsoleKsqldbClusterV2SpecSecurityBearerToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleKsqldbClusterV2SpecSecurityBearerTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleKsqldbClusterV2SpecSecurityBearerToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleKsqldbClusterV2SpecSecurityBearerToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._token = value.token;
    }
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface ConsoleKsqldbClusterV2SpecSecuritySslAuth {
  /**
  * KsqlDB cluster mTLS auth certificate chain PEM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_ksqldb_cluster_v2#certificate_chain ConsoleKsqldbClusterV2#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * KsqlDB cluster mTLS auth private key PEM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_ksqldb_cluster_v2#key ConsoleKsqldbClusterV2#key}
  */
  readonly key: string;
}

export function consoleKsqldbClusterV2SpecSecuritySslAuthToTerraform(struct?: ConsoleKsqldbClusterV2SpecSecuritySslAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function consoleKsqldbClusterV2SpecSecuritySslAuthToHclTerraform(struct?: ConsoleKsqldbClusterV2SpecSecuritySslAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_chain: {
      value: cdktf.stringToHclTerraform(struct!.certificateChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleKsqldbClusterV2SpecSecuritySslAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleKsqldbClusterV2SpecSecuritySslAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChain = this._certificateChain;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleKsqldbClusterV2SpecSecuritySslAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateChain = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateChain = value.certificateChain;
      this._key = value.key;
    }
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface ConsoleKsqldbClusterV2SpecSecurity {
  /**
  * Basic auth for KsqlDB cluster security configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_ksqldb_cluster_v2#basic_auth ConsoleKsqldbClusterV2#basic_auth}
  */
  readonly basicAuth?: ConsoleKsqldbClusterV2SpecSecurityBasicAuth;
  /**
  * Bearer token for KsqlDB cluster security configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_ksqldb_cluster_v2#bearer_token ConsoleKsqldbClusterV2#bearer_token}
  */
  readonly bearerToken?: ConsoleKsqldbClusterV2SpecSecurityBearerToken;
  /**
  * SSL auth (mTLS) for KsqlDB cluster security configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_ksqldb_cluster_v2#ssl_auth ConsoleKsqldbClusterV2#ssl_auth}
  */
  readonly sslAuth?: ConsoleKsqldbClusterV2SpecSecuritySslAuth;
}

export function consoleKsqldbClusterV2SpecSecurityToTerraform(struct?: ConsoleKsqldbClusterV2SpecSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth: consoleKsqldbClusterV2SpecSecurityBasicAuthToTerraform(struct!.basicAuth),
    bearer_token: consoleKsqldbClusterV2SpecSecurityBearerTokenToTerraform(struct!.bearerToken),
    ssl_auth: consoleKsqldbClusterV2SpecSecuritySslAuthToTerraform(struct!.sslAuth),
  }
}


export function consoleKsqldbClusterV2SpecSecurityToHclTerraform(struct?: ConsoleKsqldbClusterV2SpecSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth: {
      value: consoleKsqldbClusterV2SpecSecurityBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleKsqldbClusterV2SpecSecurityBasicAuth",
    },
    bearer_token: {
      value: consoleKsqldbClusterV2SpecSecurityBearerTokenToHclTerraform(struct!.bearerToken),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleKsqldbClusterV2SpecSecurityBearerToken",
    },
    ssl_auth: {
      value: consoleKsqldbClusterV2SpecSecuritySslAuthToHclTerraform(struct!.sslAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleKsqldbClusterV2SpecSecuritySslAuth",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleKsqldbClusterV2SpecSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleKsqldbClusterV2SpecSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._bearerToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken?.internalValue;
    }
    if (this._sslAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslAuth = this._sslAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleKsqldbClusterV2SpecSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._bearerToken.internalValue = undefined;
      this._sslAuth.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = value.basicAuth;
      this._bearerToken.internalValue = value.bearerToken;
      this._sslAuth.internalValue = value.sslAuth;
    }
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new ConsoleKsqldbClusterV2SpecSecurityBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: ConsoleKsqldbClusterV2SpecSecurityBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // bearer_token - computed: false, optional: true, required: false
  private _bearerToken = new ConsoleKsqldbClusterV2SpecSecurityBearerTokenOutputReference(this, "bearer_token");
  public get bearerToken() {
    return this._bearerToken;
  }
  public putBearerToken(value: ConsoleKsqldbClusterV2SpecSecurityBearerToken) {
    this._bearerToken.internalValue = value;
  }
  public resetBearerToken() {
    this._bearerToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken.internalValue;
  }

  // ssl_auth - computed: false, optional: true, required: false
  private _sslAuth = new ConsoleKsqldbClusterV2SpecSecuritySslAuthOutputReference(this, "ssl_auth");
  public get sslAuth() {
    return this._sslAuth;
  }
  public putSslAuth(value: ConsoleKsqldbClusterV2SpecSecuritySslAuth) {
    this._sslAuth.internalValue = value;
  }
  public resetSslAuth() {
    this._sslAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAuthInput() {
    return this._sslAuth.internalValue;
  }
}
export interface ConsoleKsqldbClusterV2Spec {
  /**
  * KsqlDB cluster display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_ksqldb_cluster_v2#display_name ConsoleKsqldbClusterV2#display_name}
  */
  readonly displayName: string;
  /**
  * Key-Value HTTP headers to add to requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_ksqldb_cluster_v2#headers ConsoleKsqldbClusterV2#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Ignore untrusted certificate for KsqlDB cluster requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_ksqldb_cluster_v2#ignore_untrusted_certificate ConsoleKsqldbClusterV2#ignore_untrusted_certificate}
  */
  readonly ignoreUntrustedCertificate?: boolean | cdktf.IResolvable;
  /**
  * KsqlDB cluster security configuration. One of `basic_auth`, `bearer_token`, `ssl_auth`. If not set, the cluster will be considered as unsecured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_ksqldb_cluster_v2#security ConsoleKsqldbClusterV2#security}
  */
  readonly security?: ConsoleKsqldbClusterV2SpecSecurity;
  /**
  * URL of a KsqlDB cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_ksqldb_cluster_v2#url ConsoleKsqldbClusterV2#url}
  */
  readonly url: string;
}

export function consoleKsqldbClusterV2SpecToTerraform(struct?: ConsoleKsqldbClusterV2Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    ignore_untrusted_certificate: cdktf.booleanToTerraform(struct!.ignoreUntrustedCertificate),
    security: consoleKsqldbClusterV2SpecSecurityToTerraform(struct!.security),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function consoleKsqldbClusterV2SpecToHclTerraform(struct?: ConsoleKsqldbClusterV2Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ignore_untrusted_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreUntrustedCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security: {
      value: consoleKsqldbClusterV2SpecSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleKsqldbClusterV2SpecSecurity",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleKsqldbClusterV2SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleKsqldbClusterV2Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._ignoreUntrustedCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUntrustedCertificate = this._ignoreUntrustedCertificate;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleKsqldbClusterV2Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._headers = undefined;
      this._ignoreUntrustedCertificate = undefined;
      this._security.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._headers = value.headers;
      this._ignoreUntrustedCertificate = value.ignoreUntrustedCertificate;
      this._security.internalValue = value.security;
      this._url = value.url;
    }
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // ignore_untrusted_certificate - computed: true, optional: true, required: false
  private _ignoreUntrustedCertificate?: boolean | cdktf.IResolvable; 
  public get ignoreUntrustedCertificate() {
    return this.getBooleanAttribute('ignore_untrusted_certificate');
  }
  public set ignoreUntrustedCertificate(value: boolean | cdktf.IResolvable) {
    this._ignoreUntrustedCertificate = value;
  }
  public resetIgnoreUntrustedCertificate() {
    this._ignoreUntrustedCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUntrustedCertificateInput() {
    return this._ignoreUntrustedCertificate;
  }

  // security - computed: false, optional: true, required: false
  private _security = new ConsoleKsqldbClusterV2SpecSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: ConsoleKsqldbClusterV2SpecSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_ksqldb_cluster_v2 conduktor_console_ksqldb_cluster_v2}
*/
export class ConsoleKsqldbClusterV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "conduktor_console_ksqldb_cluster_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsoleKsqldbClusterV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsoleKsqldbClusterV2 to import
  * @param importFromId The id of the existing ConsoleKsqldbClusterV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_ksqldb_cluster_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsoleKsqldbClusterV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "conduktor_console_ksqldb_cluster_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_ksqldb_cluster_v2 conduktor_console_ksqldb_cluster_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsoleKsqldbClusterV2Config
  */
  public constructor(scope: Construct, id: string, config: ConsoleKsqldbClusterV2Config) {
    super(scope, id, {
      terraformResourceType: 'conduktor_console_ksqldb_cluster_v2',
      terraformGeneratorMetadata: {
        providerName: 'conduktor',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cluster = config.cluster;
    this._name = config.name;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
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

  // spec - computed: false, optional: false, required: true
  private _spec = new ConsoleKsqldbClusterV2SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ConsoleKsqldbClusterV2Spec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.stringToTerraform(this._cluster),
      name: cdktf.stringToTerraform(this._name),
      spec: consoleKsqldbClusterV2SpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
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
      spec: {
        value: consoleKsqldbClusterV2SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConsoleKsqldbClusterV2Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
