// https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretEngineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#id SecretEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * active_directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#active_directory SecretEngine#active_directory}
  */
  readonly activeDirectory?: SecretEngineActiveDirectory;
  /**
  * key_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#key_value SecretEngine#key_value}
  */
  readonly keyValue?: SecretEngineKeyValue;
  /**
  * postgres_secret_engine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#postgres_secret_engine SecretEngine#postgres_secret_engine}
  */
  readonly postgresSecretEngine?: SecretEnginePostgresSecretEngine;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#timeouts SecretEngine#timeouts}
  */
  readonly timeouts?: SecretEngineTimeouts;
}
export interface SecretEngineActiveDirectory {
  /**
  * The default time-to-live duration of the password after it's read. Once the ttl has passed, a password will be rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#after_read_ttl SecretEngine#after_read_ttl}
  */
  readonly afterReadTtl?: string;
  /**
  * Distinguished name of object to bind when performing user and group search. Example: cn=vault,ou=Users,dc=example,dc=com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#binddn SecretEngine#binddn}
  */
  readonly binddn: string;
  /**
  * Password to use along with binddn when performing user search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#bindpass SecretEngine#bindpass}
  */
  readonly bindpass: string;
  /**
  * CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#certificate SecretEngine#certificate}
  */
  readonly certificate?: string;
  /**
  * Timeout, in seconds, when attempting to connect to the LDAP server before trying the next URL in the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#connection_timeout SecretEngine#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * If set to true this will prevent password change timestamp validation in Active Directory when validating credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#do_not_validate_timestamps SecretEngine#do_not_validate_timestamps}
  */
  readonly doNotValidateTimestamps?: boolean | cdktf.IResolvable;
  /**
  * If true, skips LDAP server SSL certificate verification - insecure, use with caution!
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#insecure_tls SecretEngine#insecure_tls}
  */
  readonly insecureTls?: boolean | cdktf.IResolvable;
  /**
  * An interval of public/private key rotation for secret engine in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#key_rotation_interval_days SecretEngine#key_rotation_interval_days}
  */
  readonly keyRotationIntervalDays?: number;
  /**
  * The maximum retry duration in case of automatic failure. On failed ttl rotation attempt it will be retried in an increasing intervals until it reaches max_backoff_duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#max_backoff_duration SecretEngine#max_backoff_duration}
  */
  readonly maxBackoffDuration?: string;
  /**
  * Unique human-readable name of the Secret Engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#name SecretEngine#name}
  */
  readonly name: string;
  /**
  * Timeout, in seconds, for the connection when making requests against the server before returning back an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#request_timeout SecretEngine#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * Backing secret store identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#secret_store_id SecretEngine#secret_store_id}
  */
  readonly secretStoreId: string;
  /**
  * Backing Secret Store root path where managed secrets are going to be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#secret_store_root_path SecretEngine#secret_store_root_path}
  */
  readonly secretStoreRootPath: string;
  /**
  * If true, issues a StartTLS command after establishing an unencrypted connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#start_tls SecretEngine#start_tls}
  */
  readonly startTls?: boolean | cdktf.IResolvable;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#tags SecretEngine#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The default password time-to-live duration. Once the ttl has passed, a password will be rotated the next time it's requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#ttl SecretEngine#ttl}
  */
  readonly ttl?: string;
  /**
  * The domain (userPrincipalDomain) used to construct a UPN string for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#upndomain SecretEngine#upndomain}
  */
  readonly upndomain?: string;
  /**
  * The LDAP server to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#url SecretEngine#url}
  */
  readonly url: string;
  /**
  * Base DN under which to perform user search. Example: ou=Users,dc=example,dc=com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#userdn SecretEngine#userdn}
  */
  readonly userdn?: string;
}

