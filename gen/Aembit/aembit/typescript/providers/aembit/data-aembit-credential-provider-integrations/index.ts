// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_provider_integrations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAembitCredentialProviderIntegrationsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsAwsIamRole {
}

export function dataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsAwsIamRoleToTerraform(struct?: DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsAwsIamRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsAwsIamRoleToHclTerraform(struct?: DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsAwsIamRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsAwsIamRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsAwsIamRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsAwsIamRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // lifetime_in_seconds - computed: true, optional: false, required: false
  public get lifetimeInSeconds() {
    return this.getNumberAttribute('lifetime_in_seconds');
  }

  // oidc_issuer_url - computed: true, optional: false, required: false
  public get oidcIssuerUrl() {
    return this.getStringAttribute('oidc_issuer_url');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // token_audience - computed: true, optional: false, required: false
  public get tokenAudience() {
    return this.getStringAttribute('token_audience');
  }
}
export interface DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsGitlab {
}

export function dataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsGitlabToTerraform(struct?: DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsGitlab | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsGitlabToHclTerraform(struct?: DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsGitlab | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsGitlabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsGitlab | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsGitlab | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // personal_access_token - computed: true, optional: false, required: false
  public get personalAccessToken() {
    return this.getStringAttribute('personal_access_token');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataAembitCredentialProviderIntegrationsCredentialProviderIntegrations {
  /**
  * AWS IAM Role type Credential Provider Integration configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_provider_integrations#aws_iam_role DataAembitCredentialProviderIntegrations#aws_iam_role}
  */
  readonly awsIamRole?: DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsAwsIamRole;
  /**
  * GitLab Managed Account type Credential Provider Integration configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_provider_integrations#gitlab DataAembitCredentialProviderIntegrations#gitlab}
  */
  readonly gitlab?: DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsGitlab;
}

export function dataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsToTerraform(struct?: DataAembitCredentialProviderIntegrationsCredentialProviderIntegrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_iam_role: dataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsAwsIamRoleToTerraform(struct!.awsIamRole),
    gitlab: dataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsGitlabToTerraform(struct!.gitlab),
  }
}


export function dataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsToHclTerraform(struct?: DataAembitCredentialProviderIntegrationsCredentialProviderIntegrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_iam_role: {
      value: dataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsAwsIamRoleToHclTerraform(struct!.awsIamRole),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsAwsIamRole",
    },
    gitlab: {
      value: dataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsGitlabToHclTerraform(struct!.gitlab),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsGitlab",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAembitCredentialProviderIntegrationsCredentialProviderIntegrations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsIamRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIamRole = this._awsIamRole?.internalValue;
    }
    if (this._gitlab?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitlab = this._gitlab?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitCredentialProviderIntegrationsCredentialProviderIntegrations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsIamRole.internalValue = undefined;
      this._gitlab.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsIamRole.internalValue = value.awsIamRole;
      this._gitlab.internalValue = value.gitlab;
    }
  }

  // aws_iam_role - computed: true, optional: true, required: false
  private _awsIamRole = new DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsAwsIamRoleOutputReference(this, "aws_iam_role");
  public get awsIamRole() {
    return this._awsIamRole;
  }
  public putAwsIamRole(value: DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsAwsIamRole) {
    this._awsIamRole.internalValue = value;
  }
  public resetAwsIamRole() {
    this._awsIamRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamRoleInput() {
    return this._awsIamRole.internalValue;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // gitlab - computed: true, optional: true, required: false
  private _gitlab = new DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsGitlabOutputReference(this, "gitlab");
  public get gitlab() {
    return this._gitlab;
  }
  public putGitlab(value: DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsGitlab) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsList extends cdktf.ComplexList {
  public internalValue? : DataAembitCredentialProviderIntegrationsCredentialProviderIntegrations[] | cdktf.IResolvable

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
  public get(index: number): DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsOutputReference {
    return new DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_provider_integrations aembit_credential_provider_integrations}
*/
export class DataAembitCredentialProviderIntegrations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_credential_provider_integrations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAembitCredentialProviderIntegrations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAembitCredentialProviderIntegrations to import
  * @param importFromId The id of the existing DataAembitCredentialProviderIntegrations that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_provider_integrations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAembitCredentialProviderIntegrations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_credential_provider_integrations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_provider_integrations aembit_credential_provider_integrations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAembitCredentialProviderIntegrationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAembitCredentialProviderIntegrationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aembit_credential_provider_integrations',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1',
        providerVersionConstraint: '1.25.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential_provider_integrations - computed: true, optional: false, required: false
  private _credentialProviderIntegrations = new DataAembitCredentialProviderIntegrationsCredentialProviderIntegrationsList(this, "credential_provider_integrations", false);
  public get credentialProviderIntegrations() {
    return this._credentialProviderIntegrations;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
