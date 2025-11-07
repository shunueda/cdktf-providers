// https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * The secret name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#name Secret#name}
  */
  readonly name: string;
  /**
  * The secret type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#type Secret#type}
  */
  readonly type?: string;
  /**
  * The secret value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#value Secret#value}
  */
  readonly value?: string;
  /**
  * azure_container_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#azure_container_registry Secret#azure_container_registry}
  */
  readonly azureContainerRegistry?: SecretAzureContainerRegistry;
  /**
  * digital_ocean_container_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#digital_ocean_container_registry Secret#digital_ocean_container_registry}
  */
  readonly digitalOceanContainerRegistry?: SecretDigitalOceanContainerRegistry;
  /**
  * docker_hub_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#docker_hub_registry Secret#docker_hub_registry}
  */
  readonly dockerHubRegistry?: SecretDockerHubRegistry;
  /**
  * github_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#github_registry Secret#github_registry}
  */
  readonly githubRegistry?: SecretGithubRegistry;
  /**
  * gitlab_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#gitlab_registry Secret#gitlab_registry}
  */
  readonly gitlabRegistry?: SecretGitlabRegistry;
  /**
  * private_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#private_registry Secret#private_registry}
  */
  readonly privateRegistry?: SecretPrivateRegistry;
}
export interface SecretAzureContainerRegistry {
  /**
  * The registry password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#password Secret#password}
  */
  readonly password: string;
  /**
  * The registry name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#registry_name Secret#registry_name}
  */
  readonly registryName: string;
  /**
  * The registry username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#username Secret#username}
  */
  readonly username: string;
}

