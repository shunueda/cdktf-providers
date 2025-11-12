// https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface E5EFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Functions application assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#application E5EFunction#application}
  */
  readonly application: string;
  /**
  * Function entrypoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#entrypoint E5EFunction#entrypoint}
  */
  readonly entrypoint: string;
  /**
  * Keep-alive time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#keep_alive E5EFunction#keep_alive}
  */
  readonly keepAlive?: number;
  /**
  * Function name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#name E5EFunction#name}
  */
  readonly name: string;
  /**
  * Number of parallel executions of the function there can be.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#quota_concurrency E5EFunction#quota_concurrency}
  */
  readonly quotaConcurrency?: number;
  /**
  * CPU time in percent the e5e platform will grant your function on execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#quota_cpu E5EFunction#quota_cpu}
  */
  readonly quotaCpu?: number;
  /**
  * Memory in MiB e5e will grant your function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#quota_memory E5EFunction#quota_memory}
  */
  readonly quotaMemory?: number;
  /**
  * Space in MiB e5e will grant your function to write any sort of files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#quota_storage E5EFunction#quota_storage}
  */
  readonly quotaStorage?: number;
  /**
  * Time in seconds your function can take to execute before it is killed by the e5e platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#quota_timeout E5EFunction#quota_timeout}
  */
  readonly quotaTimeout?: number;
  /**
  * Revision is an optional attribute which can be used to trigger a new deployment. The value can be any arbitrary string (e.g. `COMMIT_SHA` or md5 hash of the code binary passed in via variables).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#revision E5EFunction#revision}
  */
  readonly revision?: string;
  /**
  * Function runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#runtime E5EFunction#runtime}
  */
  readonly runtime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#worker_type E5EFunction#worker_type}
  */
  readonly workerType?: string;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#env E5EFunction#env}
  */
  readonly env?: E5EFunctionEnv[] | cdktf.IResolvable;
  /**
  * hostname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#hostname E5EFunction#hostname}
  */
  readonly hostname?: E5EFunctionHostname[] | cdktf.IResolvable;
  /**
  * storage_backend_archive block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#storage_backend_archive E5EFunction#storage_backend_archive}
  */
  readonly storageBackendArchive?: E5EFunctionStorageBackendArchive;
  /**
  * storage_backend_git block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#storage_backend_git E5EFunction#storage_backend_git}
  */
  readonly storageBackendGit?: E5EFunctionStorageBackendGit;
  /**
  * storage_backend_s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#storage_backend_s3 E5EFunction#storage_backend_s3}
  */
  readonly storageBackendS3?: E5EFunctionStorageBackendS3;
}
export interface E5EFunctionEnv {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#name E5EFunction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#secret E5EFunction#secret}
  */
  readonly secret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#value E5EFunction#value}
  */
  readonly value: string;
}

export function e5EFunctionEnvToTerraform(struct?: E5EFunctionEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    secret: cdktf.booleanToTerraform(struct!.secret),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function e5EFunctionEnvToHclTerraform(struct?: E5EFunctionEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.booleanToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class E5EFunctionEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): E5EFunctionEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: E5EFunctionEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._secret = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._secret = value.secret;
      this._value = value.value;
    }
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

  // secret - computed: false, optional: true, required: false
  private _secret?: boolean | cdktf.IResolvable; 
  public get secret() {
    return this.getBooleanAttribute('secret');
  }
  public set secret(value: boolean | cdktf.IResolvable) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
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