export function secretEngineActiveDirectoryToTerraform(struct?: SecretEngineActiveDirectoryOutputReference | SecretEngineActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after_read_ttl: cdktf.stringToTerraform(struct!.afterReadTtl),
    binddn: cdktf.stringToTerraform(struct!.binddn),
    bindpass: cdktf.stringToTerraform(struct!.bindpass),
    certificate: cdktf.stringToTerraform(struct!.certificate),
    connection_timeout: cdktf.numberToTerraform(struct!.connectionTimeout),
    do_not_validate_timestamps: cdktf.booleanToTerraform(struct!.doNotValidateTimestamps),
    insecure_tls: cdktf.booleanToTerraform(struct!.insecureTls),
    key_rotation_interval_days: cdktf.numberToTerraform(struct!.keyRotationIntervalDays),
    max_backoff_duration: cdktf.stringToTerraform(struct!.maxBackoffDuration),
    name: cdktf.stringToTerraform(struct!.name),
    request_timeout: cdktf.numberToTerraform(struct!.requestTimeout),
    secret_store_id: cdktf.stringToTerraform(struct!.secretStoreId),
    secret_store_root_path: cdktf.stringToTerraform(struct!.secretStoreRootPath),
    start_tls: cdktf.booleanToTerraform(struct!.startTls),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    upndomain: cdktf.stringToTerraform(struct!.upndomain),
    url: cdktf.stringToTerraform(struct!.url),
    userdn: cdktf.stringToTerraform(struct!.userdn),
  }
}


