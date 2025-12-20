// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/authentication_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmAuthenticationProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/authentication_profile#device DataScmAuthenticationProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/authentication_profile#folder DataScmAuthenticationProfile#folder}
  */
  readonly folder?: string;
  /**
  * The UUID of the authentication profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/authentication_profile#id DataScmAuthenticationProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of the authentication profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/authentication_profile#name DataScmAuthenticationProfile#name}
  */
  readonly name?: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/authentication_profile#snippet DataScmAuthenticationProfile#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmAuthenticationProfileLockout {
}

export function dataScmAuthenticationProfileLockoutToTerraform(struct?: DataScmAuthenticationProfileLockout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAuthenticationProfileLockoutToHclTerraform(struct?: DataScmAuthenticationProfileLockout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAuthenticationProfileLockoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAuthenticationProfileLockout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAuthenticationProfileLockout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failed_attempts - computed: true, optional: false, required: false
  public get failedAttempts() {
    return this.getNumberAttribute('failed_attempts');
  }

  // lockout_time - computed: true, optional: false, required: false
  public get lockoutTime() {
    return this.getNumberAttribute('lockout_time');
  }
}
export interface DataScmAuthenticationProfileMethodCloud {
}

export function dataScmAuthenticationProfileMethodCloudToTerraform(struct?: DataScmAuthenticationProfileMethodCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAuthenticationProfileMethodCloudToHclTerraform(struct?: DataScmAuthenticationProfileMethodCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAuthenticationProfileMethodCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAuthenticationProfileMethodCloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAuthenticationProfileMethodCloud | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profile_name - computed: true, optional: false, required: false
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
}
export interface DataScmAuthenticationProfileMethodKerberos {
}

export function dataScmAuthenticationProfileMethodKerberosToTerraform(struct?: DataScmAuthenticationProfileMethodKerberos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAuthenticationProfileMethodKerberosToHclTerraform(struct?: DataScmAuthenticationProfileMethodKerberos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAuthenticationProfileMethodKerberosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAuthenticationProfileMethodKerberos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAuthenticationProfileMethodKerberos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // realm - computed: true, optional: false, required: false
  public get realm() {
    return this.getStringAttribute('realm');
  }

  // server_profile - computed: true, optional: false, required: false
  public get serverProfile() {
    return this.getStringAttribute('server_profile');
  }
}
export interface DataScmAuthenticationProfileMethodLdap {
}

export function dataScmAuthenticationProfileMethodLdapToTerraform(struct?: DataScmAuthenticationProfileMethodLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAuthenticationProfileMethodLdapToHclTerraform(struct?: DataScmAuthenticationProfileMethodLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAuthenticationProfileMethodLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAuthenticationProfileMethodLdap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAuthenticationProfileMethodLdap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // login_attribute - computed: true, optional: false, required: false
  public get loginAttribute() {
    return this.getStringAttribute('login_attribute');
  }

  // passwd_exp_days - computed: true, optional: false, required: false
  public get passwdExpDays() {
    return this.getNumberAttribute('passwd_exp_days');
  }

  // server_profile - computed: true, optional: false, required: false
  public get serverProfile() {
    return this.getStringAttribute('server_profile');
  }
}
export interface DataScmAuthenticationProfileMethodLocalDatabase {
}

export function dataScmAuthenticationProfileMethodLocalDatabaseToTerraform(struct?: DataScmAuthenticationProfileMethodLocalDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAuthenticationProfileMethodLocalDatabaseToHclTerraform(struct?: DataScmAuthenticationProfileMethodLocalDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAuthenticationProfileMethodLocalDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAuthenticationProfileMethodLocalDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAuthenticationProfileMethodLocalDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmAuthenticationProfileMethodRadius {
}

export function dataScmAuthenticationProfileMethodRadiusToTerraform(struct?: DataScmAuthenticationProfileMethodRadius): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAuthenticationProfileMethodRadiusToHclTerraform(struct?: DataScmAuthenticationProfileMethodRadius): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAuthenticationProfileMethodRadiusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAuthenticationProfileMethodRadius | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAuthenticationProfileMethodRadius | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // checkgroup - computed: true, optional: false, required: false
  public get checkgroup() {
    return this.getBooleanAttribute('checkgroup');
  }

  // server_profile - computed: true, optional: false, required: false
  public get serverProfile() {
    return this.getStringAttribute('server_profile');
  }
}
export interface DataScmAuthenticationProfileMethodSamlIdp {
}

export function dataScmAuthenticationProfileMethodSamlIdpToTerraform(struct?: DataScmAuthenticationProfileMethodSamlIdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAuthenticationProfileMethodSamlIdpToHclTerraform(struct?: DataScmAuthenticationProfileMethodSamlIdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAuthenticationProfileMethodSamlIdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAuthenticationProfileMethodSamlIdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAuthenticationProfileMethodSamlIdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name_usergroup - computed: true, optional: false, required: false
  public get attributeNameUsergroup() {
    return this.getStringAttribute('attribute_name_usergroup');
  }

  // attribute_name_username - computed: true, optional: false, required: false
  public get attributeNameUsername() {
    return this.getStringAttribute('attribute_name_username');
  }

  // certificate_profile - computed: true, optional: false, required: false
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }

  // enable_single_logout - computed: true, optional: false, required: false
  public get enableSingleLogout() {
    return this.getBooleanAttribute('enable_single_logout');
  }

  // request_signing_certificate - computed: true, optional: false, required: false
  public get requestSigningCertificate() {
    return this.getStringAttribute('request_signing_certificate');
  }

  // server_profile - computed: true, optional: false, required: false
  public get serverProfile() {
    return this.getStringAttribute('server_profile');
  }
}
export interface DataScmAuthenticationProfileMethodTacplus {
}

export function dataScmAuthenticationProfileMethodTacplusToTerraform(struct?: DataScmAuthenticationProfileMethodTacplus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAuthenticationProfileMethodTacplusToHclTerraform(struct?: DataScmAuthenticationProfileMethodTacplus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAuthenticationProfileMethodTacplusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAuthenticationProfileMethodTacplus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAuthenticationProfileMethodTacplus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // checkgroup - computed: true, optional: false, required: false
  public get checkgroup() {
    return this.getBooleanAttribute('checkgroup');
  }

  // server_profile - computed: true, optional: false, required: false
  public get serverProfile() {
    return this.getStringAttribute('server_profile');
  }
}
export interface DataScmAuthenticationProfileMethod {
}

export function dataScmAuthenticationProfileMethodToTerraform(struct?: DataScmAuthenticationProfileMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAuthenticationProfileMethodToHclTerraform(struct?: DataScmAuthenticationProfileMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAuthenticationProfileMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAuthenticationProfileMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAuthenticationProfileMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud - computed: true, optional: false, required: false
  private _cloud = new DataScmAuthenticationProfileMethodCloudOutputReference(this, "cloud");
  public get cloud() {
    return this._cloud;
  }

  // kerberos - computed: true, optional: false, required: false
  private _kerberos = new DataScmAuthenticationProfileMethodKerberosOutputReference(this, "kerberos");
  public get kerberos() {
    return this._kerberos;
  }

  // ldap - computed: true, optional: false, required: false
  private _ldap = new DataScmAuthenticationProfileMethodLdapOutputReference(this, "ldap");
  public get ldap() {
    return this._ldap;
  }

  // local_database - computed: true, optional: false, required: false
  private _localDatabase = new DataScmAuthenticationProfileMethodLocalDatabaseOutputReference(this, "local_database");
  public get localDatabase() {
    return this._localDatabase;
  }

  // radius - computed: true, optional: false, required: false
  private _radius = new DataScmAuthenticationProfileMethodRadiusOutputReference(this, "radius");
  public get radius() {
    return this._radius;
  }

  // saml_idp - computed: true, optional: false, required: false
  private _samlIdp = new DataScmAuthenticationProfileMethodSamlIdpOutputReference(this, "saml_idp");
  public get samlIdp() {
    return this._samlIdp;
  }

  // tacplus - computed: true, optional: false, required: false
  private _tacplus = new DataScmAuthenticationProfileMethodTacplusOutputReference(this, "tacplus");
  public get tacplus() {
    return this._tacplus;
  }
}
export interface DataScmAuthenticationProfileMultiFactorAuth {
}

export function dataScmAuthenticationProfileMultiFactorAuthToTerraform(struct?: DataScmAuthenticationProfileMultiFactorAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAuthenticationProfileMultiFactorAuthToHclTerraform(struct?: DataScmAuthenticationProfileMultiFactorAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAuthenticationProfileMultiFactorAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAuthenticationProfileMultiFactorAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAuthenticationProfileMultiFactorAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // factors - computed: true, optional: false, required: false
  public get factors() {
    return this.getListAttribute('factors');
  }

  // mfa_enable - computed: true, optional: false, required: false
  public get mfaEnable() {
    return this.getBooleanAttribute('mfa_enable');
  }
}
export interface DataScmAuthenticationProfileSingleSignOn {
}

export function dataScmAuthenticationProfileSingleSignOnToTerraform(struct?: DataScmAuthenticationProfileSingleSignOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAuthenticationProfileSingleSignOnToHclTerraform(struct?: DataScmAuthenticationProfileSingleSignOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAuthenticationProfileSingleSignOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAuthenticationProfileSingleSignOn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAuthenticationProfileSingleSignOn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kerberos_keytab - computed: true, optional: false, required: false
  public get kerberosKeytab() {
    return this.getStringAttribute('kerberos_keytab');
  }

  // realm - computed: true, optional: false, required: false
  public get realm() {
    return this.getStringAttribute('realm');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/authentication_profile scm_authentication_profile}
*/
export class DataScmAuthenticationProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_authentication_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmAuthenticationProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmAuthenticationProfile to import
  * @param importFromId The id of the existing DataScmAuthenticationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/authentication_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmAuthenticationProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_authentication_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/authentication_profile scm_authentication_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmAuthenticationProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmAuthenticationProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_authentication_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._id = config.id;
    this._name = config.name;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_list - computed: true, optional: false, required: false
  public get allowList() {
    return this.getListAttribute('allow_list');
  }

  // device - computed: true, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: true, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // lockout - computed: true, optional: false, required: false
  private _lockout = new DataScmAuthenticationProfileLockoutOutputReference(this, "lockout");
  public get lockout() {
    return this._lockout;
  }

  // method - computed: true, optional: false, required: false
  private _method = new DataScmAuthenticationProfileMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }

  // multi_factor_auth - computed: true, optional: false, required: false
  private _multiFactorAuth = new DataScmAuthenticationProfileMultiFactorAuthOutputReference(this, "multi_factor_auth");
  public get multiFactorAuth() {
    return this._multiFactorAuth;
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

  // single_sign_on - computed: true, optional: false, required: false
  private _singleSignOn = new DataScmAuthenticationProfileSingleSignOnOutputReference(this, "single_sign_on");
  public get singleSignOn() {
    return this._singleSignOn;
  }

  // snippet - computed: true, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // user_domain - computed: true, optional: false, required: false
  public get userDomain() {
    return this.getStringAttribute('user_domain');
  }

  // username_modifier - computed: true, optional: false, required: false
  public get usernameModifier() {
    return this.getStringAttribute('username_modifier');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