export function secretAzureContainerRegistryToTerraform(struct?: SecretAzureContainerRegistryOutputReference | SecretAzureContainerRegistry): any {
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


export function secretAzureContainerRegistryToHclTerraform(struct?: SecretAzureContainerRegistryOutputReference | SecretAzureContainerRegistry): any {
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

export class SecretAzureContainerRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretAzureContainerRegistry | undefined {
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

  public set internalValue(value: SecretAzureContainerRegistry | undefined) {
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
export interface SecretDigitalOceanContainerRegistry {
  /**
  * The registry password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#password Secret#password}
  */
  readonly password: string;
  /**
  * The registry username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#username Secret#username}
  */
  readonly username: string;
}

export function secretDigitalOceanContainerRegistryToTerraform(struct?: SecretDigitalOceanContainerRegistryOutputReference | SecretDigitalOceanContainerRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function secretDigitalOceanContainerRegistryToHclTerraform(struct?: SecretDigitalOceanContainerRegistryOutputReference | SecretDigitalOceanContainerRegistry): any {
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

export class SecretDigitalOceanContainerRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretDigitalOceanContainerRegistry | undefined {
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

  public set internalValue(value: SecretDigitalOceanContainerRegistry | undefined) {
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
export interface SecretDockerHubRegistry {
  /**
  * The registry password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#password Secret#password}
  */
  readonly password: string;
  /**
  * The registry username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#username Secret#username}
  */
  readonly username: string;
}

export function secretDockerHubRegistryToTerraform(struct?: SecretDockerHubRegistryOutputReference | SecretDockerHubRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function secretDockerHubRegistryToHclTerraform(struct?: SecretDockerHubRegistryOutputReference | SecretDockerHubRegistry): any {
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

export class SecretDockerHubRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretDockerHubRegistry | undefined {
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

  public set internalValue(value: SecretDockerHubRegistry | undefined) {
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
export interface SecretGithubRegistry {
  /**
  * The registry password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#password Secret#password}
  */
  readonly password: string;
  /**
  * The registry username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#username Secret#username}
  */
  readonly username: string;
}

export function secretGithubRegistryToTerraform(struct?: SecretGithubRegistryOutputReference | SecretGithubRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function secretGithubRegistryToHclTerraform(struct?: SecretGithubRegistryOutputReference | SecretGithubRegistry): any {
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

export class SecretGithubRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretGithubRegistry | undefined {
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

  public set internalValue(value: SecretGithubRegistry | undefined) {
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
export interface SecretGitlabRegistry {
  /**
  * The registry password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#password Secret#password}
  */
  readonly password: string;
  /**
  * The registry username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#username Secret#username}
  */
  readonly username: string;
}

export function secretGitlabRegistryToTerraform(struct?: SecretGitlabRegistryOutputReference | SecretGitlabRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function secretGitlabRegistryToHclTerraform(struct?: SecretGitlabRegistryOutputReference | SecretGitlabRegistry): any {
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

export class SecretGitlabRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretGitlabRegistry | undefined {
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

  public set internalValue(value: SecretGitlabRegistry | undefined) {
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
export interface SecretPrivateRegistry {
  /**
  * The registry password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#password Secret#password}
  */
  readonly password: string;
  /**
  * The registry URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#url Secret#url}
  */
  readonly url: string;
  /**
  * The registry username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#username Secret#username}
  */
  readonly username: string;
}

export function secretPrivateRegistryToTerraform(struct?: SecretPrivateRegistryOutputReference | SecretPrivateRegistry): any {
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


export function secretPrivateRegistryToHclTerraform(struct?: SecretPrivateRegistryOutputReference | SecretPrivateRegistry): any {
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

export class SecretPrivateRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretPrivateRegistry | undefined {
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

  public set internalValue(value: SecretPrivateRegistry | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret koyeb_secret}
*/
export class Secret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "koyeb_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Secret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Secret to import
  * @param importFromId The id of the existing Secret that should be imported. Refer to the {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Secret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "koyeb_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/secret koyeb_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretConfig
  */
  public constructor(scope: Construct, id: string, config: SecretConfig) {
    super(scope, id, {
      terraformResourceType: 'koyeb_secret',
      terraformGeneratorMetadata: {
        providerName: 'koyeb',
        providerVersion: '0.1.11'
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
  private _azureContainerRegistry = new SecretAzureContainerRegistryOutputReference(this, "azure_container_registry");
  public get azureContainerRegistry() {
    return this._azureContainerRegistry;
  }
  public putAzureContainerRegistry(value: SecretAzureContainerRegistry) {
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
  private _digitalOceanContainerRegistry = new SecretDigitalOceanContainerRegistryOutputReference(this, "digital_ocean_container_registry");
  public get digitalOceanContainerRegistry() {
    return this._digitalOceanContainerRegistry;
  }
  public putDigitalOceanContainerRegistry(value: SecretDigitalOceanContainerRegistry) {
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
  private _dockerHubRegistry = new SecretDockerHubRegistryOutputReference(this, "docker_hub_registry");
  public get dockerHubRegistry() {
    return this._dockerHubRegistry;
  }
  public putDockerHubRegistry(value: SecretDockerHubRegistry) {
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
  private _githubRegistry = new SecretGithubRegistryOutputReference(this, "github_registry");
  public get githubRegistry() {
    return this._githubRegistry;
  }
  public putGithubRegistry(value: SecretGithubRegistry) {
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
  private _gitlabRegistry = new SecretGitlabRegistryOutputReference(this, "gitlab_registry");
  public get gitlabRegistry() {
    return this._gitlabRegistry;
  }
  public putGitlabRegistry(value: SecretGitlabRegistry) {
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
  private _privateRegistry = new SecretPrivateRegistryOutputReference(this, "private_registry");
  public get privateRegistry() {
    return this._privateRegistry;
  }
  public putPrivateRegistry(value: SecretPrivateRegistry) {
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
      azure_container_registry: secretAzureContainerRegistryToTerraform(this._azureContainerRegistry.internalValue),
      digital_ocean_container_registry: secretDigitalOceanContainerRegistryToTerraform(this._digitalOceanContainerRegistry.internalValue),
      docker_hub_registry: secretDockerHubRegistryToTerraform(this._dockerHubRegistry.internalValue),
      github_registry: secretGithubRegistryToTerraform(this._githubRegistry.internalValue),
      gitlab_registry: secretGitlabRegistryToTerraform(this._gitlabRegistry.internalValue),
      private_registry: secretPrivateRegistryToTerraform(this._privateRegistry.internalValue),
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
        value: secretAzureContainerRegistryToHclTerraform(this._azureContainerRegistry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecretAzureContainerRegistryList",
      },
      digital_ocean_container_registry: {
        value: secretDigitalOceanContainerRegistryToHclTerraform(this._digitalOceanContainerRegistry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecretDigitalOceanContainerRegistryList",
      },
      docker_hub_registry: {
        value: secretDockerHubRegistryToHclTerraform(this._dockerHubRegistry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecretDockerHubRegistryList",
      },
      github_registry: {
        value: secretGithubRegistryToHclTerraform(this._githubRegistry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecretGithubRegistryList",
      },
      gitlab_registry: {
        value: secretGitlabRegistryToHclTerraform(this._gitlabRegistry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecretGitlabRegistryList",
      },
      private_registry: {
        value: secretPrivateRegistryToHclTerraform(this._privateRegistry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecretPrivateRegistryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
