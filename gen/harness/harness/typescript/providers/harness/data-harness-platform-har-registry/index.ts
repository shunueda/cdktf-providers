// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessPlatformHarRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allowed artifact patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#allowed_pattern DataHarnessPlatformHarRegistry#allowed_pattern}
  */
  readonly allowedPattern?: string[];
  /**
  * Blocked artifact patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#blocked_pattern DataHarnessPlatformHarRegistry#blocked_pattern}
  */
  readonly blockedPattern?: string[];
  /**
  * Description of the registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#description DataHarnessPlatformHarRegistry#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#id DataHarnessPlatformHarRegistry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#identifier DataHarnessPlatformHarRegistry#identifier}
  */
  readonly identifier: string;
  /**
  * Type of package (DOCKER, HELM, MAVEN, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#package_type DataHarnessPlatformHarRegistry#package_type}
  */
  readonly packageType?: string;
  /**
  * Parent reference for the registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#parent_ref DataHarnessPlatformHarRegistry#parent_ref}
  */
  readonly parentRef?: string;
  /**
  * Space reference for the registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#space_ref DataHarnessPlatformHarRegistry#space_ref}
  */
  readonly spaceRef?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#config DataHarnessPlatformHarRegistry#config}
  */
  readonly config?: DataHarnessPlatformHarRegistryConfigA;
}
export interface DataHarnessPlatformHarRegistryConfigAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#access_key DataHarnessPlatformHarRegistry#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#access_key_identifier DataHarnessPlatformHarRegistry#access_key_identifier}
  */
  readonly accessKeyIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#access_key_secret_path DataHarnessPlatformHarRegistry#access_key_secret_path}
  */
  readonly accessKeySecretPath?: string;
  /**
  * Type of authentication (UserPassword, Anonymous)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#auth_type DataHarnessPlatformHarRegistry#auth_type}
  */
  readonly authType: string;
  /**
  * Secret identifier for UserPassword auth type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#secret_identifier DataHarnessPlatformHarRegistry#secret_identifier}
  */
  readonly secretIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#secret_key_identifier DataHarnessPlatformHarRegistry#secret_key_identifier}
  */
  readonly secretKeyIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#secret_key_secret_path DataHarnessPlatformHarRegistry#secret_key_secret_path}
  */
  readonly secretKeySecretPath?: string;
  /**
  * Secret space path for UserPassword auth type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#secret_space_path DataHarnessPlatformHarRegistry#secret_space_path}
  */
  readonly secretSpacePath?: string;
  /**
  * User name for UserPassword auth type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#user_name DataHarnessPlatformHarRegistry#user_name}
  */
  readonly userName?: string;
}

