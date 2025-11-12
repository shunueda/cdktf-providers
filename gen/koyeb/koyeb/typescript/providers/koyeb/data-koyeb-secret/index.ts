// https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKoyebSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * The secret name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#name DataKoyebSecret#name}
  */
  readonly name: string;
  /**
  * The secret type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#type DataKoyebSecret#type}
  */
  readonly type?: string;
  /**
  * The secret value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#value DataKoyebSecret#value}
  */
  readonly value?: string;
  /**
  * azure_container_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#azure_container_registry DataKoyebSecret#azure_container_registry}
  */
  readonly azureContainerRegistry?: DataKoyebSecretAzureContainerRegistry;
  /**
  * digital_ocean_container_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#digital_ocean_container_registry DataKoyebSecret#digital_ocean_container_registry}
  */
  readonly digitalOceanContainerRegistry?: DataKoyebSecretDigitalOceanContainerRegistry;
  /**
  * docker_hub_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#docker_hub_registry DataKoyebSecret#docker_hub_registry}
  */
  readonly dockerHubRegistry?: DataKoyebSecretDockerHubRegistry;
  /**
  * github_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#github_registry DataKoyebSecret#github_registry}
  */
  readonly githubRegistry?: DataKoyebSecretGithubRegistry;
  /**
  * gitlab_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#gitlab_registry DataKoyebSecret#gitlab_registry}
  */
  readonly gitlabRegistry?: DataKoyebSecretGitlabRegistry;
  /**
  * private_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#private_registry DataKoyebSecret#private_registry}
  */
  readonly privateRegistry?: DataKoyebSecretPrivateRegistry;
}
export interface DataKoyebSecretAzureContainerRegistry {
  /**
  * The registry password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#password DataKoyebSecret#password}
  */
  readonly password: string;
  /**
  * The registry name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#registry_name DataKoyebSecret#registry_name}
  */
  readonly registryName: string;
  /**
  * The registry username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#username DataKoyebSecret#username}
  */
  readonly username: string;
}

