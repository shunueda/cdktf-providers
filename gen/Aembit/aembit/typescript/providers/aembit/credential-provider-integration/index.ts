// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialProviderIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configuration of Credential Provider Integration of type AWS IAM Role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider_integration#aws_iam_role CredentialProviderIntegration#aws_iam_role}
  */
  readonly awsIamRole?: CredentialProviderIntegrationAwsIamRole;
  /**
  * Description for the Credential Provider Integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider_integration#description CredentialProviderIntegration#description}
  */
  readonly description?: string;
  /**
  * GitLab Managed Account type Credential Provider Integration configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider_integration#gitlab CredentialProviderIntegration#gitlab}
  */
  readonly gitlab?: CredentialProviderIntegrationGitlab;
  /**
  * Name for the Credential Provider Integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider_integration#name CredentialProviderIntegration#name}
  */
  readonly name: string;
}
export interface CredentialProviderIntegrationAwsIamRole {
  /**
  * Lifetime in seconds for the AWS IAM Role credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider_integration#lifetime_in_seconds CredentialProviderIntegration#lifetime_in_seconds}
  */
  readonly lifetimeInSeconds?: number;
  /**
  * AWS IAM Role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider_integration#role_arn CredentialProviderIntegration#role_arn}
  */
  readonly roleArn: string;
}

export function credentialProviderIntegrationAwsIamRoleToTerraform(struct?: CredentialProviderIntegrationAwsIamRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime_in_seconds: cdktf.numberToTerraform(struct!.lifetimeInSeconds),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function credentialProviderIntegrationAwsIamRoleToHclTerraform(struct?: CredentialProviderIntegrationAwsIamRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifetime_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.lifetimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialProviderIntegrationAwsIamRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CredentialProviderIntegrationAwsIamRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifetimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeInSeconds = this._lifetimeInSeconds;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialProviderIntegrationAwsIamRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifetimeInSeconds = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifetimeInSeconds = value.lifetimeInSeconds;
      this._roleArn = value.roleArn;
    }
  }

  // lifetime_in_seconds - computed: true, optional: true, required: false
  private _lifetimeInSeconds?: number; 
  public get lifetimeInSeconds() {
    return this.getNumberAttribute('lifetime_in_seconds');
  }
  public set lifetimeInSeconds(value: number) {
    this._lifetimeInSeconds = value;
  }
  public resetLifetimeInSeconds() {
    this._lifetimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInSecondsInput() {
    return this._lifetimeInSeconds;
  }

  // oidc_issuer_url - computed: true, optional: false, required: false
  public get oidcIssuerUrl() {
    return this.getStringAttribute('oidc_issuer_url');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // token_audience - computed: true, optional: false, required: false
  public get tokenAudience() {
    return this.getStringAttribute('token_audience');
  }
}
export interface CredentialProviderIntegrationGitlab {
  /**
  * GitLab personal access token value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider_integration#personal_access_token CredentialProviderIntegration#personal_access_token}
  */
  readonly personalAccessToken: string;
  /**
  * GitLab URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider_integration#url CredentialProviderIntegration#url}
  */
  readonly url: string;
}

export function credentialProviderIntegrationGitlabToTerraform(struct?: CredentialProviderIntegrationGitlab | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    personal_access_token: cdktf.stringToTerraform(struct!.personalAccessToken),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function credentialProviderIntegrationGitlabToHclTerraform(struct?: CredentialProviderIntegrationGitlab | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    personal_access_token: {
      value: cdktf.stringToHclTerraform(struct!.personalAccessToken),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialProviderIntegrationGitlabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CredentialProviderIntegrationGitlab | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._personalAccessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.personalAccessToken = this._personalAccessToken;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialProviderIntegrationGitlab | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._personalAccessToken = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._personalAccessToken = value.personalAccessToken;
      this._url = value.url;
    }
  }

  // personal_access_token - computed: false, optional: false, required: true
  private _personalAccessToken?: string; 
  public get personalAccessToken() {
    return this.getStringAttribute('personal_access_token');
  }
  public set personalAccessToken(value: string) {
    this._personalAccessToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get personalAccessTokenInput() {
    return this._personalAccessToken;
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
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider_integration aembit_credential_provider_integration}
*/
export class CredentialProviderIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_credential_provider_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CredentialProviderIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CredentialProviderIntegration to import
  * @param importFromId The id of the existing CredentialProviderIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CredentialProviderIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_credential_provider_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider_integration aembit_credential_provider_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialProviderIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialProviderIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'aembit_credential_provider_integration',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsIamRole.internalValue = config.awsIamRole;
    this._description = config.description;
    this._gitlab.internalValue = config.gitlab;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_iam_role - computed: false, optional: true, required: false
  private _awsIamRole = new CredentialProviderIntegrationAwsIamRoleOutputReference(this, "aws_iam_role");
  public get awsIamRole() {
    return this._awsIamRole;
  }
  public putAwsIamRole(value: CredentialProviderIntegrationAwsIamRole) {
    this._awsIamRole.internalValue = value;
  }
  public resetAwsIamRole() {
    this._awsIamRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamRoleInput() {
    return this._awsIamRole.internalValue;
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

  // gitlab - computed: false, optional: true, required: false
  private _gitlab = new CredentialProviderIntegrationGitlabOutputReference(this, "gitlab");
  public get gitlab() {
    return this._gitlab;
  }
  public putGitlab(value: CredentialProviderIntegrationGitlab) {
    this._gitlab.internalValue = value;
  }
  public resetGitlab() {
    this._gitlab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabInput() {
    return this._gitlab.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_iam_role: credentialProviderIntegrationAwsIamRoleToTerraform(this._awsIamRole.internalValue),
      description: cdktf.stringToTerraform(this._description),
      gitlab: credentialProviderIntegrationGitlabToTerraform(this._gitlab.internalValue),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_iam_role: {
        value: credentialProviderIntegrationAwsIamRoleToHclTerraform(this._awsIamRole.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CredentialProviderIntegrationAwsIamRole",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gitlab: {
        value: credentialProviderIntegrationGitlabToHclTerraform(this._gitlab.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CredentialProviderIntegrationGitlab",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
