// https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * A longer description of the purpose of this identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#description Identity#description}
  */
  readonly description?: string;
  /**
  * The name of this identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#name Identity#name}
  */
  readonly name: string;
  /**
  * The id of the group containing this identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#parent_id Identity#parent_id}
  */
  readonly parentId: string;
  /**
  * An identity that may be assumed by a particular Chainguard service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#service_principal Identity#service_principal}
  */
  readonly servicePrincipal?: string;
  /**
  * aws_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#aws_identity Identity#aws_identity}
  */
  readonly awsIdentity?: IdentityAwsIdentity;
  /**
  * claim_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#claim_match Identity#claim_match}
  */
  readonly claimMatch?: IdentityClaimMatch;
  /**
  * static block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#static Identity#static}
  */
  readonly static?: IdentityStatic;
}
export interface IdentityAwsIdentity {
  /**
  * AWS Account ID of AWS user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#aws_account Identity#aws_account}
  */
  readonly awsAccount?: string;
  /**
  * The exact Arn that must appear in GetCallerIdentity to assume this identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#aws_arn Identity#aws_arn}
  */
  readonly awsArn?: string;
  /**
  * A pattern for matching acceptable Arn that must appear in GetCallerIdentity response to assume this identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#aws_arn_pattern Identity#aws_arn_pattern}
  */
  readonly awsArnPattern?: string;
  /**
  * The exact UserId that must appear in GetCallerIdentity to assume this identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#aws_user_id Identity#aws_user_id}
  */
  readonly awsUserId?: string;
  /**
  * A pattern for matching acceptable UserID that must appear in GetCallerIdentity response to assume this identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#aws_user_id_pattern Identity#aws_user_id_pattern}
  */
  readonly awsUserIdPattern?: string;
}

export function identityAwsIdentityToTerraform(struct?: IdentityAwsIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_account: cdktf.stringToTerraform(struct!.awsAccount),
    aws_arn: cdktf.stringToTerraform(struct!.awsArn),
    aws_arn_pattern: cdktf.stringToTerraform(struct!.awsArnPattern),
    aws_user_id: cdktf.stringToTerraform(struct!.awsUserId),
    aws_user_id_pattern: cdktf.stringToTerraform(struct!.awsUserIdPattern),
  }
}


