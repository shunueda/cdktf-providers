// https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier (username, access key, etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/credential#account_id Credential#account_id}
  */
  readonly accountId?: string;
  /**
  * CA certificate for certificate-based authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/credential#ca_cert Credential#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Description of the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/credential#description Credential#description}
  */
  readonly description?: string;
  /**
  * Indicates if the credential is external (true) or not (false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/credential#external Credential#external}
  */
  readonly external?: boolean | cdktf.IResolvable;
  /**
  * IBM Cloud account GUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/credential#ibm_account_guid Credential#ibm_account_guid}
  */
  readonly ibmAccountGuid?: string;
  /**
  * Unique name for the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/credential#name Credential#name}
  */
  readonly name?: string;
  /**
  * Amazon Resource Name (ARN) of the role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/credential#role_arn Credential#role_arn}
  */
  readonly roleArn?: string;
  /**
  * SkipVerify if should skip certificate verification in tls communication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/credential#skip_cert_verification Credential#skip_cert_verification}
  */
  readonly skipCertVerification?: boolean | cdktf.IResolvable;
  /**
  * Credential type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/credential#type Credential#type}
  */
  readonly type?: string;
  /**
  * URL is the server base url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/credential#url Credential#url}
  */
  readonly url?: string;
  /**
  * Indicates if authentication should be done with the instance's attached credentials (EC2 IAM Role).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/credential#use_aws_role Credential#use_aws_role}
  */
  readonly useAwsRole?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to use the regional STS endpoint for an STS session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/credential#use_sts_regional_endpoint Credential#use_sts_regional_endpoint}
  */
  readonly useStsRegionalEndpoint?: boolean | cdktf.IResolvable;
  /**
  * api_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/credential#api_token Credential#api_token}
  */
  readonly apiToken?: CredentialApiToken;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/credential#secret Credential#secret}
  */
  readonly secret?: CredentialSecret;
}
export interface CredentialApiToken {
  /**
  * Plain text value for the secret. Note: marshalling to JSON will convert to an encrypted value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/credential#plain Credential#plain}
  */
  readonly plain?: string;
}

export function credentialApiTokenToTerraform(struct?: CredentialApiTokenOutputReference | CredentialApiToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plain: cdktf.stringToTerraform(struct!.plain),
  }
}


export function credentialApiTokenToHclTerraform(struct?: CredentialApiTokenOutputReference | CredentialApiToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plain: {
      value: cdktf.stringToHclTerraform(struct!.plain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialApiTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CredentialApiToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plain !== undefined) {
      hasAnyValues = true;
      internalValueResult.plain = this._plain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialApiToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plain = value.plain;
    }
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }

  // plain - computed: false, optional: true, required: false
  private _plain?: string; 
  public get plain() {
    return this.getStringAttribute('plain');
  }
  public set plain(value: string) {
    this._plain = value;
  }
  public resetPlain() {
    this._plain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainInput() {
    return this._plain;
  }
}
export interface CredentialSecret {
  /**
  * Plain text value for the secret. Note: marshalling to JSON will convert to an encrypted value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/credential#plain Credential#plain}
  */
  readonly plain?: string;
}

export function credentialSecretToTerraform(struct?: CredentialSecretOutputReference | CredentialSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plain: cdktf.stringToTerraform(struct!.plain),
  }
}