export function dataKoyebSecretAzureContainerRegistryToTerraform(struct?: DataKoyebSecretAzureContainerRegistryOutputReference | DataKoyebSecretAzureContainerRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    registry_name: cdktf.stringToTerraform(struct!.registryName),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataKoyebSecretAzureContainerRegistryToHclTerraform(struct?: DataKoyebSecretAzureContainerRegistryOutputReference | DataKoyebSecretAzureContainerRegistry): any {
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
    registry_name: {
      value: cdktf.stringToHclTerraform(struct!.registryName),
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

export class DataKoyebSecretAzureContainerRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKoyebSecretAzureContainerRegistry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._registryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryName = this._registryName;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKoyebSecretAzureContainerRegistry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._registryName = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._registryName = value.registryName;
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

  // registry_name - computed: false, optional: false, required: true
  private _registryName?: string; 
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }
  public set registryName(value: string) {
    this._registryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryNameInput() {
    return this._registryName;
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
export interface DataKoyebSecretDigitalOceanContainerRegistry {
  /**
  * The registry password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#password DataKoyebSecret#password}
  */
  readonly password: string;
  /**
  * The registry username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#username DataKoyebSecret#username}
  */
  readonly username: string;
}

export function dataKoyebSecretDigitalOceanContainerRegistryToTerraform(struct?: DataKoyebSecretDigitalOceanContainerRegistryOutputReference | DataKoyebSecretDigitalOceanContainerRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataKoyebSecretDigitalOceanContainerRegistryToHclTerraform(struct?: DataKoyebSecretDigitalOceanContainerRegistryOutputReference | DataKoyebSecretDigitalOceanContainerRegistry): any {
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

export class DataKoyebSecretDigitalOceanContainerRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKoyebSecretDigitalOceanContainerRegistry | undefined {
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

  public set internalValue(value: DataKoyebSecretDigitalOceanContainerRegistry | undefined) {
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
export interface DataKoyebSecretDockerHubRegistry {
  /**
  * The registry password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#password DataKoyebSecret#password}
  */
  readonly password: string;
  /**
  * The registry username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#username DataKoyebSecret#username}
  */
  readonly username: string;
}

export function dataKoyebSecretDockerHubRegistryToTerraform(struct?: DataKoyebSecretDockerHubRegistryOutputReference | DataKoyebSecretDockerHubRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataKoyebSecretDockerHubRegistryToHclTerraform(struct?: DataKoyebSecretDockerHubRegistryOutputReference | DataKoyebSecretDockerHubRegistry): any {
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

export class DataKoyebSecretDockerHubRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKoyebSecretDockerHubRegistry | undefined {
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

  public set internalValue(value: DataKoyebSecretDockerHubRegistry | undefined) {
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
export interface DataKoyebSecretGithubRegistry {
  /**
  * The registry password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#password DataKoyebSecret#password}
  */
  readonly password: string;
  /**
  * The registry username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#username DataKoyebSecret#username}
  */
  readonly username: string;
}

export function dataKoyebSecretGithubRegistryToTerraform(struct?: DataKoyebSecretGithubRegistryOutputReference | DataKoyebSecretGithubRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataKoyebSecretGithubRegistryToHclTerraform(struct?: DataKoyebSecretGithubRegistryOutputReference | DataKoyebSecretGithubRegistry): any {
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

export class DataKoyebSecretGithubRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKoyebSecretGithubRegistry | undefined {
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

  public set internalValue(value: DataKoyebSecretGithubRegistry | undefined) {
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
export interface DataKoyebSecretGitlabRegistry {
  /**
  * The registry password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#password DataKoyebSecret#password}
  */
  readonly password: string;
  /**
  * The registry username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#username DataKoyebSecret#username}
  */
  readonly username: string;
}

export function dataKoyebSecretGitlabRegistryToTerraform(struct?: DataKoyebSecretGitlabRegistryOutputReference | DataKoyebSecretGitlabRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataKoyebSecretGitlabRegistryToHclTerraform(struct?: DataKoyebSecretGitlabRegistryOutputReference | DataKoyebSecretGitlabRegistry): any {
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

export class DataKoyebSecretGitlabRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKoyebSecretGitlabRegistry | undefined {
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

  public set internalValue(value: DataKoyebSecretGitlabRegistry | undefined) {
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
export interface DataKoyebSecretPrivateRegistry {
  /**
  * The registry password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#password DataKoyebSecret#password}
  */
  readonly password: string;
  /**
  * The registry URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#url DataKoyebSecret#url}
  */
  readonly url: string;
  /**
  * The registry username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#username DataKoyebSecret#username}
  */
  readonly username: string;
}

export function dataKoyebSecretPrivateRegistryToTerraform(struct?: DataKoyebSecretPrivateRegistryOutputReference | DataKoyebSecretPrivateRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataKoyebSecretPrivateRegistryToHclTerraform(struct?: DataKoyebSecretPrivateRegistryOutputReference | DataKoyebSecretPrivateRegistry): any {
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

export class DataKoyebSecretPrivateRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKoyebSecretPrivateRegistry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
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

  public set internalValue(value: DataKoyebSecretPrivateRegistry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._url = value.url;
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

/**
* Represents a {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret koyeb_secret}
*/
export class DataKoyebSecret extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "koyeb_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKoyebSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKoyebSecret to import
  * @param importFromId The id of the existing DataKoyebSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKoyebSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "koyeb_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/data-sources/secret koyeb_secret} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKoyebSecretConfig
  */
  public constructor(scope: Construct, id: string, config: DataKoyebSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'koyeb_secret',
      terraformGeneratorMetadata: {
        providerName: 'koyeb',
        providerVersion: '0.1.11',
        providerVersionConstraint: '0.1.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._type = config.type;
    this._value = config.value;
    this._azureContainerRegistry.internalValue = config.azureContainerRegistry;
    this._digitalOceanContainerRegistry.internalValue = config.digitalOceanContainerRegistry;
    this._dockerHubRegistry.internalValue = config.dockerHubRegistry;
    this._githubRegistry.internalValue = config.githubRegistry;
    this._gitlabRegistry.internalValue = config.gitlabRegistry;
    this._privateRegistry.internalValue = config.privateRegistry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // azure_container_registry - computed: false, optional: true, required: false
  private _azureContainerRegistry = new DataKoyebSecretAzureContainerRegistryOutputReference(this, "azure_container_registry");
  public get azureContainerRegistry() {
    return this._azureContainerRegistry;
  }
  public putAzureContainerRegistry(value: DataKoyebSecretAzureContainerRegistry) {
    this._azureContainerRegistry.internalValue = value;
  }
  public resetAzureContainerRegistry() {
    this._azureContainerRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureContainerRegistryInput() {
    return this._azureContainerRegistry.internalValue;
  }

  // digital_ocean_container_registry - computed: false, optional: true, required: false
  private _digitalOceanContainerRegistry = new DataKoyebSecretDigitalOceanContainerRegistryOutputReference(this, "digital_ocean_container_registry");
  public get digitalOceanContainerRegistry() {
    return this._digitalOceanContainerRegistry;
  }
  public putDigitalOceanContainerRegistry(value: DataKoyebSecretDigitalOceanContainerRegistry) {
    this._digitalOceanContainerRegistry.internalValue = value;
  }
  public resetDigitalOceanContainerRegistry() {
    this._digitalOceanContainerRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalOceanContainerRegistryInput() {
    return this._digitalOceanContainerRegistry.internalValue;
  }

  // docker_hub_registry - computed: false, optional: true, required: false
  private _dockerHubRegistry = new DataKoyebSecretDockerHubRegistryOutputReference(this, "docker_hub_registry");
  public get dockerHubRegistry() {
    return this._dockerHubRegistry;
  }
  public putDockerHubRegistry(value: DataKoyebSecretDockerHubRegistry) {
    this._dockerHubRegistry.internalValue = value;
  }
  public resetDockerHubRegistry() {
    this._dockerHubRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerHubRegistryInput() {
    return this._dockerHubRegistry.internalValue;
  }

  // github_registry - computed: false, optional: true, required: false
  private _githubRegistry = new DataKoyebSecretGithubRegistryOutputReference(this, "github_registry");
  public get githubRegistry() {
    return this._githubRegistry;
  }
  public putGithubRegistry(value: DataKoyebSecretGithubRegistry) {
    this._githubRegistry.internalValue = value;
  }
  public resetGithubRegistry() {
    this._githubRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubRegistryInput() {
    return this._githubRegistry.internalValue;
  }

  // gitlab_registry - computed: false, optional: true, required: false
  private _gitlabRegistry = new DataKoyebSecretGitlabRegistryOutputReference(this, "gitlab_registry");
  public get gitlabRegistry() {
    return this._gitlabRegistry;
  }
  public putGitlabRegistry(value: DataKoyebSecretGitlabRegistry) {
    this._gitlabRegistry.internalValue = value;
  }
  public resetGitlabRegistry() {
    this._gitlabRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabRegistryInput() {
    return this._gitlabRegistry.internalValue;
  }

  // private_registry - computed: false, optional: true, required: false
  private _privateRegistry = new DataKoyebSecretPrivateRegistryOutputReference(this, "private_registry");
  public get privateRegistry() {
    return this._privateRegistry;
  }
  public putPrivateRegistry(value: DataKoyebSecretPrivateRegistry) {
    this._privateRegistry.internalValue = value;
  }
  public resetPrivateRegistry() {
    this._privateRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateRegistryInput() {
    return this._privateRegistry.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
      azure_container_registry: dataKoyebSecretAzureContainerRegistryToTerraform(this._azureContainerRegistry.internalValue),
      digital_ocean_container_registry: dataKoyebSecretDigitalOceanContainerRegistryToTerraform(this._digitalOceanContainerRegistry.internalValue),
      docker_hub_registry: dataKoyebSecretDockerHubRegistryToTerraform(this._dockerHubRegistry.internalValue),
      github_registry: dataKoyebSecretGithubRegistryToTerraform(this._githubRegistry.internalValue),
      gitlab_registry: dataKoyebSecretGitlabRegistryToTerraform(this._gitlabRegistry.internalValue),
      private_registry: dataKoyebSecretPrivateRegistryToTerraform(this._privateRegistry.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_container_registry: {
        value: dataKoyebSecretAzureContainerRegistryToHclTerraform(this._azureContainerRegistry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataKoyebSecretAzureContainerRegistryList",
      },
      digital_ocean_container_registry: {
        value: dataKoyebSecretDigitalOceanContainerRegistryToHclTerraform(this._digitalOceanContainerRegistry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataKoyebSecretDigitalOceanContainerRegistryList",
      },
      docker_hub_registry: {
        value: dataKoyebSecretDockerHubRegistryToHclTerraform(this._dockerHubRegistry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataKoyebSecretDockerHubRegistryList",
      },
      github_registry: {
        value: dataKoyebSecretGithubRegistryToHclTerraform(this._githubRegistry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataKoyebSecretGithubRegistryList",
      },
      gitlab_registry: {
        value: dataKoyebSecretGitlabRegistryToHclTerraform(this._gitlabRegistry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataKoyebSecretGitlabRegistryList",
      },
      private_registry: {
        value: dataKoyebSecretPrivateRegistryToHclTerraform(this._privateRegistry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataKoyebSecretPrivateRegistryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