export function dataHarnessPlatformHarRegistryConfigAuthToTerraform(struct?: DataHarnessPlatformHarRegistryConfigAuthOutputReference | DataHarnessPlatformHarRegistryConfigAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    access_key_identifier: cdktf.stringToTerraform(struct!.accessKeyIdentifier),
    access_key_secret_path: cdktf.stringToTerraform(struct!.accessKeySecretPath),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    secret_identifier: cdktf.stringToTerraform(struct!.secretIdentifier),
    secret_key_identifier: cdktf.stringToTerraform(struct!.secretKeyIdentifier),
    secret_key_secret_path: cdktf.stringToTerraform(struct!.secretKeySecretPath),
    secret_space_path: cdktf.stringToTerraform(struct!.secretSpacePath),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function dataHarnessPlatformHarRegistryConfigAuthToHclTerraform(struct?: DataHarnessPlatformHarRegistryConfigAuthOutputReference | DataHarnessPlatformHarRegistryConfigAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_key_identifier: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_key_secret_path: {
      value: cdktf.stringToHclTerraform(struct!.accessKeySecretPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_identifier: {
      value: cdktf.stringToHclTerraform(struct!.secretIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key_identifier: {
      value: cdktf.stringToHclTerraform(struct!.secretKeyIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key_secret_path: {
      value: cdktf.stringToHclTerraform(struct!.secretKeySecretPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_space_path: {
      value: cdktf.stringToHclTerraform(struct!.secretSpacePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessPlatformHarRegistryConfigAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataHarnessPlatformHarRegistryConfigAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._accessKeyIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyIdentifier = this._accessKeyIdentifier;
    }
    if (this._accessKeySecretPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeySecretPath = this._accessKeySecretPath;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._secretIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretIdentifier = this._secretIdentifier;
    }
    if (this._secretKeyIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyIdentifier = this._secretKeyIdentifier;
    }
    if (this._secretKeySecretPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeySecretPath = this._secretKeySecretPath;
    }
    if (this._secretSpacePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretSpacePath = this._secretSpacePath;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformHarRegistryConfigAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._accessKeyIdentifier = undefined;
      this._accessKeySecretPath = undefined;
      this._authType = undefined;
      this._secretIdentifier = undefined;
      this._secretKeyIdentifier = undefined;
      this._secretKeySecretPath = undefined;
      this._secretSpacePath = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._accessKeyIdentifier = value.accessKeyIdentifier;
      this._accessKeySecretPath = value.accessKeySecretPath;
      this._authType = value.authType;
      this._secretIdentifier = value.secretIdentifier;
      this._secretKeyIdentifier = value.secretKeyIdentifier;
      this._secretKeySecretPath = value.secretKeySecretPath;
      this._secretSpacePath = value.secretSpacePath;
      this._userName = value.userName;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // access_key_identifier - computed: false, optional: true, required: false
  private _accessKeyIdentifier?: string; 
  public get accessKeyIdentifier() {
    return this.getStringAttribute('access_key_identifier');
  }
  public set accessKeyIdentifier(value: string) {
    this._accessKeyIdentifier = value;
  }
  public resetAccessKeyIdentifier() {
    this._accessKeyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdentifierInput() {
    return this._accessKeyIdentifier;
  }

  // access_key_secret_path - computed: false, optional: true, required: false
  private _accessKeySecretPath?: string; 
  public get accessKeySecretPath() {
    return this.getStringAttribute('access_key_secret_path');
  }
  public set accessKeySecretPath(value: string) {
    this._accessKeySecretPath = value;
  }
  public resetAccessKeySecretPath() {
    this._accessKeySecretPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeySecretPathInput() {
    return this._accessKeySecretPath;
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // secret_identifier - computed: false, optional: true, required: false
  private _secretIdentifier?: string; 
  public get secretIdentifier() {
    return this.getStringAttribute('secret_identifier');
  }
  public set secretIdentifier(value: string) {
    this._secretIdentifier = value;
  }
  public resetSecretIdentifier() {
    this._secretIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdentifierInput() {
    return this._secretIdentifier;
  }

  // secret_key_identifier - computed: false, optional: true, required: false
  private _secretKeyIdentifier?: string; 
  public get secretKeyIdentifier() {
    return this.getStringAttribute('secret_key_identifier');
  }
  public set secretKeyIdentifier(value: string) {
    this._secretKeyIdentifier = value;
  }
  public resetSecretKeyIdentifier() {
    this._secretKeyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyIdentifierInput() {
    return this._secretKeyIdentifier;
  }

  // secret_key_secret_path - computed: false, optional: true, required: false
  private _secretKeySecretPath?: string; 
  public get secretKeySecretPath() {
    return this.getStringAttribute('secret_key_secret_path');
  }
  public set secretKeySecretPath(value: string) {
    this._secretKeySecretPath = value;
  }
  public resetSecretKeySecretPath() {
    this._secretKeySecretPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeySecretPathInput() {
    return this._secretKeySecretPath;
  }

  // secret_space_path - computed: false, optional: true, required: false
  private _secretSpacePath?: string; 
  public get secretSpacePath() {
    return this.getStringAttribute('secret_space_path');
  }
  public set secretSpacePath(value: string) {
    this._secretSpacePath = value;
  }
  public resetSecretSpacePath() {
    this._secretSpacePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretSpacePathInput() {
    return this._secretSpacePath;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface DataHarnessPlatformHarRegistryConfigA {
  /**
  * Type of authentication for UPSTREAM registry type (UserPassword, Anonymous)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#auth_type DataHarnessPlatformHarRegistry#auth_type}
  */
  readonly authType?: string;
  /**
  * Upstream source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#source DataHarnessPlatformHarRegistry#source}
  */
  readonly source?: string;
  /**
  * Type of registry (VIRTUAL or UPSTREAM)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#type DataHarnessPlatformHarRegistry#type}
  */
  readonly type: string;
  /**
  * List of upstream proxies for VIRTUAL registry type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#upstream_proxies DataHarnessPlatformHarRegistry#upstream_proxies}
  */
  readonly upstreamProxies?: string[];
  /**
  * URL of the upstream (required if type=UPSTREAM & package_type=HELM)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#url DataHarnessPlatformHarRegistry#url}
  */
  readonly url?: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#auth DataHarnessPlatformHarRegistry#auth}
  */
  readonly auth?: DataHarnessPlatformHarRegistryConfigAuth;
}

export function dataHarnessPlatformHarRegistryConfigAToTerraform(struct?: DataHarnessPlatformHarRegistryConfigAOutputReference | DataHarnessPlatformHarRegistryConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
    upstream_proxies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.upstreamProxies),
    url: cdktf.stringToTerraform(struct!.url),
    auth: dataHarnessPlatformHarRegistryConfigAuthToTerraform(struct!.auth),
  }
}


export function dataHarnessPlatformHarRegistryConfigAToHclTerraform(struct?: DataHarnessPlatformHarRegistryConfigAOutputReference | DataHarnessPlatformHarRegistryConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_proxies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.upstreamProxies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: dataHarnessPlatformHarRegistryConfigAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "DataHarnessPlatformHarRegistryConfigAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessPlatformHarRegistryConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataHarnessPlatformHarRegistryConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._upstreamProxies !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamProxies = this._upstreamProxies;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformHarRegistryConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authType = undefined;
      this._source = undefined;
      this._type = undefined;
      this._upstreamProxies = undefined;
      this._url = undefined;
      this._auth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authType = value.authType;
      this._source = value.source;
      this._type = value.type;
      this._upstreamProxies = value.upstreamProxies;
      this._url = value.url;
      this._auth.internalValue = value.auth;
    }
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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

  // upstream_proxies - computed: false, optional: true, required: false
  private _upstreamProxies?: string[]; 
  public get upstreamProxies() {
    return this.getListAttribute('upstream_proxies');
  }
  public set upstreamProxies(value: string[]) {
    this._upstreamProxies = value;
  }
  public resetUpstreamProxies() {
    this._upstreamProxies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamProxiesInput() {
    return this._upstreamProxies;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new DataHarnessPlatformHarRegistryConfigAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataHarnessPlatformHarRegistryConfigAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry harness_platform_har_registry}
*/
export class DataHarnessPlatformHarRegistry extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_har_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessPlatformHarRegistry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessPlatformHarRegistry to import
  * @param importFromId The id of the existing DataHarnessPlatformHarRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessPlatformHarRegistry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_har_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_har_registry harness_platform_har_registry} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessPlatformHarRegistryConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessPlatformHarRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_har_registry',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0',
        providerVersionConstraint: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedPattern = config.allowedPattern;
    this._blockedPattern = config.blockedPattern;
    this._description = config.description;
    this._id = config.id;
    this._identifier = config.identifier;
    this._packageType = config.packageType;
    this._parentRef = config.parentRef;
    this._spaceRef = config.spaceRef;
    this._config.internalValue = config.config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_pattern - computed: false, optional: true, required: false
  private _allowedPattern?: string[]; 
  public get allowedPattern() {
    return this.getListAttribute('allowed_pattern');
  }
  public set allowedPattern(value: string[]) {
    this._allowedPattern = value;
  }
  public resetAllowedPattern() {
    this._allowedPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPatternInput() {
    return this._allowedPattern;
  }

  // blocked_pattern - computed: false, optional: true, required: false
  private _blockedPattern?: string[]; 
  public get blockedPattern() {
    return this.getListAttribute('blocked_pattern');
  }
  public set blockedPattern(value: string[]) {
    this._blockedPattern = value;
  }
  public resetBlockedPattern() {
    this._blockedPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedPatternInput() {
    return this._blockedPattern;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: true, required: false
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // package_type - computed: false, optional: true, required: false
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  public resetPackageType() {
    this._packageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // parent_ref - computed: false, optional: true, required: false
  private _parentRef?: string; 
  public get parentRef() {
    return this.getStringAttribute('parent_ref');
  }
  public set parentRef(value: string) {
    this._parentRef = value;
  }
  public resetParentRef() {
    this._parentRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRefInput() {
    return this._parentRef;
  }

  // space_ref - computed: false, optional: true, required: false
  private _spaceRef?: string; 
  public get spaceRef() {
    return this.getStringAttribute('space_ref');
  }
  public set spaceRef(value: string) {
    this._spaceRef = value;
  }
  public resetSpaceRef() {
    this._spaceRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceRefInput() {
    return this._spaceRef;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataHarnessPlatformHarRegistryConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataHarnessPlatformHarRegistryConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedPattern),
      blocked_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedPattern),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      package_type: cdktf.stringToTerraform(this._packageType),
      parent_ref: cdktf.stringToTerraform(this._parentRef),
      space_ref: cdktf.stringToTerraform(this._spaceRef),
      config: dataHarnessPlatformHarRegistryConfigAToTerraform(this._config.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_pattern: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedPattern),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      blocked_pattern: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedPattern),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      package_type: {
        value: cdktf.stringToHclTerraform(this._packageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_ref: {
        value: cdktf.stringToHclTerraform(this._parentRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_ref: {
        value: cdktf.stringToHclTerraform(this._spaceRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: dataHarnessPlatformHarRegistryConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessPlatformHarRegistryConfigAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
