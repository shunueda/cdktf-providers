// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TencentcloudProviderConfig {
  /**
  * List of allowed TencentCloud account IDs to prevent you from mistakenly using the wrong one (and potentially end up destroying a live environment). Conflicts with `forbidden_account_ids`, If use `assume_role_with_saml` or `assume_role_with_web_identity`, it is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#allowed_account_ids TencentcloudProvider#allowed_account_ids}
  */
  readonly allowedAccountIds?: string[];
  /**
  * The name of the CVM instance CAM role. It can be sourced from the `TENCENTCLOUD_CAM_ROLE_NAME` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#cam_role_name TencentcloudProvider#cam_role_name}
  */
  readonly camRoleName?: string;
  /**
  * The cos domain of the API request, Default is `https://cos.{region}.myqcloud.com`, Other Examples: `https://cluster-123456.cos-cdc.ap-guangzhou.myqcloud.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#cos_domain TencentcloudProvider#cos_domain}
  */
  readonly cosDomain?: string;
  /**
  * The root domain of the API request, Default is `tencentcloudapi.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#domain TencentcloudProvider#domain}
  */
  readonly domain?: string;
  /**
  * Whether to enable pod oidc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#enable_pod_oidc TencentcloudProvider#enable_pod_oidc}
  */
  readonly enablePodOidc?: boolean | cdktf.IResolvable;
  /**
  * List of forbidden TencentCloud account IDs to prevent you from mistakenly using the wrong one (and potentially end up destroying a live environment). Conflicts with `allowed_account_ids`, If use `assume_role_with_saml` or `assume_role_with_web_identity`, it is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#forbidden_account_ids TencentcloudProvider#forbidden_account_ids}
  */
  readonly forbiddenAccountIds?: string[];
  /**
  * The profile name as set in the shared credentials. It can also be sourced from the `TENCENTCLOUD_PROFILE` environment variable. If not set, the default profile created with `tccli configure` will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#profile TencentcloudProvider#profile}
  */
  readonly profile?: string;
  /**
  * The protocol of the API request. Valid values: `HTTP` and `HTTPS`. Default is `HTTPS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#protocol TencentcloudProvider#protocol}
  */
  readonly protocol?: string;
  /**
  * This is the TencentCloud region. It can also be sourced from the `TENCENTCLOUD_REGION` environment variables. The default input value is ap-guangzhou.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#region TencentcloudProvider#region}
  */
  readonly region?: string;
  /**
  * This is the TencentCloud access key. It can also be sourced from the `TENCENTCLOUD_SECRET_ID` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#secret_id TencentcloudProvider#secret_id}
  */
  readonly secretId?: string;
  /**
  * This is the TencentCloud secret key. It can also be sourced from the `TENCENTCLOUD_SECRET_KEY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#secret_key TencentcloudProvider#secret_key}
  */
  readonly secretKey?: string;
  /**
  * TencentCloud Security Token of temporary access credentials. It can be sourced from the `TENCENTCLOUD_SECURITY_TOKEN` environment variable. Notice: for supported products, please refer to: [temporary key supported products](https://intl.cloud.tencent.com/document/product/598/10588).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#security_token TencentcloudProvider#security_token}
  */
  readonly securityToken?: string;
  /**
  * The directory of the shared credentials. It can also be sourced from the `TENCENTCLOUD_SHARED_CREDENTIALS_DIR` environment variable. If not set this defaults to ~/.tccli.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#shared_credentials_dir TencentcloudProvider#shared_credentials_dir}
  */
  readonly sharedCredentialsDir?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#alias TencentcloudProvider#alias}
  */
  readonly alias?: string;
  /**
  * assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#assume_role TencentcloudProvider#assume_role}
  */
  readonly assumeRole?: TencentcloudProviderAssumeRole;
  /**
  * assume_role_with_saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#assume_role_with_saml TencentcloudProvider#assume_role_with_saml}
  */
  readonly assumeRoleWithSaml?: TencentcloudProviderAssumeRoleWithSaml;
  /**
  * assume_role_with_web_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#assume_role_with_web_identity TencentcloudProvider#assume_role_with_web_identity}
  */
  readonly assumeRoleWithWebIdentity?: TencentcloudProviderAssumeRoleWithWebIdentity;
  /**
  * mfa_certification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#mfa_certification TencentcloudProvider#mfa_certification}
  */
  readonly mfaCertification?: TencentcloudProviderMfaCertification;
}
export interface TencentcloudProviderAssumeRole {
  /**
  * External role ID, which can be obtained by clicking the role name in the CAM console. It can contain 2-128 letters, digits, and symbols (=,.@:/-). Regex: [\w+=,.@:/-]*. It can be sourced from the `TENCENTCLOUD_ASSUME_ROLE_EXTERNAL_ID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#external_id TencentcloudProvider#external_id}
  */
  readonly externalId?: string;
  /**
  * A more restrictive policy when making the AssumeRole call. Its content must not contains `principal` elements. Notice: more syntax references, please refer to: [policies syntax logic](https://intl.cloud.tencent.com/document/product/598/10603).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#policy TencentcloudProvider#policy}
  */
  readonly policy?: string;
  /**
  * The ARN of the role to assume. It can be sourced from the `TENCENTCLOUD_ASSUME_ROLE_ARN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#role_arn TencentcloudProvider#role_arn}
  */
  readonly roleArn: string;
  /**
  * MFA serial number, the identification number of the MFA device associated with the calling CAM user. Format qcs: cam:uin/${ownerUin}::mfa/${mfaType}. It can be sourced from the `TENCENTCLOUD_ASSUME_ROLE_SERIAL_NUMBER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#serial_number TencentcloudProvider#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * The duration of the session when making the AssumeRole call. Its value ranges from 0 to 43200(seconds), and default is 7200 seconds. It can be sourced from the `TENCENTCLOUD_ASSUME_ROLE_SESSION_DURATION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#session_duration TencentcloudProvider#session_duration}
  */
  readonly sessionDuration?: number;
  /**
  * The session name to use when making the AssumeRole call. It can be sourced from the `TENCENTCLOUD_ASSUME_ROLE_SESSION_NAME`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#session_name TencentcloudProvider#session_name}
  */
  readonly sessionName: string;
  /**
  * Caller identity uin. It can be sourced from the `TENCENTCLOUD_ASSUME_ROLE_SOURCE_IDENTITY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#source_identity TencentcloudProvider#source_identity}
  */
  readonly sourceIdentity?: string;
  /**
  * MFA authentication code. It can be sourced from the `TENCENTCLOUD_ASSUME_ROLE_TOKEN_CODE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#token_code TencentcloudProvider#token_code}
  */
  readonly tokenCode?: string;
}