export function identityAwsIdentityToHclTerraform(struct?: IdentityAwsIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_account: {
      value: cdktf.stringToHclTerraform(struct!.awsAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_arn: {
      value: cdktf.stringToHclTerraform(struct!.awsArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_arn_pattern: {
      value: cdktf.stringToHclTerraform(struct!.awsArnPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_user_id: {
      value: cdktf.stringToHclTerraform(struct!.awsUserId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_user_id_pattern: {
      value: cdktf.stringToHclTerraform(struct!.awsUserIdPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityAwsIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityAwsIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccount = this._awsAccount;
    }
    if (this._awsArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsArn = this._awsArn;
    }
    if (this._awsArnPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsArnPattern = this._awsArnPattern;
    }
    if (this._awsUserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsUserId = this._awsUserId;
    }
    if (this._awsUserIdPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsUserIdPattern = this._awsUserIdPattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityAwsIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccount = undefined;
      this._awsArn = undefined;
      this._awsArnPattern = undefined;
      this._awsUserId = undefined;
      this._awsUserIdPattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccount = value.awsAccount;
      this._awsArn = value.awsArn;
      this._awsArnPattern = value.awsArnPattern;
      this._awsUserId = value.awsUserId;
      this._awsUserIdPattern = value.awsUserIdPattern;
    }
  }

  // aws_account - computed: false, optional: true, required: false
  private _awsAccount?: string; 
  public get awsAccount() {
    return this.getStringAttribute('aws_account');
  }
  public set awsAccount(value: string) {
    this._awsAccount = value;
  }
  public resetAwsAccount() {
    this._awsAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountInput() {
    return this._awsAccount;
  }

  // aws_arn - computed: false, optional: true, required: false
  private _awsArn?: string; 
  public get awsArn() {
    return this.getStringAttribute('aws_arn');
  }
  public set awsArn(value: string) {
    this._awsArn = value;
  }
  public resetAwsArn() {
    this._awsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsArnInput() {
    return this._awsArn;
  }

  // aws_arn_pattern - computed: false, optional: true, required: false
  private _awsArnPattern?: string; 
  public get awsArnPattern() {
    return this.getStringAttribute('aws_arn_pattern');
  }
  public set awsArnPattern(value: string) {
    this._awsArnPattern = value;
  }
  public resetAwsArnPattern() {
    this._awsArnPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsArnPatternInput() {
    return this._awsArnPattern;
  }

  // aws_user_id - computed: false, optional: true, required: false
  private _awsUserId?: string; 
  public get awsUserId() {
    return this.getStringAttribute('aws_user_id');
  }
  public set awsUserId(value: string) {
    this._awsUserId = value;
  }
  public resetAwsUserId() {
    this._awsUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsUserIdInput() {
    return this._awsUserId;
  }

  // aws_user_id_pattern - computed: false, optional: true, required: false
  private _awsUserIdPattern?: string; 
  public get awsUserIdPattern() {
    return this.getStringAttribute('aws_user_id_pattern');
  }
  public set awsUserIdPattern(value: string) {
    this._awsUserIdPattern = value;
  }
  public resetAwsUserIdPattern() {
    this._awsUserIdPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsUserIdPatternInput() {
    return this._awsUserIdPattern;
  }
}
export interface IdentityClaimMatch {
  /**
  * The exact audience that must appear in tokens to assume this identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#audience Identity#audience}
  */
  readonly audience?: string;
  /**
  * A pattern for matching acceptable audiences that appear in tokens to assume this identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#audience_pattern Identity#audience_pattern}
  */
  readonly audiencePattern?: string;
  /**
  * The custom claim patterns for matching acceptable custom claims that appear in tokens to assume this identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#claim_patterns Identity#claim_patterns}
  */
  readonly claimPatterns?: { [key: string]: string };
  /**
  * The exact custom claims that appear in tokens to assume this identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#claims Identity#claims}
  */
  readonly claims?: { [key: string]: string };
  /**
  * The exact issuer that must appear in tokens to assume this identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#issuer Identity#issuer}
  */
  readonly issuer?: string;
  /**
  * A pattern for matching acceptable issuers that appear in tokens to assume this identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#issuer_pattern Identity#issuer_pattern}
  */
  readonly issuerPattern?: string;
  /**
  * The exact subject that must appear in tokens to assume this identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#subject Identity#subject}
  */
  readonly subject?: string;
  /**
  * A pattern for matching acceptable subjects that appear in tokens to assume this identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#subject_pattern Identity#subject_pattern}
  */
  readonly subjectPattern?: string;
}

export function identityClaimMatchToTerraform(struct?: IdentityClaimMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    audience_pattern: cdktf.stringToTerraform(struct!.audiencePattern),
    claim_patterns: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.claimPatterns),
    claims: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.claims),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    issuer_pattern: cdktf.stringToTerraform(struct!.issuerPattern),
    subject: cdktf.stringToTerraform(struct!.subject),
    subject_pattern: cdktf.stringToTerraform(struct!.subjectPattern),
  }
}


export function identityClaimMatchToHclTerraform(struct?: IdentityClaimMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audience_pattern: {
      value: cdktf.stringToHclTerraform(struct!.audiencePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claim_patterns: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.claimPatterns),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    claims: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.claims),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_pattern: {
      value: cdktf.stringToHclTerraform(struct!.issuerPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_pattern: {
      value: cdktf.stringToHclTerraform(struct!.subjectPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityClaimMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityClaimMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._audiencePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiencePattern = this._audiencePattern;
    }
    if (this._claimPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimPatterns = this._claimPatterns;
    }
    if (this._claims !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._issuerPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerPattern = this._issuerPattern;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._subjectPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectPattern = this._subjectPattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityClaimMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._audiencePattern = undefined;
      this._claimPatterns = undefined;
      this._claims = undefined;
      this._issuer = undefined;
      this._issuerPattern = undefined;
      this._subject = undefined;
      this._subjectPattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._audiencePattern = value.audiencePattern;
      this._claimPatterns = value.claimPatterns;
      this._claims = value.claims;
      this._issuer = value.issuer;
      this._issuerPattern = value.issuerPattern;
      this._subject = value.subject;
      this._subjectPattern = value.subjectPattern;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // audience_pattern - computed: false, optional: true, required: false
  private _audiencePattern?: string; 
  public get audiencePattern() {
    return this.getStringAttribute('audience_pattern');
  }
  public set audiencePattern(value: string) {
    this._audiencePattern = value;
  }
  public resetAudiencePattern() {
    this._audiencePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencePatternInput() {
    return this._audiencePattern;
  }

  // claim_patterns - computed: false, optional: true, required: false
  private _claimPatterns?: { [key: string]: string }; 
  public get claimPatterns() {
    return this.getStringMapAttribute('claim_patterns');
  }
  public set claimPatterns(value: { [key: string]: string }) {
    this._claimPatterns = value;
  }
  public resetClaimPatterns() {
    this._claimPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimPatternsInput() {
    return this._claimPatterns;
  }

  // claims - computed: false, optional: true, required: false
  private _claims?: { [key: string]: string }; 
  public get claims() {
    return this.getStringMapAttribute('claims');
  }
  public set claims(value: { [key: string]: string }) {
    this._claims = value;
  }
  public resetClaims() {
    this._claims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // issuer_pattern - computed: false, optional: true, required: false
  private _issuerPattern?: string; 
  public get issuerPattern() {
    return this.getStringAttribute('issuer_pattern');
  }
  public set issuerPattern(value: string) {
    this._issuerPattern = value;
  }
  public resetIssuerPattern() {
    this._issuerPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerPatternInput() {
    return this._issuerPattern;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // subject_pattern - computed: false, optional: true, required: false
  private _subjectPattern?: string; 
  public get subjectPattern() {
    return this.getStringAttribute('subject_pattern');
  }
  public set subjectPattern(value: string) {
    this._subjectPattern = value;
  }
  public resetSubjectPattern() {
    this._subjectPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectPatternInput() {
    return this._subjectPattern;
  }
}
export interface IdentityStatic {
  /**
  * The RFC3339 encoded date and time at which this identity will no longer be valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#expiration Identity#expiration}
  */
  readonly expiration?: string;
  /**
  * The exact issuer that must appear in tokens to assume this identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#issuer Identity#issuer}
  */
  readonly issuer?: string;
  /**
  * The JSON web key set (JWKS) of the OIDC issuer that should be used to verify tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#issuer_keys Identity#issuer_keys}
  */
  readonly issuerKeys?: string;
  /**
  * The exact subject that must appear in tokens to assume this identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#subject Identity#subject}
  */
  readonly subject?: string;
}

export function identityStaticToTerraform(struct?: IdentityStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration: cdktf.stringToTerraform(struct!.expiration),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    issuer_keys: cdktf.stringToTerraform(struct!.issuerKeys),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function identityStaticToHclTerraform(struct?: IdentityStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration: {
      value: cdktf.stringToHclTerraform(struct!.expiration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_keys: {
      value: cdktf.stringToHclTerraform(struct!.issuerKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityStaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityStatic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._issuerKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerKeys = this._issuerKeys;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityStatic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expiration = undefined;
      this._issuer = undefined;
      this._issuerKeys = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expiration = value.expiration;
      this._issuer = value.issuer;
      this._issuerKeys = value.issuerKeys;
      this._subject = value.subject;
    }
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: string; 
  public get expiration() {
    return this.getStringAttribute('expiration');
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // issuer_keys - computed: false, optional: true, required: false
  private _issuerKeys?: string; 
  public get issuerKeys() {
    return this.getStringAttribute('issuer_keys');
  }
  public set issuerKeys(value: string) {
    this._issuerKeys = value;
  }
  public resetIssuerKeys() {
    this._issuerKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerKeysInput() {
    return this._issuerKeys;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity chainguard_identity}
*/
export class Identity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chainguard_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Identity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Identity to import
  * @param importFromId The id of the existing Identity that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Identity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chainguard_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/identity chainguard_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'chainguard_identity',
      terraformGeneratorMetadata: {
        providerName: 'chainguard',
        providerVersion: '0.1.38',
        providerVersionConstraint: '0.1.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._parentId = config.parentId;
    this._servicePrincipal = config.servicePrincipal;
    this._awsIdentity.internalValue = config.awsIdentity;
    this._claimMatch.internalValue = config.claimMatch;
    this._static.internalValue = config.static;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // parent_id - computed: false, optional: false, required: true
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // service_principal - computed: false, optional: true, required: false
  private _servicePrincipal?: string; 
  public get servicePrincipal() {
    return this.getStringAttribute('service_principal');
  }
  public set servicePrincipal(value: string) {
    this._servicePrincipal = value;
  }
  public resetServicePrincipal() {
    this._servicePrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalInput() {
    return this._servicePrincipal;
  }

  // aws_identity - computed: false, optional: true, required: false
  private _awsIdentity = new IdentityAwsIdentityOutputReference(this, "aws_identity");
  public get awsIdentity() {
    return this._awsIdentity;
  }
  public putAwsIdentity(value: IdentityAwsIdentity) {
    this._awsIdentity.internalValue = value;
  }
  public resetAwsIdentity() {
    this._awsIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIdentityInput() {
    return this._awsIdentity.internalValue;
  }

  // claim_match - computed: false, optional: true, required: false
  private _claimMatch = new IdentityClaimMatchOutputReference(this, "claim_match");
  public get claimMatch() {
    return this._claimMatch;
  }
  public putClaimMatch(value: IdentityClaimMatch) {
    this._claimMatch.internalValue = value;
  }
  public resetClaimMatch() {
    this._claimMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimMatchInput() {
    return this._claimMatch.internalValue;
  }

  // static - computed: false, optional: true, required: false
  private _static = new IdentityStaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
  public putStatic(value: IdentityStatic) {
    this._static.internalValue = value;
  }
  public resetStatic() {
    this._static.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
      service_principal: cdktf.stringToTerraform(this._servicePrincipal),
      aws_identity: identityAwsIdentityToTerraform(this._awsIdentity.internalValue),
      claim_match: identityClaimMatchToTerraform(this._claimMatch.internalValue),
      static: identityStaticToTerraform(this._static.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_principal: {
        value: cdktf.stringToHclTerraform(this._servicePrincipal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_identity: {
        value: identityAwsIdentityToHclTerraform(this._awsIdentity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityAwsIdentity",
      },
      claim_match: {
        value: identityClaimMatchToHclTerraform(this._claimMatch.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityClaimMatch",
      },
      static: {
        value: identityStaticToHclTerraform(this._static.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityStatic",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
