// https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether this registry is the default registry (default: `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#default Registry#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * The name of the fallback registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#fallback_registry Registry#fallback_registry}
  */
  readonly fallbackRegistry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#id Registry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The display name for the registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#name Registry#name}
  */
  readonly name: string;
  /**
  * Whether this registry is the primary registry (default: `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#primary Registry#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#spec Registry#spec}
  */
  readonly spec: RegistrySpec;
}
export interface RegistrySpecAcr {
  /**
  * The Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#client_id Registry#client_id}
  */
  readonly clientId: string;
  /**
  * The Client Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#client_secret Registry#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The ACR registry domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#domain Registry#domain}
  */
  readonly domain: string;
  /**
  * See the [docs](https://codefresh.io/docs/docs/integrations/docker-registries/#using-an-optional-repository-prefix).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#repository_prefix Registry#repository_prefix}
  */
  readonly repositoryPrefix?: string;
}

export function registrySpecAcrToTerraform(struct?: RegistrySpecAcrOutputReference | RegistrySpecAcr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    domain: cdktf.stringToTerraform(struct!.domain),
    repository_prefix: cdktf.stringToTerraform(struct!.repositoryPrefix),
  }
}


export function registrySpecAcrToHclTerraform(struct?: RegistrySpecAcrOutputReference | RegistrySpecAcr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_prefix: {
      value: cdktf.stringToHclTerraform(struct!.repositoryPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RegistrySpecAcrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RegistrySpecAcr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._repositoryPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryPrefix = this._repositoryPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegistrySpecAcr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._domain = undefined;
      this._repositoryPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._domain = value.domain;
      this._repositoryPrefix = value.repositoryPrefix;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // repository_prefix - computed: false, optional: true, required: false
  private _repositoryPrefix?: string; 
  public get repositoryPrefix() {
    return this.getStringAttribute('repository_prefix');
  }
  public set repositoryPrefix(value: string) {
    this._repositoryPrefix = value;
  }
  public resetRepositoryPrefix() {
    this._repositoryPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPrefixInput() {
    return this._repositoryPrefix;
  }
}
export interface RegistrySpecBintray {
  /**
  * The Bintray domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#domain Registry#domain}
  */
  readonly domain: string;
  /**
  * See the [docs](https://codefresh.io/docs/docs/integrations/docker-registries/#using-an-optional-repository-prefix).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#repository_prefix Registry#repository_prefix}
  */
  readonly repositoryPrefix?: string;
  /**
  * The Bintray token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#token Registry#token}
  */
  readonly token: string;
  /**
  * The Bintray username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#username Registry#username}
  */
  readonly username: string;
}

export function registrySpecBintrayToTerraform(struct?: RegistrySpecBintrayOutputReference | RegistrySpecBintray): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    repository_prefix: cdktf.stringToTerraform(struct!.repositoryPrefix),
    token: cdktf.stringToTerraform(struct!.token),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function registrySpecBintrayToHclTerraform(struct?: RegistrySpecBintrayOutputReference | RegistrySpecBintray): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_prefix: {
      value: cdktf.stringToHclTerraform(struct!.repositoryPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
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

export class RegistrySpecBintrayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RegistrySpecBintray | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._repositoryPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryPrefix = this._repositoryPrefix;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegistrySpecBintray | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
      this._repositoryPrefix = undefined;
      this._token = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
      this._repositoryPrefix = value.repositoryPrefix;
      this._token = value.token;
      this._username = value.username;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // repository_prefix - computed: false, optional: true, required: false
  private _repositoryPrefix?: string; 
  public get repositoryPrefix() {
    return this.getStringAttribute('repository_prefix');
  }
  public set repositoryPrefix(value: string) {
    this._repositoryPrefix = value;
  }
  public resetRepositoryPrefix() {
    this._repositoryPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPrefixInput() {
    return this._repositoryPrefix;
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
export interface RegistrySpecDockerhub {
  /**
  * The DockerHub password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#password Registry#password}
  */
  readonly password: string;
  /**
  * The DockerHub username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#username Registry#username}
  */
  readonly username: string;
}

export function registrySpecDockerhubToTerraform(struct?: RegistrySpecDockerhubOutputReference | RegistrySpecDockerhub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function registrySpecDockerhubToHclTerraform(struct?: RegistrySpecDockerhubOutputReference | RegistrySpecDockerhub): any {
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

export class RegistrySpecDockerhubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RegistrySpecDockerhub | undefined {
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

  public set internalValue(value: RegistrySpecDockerhub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface RegistrySpecEcr {
  /**
  * The AWS access key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#access_key_id Registry#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * The AWS region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#region Registry#region}
  */
  readonly region: string;
  /**
  * See the [docs](https://codefresh.io/docs/docs/integrations/docker-registries/#using-an-optional-repository-prefix).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#repository_prefix Registry#repository_prefix}
  */
  readonly repositoryPrefix?: string;
  /**
  * The AWS secret access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#secret_access_key Registry#secret_access_key}
  */
  readonly secretAccessKey: string;
}

export function registrySpecEcrToTerraform(struct?: RegistrySpecEcrOutputReference | RegistrySpecEcr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    region: cdktf.stringToTerraform(struct!.region),
    repository_prefix: cdktf.stringToTerraform(struct!.repositoryPrefix),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function registrySpecEcrToHclTerraform(struct?: RegistrySpecEcrOutputReference | RegistrySpecEcr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_prefix: {
      value: cdktf.stringToHclTerraform(struct!.repositoryPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RegistrySpecEcrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RegistrySpecEcr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._repositoryPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryPrefix = this._repositoryPrefix;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegistrySpecEcr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._region = undefined;
      this._repositoryPrefix = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._region = value.region;
      this._repositoryPrefix = value.repositoryPrefix;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // repository_prefix - computed: false, optional: true, required: false
  private _repositoryPrefix?: string; 
  public get repositoryPrefix() {
    return this.getStringAttribute('repository_prefix');
  }
  public set repositoryPrefix(value: string) {
    this._repositoryPrefix = value;
  }
  public resetRepositoryPrefix() {
    this._repositoryPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPrefixInput() {
    return this._repositoryPrefix;
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface RegistrySpecGar {
  /**
  * The serviceaccount json file contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#keyfile Registry#keyfile}
  */
  readonly keyfile: string;
  /**
  * The GAR location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#location Registry#location}
  */
  readonly location: string;
  /**
  * See the [docs](https://codefresh.io/docs/docs/integrations/docker-registries/#using-an-optional-repository-prefix).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#repository_prefix Registry#repository_prefix}
  */
  readonly repositoryPrefix?: string;
}

export function registrySpecGarToTerraform(struct?: RegistrySpecGarOutputReference | RegistrySpecGar): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keyfile: cdktf.stringToTerraform(struct!.keyfile),
    location: cdktf.stringToTerraform(struct!.location),
    repository_prefix: cdktf.stringToTerraform(struct!.repositoryPrefix),
  }
}


export function registrySpecGarToHclTerraform(struct?: RegistrySpecGarOutputReference | RegistrySpecGar): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keyfile: {
      value: cdktf.stringToHclTerraform(struct!.keyfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_prefix: {
      value: cdktf.stringToHclTerraform(struct!.repositoryPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RegistrySpecGarOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RegistrySpecGar | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyfile = this._keyfile;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._repositoryPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryPrefix = this._repositoryPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegistrySpecGar | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyfile = undefined;
      this._location = undefined;
      this._repositoryPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyfile = value.keyfile;
      this._location = value.location;
      this._repositoryPrefix = value.repositoryPrefix;
    }
  }

  // keyfile - computed: false, optional: false, required: true
  private _keyfile?: string; 
  public get keyfile() {
    return this.getStringAttribute('keyfile');
  }
  public set keyfile(value: string) {
    this._keyfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyfileInput() {
    return this._keyfile;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // repository_prefix - computed: false, optional: true, required: false
  private _repositoryPrefix?: string; 
  public get repositoryPrefix() {
    return this.getStringAttribute('repository_prefix');
  }
  public set repositoryPrefix(value: string) {
    this._repositoryPrefix = value;
  }
  public resetRepositoryPrefix() {
    this._repositoryPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPrefixInput() {
    return this._repositoryPrefix;
  }
}
export interface RegistrySpecGcr {
  /**
  * The GCR registry domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#domain Registry#domain}
  */
  readonly domain: string;
  /**
  * The serviceaccount json file contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#keyfile Registry#keyfile}
  */
  readonly keyfile: string;
  /**
  * See the [docs](https://codefresh.io/docs/docs/integrations/docker-registries/#using-an-optional-repository-prefix).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#repository_prefix Registry#repository_prefix}
  */
  readonly repositoryPrefix?: string;
}

export function registrySpecGcrToTerraform(struct?: RegistrySpecGcrOutputReference | RegistrySpecGcr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    keyfile: cdktf.stringToTerraform(struct!.keyfile),
    repository_prefix: cdktf.stringToTerraform(struct!.repositoryPrefix),
  }
}


export function registrySpecGcrToHclTerraform(struct?: RegistrySpecGcrOutputReference | RegistrySpecGcr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keyfile: {
      value: cdktf.stringToHclTerraform(struct!.keyfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_prefix: {
      value: cdktf.stringToHclTerraform(struct!.repositoryPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RegistrySpecGcrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RegistrySpecGcr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._keyfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyfile = this._keyfile;
    }
    if (this._repositoryPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryPrefix = this._repositoryPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegistrySpecGcr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
      this._keyfile = undefined;
      this._repositoryPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
      this._keyfile = value.keyfile;
      this._repositoryPrefix = value.repositoryPrefix;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // keyfile - computed: false, optional: false, required: true
  private _keyfile?: string; 
  public get keyfile() {
    return this.getStringAttribute('keyfile');
  }
  public set keyfile(value: string) {
    this._keyfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyfileInput() {
    return this._keyfile;
  }

  // repository_prefix - computed: false, optional: true, required: false
  private _repositoryPrefix?: string; 
  public get repositoryPrefix() {
    return this.getStringAttribute('repository_prefix');
  }
  public set repositoryPrefix(value: string) {
    this._repositoryPrefix = value;
  }
  public resetRepositoryPrefix() {
    this._repositoryPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPrefixInput() {
    return this._repositoryPrefix;
  }
}
export interface RegistrySpecOther {
  /**
  * See the [docs](https://codefresh.io/docs/docs/administration/behind-the-firewall/#accessing-an-internal-docker-registry).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#behind_firewall Registry#behind_firewall}
  */
  readonly behindFirewall?: boolean | cdktf.IResolvable;
  /**
  * The domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#domain Registry#domain}
  */
  readonly domain: string;
  /**
  * The password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#password Registry#password}
  */
  readonly password: string;
  /**
  * See the [docs](https://codefresh.io/docs/docs/integrations/docker-registries/#using-an-optional-repository-prefix).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#repository_prefix Registry#repository_prefix}
  */
  readonly repositoryPrefix?: string;
  /**
  * The username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#username Registry#username}
  */
  readonly username: string;
}

export function registrySpecOtherToTerraform(struct?: RegistrySpecOtherOutputReference | RegistrySpecOther): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behind_firewall: cdktf.booleanToTerraform(struct!.behindFirewall),
    domain: cdktf.stringToTerraform(struct!.domain),
    password: cdktf.stringToTerraform(struct!.password),
    repository_prefix: cdktf.stringToTerraform(struct!.repositoryPrefix),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function registrySpecOtherToHclTerraform(struct?: RegistrySpecOtherOutputReference | RegistrySpecOther): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behind_firewall: {
      value: cdktf.booleanToHclTerraform(struct!.behindFirewall),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
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
    repository_prefix: {
      value: cdktf.stringToHclTerraform(struct!.repositoryPrefix),
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

export class RegistrySpecOtherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RegistrySpecOther | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behindFirewall !== undefined) {
      hasAnyValues = true;
      internalValueResult.behindFirewall = this._behindFirewall;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._repositoryPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryPrefix = this._repositoryPrefix;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegistrySpecOther | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._behindFirewall = undefined;
      this._domain = undefined;
      this._password = undefined;
      this._repositoryPrefix = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._behindFirewall = value.behindFirewall;
      this._domain = value.domain;
      this._password = value.password;
      this._repositoryPrefix = value.repositoryPrefix;
      this._username = value.username;
    }
  }

  // behind_firewall - computed: false, optional: true, required: false
  private _behindFirewall?: boolean | cdktf.IResolvable; 
  public get behindFirewall() {
    return this.getBooleanAttribute('behind_firewall');
  }
  public set behindFirewall(value: boolean | cdktf.IResolvable) {
    this._behindFirewall = value;
  }
  public resetBehindFirewall() {
    this._behindFirewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behindFirewallInput() {
    return this._behindFirewall;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // repository_prefix - computed: false, optional: true, required: false
  private _repositoryPrefix?: string; 
  public get repositoryPrefix() {
    return this.getStringAttribute('repository_prefix');
  }
  public set repositoryPrefix(value: string) {
    this._repositoryPrefix = value;
  }
  public resetRepositoryPrefix() {
    this._repositoryPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPrefixInput() {
    return this._repositoryPrefix;
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
export interface RegistrySpec {
  /**
  * acr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#acr Registry#acr}
  */
  readonly acr?: RegistrySpecAcr;
  /**
  * bintray block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#bintray Registry#bintray}
  */
  readonly bintray?: RegistrySpecBintray;
  /**
  * dockerhub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#dockerhub Registry#dockerhub}
  */
  readonly dockerhub?: RegistrySpecDockerhub;
  /**
  * ecr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#ecr Registry#ecr}
  */
  readonly ecr?: RegistrySpecEcr;
  /**
  * gar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#gar Registry#gar}
  */
  readonly gar?: RegistrySpecGar;
  /**
  * gcr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#gcr Registry#gcr}
  */
  readonly gcr?: RegistrySpecGcr;
  /**
  * other block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#other Registry#other}
  */
  readonly other?: RegistrySpecOther;
}

export function registrySpecToTerraform(struct?: RegistrySpecOutputReference | RegistrySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acr: registrySpecAcrToTerraform(struct!.acr),
    bintray: registrySpecBintrayToTerraform(struct!.bintray),
    dockerhub: registrySpecDockerhubToTerraform(struct!.dockerhub),
    ecr: registrySpecEcrToTerraform(struct!.ecr),
    gar: registrySpecGarToTerraform(struct!.gar),
    gcr: registrySpecGcrToTerraform(struct!.gcr),
    other: registrySpecOtherToTerraform(struct!.other),
  }
}


export function registrySpecToHclTerraform(struct?: RegistrySpecOutputReference | RegistrySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acr: {
      value: registrySpecAcrToHclTerraform(struct!.acr),
      isBlock: true,
      type: "list",
      storageClassType: "RegistrySpecAcrList",
    },
    bintray: {
      value: registrySpecBintrayToHclTerraform(struct!.bintray),
      isBlock: true,
      type: "list",
      storageClassType: "RegistrySpecBintrayList",
    },
    dockerhub: {
      value: registrySpecDockerhubToHclTerraform(struct!.dockerhub),
      isBlock: true,
      type: "list",
      storageClassType: "RegistrySpecDockerhubList",
    },
    ecr: {
      value: registrySpecEcrToHclTerraform(struct!.ecr),
      isBlock: true,
      type: "list",
      storageClassType: "RegistrySpecEcrList",
    },
    gar: {
      value: registrySpecGarToHclTerraform(struct!.gar),
      isBlock: true,
      type: "list",
      storageClassType: "RegistrySpecGarList",
    },
    gcr: {
      value: registrySpecGcrToHclTerraform(struct!.gcr),
      isBlock: true,
      type: "list",
      storageClassType: "RegistrySpecGcrList",
    },
    other: {
      value: registrySpecOtherToHclTerraform(struct!.other),
      isBlock: true,
      type: "list",
      storageClassType: "RegistrySpecOtherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RegistrySpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RegistrySpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acr = this._acr?.internalValue;
    }
    if (this._bintray?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bintray = this._bintray?.internalValue;
    }
    if (this._dockerhub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerhub = this._dockerhub?.internalValue;
    }
    if (this._ecr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecr = this._ecr?.internalValue;
    }
    if (this._gar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gar = this._gar?.internalValue;
    }
    if (this._gcr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcr = this._gcr?.internalValue;
    }
    if (this._other?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.other = this._other?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegistrySpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acr.internalValue = undefined;
      this._bintray.internalValue = undefined;
      this._dockerhub.internalValue = undefined;
      this._ecr.internalValue = undefined;
      this._gar.internalValue = undefined;
      this._gcr.internalValue = undefined;
      this._other.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acr.internalValue = value.acr;
      this._bintray.internalValue = value.bintray;
      this._dockerhub.internalValue = value.dockerhub;
      this._ecr.internalValue = value.ecr;
      this._gar.internalValue = value.gar;
      this._gcr.internalValue = value.gcr;
      this._other.internalValue = value.other;
    }
  }

  // acr - computed: false, optional: true, required: false
  private _acr = new RegistrySpecAcrOutputReference(this, "acr");
  public get acr() {
    return this._acr;
  }
  public putAcr(value: RegistrySpecAcr) {
    this._acr.internalValue = value;
  }
  public resetAcr() {
    this._acr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrInput() {
    return this._acr.internalValue;
  }

  // bintray - computed: false, optional: true, required: false
  private _bintray = new RegistrySpecBintrayOutputReference(this, "bintray");
  public get bintray() {
    return this._bintray;
  }
  public putBintray(value: RegistrySpecBintray) {
    this._bintray.internalValue = value;
  }
  public resetBintray() {
    this._bintray.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bintrayInput() {
    return this._bintray.internalValue;
  }

  // dockerhub - computed: false, optional: true, required: false
  private _dockerhub = new RegistrySpecDockerhubOutputReference(this, "dockerhub");
  public get dockerhub() {
    return this._dockerhub;
  }
  public putDockerhub(value: RegistrySpecDockerhub) {
    this._dockerhub.internalValue = value;
  }
  public resetDockerhub() {
    this._dockerhub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerhubInput() {
    return this._dockerhub.internalValue;
  }

  // ecr - computed: false, optional: true, required: false
  private _ecr = new RegistrySpecEcrOutputReference(this, "ecr");
  public get ecr() {
    return this._ecr;
  }
  public putEcr(value: RegistrySpecEcr) {
    this._ecr.internalValue = value;
  }
  public resetEcr() {
    this._ecr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrInput() {
    return this._ecr.internalValue;
  }

  // gar - computed: false, optional: true, required: false
  private _gar = new RegistrySpecGarOutputReference(this, "gar");
  public get gar() {
    return this._gar;
  }
  public putGar(value: RegistrySpecGar) {
    this._gar.internalValue = value;
  }
  public resetGar() {
    this._gar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get garInput() {
    return this._gar.internalValue;
  }

  // gcr - computed: false, optional: true, required: false
  private _gcr = new RegistrySpecGcrOutputReference(this, "gcr");
  public get gcr() {
    return this._gcr;
  }
  public putGcr(value: RegistrySpecGcr) {
    this._gcr.internalValue = value;
  }
  public resetGcr() {
    this._gcr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcrInput() {
    return this._gcr.internalValue;
  }

  // other - computed: false, optional: true, required: false
  private _other = new RegistrySpecOtherOutputReference(this, "other");
  public get other() {
    return this._other;
  }
  public putOther(value: RegistrySpecOther) {
    this._other.internalValue = value;
  }
  public resetOther() {
    this._other.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherInput() {
    return this._other.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry codefresh_registry}
*/
export class Registry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "codefresh_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Registry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Registry to import
  * @param importFromId The id of the existing Registry that should be imported. Refer to the {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Registry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "codefresh_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/registry codefresh_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RegistryConfig
  */
  public constructor(scope: Construct, id: string, config: RegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'codefresh_registry',
      terraformGeneratorMetadata: {
        providerName: 'codefresh',
        providerVersion: '1.2.0',
        providerVersionConstraint: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._default = config.default;
    this._fallbackRegistry = config.fallbackRegistry;
    this._id = config.id;
    this._name = config.name;
    this._primary = config.primary;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // fallback_registry - computed: false, optional: true, required: false
  private _fallbackRegistry?: string; 
  public get fallbackRegistry() {
    return this.getStringAttribute('fallback_registry');
  }
  public set fallbackRegistry(value: string) {
    this._fallbackRegistry = value;
  }
  public resetFallbackRegistry() {
    this._fallbackRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackRegistryInput() {
    return this._fallbackRegistry;
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

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new RegistrySpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: RegistrySpec) {
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
      default: cdktf.booleanToTerraform(this._default),
      fallback_registry: cdktf.stringToTerraform(this._fallbackRegistry),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      primary: cdktf.booleanToTerraform(this._primary),
      spec: registrySpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fallback_registry: {
        value: cdktf.stringToHclTerraform(this._fallbackRegistry),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary: {
        value: cdktf.booleanToHclTerraform(this._primary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spec: {
        value: registrySpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RegistrySpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