export function secretEngineActiveDirectoryToHclTerraform(struct?: SecretEngineActiveDirectoryOutputReference | SecretEngineActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after_read_ttl: {
      value: cdktf.stringToHclTerraform(struct!.afterReadTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binddn: {
      value: cdktf.stringToHclTerraform(struct!.binddn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bindpass: {
      value: cdktf.stringToHclTerraform(struct!.bindpass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    do_not_validate_timestamps: {
      value: cdktf.booleanToHclTerraform(struct!.doNotValidateTimestamps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_tls: {
      value: cdktf.booleanToHclTerraform(struct!.insecureTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_rotation_interval_days: {
      value: cdktf.numberToHclTerraform(struct!.keyRotationIntervalDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_backoff_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxBackoffDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_timeout: {
      value: cdktf.numberToHclTerraform(struct!.requestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_store_id: {
      value: cdktf.stringToHclTerraform(struct!.secretStoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_store_root_path: {
      value: cdktf.stringToHclTerraform(struct!.secretStoreRootPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_tls: {
      value: cdktf.booleanToHclTerraform(struct!.startTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upndomain: {
      value: cdktf.stringToHclTerraform(struct!.upndomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    userdn: {
      value: cdktf.stringToHclTerraform(struct!.userdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretEngineActiveDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretEngineActiveDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afterReadTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterReadTtl = this._afterReadTtl;
    }
    if (this._binddn !== undefined) {
      hasAnyValues = true;
      internalValueResult.binddn = this._binddn;
    }
    if (this._bindpass !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindpass = this._bindpass;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._connectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTimeout = this._connectionTimeout;
    }
    if (this._doNotValidateTimestamps !== undefined) {
      hasAnyValues = true;
      internalValueResult.doNotValidateTimestamps = this._doNotValidateTimestamps;
    }
    if (this._insecureTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureTls = this._insecureTls;
    }
    if (this._keyRotationIntervalDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRotationIntervalDays = this._keyRotationIntervalDays;
    }
    if (this._maxBackoffDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBackoffDuration = this._maxBackoffDuration;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._requestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeout = this._requestTimeout;
    }
    if (this._secretStoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretStoreId = this._secretStoreId;
    }
    if (this._secretStoreRootPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretStoreRootPath = this._secretStoreRootPath;
    }
    if (this._startTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTls = this._startTls;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._upndomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.upndomain = this._upndomain;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._userdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.userdn = this._userdn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretEngineActiveDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._afterReadTtl = undefined;
      this._binddn = undefined;
      this._bindpass = undefined;
      this._certificate = undefined;
      this._connectionTimeout = undefined;
      this._doNotValidateTimestamps = undefined;
      this._insecureTls = undefined;
      this._keyRotationIntervalDays = undefined;
      this._maxBackoffDuration = undefined;
      this._name = undefined;
      this._requestTimeout = undefined;
      this._secretStoreId = undefined;
      this._secretStoreRootPath = undefined;
      this._startTls = undefined;
      this._tags = undefined;
      this._ttl = undefined;
      this._upndomain = undefined;
      this._url = undefined;
      this._userdn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._afterReadTtl = value.afterReadTtl;
      this._binddn = value.binddn;
      this._bindpass = value.bindpass;
      this._certificate = value.certificate;
      this._connectionTimeout = value.connectionTimeout;
      this._doNotValidateTimestamps = value.doNotValidateTimestamps;
      this._insecureTls = value.insecureTls;
      this._keyRotationIntervalDays = value.keyRotationIntervalDays;
      this._maxBackoffDuration = value.maxBackoffDuration;
      this._name = value.name;
      this._requestTimeout = value.requestTimeout;
      this._secretStoreId = value.secretStoreId;
      this._secretStoreRootPath = value.secretStoreRootPath;
      this._startTls = value.startTls;
      this._tags = value.tags;
      this._ttl = value.ttl;
      this._upndomain = value.upndomain;
      this._url = value.url;
      this._userdn = value.userdn;
    }
  }

  // after_read_ttl - computed: false, optional: true, required: false
  private _afterReadTtl?: string; 
  public get afterReadTtl() {
    return this.getStringAttribute('after_read_ttl');
  }
  public set afterReadTtl(value: string) {
    this._afterReadTtl = value;
  }
  public resetAfterReadTtl() {
    this._afterReadTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterReadTtlInput() {
    return this._afterReadTtl;
  }

  // binddn - computed: false, optional: false, required: true
  private _binddn?: string; 
  public get binddn() {
    return this.getStringAttribute('binddn');
  }
  public set binddn(value: string) {
    this._binddn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get binddnInput() {
    return this._binddn;
  }

  // bindpass - computed: false, optional: false, required: true
  private _bindpass?: string; 
  public get bindpass() {
    return this.getStringAttribute('bindpass');
  }
  public set bindpass(value: string) {
    this._bindpass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindpassInput() {
    return this._bindpass;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: number; 
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }
  public set connectionTimeout(value: number) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // do_not_validate_timestamps - computed: false, optional: true, required: false
  private _doNotValidateTimestamps?: boolean | cdktf.IResolvable; 
  public get doNotValidateTimestamps() {
    return this.getBooleanAttribute('do_not_validate_timestamps');
  }
  public set doNotValidateTimestamps(value: boolean | cdktf.IResolvable) {
    this._doNotValidateTimestamps = value;
  }
  public resetDoNotValidateTimestamps() {
    this._doNotValidateTimestamps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotValidateTimestampsInput() {
    return this._doNotValidateTimestamps;
  }

  // insecure_tls - computed: false, optional: true, required: false
  private _insecureTls?: boolean | cdktf.IResolvable; 
  public get insecureTls() {
    return this.getBooleanAttribute('insecure_tls');
  }
  public set insecureTls(value: boolean | cdktf.IResolvable) {
    this._insecureTls = value;
  }
  public resetInsecureTls() {
    this._insecureTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureTlsInput() {
    return this._insecureTls;
  }

  // key_rotation_interval_days - computed: false, optional: true, required: false
  private _keyRotationIntervalDays?: number; 
  public get keyRotationIntervalDays() {
    return this.getNumberAttribute('key_rotation_interval_days');
  }
  public set keyRotationIntervalDays(value: number) {
    this._keyRotationIntervalDays = value;
  }
  public resetKeyRotationIntervalDays() {
    this._keyRotationIntervalDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRotationIntervalDaysInput() {
    return this._keyRotationIntervalDays;
  }

  // max_backoff_duration - computed: false, optional: true, required: false
  private _maxBackoffDuration?: string; 
  public get maxBackoffDuration() {
    return this.getStringAttribute('max_backoff_duration');
  }
  public set maxBackoffDuration(value: string) {
    this._maxBackoffDuration = value;
  }
  public resetMaxBackoffDuration() {
    this._maxBackoffDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackoffDurationInput() {
    return this._maxBackoffDuration;
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

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }
  public set requestTimeout(value: number) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // secret_store_id - computed: false, optional: false, required: true
  private _secretStoreId?: string; 
  public get secretStoreId() {
    return this.getStringAttribute('secret_store_id');
  }
  public set secretStoreId(value: string) {
    this._secretStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStoreIdInput() {
    return this._secretStoreId;
  }

  // secret_store_root_path - computed: false, optional: false, required: true
  private _secretStoreRootPath?: string; 
  public get secretStoreRootPath() {
    return this.getStringAttribute('secret_store_root_path');
  }
  public set secretStoreRootPath(value: string) {
    this._secretStoreRootPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStoreRootPathInput() {
    return this._secretStoreRootPath;
  }

  // start_tls - computed: false, optional: true, required: false
  private _startTls?: boolean | cdktf.IResolvable; 
  public get startTls() {
    return this.getBooleanAttribute('start_tls');
  }
  public set startTls(value: boolean | cdktf.IResolvable) {
    this._startTls = value;
  }
  public resetStartTls() {
    this._startTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTlsInput() {
    return this._startTls;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // upndomain - computed: false, optional: true, required: false
  private _upndomain?: string; 
  public get upndomain() {
    return this.getStringAttribute('upndomain');
  }
  public set upndomain(value: string) {
    this._upndomain = value;
  }
  public resetUpndomain() {
    this._upndomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upndomainInput() {
    return this._upndomain;
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

  // userdn - computed: false, optional: true, required: false
  private _userdn?: string; 
  public get userdn() {
    return this.getStringAttribute('userdn');
  }
  public set userdn(value: string) {
    this._userdn = value;
  }
  public resetUserdn() {
    this._userdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userdnInput() {
    return this._userdn;
  }
}
export interface SecretEngineKeyValue {
  /**
  * An interval of public/private key rotation for secret engine in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#key_rotation_interval_days SecretEngine#key_rotation_interval_days}
  */
  readonly keyRotationIntervalDays?: number;
  /**
  * Unique human-readable name of the Secret Engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#name SecretEngine#name}
  */
  readonly name: string;
  /**
  * Backing secret store identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#secret_store_id SecretEngine#secret_store_id}
  */
  readonly secretStoreId: string;
  /**
  * Backing Secret Store root path where managed secrets are going to be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#secret_store_root_path SecretEngine#secret_store_root_path}
  */
  readonly secretStoreRootPath: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#tags SecretEngine#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretEngineKeyValueToTerraform(struct?: SecretEngineKeyValueOutputReference | SecretEngineKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_rotation_interval_days: cdktf.numberToTerraform(struct!.keyRotationIntervalDays),
    name: cdktf.stringToTerraform(struct!.name),
    secret_store_id: cdktf.stringToTerraform(struct!.secretStoreId),
    secret_store_root_path: cdktf.stringToTerraform(struct!.secretStoreRootPath),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretEngineKeyValueToHclTerraform(struct?: SecretEngineKeyValueOutputReference | SecretEngineKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_rotation_interval_days: {
      value: cdktf.numberToHclTerraform(struct!.keyRotationIntervalDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_store_id: {
      value: cdktf.stringToHclTerraform(struct!.secretStoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_store_root_path: {
      value: cdktf.stringToHclTerraform(struct!.secretStoreRootPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretEngineKeyValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretEngineKeyValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyRotationIntervalDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRotationIntervalDays = this._keyRotationIntervalDays;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretStoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretStoreId = this._secretStoreId;
    }
    if (this._secretStoreRootPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretStoreRootPath = this._secretStoreRootPath;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretEngineKeyValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyRotationIntervalDays = undefined;
      this._name = undefined;
      this._secretStoreId = undefined;
      this._secretStoreRootPath = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyRotationIntervalDays = value.keyRotationIntervalDays;
      this._name = value.name;
      this._secretStoreId = value.secretStoreId;
      this._secretStoreRootPath = value.secretStoreRootPath;
      this._tags = value.tags;
    }
  }

  // key_rotation_interval_days - computed: false, optional: true, required: false
  private _keyRotationIntervalDays?: number; 
  public get keyRotationIntervalDays() {
    return this.getNumberAttribute('key_rotation_interval_days');
  }
  public set keyRotationIntervalDays(value: number) {
    this._keyRotationIntervalDays = value;
  }
  public resetKeyRotationIntervalDays() {
    this._keyRotationIntervalDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRotationIntervalDaysInput() {
    return this._keyRotationIntervalDays;
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

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // secret_store_id - computed: false, optional: false, required: true
  private _secretStoreId?: string; 
  public get secretStoreId() {
    return this.getStringAttribute('secret_store_id');
  }
  public set secretStoreId(value: string) {
    this._secretStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStoreIdInput() {
    return this._secretStoreId;
  }

  // secret_store_root_path - computed: false, optional: false, required: true
  private _secretStoreRootPath?: string; 
  public get secretStoreRootPath() {
    return this.getStringAttribute('secret_store_root_path');
  }
  public set secretStoreRootPath(value: string) {
    this._secretStoreRootPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStoreRootPathInput() {
    return this._secretStoreRootPath;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretEnginePostgresSecretEngine {
  /**
  * The default time-to-live duration of the password after it's read. Once the ttl has passed, a password will be rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#after_read_ttl SecretEngine#after_read_ttl}
  */
  readonly afterReadTtl?: string;
  /**
  * Database is the database to verify credential against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#database SecretEngine#database}
  */
  readonly database: string;
  /**
  * Hostname is the hostname or IP address of the Postgres server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#hostname SecretEngine#hostname}
  */
  readonly hostname: string;
  /**
  * An interval of public/private key rotation for secret engine in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#key_rotation_interval_days SecretEngine#key_rotation_interval_days}
  */
  readonly keyRotationIntervalDays?: number;
  /**
  * Unique human-readable name of the Secret Engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#name SecretEngine#name}
  */
  readonly name: string;
  /**
  * Password is the password to connect to the Postgres server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#password SecretEngine#password}
  */
  readonly password: string;
  /**
  * Port is the port number of the Postgres server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#port SecretEngine#port}
  */
  readonly port: number;
  /**
  * Backing secret store identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#secret_store_id SecretEngine#secret_store_id}
  */
  readonly secretStoreId: string;
  /**
  * Backing Secret Store root path where managed secrets are going to be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#secret_store_root_path SecretEngine#secret_store_root_path}
  */
  readonly secretStoreRootPath: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#tags SecretEngine#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * TLS enables TLS/SSL when connecting to the Postgres server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#tls SecretEngine#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * The default password time-to-live duration. Once the ttl has passed, a password will be rotated the next time it's requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#ttl SecretEngine#ttl}
  */
  readonly ttl?: string;
  /**
  * Username is the username to connect to the Postgres server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#username SecretEngine#username}
  */
  readonly username: string;
}

export function secretEnginePostgresSecretEngineToTerraform(struct?: SecretEnginePostgresSecretEngineOutputReference | SecretEnginePostgresSecretEngine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after_read_ttl: cdktf.stringToTerraform(struct!.afterReadTtl),
    database: cdktf.stringToTerraform(struct!.database),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    key_rotation_interval_days: cdktf.numberToTerraform(struct!.keyRotationIntervalDays),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    secret_store_id: cdktf.stringToTerraform(struct!.secretStoreId),
    secret_store_root_path: cdktf.stringToTerraform(struct!.secretStoreRootPath),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    tls: cdktf.booleanToTerraform(struct!.tls),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function secretEnginePostgresSecretEngineToHclTerraform(struct?: SecretEnginePostgresSecretEngineOutputReference | SecretEnginePostgresSecretEngine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after_read_ttl: {
      value: cdktf.stringToHclTerraform(struct!.afterReadTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
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
    key_rotation_interval_days: {
      value: cdktf.numberToHclTerraform(struct!.keyRotationIntervalDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    secret_store_id: {
      value: cdktf.stringToHclTerraform(struct!.secretStoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_store_root_path: {
      value: cdktf.stringToHclTerraform(struct!.secretStoreRootPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
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

export class SecretEnginePostgresSecretEngineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretEnginePostgresSecretEngine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afterReadTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterReadTtl = this._afterReadTtl;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._keyRotationIntervalDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRotationIntervalDays = this._keyRotationIntervalDays;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secretStoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretStoreId = this._secretStoreId;
    }
    if (this._secretStoreRootPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretStoreRootPath = this._secretStoreRootPath;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretEnginePostgresSecretEngine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._afterReadTtl = undefined;
      this._database = undefined;
      this._hostname = undefined;
      this._keyRotationIntervalDays = undefined;
      this._name = undefined;
      this._password = undefined;
      this._port = undefined;
      this._secretStoreId = undefined;
      this._secretStoreRootPath = undefined;
      this._tags = undefined;
      this._tls = undefined;
      this._ttl = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._afterReadTtl = value.afterReadTtl;
      this._database = value.database;
      this._hostname = value.hostname;
      this._keyRotationIntervalDays = value.keyRotationIntervalDays;
      this._name = value.name;
      this._password = value.password;
      this._port = value.port;
      this._secretStoreId = value.secretStoreId;
      this._secretStoreRootPath = value.secretStoreRootPath;
      this._tags = value.tags;
      this._tls = value.tls;
      this._ttl = value.ttl;
      this._username = value.username;
    }
  }

  // after_read_ttl - computed: false, optional: true, required: false
  private _afterReadTtl?: string; 
  public get afterReadTtl() {
    return this.getStringAttribute('after_read_ttl');
  }
  public set afterReadTtl(value: string) {
    this._afterReadTtl = value;
  }
  public resetAfterReadTtl() {
    this._afterReadTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterReadTtlInput() {
    return this._afterReadTtl;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // key_rotation_interval_days - computed: false, optional: true, required: false
  private _keyRotationIntervalDays?: number; 
  public get keyRotationIntervalDays() {
    return this.getNumberAttribute('key_rotation_interval_days');
  }
  public set keyRotationIntervalDays(value: number) {
    this._keyRotationIntervalDays = value;
  }
  public resetKeyRotationIntervalDays() {
    this._keyRotationIntervalDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRotationIntervalDaysInput() {
    return this._keyRotationIntervalDays;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // secret_store_id - computed: false, optional: false, required: true
  private _secretStoreId?: string; 
  public get secretStoreId() {
    return this.getStringAttribute('secret_store_id');
  }
  public set secretStoreId(value: string) {
    this._secretStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStoreIdInput() {
    return this._secretStoreId;
  }

  // secret_store_root_path - computed: false, optional: false, required: true
  private _secretStoreRootPath?: string; 
  public get secretStoreRootPath() {
    return this.getStringAttribute('secret_store_root_path');
  }
  public set secretStoreRootPath(value: string) {
    this._secretStoreRootPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStoreRootPathInput() {
    return this._secretStoreRootPath;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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
export interface SecretEngineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#create SecretEngine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#default SecretEngine#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#delete SecretEngine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#read SecretEngine#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#update SecretEngine#update}
  */
  readonly update?: string;
}

export function secretEngineTimeoutsToTerraform(struct?: SecretEngineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function secretEngineTimeoutsToHclTerraform(struct?: SecretEngineTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class SecretEngineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretEngineTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretEngineTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine sdm_secret_engine}
*/
export class SecretEngine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdm_secret_engine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretEngine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretEngine to import
  * @param importFromId The id of the existing SecretEngine that should be imported. Refer to the {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretEngine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdm_secret_engine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/secret_engine sdm_secret_engine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretEngineConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SecretEngineConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdm_secret_engine',
      terraformGeneratorMetadata: {
        providerName: 'sdm',
        providerVersion: '15.27.0',
        providerVersionConstraint: '15.27.0'
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
    this._activeDirectory.internalValue = config.activeDirectory;
    this._keyValue.internalValue = config.keyValue;
    this._postgresSecretEngine.internalValue = config.postgresSecretEngine;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // active_directory - computed: false, optional: true, required: false
  private _activeDirectory = new SecretEngineActiveDirectoryOutputReference(this, "active_directory");
  public get activeDirectory() {
    return this._activeDirectory;
  }
  public putActiveDirectory(value: SecretEngineActiveDirectory) {
    this._activeDirectory.internalValue = value;
  }
  public resetActiveDirectory() {
    this._activeDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryInput() {
    return this._activeDirectory.internalValue;
  }

  // key_value - computed: false, optional: true, required: false
  private _keyValue = new SecretEngineKeyValueOutputReference(this, "key_value");
  public get keyValue() {
    return this._keyValue;
  }
  public putKeyValue(value: SecretEngineKeyValue) {
    this._keyValue.internalValue = value;
  }
  public resetKeyValue() {
    this._keyValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValueInput() {
    return this._keyValue.internalValue;
  }

  // postgres_secret_engine - computed: false, optional: true, required: false
  private _postgresSecretEngine = new SecretEnginePostgresSecretEngineOutputReference(this, "postgres_secret_engine");
  public get postgresSecretEngine() {
    return this._postgresSecretEngine;
  }
  public putPostgresSecretEngine(value: SecretEnginePostgresSecretEngine) {
    this._postgresSecretEngine.internalValue = value;
  }
  public resetPostgresSecretEngine() {
    this._postgresSecretEngine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresSecretEngineInput() {
    return this._postgresSecretEngine.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecretEngineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecretEngineTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      active_directory: secretEngineActiveDirectoryToTerraform(this._activeDirectory.internalValue),
      key_value: secretEngineKeyValueToTerraform(this._keyValue.internalValue),
      postgres_secret_engine: secretEnginePostgresSecretEngineToTerraform(this._postgresSecretEngine.internalValue),
      timeouts: secretEngineTimeoutsToTerraform(this._timeouts.internalValue),
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
      active_directory: {
        value: secretEngineActiveDirectoryToHclTerraform(this._activeDirectory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretEngineActiveDirectoryList",
      },
      key_value: {
        value: secretEngineKeyValueToHclTerraform(this._keyValue.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretEngineKeyValueList",
      },
      postgres_secret_engine: {
        value: secretEnginePostgresSecretEngineToHclTerraform(this._postgresSecretEngine.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretEnginePostgresSecretEngineList",
      },
      timeouts: {
        value: secretEngineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretEngineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