export function credentialSecretToHclTerraform(struct?: CredentialSecretOutputReference | CredentialSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plain: {
      value: cdktf.stringToHclTerraform(struct!.plain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CredentialSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plain !== undefined) {
      hasAnyValues = true;
      internalValueResult.plain = this._plain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plain = value.plain;
    }
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }

  // plain - computed: false, optional: true, required: false
  private _plain?: string; 
  public get plain() {
    return this.getStringAttribute('plain');
  }
  public set plain(value: string) {
    this._plain = value;
  }
  public resetPlain() {
    this._plain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainInput() {
    return this._plain;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/credential prismacloudcompute_credential}
*/
export class Credential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloudcompute_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Credential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Credential to import
  * @param importFromId The id of the existing Credential that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Credential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloudcompute_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/credential prismacloudcompute_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CredentialConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prismacloudcompute_credential',
      terraformGeneratorMetadata: {
        providerName: 'prismacloudcompute',
        providerVersion: '0.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._caCert = config.caCert;
    this._description = config.description;
    this._external = config.external;
    this._ibmAccountGuid = config.ibmAccountGuid;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._skipCertVerification = config.skipCertVerification;
    this._type = config.type;
    this._url = config.url;
    this._useAwsRole = config.useAwsRole;
    this._useStsRegionalEndpoint = config.useStsRegionalEndpoint;
    this._apiToken.internalValue = config.apiToken;
    this._secret.internalValue = config.secret;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
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

  // external - computed: false, optional: true, required: false
  private _external?: boolean | cdktf.IResolvable; 
  public get external() {
    return this.getBooleanAttribute('external');
  }
  public set external(value: boolean | cdktf.IResolvable) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // ibm_account_guid - computed: false, optional: true, required: false
  private _ibmAccountGuid?: string; 
  public get ibmAccountGuid() {
    return this.getStringAttribute('ibm_account_guid');
  }
  public set ibmAccountGuid(value: string) {
    this._ibmAccountGuid = value;
  }
  public resetIbmAccountGuid() {
    this._ibmAccountGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibmAccountGuidInput() {
    return this._ibmAccountGuid;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
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

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // skip_cert_verification - computed: false, optional: true, required: false
  private _skipCertVerification?: boolean | cdktf.IResolvable; 
  public get skipCertVerification() {
    return this.getBooleanAttribute('skip_cert_verification');
  }
  public set skipCertVerification(value: boolean | cdktf.IResolvable) {
    this._skipCertVerification = value;
  }
  public resetSkipCertVerification() {
    this._skipCertVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCertVerificationInput() {
    return this._skipCertVerification;
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

  // use_aws_role - computed: false, optional: true, required: false
  private _useAwsRole?: boolean | cdktf.IResolvable; 
  public get useAwsRole() {
    return this.getBooleanAttribute('use_aws_role');
  }
  public set useAwsRole(value: boolean | cdktf.IResolvable) {
    this._useAwsRole = value;
  }
  public resetUseAwsRole() {
    this._useAwsRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAwsRoleInput() {
    return this._useAwsRole;
  }

  // use_sts_regional_endpoint - computed: false, optional: true, required: false
  private _useStsRegionalEndpoint?: boolean | cdktf.IResolvable; 
  public get useStsRegionalEndpoint() {
    return this.getBooleanAttribute('use_sts_regional_endpoint');
  }
  public set useStsRegionalEndpoint(value: boolean | cdktf.IResolvable) {
    this._useStsRegionalEndpoint = value;
  }
  public resetUseStsRegionalEndpoint() {
    this._useStsRegionalEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStsRegionalEndpointInput() {
    return this._useStsRegionalEndpoint;
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken = new CredentialApiTokenOutputReference(this, "api_token");
  public get apiToken() {
    return this._apiToken;
  }
  public putApiToken(value: CredentialApiToken) {
    this._apiToken.internalValue = value;
  }
  public resetApiToken() {
    this._apiToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new CredentialSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: CredentialSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      ca_cert: cdktf.stringToTerraform(this._caCert),
      description: cdktf.stringToTerraform(this._description),
      external: cdktf.booleanToTerraform(this._external),
      ibm_account_guid: cdktf.stringToTerraform(this._ibmAccountGuid),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      skip_cert_verification: cdktf.booleanToTerraform(this._skipCertVerification),
      type: cdktf.stringToTerraform(this._type),
      url: cdktf.stringToTerraform(this._url),
      use_aws_role: cdktf.booleanToTerraform(this._useAwsRole),
      use_sts_regional_endpoint: cdktf.booleanToTerraform(this._useStsRegionalEndpoint),
      api_token: credentialApiTokenToTerraform(this._apiToken.internalValue),
      secret: credentialSecretToTerraform(this._secret.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_cert: {
        value: cdktf.stringToHclTerraform(this._caCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external: {
        value: cdktf.booleanToHclTerraform(this._external),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ibm_account_guid: {
        value: cdktf.stringToHclTerraform(this._ibmAccountGuid),
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
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_cert_verification: {
        value: cdktf.booleanToHclTerraform(this._skipCertVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_aws_role: {
        value: cdktf.booleanToHclTerraform(this._useAwsRole),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_sts_regional_endpoint: {
        value: cdktf.booleanToHclTerraform(this._useStsRegionalEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      api_token: {
        value: credentialApiTokenToHclTerraform(this._apiToken.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CredentialApiTokenList",
      },
      secret: {
        value: credentialSecretToHclTerraform(this._secret.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CredentialSecretList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