export class E5EFunctionEnvList extends cdktf.ComplexList {
  public internalValue? : E5EFunctionEnv[] | cdktf.IResolvable

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
  public get(index: number): E5EFunctionEnvOutputReference {
    return new E5EFunctionEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface E5EFunctionHostname {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#hostname E5EFunction#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#ip E5EFunction#ip}
  */
  readonly ip: string;
}

export function e5EFunctionHostnameToTerraform(struct?: E5EFunctionHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function e5EFunctionHostnameToHclTerraform(struct?: E5EFunctionHostname | cdktf.IResolvable): any {
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
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class E5EFunctionHostnameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): E5EFunctionHostname | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: E5EFunctionHostname | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._ip = value.ip;
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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class E5EFunctionHostnameList extends cdktf.ComplexList {
  public internalValue? : E5EFunctionHostname[] | cdktf.IResolvable

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
  public get(index: number): E5EFunctionHostnameOutputReference {
    return new E5EFunctionHostnameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface E5EFunctionStorageBackendArchive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#content E5EFunction#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#name E5EFunction#name}
  */
  readonly name: string;
}

export function e5EFunctionStorageBackendArchiveToTerraform(struct?: E5EFunctionStorageBackendArchiveOutputReference | E5EFunctionStorageBackendArchive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function e5EFunctionStorageBackendArchiveToHclTerraform(struct?: E5EFunctionStorageBackendArchiveOutputReference | E5EFunctionStorageBackendArchive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class E5EFunctionStorageBackendArchiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): E5EFunctionStorageBackendArchive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: E5EFunctionStorageBackendArchive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._name = value.name;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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
}
export interface E5EFunctionStorageBackendGit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#branch E5EFunction#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#password E5EFunction#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#private_key E5EFunction#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#url E5EFunction#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#username E5EFunction#username}
  */
  readonly username?: string;
}

export function e5EFunctionStorageBackendGitToTerraform(struct?: E5EFunctionStorageBackendGitOutputReference | E5EFunctionStorageBackendGit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    password: cdktf.stringToTerraform(struct!.password),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function e5EFunctionStorageBackendGitToHclTerraform(struct?: E5EFunctionStorageBackendGitOutputReference | E5EFunctionStorageBackendGit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
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
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
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

export class E5EFunctionStorageBackendGitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): E5EFunctionStorageBackendGit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: E5EFunctionStorageBackendGit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._password = undefined;
      this._privateKey = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._password = value.password;
      this._privateKey = value.privateKey;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // password - computed: false, optional: true, required: false
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

  // private_key - computed: false, optional: true, required: false
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface E5EFunctionStorageBackendS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#access_key E5EFunction#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#bucket_name E5EFunction#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#endpoint E5EFunction#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#object_path E5EFunction#object_path}
  */
  readonly objectPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#secret_key E5EFunction#secret_key}
  */
  readonly secretKey?: string;
}

export function e5EFunctionStorageBackendS3ToTerraform(struct?: E5EFunctionStorageBackendS3OutputReference | E5EFunctionStorageBackendS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    object_path: cdktf.stringToTerraform(struct!.objectPath),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function e5EFunctionStorageBackendS3ToHclTerraform(struct?: E5EFunctionStorageBackendS3OutputReference | E5EFunctionStorageBackendS3): any {
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
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_path: {
      value: cdktf.stringToHclTerraform(struct!.objectPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class E5EFunctionStorageBackendS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): E5EFunctionStorageBackendS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._objectPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectPath = this._objectPath;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: E5EFunctionStorageBackendS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._bucketName = undefined;
      this._endpoint = undefined;
      this._objectPath = undefined;
      this._secretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._bucketName = value.bucketName;
      this._endpoint = value.endpoint;
      this._objectPath = value.objectPath;
      this._secretKey = value.secretKey;
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

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // object_path - computed: false, optional: true, required: false
  private _objectPath?: string; 
  public get objectPath() {
    return this.getStringAttribute('object_path');
  }
  public set objectPath(value: string) {
    this._objectPath = value;
  }
  public resetObjectPath() {
    this._objectPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectPathInput() {
    return this._objectPath;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function anxcloud_e5e_function}
*/
export class E5EFunction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "anxcloud_e5e_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a E5EFunction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the E5EFunction to import
  * @param importFromId The id of the existing E5EFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the E5EFunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "anxcloud_e5e_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/e5e_function anxcloud_e5e_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options E5EFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: E5EFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'anxcloud_e5e_function',
      terraformGeneratorMetadata: {
        providerName: 'anxcloud',
        providerVersion: '0.7.4',
        providerVersionConstraint: '0.7.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._application = config.application;
    this._entrypoint = config.entrypoint;
    this._keepAlive = config.keepAlive;
    this._name = config.name;
    this._quotaConcurrency = config.quotaConcurrency;
    this._quotaCpu = config.quotaCpu;
    this._quotaMemory = config.quotaMemory;
    this._quotaStorage = config.quotaStorage;
    this._quotaTimeout = config.quotaTimeout;
    this._revision = config.revision;
    this._runtime = config.runtime;
    this._workerType = config.workerType;
    this._env.internalValue = config.env;
    this._hostname.internalValue = config.hostname;
    this._storageBackendArchive.internalValue = config.storageBackendArchive;
    this._storageBackendGit.internalValue = config.storageBackendGit;
    this._storageBackendS3.internalValue = config.storageBackendS3;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application - computed: false, optional: false, required: true
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // entrypoint - computed: false, optional: false, required: true
  private _entrypoint?: string; 
  public get entrypoint() {
    return this.getStringAttribute('entrypoint');
  }
  public set entrypoint(value: string) {
    this._entrypoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keep_alive - computed: true, optional: true, required: false
  private _keepAlive?: number; 
  public get keepAlive() {
    return this.getNumberAttribute('keep_alive');
  }
  public set keepAlive(value: number) {
    this._keepAlive = value;
  }
  public resetKeepAlive() {
    this._keepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveInput() {
    return this._keepAlive;
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

  // quota_concurrency - computed: true, optional: true, required: false
  private _quotaConcurrency?: number; 
  public get quotaConcurrency() {
    return this.getNumberAttribute('quota_concurrency');
  }
  public set quotaConcurrency(value: number) {
    this._quotaConcurrency = value;
  }
  public resetQuotaConcurrency() {
    this._quotaConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaConcurrencyInput() {
    return this._quotaConcurrency;
  }

  // quota_cpu - computed: true, optional: true, required: false
  private _quotaCpu?: number; 
  public get quotaCpu() {
    return this.getNumberAttribute('quota_cpu');
  }
  public set quotaCpu(value: number) {
    this._quotaCpu = value;
  }
  public resetQuotaCpu() {
    this._quotaCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaCpuInput() {
    return this._quotaCpu;
  }

  // quota_memory - computed: true, optional: true, required: false
  private _quotaMemory?: number; 
  public get quotaMemory() {
    return this.getNumberAttribute('quota_memory');
  }
  public set quotaMemory(value: number) {
    this._quotaMemory = value;
  }
  public resetQuotaMemory() {
    this._quotaMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaMemoryInput() {
    return this._quotaMemory;
  }

  // quota_storage - computed: true, optional: true, required: false
  private _quotaStorage?: number; 
  public get quotaStorage() {
    return this.getNumberAttribute('quota_storage');
  }
  public set quotaStorage(value: number) {
    this._quotaStorage = value;
  }
  public resetQuotaStorage() {
    this._quotaStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaStorageInput() {
    return this._quotaStorage;
  }

  // quota_timeout - computed: true, optional: true, required: false
  private _quotaTimeout?: number; 
  public get quotaTimeout() {
    return this.getNumberAttribute('quota_timeout');
  }
  public set quotaTimeout(value: number) {
    this._quotaTimeout = value;
  }
  public resetQuotaTimeout() {
    this._quotaTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaTimeoutInput() {
    return this._quotaTimeout;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // runtime - computed: false, optional: false, required: true
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // worker_type - computed: true, optional: true, required: false
  private _workerType?: string; 
  public get workerType() {
    return this.getStringAttribute('worker_type');
  }
  public set workerType(value: string) {
    this._workerType = value;
  }
  public resetWorkerType() {
    this._workerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerTypeInput() {
    return this._workerType;
  }

  // env - computed: false, optional: true, required: false
  private _env = new E5EFunctionEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: E5EFunctionEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname = new E5EFunctionHostnameList(this, "hostname", false);
  public get hostname() {
    return this._hostname;
  }
  public putHostname(value: E5EFunctionHostname[] | cdktf.IResolvable) {
    this._hostname.internalValue = value;
  }
  public resetHostname() {
    this._hostname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname.internalValue;
  }

  // storage_backend_archive - computed: false, optional: true, required: false
  private _storageBackendArchive = new E5EFunctionStorageBackendArchiveOutputReference(this, "storage_backend_archive");
  public get storageBackendArchive() {
    return this._storageBackendArchive;
  }
  public putStorageBackendArchive(value: E5EFunctionStorageBackendArchive) {
    this._storageBackendArchive.internalValue = value;
  }
  public resetStorageBackendArchive() {
    this._storageBackendArchive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBackendArchiveInput() {
    return this._storageBackendArchive.internalValue;
  }

  // storage_backend_git - computed: false, optional: true, required: false
  private _storageBackendGit = new E5EFunctionStorageBackendGitOutputReference(this, "storage_backend_git");
  public get storageBackendGit() {
    return this._storageBackendGit;
  }
  public putStorageBackendGit(value: E5EFunctionStorageBackendGit) {
    this._storageBackendGit.internalValue = value;
  }
  public resetStorageBackendGit() {
    this._storageBackendGit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBackendGitInput() {
    return this._storageBackendGit.internalValue;
  }

  // storage_backend_s3 - computed: false, optional: true, required: false
  private _storageBackendS3 = new E5EFunctionStorageBackendS3OutputReference(this, "storage_backend_s3");
  public get storageBackendS3() {
    return this._storageBackendS3;
  }
  public putStorageBackendS3(value: E5EFunctionStorageBackendS3) {
    this._storageBackendS3.internalValue = value;
  }
  public resetStorageBackendS3() {
    this._storageBackendS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBackendS3Input() {
    return this._storageBackendS3.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application: cdktf.stringToTerraform(this._application),
      entrypoint: cdktf.stringToTerraform(this._entrypoint),
      keep_alive: cdktf.numberToTerraform(this._keepAlive),
      name: cdktf.stringToTerraform(this._name),
      quota_concurrency: cdktf.numberToTerraform(this._quotaConcurrency),
      quota_cpu: cdktf.numberToTerraform(this._quotaCpu),
      quota_memory: cdktf.numberToTerraform(this._quotaMemory),
      quota_storage: cdktf.numberToTerraform(this._quotaStorage),
      quota_timeout: cdktf.numberToTerraform(this._quotaTimeout),
      revision: cdktf.stringToTerraform(this._revision),
      runtime: cdktf.stringToTerraform(this._runtime),
      worker_type: cdktf.stringToTerraform(this._workerType),
      env: cdktf.listMapper(e5EFunctionEnvToTerraform, true)(this._env.internalValue),
      hostname: cdktf.listMapper(e5EFunctionHostnameToTerraform, true)(this._hostname.internalValue),
      storage_backend_archive: e5EFunctionStorageBackendArchiveToTerraform(this._storageBackendArchive.internalValue),
      storage_backend_git: e5EFunctionStorageBackendGitToTerraform(this._storageBackendGit.internalValue),
      storage_backend_s3: e5EFunctionStorageBackendS3ToTerraform(this._storageBackendS3.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application: {
        value: cdktf.stringToHclTerraform(this._application),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entrypoint: {
        value: cdktf.stringToHclTerraform(this._entrypoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_alive: {
        value: cdktf.numberToHclTerraform(this._keepAlive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota_concurrency: {
        value: cdktf.numberToHclTerraform(this._quotaConcurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quota_cpu: {
        value: cdktf.numberToHclTerraform(this._quotaCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quota_memory: {
        value: cdktf.numberToHclTerraform(this._quotaMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quota_storage: {
        value: cdktf.numberToHclTerraform(this._quotaStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quota_timeout: {
        value: cdktf.numberToHclTerraform(this._quotaTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      revision: {
        value: cdktf.stringToHclTerraform(this._revision),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime: {
        value: cdktf.stringToHclTerraform(this._runtime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_type: {
        value: cdktf.stringToHclTerraform(this._workerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env: {
        value: cdktf.listMapperHcl(e5EFunctionEnvToHclTerraform, true)(this._env.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "E5EFunctionEnvList",
      },
      hostname: {
        value: cdktf.listMapperHcl(e5EFunctionHostnameToHclTerraform, true)(this._hostname.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "E5EFunctionHostnameList",
      },
      storage_backend_archive: {
        value: e5EFunctionStorageBackendArchiveToHclTerraform(this._storageBackendArchive.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "E5EFunctionStorageBackendArchiveList",
      },
      storage_backend_git: {
        value: e5EFunctionStorageBackendGitToHclTerraform(this._storageBackendGit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "E5EFunctionStorageBackendGitList",
      },
      storage_backend_s3: {
        value: e5EFunctionStorageBackendS3ToHclTerraform(this._storageBackendS3.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "E5EFunctionStorageBackendS3List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