export function tencentcloudProviderAssumeRoleToTerraform(struct?: TencentcloudProviderAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    policy: cdktf.stringToTerraform(struct!.policy),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    session_duration: cdktf.numberToTerraform(struct!.sessionDuration),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
    source_identity: cdktf.stringToTerraform(struct!.sourceIdentity),
    token_code: cdktf.stringToTerraform(struct!.tokenCode),
  }
}


export function tencentcloudProviderAssumeRoleToHclTerraform(struct?: TencentcloudProviderAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_duration: {
      value: cdktf.numberToHclTerraform(struct!.sessionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_identity: {
      value: cdktf.stringToHclTerraform(struct!.sourceIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_code: {
      value: cdktf.stringToHclTerraform(struct!.tokenCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface TencentcloudProviderAssumeRoleWithSaml {
  /**
  * Player Access Description Name. It can be sourced from the `TENCENTCLOUD_ASSUME_ROLE_PRINCIPAL_ARN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#principal_arn TencentcloudProvider#principal_arn}
  */
  readonly principalArn: string;
  /**
  * The ARN of the role to assume. It can be sourced from the `TENCENTCLOUD_ASSUME_ROLE_ARN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#role_arn TencentcloudProvider#role_arn}
  */
  readonly roleArn: string;
  /**
  * SAML assertion information encoded in base64. It can be sourced from the `TENCENTCLOUD_ASSUME_ROLE_SAML_ASSERTION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#saml_assertion TencentcloudProvider#saml_assertion}
  */
  readonly samlAssertion: string;
  /**
  * The duration of the session when making the AssumeRoleWithSAML call. Its value ranges from 0 to 43200(seconds), and default is 7200 seconds. It can be sourced from the `TENCENTCLOUD_ASSUME_ROLE_SESSION_DURATION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#session_duration TencentcloudProvider#session_duration}
  */
  readonly sessionDuration?: number;
  /**
  * The session name to use when making the AssumeRole call. It can be sourced from the `TENCENTCLOUD_ASSUME_ROLE_SESSION_NAME`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#session_name TencentcloudProvider#session_name}
  */
  readonly sessionName: string;
}

export function tencentcloudProviderAssumeRoleWithSamlToTerraform(struct?: TencentcloudProviderAssumeRoleWithSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_arn: cdktf.stringToTerraform(struct!.principalArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    saml_assertion: cdktf.stringToTerraform(struct!.samlAssertion),
    session_duration: cdktf.numberToTerraform(struct!.sessionDuration),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
  }
}


export function tencentcloudProviderAssumeRoleWithSamlToHclTerraform(struct?: TencentcloudProviderAssumeRoleWithSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principal_arn: {
      value: cdktf.stringToHclTerraform(struct!.principalArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saml_assertion: {
      value: cdktf.stringToHclTerraform(struct!.samlAssertion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_duration: {
      value: cdktf.numberToHclTerraform(struct!.sessionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface TencentcloudProviderAssumeRoleWithWebIdentity {
  /**
  * Identity provider name. It can be sourced from the `TENCENTCLOUD_ASSUME_ROLE_PROVIDER_ID`, Default is OIDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#provider_id TencentcloudProvider#provider_id}
  */
  readonly providerId?: string;
  /**
  * The ARN of the role to assume. It can be sourced from the `TENCENTCLOUD_ASSUME_ROLE_ARN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#role_arn TencentcloudProvider#role_arn}
  */
  readonly roleArn: string;
  /**
  * The duration of the session when making the AssumeRoleWithWebIdentity call. Its value ranges from 0 to 43200(seconds), and default is 7200 seconds. It can be sourced from the `TENCENTCLOUD_ASSUME_ROLE_SESSION_DURATION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#session_duration TencentcloudProvider#session_duration}
  */
  readonly sessionDuration?: number;
  /**
  * The session name to use when making the AssumeRole call. It can be sourced from the `TENCENTCLOUD_ASSUME_ROLE_SESSION_NAME`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#session_name TencentcloudProvider#session_name}
  */
  readonly sessionName: string;
  /**
  * OIDC token issued by IdP. It can be sourced from the `TENCENTCLOUD_ASSUME_ROLE_WEB_IDENTITY_TOKEN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#web_identity_token TencentcloudProvider#web_identity_token}
  */
  readonly webIdentityToken: string;
}

export function tencentcloudProviderAssumeRoleWithWebIdentityToTerraform(struct?: TencentcloudProviderAssumeRoleWithWebIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    session_duration: cdktf.numberToTerraform(struct!.sessionDuration),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
    web_identity_token: cdktf.stringToTerraform(struct!.webIdentityToken),
  }
}


export function tencentcloudProviderAssumeRoleWithWebIdentityToHclTerraform(struct?: TencentcloudProviderAssumeRoleWithWebIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_duration: {
      value: cdktf.numberToHclTerraform(struct!.sessionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_identity_token: {
      value: cdktf.stringToHclTerraform(struct!.webIdentityToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface TencentcloudProviderMfaCertification {
  /**
  * Specify the validity period of the temporary certificate. The main account can be set to a maximum validity period of 7200 seconds, and the sub account can be set to a maximum validity period of 129600 seconds, and default is 1800 seconds. It can be sourced from the `TENCENTCLOUD_MFA_CERTIFICATION_DURATION_SECONDS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#duration_seconds TencentcloudProvider#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * MFA serial number, the identification number of the MFA device associated with the calling CAM user. Format qcs: cam:uin/${ownerUin}::mfa/${mfaType}. It can be sourced from the `TENCENTCLOUD_MFA_CERTIFICATION_SERIAL_NUMBER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#serial_number TencentcloudProvider#serial_number}
  */
  readonly serialNumber: string;
  /**
  * MFA authentication code. It can be sourced from the `TENCENTCLOUD_MFA_CERTIFICATION_TOKEN_CODE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#token_code TencentcloudProvider#token_code}
  */
  readonly tokenCode: string;
}

export function tencentcloudProviderMfaCertificationToTerraform(struct?: TencentcloudProviderMfaCertification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_seconds: cdktf.numberToTerraform(struct!.durationSeconds),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    token_code: cdktf.stringToTerraform(struct!.tokenCode),
  }
}


export function tencentcloudProviderMfaCertificationToHclTerraform(struct?: TencentcloudProviderMfaCertification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.durationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_code: {
      value: cdktf.stringToHclTerraform(struct!.tokenCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs tencentcloud}
*/
export class TencentcloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TencentcloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TencentcloudProvider to import
  * @param importFromId The id of the existing TencentcloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TencentcloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs tencentcloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TencentcloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TencentcloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      terraformProviderSource: 'tencentcloudstack/tencentcloud'
    });
    this._allowedAccountIds = config.allowedAccountIds;
    this._camRoleName = config.camRoleName;
    this._cosDomain = config.cosDomain;
    this._domain = config.domain;
    this._enablePodOidc = config.enablePodOidc;
    this._forbiddenAccountIds = config.forbiddenAccountIds;
    this._profile = config.profile;
    this._protocol = config.protocol;
    this._region = config.region;
    this._secretId = config.secretId;
    this._secretKey = config.secretKey;
    this._securityToken = config.securityToken;
    this._sharedCredentialsDir = config.sharedCredentialsDir;
    this._alias = config.alias;
    this._assumeRole = config.assumeRole;
    this._assumeRoleWithSaml = config.assumeRoleWithSaml;
    this._assumeRoleWithWebIdentity = config.assumeRoleWithWebIdentity;
    this._mfaCertification = config.mfaCertification;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_account_ids - computed: false, optional: true, required: false
  private _allowedAccountIds?: string[]; 
  public get allowedAccountIds() {
    return this._allowedAccountIds;
  }
  public set allowedAccountIds(value: string[] | undefined) {
    this._allowedAccountIds = value;
  }
  public resetAllowedAccountIds() {
    this._allowedAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAccountIdsInput() {
    return this._allowedAccountIds;
  }

  // cam_role_name - computed: false, optional: true, required: false
  private _camRoleName?: string; 
  public get camRoleName() {
    return this._camRoleName;
  }
  public set camRoleName(value: string | undefined) {
    this._camRoleName = value;
  }
  public resetCamRoleName() {
    this._camRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get camRoleNameInput() {
    return this._camRoleName;
  }

  // cos_domain - computed: false, optional: true, required: false
  private _cosDomain?: string; 
  public get cosDomain() {
    return this._cosDomain;
  }
  public set cosDomain(value: string | undefined) {
    this._cosDomain = value;
  }
  public resetCosDomain() {
    this._cosDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosDomainInput() {
    return this._cosDomain;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this._domain;
  }
  public set domain(value: string | undefined) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // enable_pod_oidc - computed: false, optional: true, required: false
  private _enablePodOidc?: boolean | cdktf.IResolvable; 
  public get enablePodOidc() {
    return this._enablePodOidc;
  }
  public set enablePodOidc(value: boolean | cdktf.IResolvable | undefined) {
    this._enablePodOidc = value;
  }
  public resetEnablePodOidc() {
    this._enablePodOidc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePodOidcInput() {
    return this._enablePodOidc;
  }

  // forbidden_account_ids - computed: false, optional: true, required: false
  private _forbiddenAccountIds?: string[]; 
  public get forbiddenAccountIds() {
    return this._forbiddenAccountIds;
  }
  public set forbiddenAccountIds(value: string[] | undefined) {
    this._forbiddenAccountIds = value;
  }
  public resetForbiddenAccountIds() {
    this._forbiddenAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenAccountIdsInput() {
    return this._forbiddenAccountIds;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this._profile;
  }
  public set profile(value: string | undefined) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this._protocol;
  }
  public set protocol(value: string | undefined) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_id - computed: false, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this._secretId;
  }
  public set secretId(value: string | undefined) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this._secretKey;
  }
  public set secretKey(value: string | undefined) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // security_token - computed: false, optional: true, required: false
  private _securityToken?: string; 
  public get securityToken() {
    return this._securityToken;
  }
  public set securityToken(value: string | undefined) {
    this._securityToken = value;
  }
  public resetSecurityToken() {
    this._securityToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTokenInput() {
    return this._securityToken;
  }

  // shared_credentials_dir - computed: false, optional: true, required: false
  private _sharedCredentialsDir?: string; 
  public get sharedCredentialsDir() {
    return this._sharedCredentialsDir;
  }
  public set sharedCredentialsDir(value: string | undefined) {
    this._sharedCredentialsDir = value;
  }
  public resetSharedCredentialsDir() {
    this._sharedCredentialsDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedCredentialsDirInput() {
    return this._sharedCredentialsDir;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole?: TencentcloudProviderAssumeRole; 
  public get assumeRole() {
    return this._assumeRole;
  }
  public set assumeRole(value: TencentcloudProviderAssumeRole | undefined) {
    this._assumeRole = value;
  }
  public resetAssumeRole() {
    this._assumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole;
  }

  // assume_role_with_saml - computed: false, optional: true, required: false
  private _assumeRoleWithSaml?: TencentcloudProviderAssumeRoleWithSaml; 
  public get assumeRoleWithSaml() {
    return this._assumeRoleWithSaml;
  }
  public set assumeRoleWithSaml(value: TencentcloudProviderAssumeRoleWithSaml | undefined) {
    this._assumeRoleWithSaml = value;
  }
  public resetAssumeRoleWithSaml() {
    this._assumeRoleWithSaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleWithSamlInput() {
    return this._assumeRoleWithSaml;
  }

  // assume_role_with_web_identity - computed: false, optional: true, required: false
  private _assumeRoleWithWebIdentity?: TencentcloudProviderAssumeRoleWithWebIdentity; 
  public get assumeRoleWithWebIdentity() {
    return this._assumeRoleWithWebIdentity;
  }
  public set assumeRoleWithWebIdentity(value: TencentcloudProviderAssumeRoleWithWebIdentity | undefined) {
    this._assumeRoleWithWebIdentity = value;
  }
  public resetAssumeRoleWithWebIdentity() {
    this._assumeRoleWithWebIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleWithWebIdentityInput() {
    return this._assumeRoleWithWebIdentity;
  }

  // mfa_certification - computed: false, optional: true, required: false
  private _mfaCertification?: TencentcloudProviderMfaCertification; 
  public get mfaCertification() {
    return this._mfaCertification;
  }
  public set mfaCertification(value: TencentcloudProviderMfaCertification | undefined) {
    this._mfaCertification = value;
  }
  public resetMfaCertification() {
    this._mfaCertification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaCertificationInput() {
    return this._mfaCertification;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedAccountIds),
      cam_role_name: cdktf.stringToTerraform(this._camRoleName),
      cos_domain: cdktf.stringToTerraform(this._cosDomain),
      domain: cdktf.stringToTerraform(this._domain),
      enable_pod_oidc: cdktf.booleanToTerraform(this._enablePodOidc),
      forbidden_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._forbiddenAccountIds),
      profile: cdktf.stringToTerraform(this._profile),
      protocol: cdktf.stringToTerraform(this._protocol),
      region: cdktf.stringToTerraform(this._region),
      secret_id: cdktf.stringToTerraform(this._secretId),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      security_token: cdktf.stringToTerraform(this._securityToken),
      shared_credentials_dir: cdktf.stringToTerraform(this._sharedCredentialsDir),
      alias: cdktf.stringToTerraform(this._alias),
      assume_role: tencentcloudProviderAssumeRoleToTerraform(this._assumeRole),
      assume_role_with_saml: tencentcloudProviderAssumeRoleWithSamlToTerraform(this._assumeRoleWithSaml),
      assume_role_with_web_identity: tencentcloudProviderAssumeRoleWithWebIdentityToTerraform(this._assumeRoleWithWebIdentity),
      mfa_certification: tencentcloudProviderMfaCertificationToTerraform(this._mfaCertification),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_account_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedAccountIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cam_role_name: {
        value: cdktf.stringToHclTerraform(this._camRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos_domain: {
        value: cdktf.stringToHclTerraform(this._cosDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_pod_oidc: {
        value: cdktf.booleanToHclTerraform(this._enablePodOidc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forbidden_account_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._forbiddenAccountIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_id: {
        value: cdktf.stringToHclTerraform(this._secretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_token: {
        value: cdktf.stringToHclTerraform(this._securityToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_credentials_dir: {
        value: cdktf.stringToHclTerraform(this._sharedCredentialsDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assume_role: {
        value: tencentcloudProviderAssumeRoleToHclTerraform(this._assumeRole),
        isBlock: true,
        type: "set",
        storageClassType: "TencentcloudProviderAssumeRoleList",
      },
      assume_role_with_saml: {
        value: tencentcloudProviderAssumeRoleWithSamlToHclTerraform(this._assumeRoleWithSaml),
        isBlock: true,
        type: "list",
        storageClassType: "TencentcloudProviderAssumeRoleWithSamlList",
      },
      assume_role_with_web_identity: {
        value: tencentcloudProviderAssumeRoleWithWebIdentityToHclTerraform(this._assumeRoleWithWebIdentity),
        isBlock: true,
        type: "list",
        storageClassType: "TencentcloudProviderAssumeRoleWithWebIdentityList",
      },
      mfa_certification: {
        value: tencentcloudProviderMfaCertificationToHclTerraform(this._mfaCertification),
        isBlock: true,
        type: "set",
        storageClassType: "TencentcloudProviderMfaCertificationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
