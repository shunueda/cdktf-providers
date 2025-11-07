// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationTeradataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#configuration DestinationTeradata#configuration}
  */
  readonly configuration: DestinationTeradataConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#definition_id DestinationTeradata#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the destination e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#name DestinationTeradata#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#workspace_id DestinationTeradata#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DestinationTeradataConfigurationLogmechLdap {
  /**
  * Enter the password associated with the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#password DestinationTeradata#password}
  */
  readonly password: string;
  /**
  * Username to use to access the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#username DestinationTeradata#username}
  */
  readonly username: string;
}

export function destinationTeradataConfigurationLogmechLdapToTerraform(struct?: DestinationTeradataConfigurationLogmechLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function destinationTeradataConfigurationLogmechLdapToHclTerraform(struct?: DestinationTeradataConfigurationLogmechLdap | cdktf.IResolvable): any {
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

export class DestinationTeradataConfigurationLogmechLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationTeradataConfigurationLogmechLdap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DestinationTeradataConfigurationLogmechLdap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
export interface DestinationTeradataConfigurationLogmechTd2 {
  /**
  * Enter the password associated with the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#password DestinationTeradata#password}
  */
  readonly password: string;
  /**
  * Username to use to access the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#username DestinationTeradata#username}
  */
  readonly username: string;
}

export function destinationTeradataConfigurationLogmechTd2ToTerraform(struct?: DestinationTeradataConfigurationLogmechTd2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function destinationTeradataConfigurationLogmechTd2ToHclTerraform(struct?: DestinationTeradataConfigurationLogmechTd2 | cdktf.IResolvable): any {
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

export class DestinationTeradataConfigurationLogmechTd2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationTeradataConfigurationLogmechTd2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DestinationTeradataConfigurationLogmechTd2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
export interface DestinationTeradataConfigurationLogmech {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#ldap DestinationTeradata#ldap}
  */
  readonly ldap?: DestinationTeradataConfigurationLogmechLdap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#td2 DestinationTeradata#td2}
  */
  readonly td2?: DestinationTeradataConfigurationLogmechTd2;
}

export function destinationTeradataConfigurationLogmechToTerraform(struct?: DestinationTeradataConfigurationLogmech | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ldap: destinationTeradataConfigurationLogmechLdapToTerraform(struct!.ldap),
    td2: destinationTeradataConfigurationLogmechTd2ToTerraform(struct!.td2),
  }
}


export function destinationTeradataConfigurationLogmechToHclTerraform(struct?: DestinationTeradataConfigurationLogmech | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ldap: {
      value: destinationTeradataConfigurationLogmechLdapToHclTerraform(struct!.ldap),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationTeradataConfigurationLogmechLdap",
    },
    td2: {
      value: destinationTeradataConfigurationLogmechTd2ToHclTerraform(struct!.td2),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationTeradataConfigurationLogmechTd2",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationTeradataConfigurationLogmechOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationTeradataConfigurationLogmech | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ldap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldap = this._ldap?.internalValue;
    }
    if (this._td2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.td2 = this._td2?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationTeradataConfigurationLogmech | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ldap.internalValue = undefined;
      this._td2.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ldap.internalValue = value.ldap;
      this._td2.internalValue = value.td2;
    }
  }

  // ldap - computed: false, optional: true, required: false
  private _ldap = new DestinationTeradataConfigurationLogmechLdapOutputReference(this, "ldap");
  public get ldap() {
    return this._ldap;
  }
  public putLdap(value: DestinationTeradataConfigurationLogmechLdap) {
    this._ldap.internalValue = value;
  }
  public resetLdap() {
    this._ldap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap.internalValue;
  }

  // td2 - computed: false, optional: true, required: false
  private _td2 = new DestinationTeradataConfigurationLogmechTd2OutputReference(this, "td2");
  public get td2() {
    return this._td2;
  }
  public putTd2(value: DestinationTeradataConfigurationLogmechTd2) {
    this._td2.internalValue = value;
  }
  public resetTd2() {
    this._td2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get td2Input() {
    return this._td2.internalValue;
  }
}
export interface DestinationTeradataConfigurationSslModeAllow {
}

export function destinationTeradataConfigurationSslModeAllowToTerraform(struct?: DestinationTeradataConfigurationSslModeAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationTeradataConfigurationSslModeAllowToHclTerraform(struct?: DestinationTeradataConfigurationSslModeAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationTeradataConfigurationSslModeAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationTeradataConfigurationSslModeAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationTeradataConfigurationSslModeAllow | cdktf.IResolvable | undefined) {
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
}
export interface DestinationTeradataConfigurationSslModeDisable {
}

export function destinationTeradataConfigurationSslModeDisableToTerraform(struct?: DestinationTeradataConfigurationSslModeDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationTeradataConfigurationSslModeDisableToHclTerraform(struct?: DestinationTeradataConfigurationSslModeDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationTeradataConfigurationSslModeDisableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationTeradataConfigurationSslModeDisable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationTeradataConfigurationSslModeDisable | cdktf.IResolvable | undefined) {
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
}
export interface DestinationTeradataConfigurationSslModePrefer {
}

export function destinationTeradataConfigurationSslModePreferToTerraform(struct?: DestinationTeradataConfigurationSslModePrefer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationTeradataConfigurationSslModePreferToHclTerraform(struct?: DestinationTeradataConfigurationSslModePrefer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationTeradataConfigurationSslModePreferOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationTeradataConfigurationSslModePrefer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationTeradataConfigurationSslModePrefer | cdktf.IResolvable | undefined) {
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
}
export interface DestinationTeradataConfigurationSslModeRequire {
}

export function destinationTeradataConfigurationSslModeRequireToTerraform(struct?: DestinationTeradataConfigurationSslModeRequire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationTeradataConfigurationSslModeRequireToHclTerraform(struct?: DestinationTeradataConfigurationSslModeRequire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationTeradataConfigurationSslModeRequireOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationTeradataConfigurationSslModeRequire | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationTeradataConfigurationSslModeRequire | cdktf.IResolvable | undefined) {
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
}
export interface DestinationTeradataConfigurationSslModeVerifyCa {
  /**
  * Specifies the file name of a PEM file that contains Certificate Authority (CA) certificates for use with SSLMODE=verify-ca.
  *  See more information - <a href="https://teradata-docs.s3.amazonaws.com/doc/connectivity/jdbc/reference/current/jdbcug_chapter_2.html#URL_SSLCA"> in the docs</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#ssl_ca_certificate DestinationTeradata#ssl_ca_certificate}
  */
  readonly sslCaCertificate: string;
}

export function destinationTeradataConfigurationSslModeVerifyCaToTerraform(struct?: DestinationTeradataConfigurationSslModeVerifyCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssl_ca_certificate: cdktf.stringToTerraform(struct!.sslCaCertificate),
  }
}


export function destinationTeradataConfigurationSslModeVerifyCaToHclTerraform(struct?: DestinationTeradataConfigurationSslModeVerifyCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssl_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.sslCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationTeradataConfigurationSslModeVerifyCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationTeradataConfigurationSslModeVerifyCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sslCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCaCertificate = this._sslCaCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationTeradataConfigurationSslModeVerifyCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sslCaCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sslCaCertificate = value.sslCaCertificate;
    }
  }

  // ssl_ca_certificate - computed: false, optional: false, required: true
  private _sslCaCertificate?: string; 
  public get sslCaCertificate() {
    return this.getStringAttribute('ssl_ca_certificate');
  }
  public set sslCaCertificate(value: string) {
    this._sslCaCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCaCertificateInput() {
    return this._sslCaCertificate;
  }
}
export interface DestinationTeradataConfigurationSslModeVerifyFull {
  /**
  * Specifies the file name of a PEM file that contains Certificate Authority (CA) certificates for use with SSLMODE=verify-full.
  *  See more information - <a href="https://teradata-docs.s3.amazonaws.com/doc/connectivity/jdbc/reference/current/jdbcug_chapter_2.html#URL_SSLCA"> in the docs</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#ssl_ca_certificate DestinationTeradata#ssl_ca_certificate}
  */
  readonly sslCaCertificate: string;
}

export function destinationTeradataConfigurationSslModeVerifyFullToTerraform(struct?: DestinationTeradataConfigurationSslModeVerifyFull | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssl_ca_certificate: cdktf.stringToTerraform(struct!.sslCaCertificate),
  }
}


export function destinationTeradataConfigurationSslModeVerifyFullToHclTerraform(struct?: DestinationTeradataConfigurationSslModeVerifyFull | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssl_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.sslCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationTeradataConfigurationSslModeVerifyFullOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationTeradataConfigurationSslModeVerifyFull | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sslCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCaCertificate = this._sslCaCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationTeradataConfigurationSslModeVerifyFull | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sslCaCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sslCaCertificate = value.sslCaCertificate;
    }
  }

  // ssl_ca_certificate - computed: false, optional: false, required: true
  private _sslCaCertificate?: string; 
  public get sslCaCertificate() {
    return this.getStringAttribute('ssl_ca_certificate');
  }
  public set sslCaCertificate(value: string) {
    this._sslCaCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCaCertificateInput() {
    return this._sslCaCertificate;
  }
}
export interface DestinationTeradataConfigurationSslMode {
  /**
  * Allow SSL mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#allow DestinationTeradata#allow}
  */
  readonly allow?: DestinationTeradataConfigurationSslModeAllow;
  /**
  * Disable SSL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#disable DestinationTeradata#disable}
  */
  readonly disable?: DestinationTeradataConfigurationSslModeDisable;
  /**
  * Prefer SSL mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#prefer DestinationTeradata#prefer}
  */
  readonly prefer?: DestinationTeradataConfigurationSslModePrefer;
  /**
  * Require SSL mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#require DestinationTeradata#require}
  */
  readonly require?: DestinationTeradataConfigurationSslModeRequire;
  /**
  * Verify-ca SSL mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#verify_ca DestinationTeradata#verify_ca}
  */
  readonly verifyCa?: DestinationTeradataConfigurationSslModeVerifyCa;
  /**
  * Verify-full SSL mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#verify_full DestinationTeradata#verify_full}
  */
  readonly verifyFull?: DestinationTeradataConfigurationSslModeVerifyFull;
}

export function destinationTeradataConfigurationSslModeToTerraform(struct?: DestinationTeradataConfigurationSslMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: destinationTeradataConfigurationSslModeAllowToTerraform(struct!.allow),
    disable: destinationTeradataConfigurationSslModeDisableToTerraform(struct!.disable),
    prefer: destinationTeradataConfigurationSslModePreferToTerraform(struct!.prefer),
    require: destinationTeradataConfigurationSslModeRequireToTerraform(struct!.require),
    verify_ca: destinationTeradataConfigurationSslModeVerifyCaToTerraform(struct!.verifyCa),
    verify_full: destinationTeradataConfigurationSslModeVerifyFullToTerraform(struct!.verifyFull),
  }
}


export function destinationTeradataConfigurationSslModeToHclTerraform(struct?: DestinationTeradataConfigurationSslMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: destinationTeradataConfigurationSslModeAllowToHclTerraform(struct!.allow),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationTeradataConfigurationSslModeAllow",
    },
    disable: {
      value: destinationTeradataConfigurationSslModeDisableToHclTerraform(struct!.disable),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationTeradataConfigurationSslModeDisable",
    },
    prefer: {
      value: destinationTeradataConfigurationSslModePreferToHclTerraform(struct!.prefer),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationTeradataConfigurationSslModePrefer",
    },
    require: {
      value: destinationTeradataConfigurationSslModeRequireToHclTerraform(struct!.require),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationTeradataConfigurationSslModeRequire",
    },
    verify_ca: {
      value: destinationTeradataConfigurationSslModeVerifyCaToHclTerraform(struct!.verifyCa),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationTeradataConfigurationSslModeVerifyCa",
    },
    verify_full: {
      value: destinationTeradataConfigurationSslModeVerifyFullToHclTerraform(struct!.verifyFull),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationTeradataConfigurationSslModeVerifyFull",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationTeradataConfigurationSslModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationTeradataConfigurationSslMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._disable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable?.internalValue;
    }
    if (this._prefer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefer = this._prefer?.internalValue;
    }
    if (this._require?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.require = this._require?.internalValue;
    }
    if (this._verifyCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCa = this._verifyCa?.internalValue;
    }
    if (this._verifyFull?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyFull = this._verifyFull?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationTeradataConfigurationSslMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow.internalValue = undefined;
      this._disable.internalValue = undefined;
      this._prefer.internalValue = undefined;
      this._require.internalValue = undefined;
      this._verifyCa.internalValue = undefined;
      this._verifyFull.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow.internalValue = value.allow;
      this._disable.internalValue = value.disable;
      this._prefer.internalValue = value.prefer;
      this._require.internalValue = value.require;
      this._verifyCa.internalValue = value.verifyCa;
      this._verifyFull.internalValue = value.verifyFull;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new DestinationTeradataConfigurationSslModeAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: DestinationTeradataConfigurationSslModeAllow) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // disable - computed: false, optional: true, required: false
  private _disable = new DestinationTeradataConfigurationSslModeDisableOutputReference(this, "disable");
  public get disable() {
    return this._disable;
  }
  public putDisable(value: DestinationTeradataConfigurationSslModeDisable) {
    this._disable.internalValue = value;
  }
  public resetDisable() {
    this._disable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable.internalValue;
  }

  // prefer - computed: false, optional: true, required: false
  private _prefer = new DestinationTeradataConfigurationSslModePreferOutputReference(this, "prefer");
  public get prefer() {
    return this._prefer;
  }
  public putPrefer(value: DestinationTeradataConfigurationSslModePrefer) {
    this._prefer.internalValue = value;
  }
  public resetPrefer() {
    this._prefer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferInput() {
    return this._prefer.internalValue;
  }

  // require - computed: false, optional: true, required: false
  private _require = new DestinationTeradataConfigurationSslModeRequireOutputReference(this, "require");
  public get require() {
    return this._require;
  }
  public putRequire(value: DestinationTeradataConfigurationSslModeRequire) {
    this._require.internalValue = value;
  }
  public resetRequire() {
    this._require.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireInput() {
    return this._require.internalValue;
  }

  // verify_ca - computed: false, optional: true, required: false
  private _verifyCa = new DestinationTeradataConfigurationSslModeVerifyCaOutputReference(this, "verify_ca");
  public get verifyCa() {
    return this._verifyCa;
  }
  public putVerifyCa(value: DestinationTeradataConfigurationSslModeVerifyCa) {
    this._verifyCa.internalValue = value;
  }
  public resetVerifyCa() {
    this._verifyCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCaInput() {
    return this._verifyCa.internalValue;
  }

  // verify_full - computed: false, optional: true, required: false
  private _verifyFull = new DestinationTeradataConfigurationSslModeVerifyFullOutputReference(this, "verify_full");
  public get verifyFull() {
    return this._verifyFull;
  }
  public putVerifyFull(value: DestinationTeradataConfigurationSslModeVerifyFull) {
    this._verifyFull.internalValue = value;
  }
  public resetVerifyFull() {
    this._verifyFull.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyFullInput() {
    return this._verifyFull.internalValue;
  }
}
export interface DestinationTeradataConfiguration {
  /**
  * Disable Writing Final Tables. WARNING! The data format in _airbyte_data is likely stable but there are no guarantees that other metadata columns will remain the same in future versions. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#disable_type_dedupe DestinationTeradata#disable_type_dedupe}
  */
  readonly disableTypeDedupe?: boolean | cdktf.IResolvable;
  /**
  * Drop tables with CASCADE. WARNING! This will delete all data in all dependent objects (views, etc.). Use with caution. This option is intended for usecases which can easily rebuild the dependent objects. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#drop_cascade DestinationTeradata#drop_cascade}
  */
  readonly dropCascade?: boolean | cdktf.IResolvable;
  /**
  * Hostname of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#host DestinationTeradata#host}
  */
  readonly host: string;
  /**
  * Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (example: key1=value1&key2=value2&key3=value3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#jdbc_url_params DestinationTeradata#jdbc_url_params}
  */
  readonly jdbcUrlParams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#logmech DestinationTeradata#logmech}
  */
  readonly logmech?: DestinationTeradataConfigurationLogmech;
  /**
  * Defines the custom session query band using name-value pairs. For example, 'org=Finance;report=Fin123;'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#query_band DestinationTeradata#query_band}
  */
  readonly queryBand?: string;
  /**
  * The database to write raw tables into
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#raw_data_schema DestinationTeradata#raw_data_schema}
  */
  readonly rawDataSchema?: string;
  /**
  * The default schema tables are written to if the source does not specify a namespace. The usual value for this field is "public". Default: "airbyte_td"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#schema DestinationTeradata#schema}
  */
  readonly schema?: string;
  /**
  * Encrypt data using SSL. When activating SSL, please select one of the SSL modes. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#ssl DestinationTeradata#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * SSL connection modes. 
  *  <b>disable</b> - Chose this mode to disable encryption of communication between Airbyte and destination database
  *  <b>allow</b> - Chose this mode to enable encryption only when required by the destination database
  *  <b>prefer</b> - Chose this mode to allow unencrypted connection only if the destination database does not support encryption
  *  <b>require</b> - Chose this mode to always require encryption. If the destination database server does not support encryption, connection will fail
  *   <b>verify-ca</b> - Chose this mode to always require encryption and to verify that the destination database server has a valid SSL certificate
  *   <b>verify-full</b> - This is the most secure mode. Chose this mode to always require encryption and to verify the identity of the destination database server
  *  See more information - <a href="https://teradata-docs.s3.amazonaws.com/doc/connectivity/jdbc/reference/current/jdbcug_chapter_2.html#URL_SSLMODE"> in the docs</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#ssl_mode DestinationTeradata#ssl_mode}
  */
  readonly sslMode?: DestinationTeradataConfigurationSslMode;
}

export function destinationTeradataConfigurationToTerraform(struct?: DestinationTeradataConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_type_dedupe: cdktf.booleanToTerraform(struct!.disableTypeDedupe),
    drop_cascade: cdktf.booleanToTerraform(struct!.dropCascade),
    host: cdktf.stringToTerraform(struct!.host),
    jdbc_url_params: cdktf.stringToTerraform(struct!.jdbcUrlParams),
    logmech: destinationTeradataConfigurationLogmechToTerraform(struct!.logmech),
    query_band: cdktf.stringToTerraform(struct!.queryBand),
    raw_data_schema: cdktf.stringToTerraform(struct!.rawDataSchema),
    schema: cdktf.stringToTerraform(struct!.schema),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
    ssl_mode: destinationTeradataConfigurationSslModeToTerraform(struct!.sslMode),
  }
}


export function destinationTeradataConfigurationToHclTerraform(struct?: DestinationTeradataConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_type_dedupe: {
      value: cdktf.booleanToHclTerraform(struct!.disableTypeDedupe),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_cascade: {
      value: cdktf.booleanToHclTerraform(struct!.dropCascade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jdbc_url_params: {
      value: cdktf.stringToHclTerraform(struct!.jdbcUrlParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logmech: {
      value: destinationTeradataConfigurationLogmechToHclTerraform(struct!.logmech),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationTeradataConfigurationLogmech",
    },
    query_band: {
      value: cdktf.stringToHclTerraform(struct!.queryBand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_data_schema: {
      value: cdktf.stringToHclTerraform(struct!.rawDataSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl: {
      value: cdktf.booleanToHclTerraform(struct!.ssl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_mode: {
      value: destinationTeradataConfigurationSslModeToHclTerraform(struct!.sslMode),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationTeradataConfigurationSslMode",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationTeradataConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationTeradataConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableTypeDedupe !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTypeDedupe = this._disableTypeDedupe;
    }
    if (this._dropCascade !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropCascade = this._dropCascade;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._jdbcUrlParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.jdbcUrlParams = this._jdbcUrlParams;
    }
    if (this._logmech?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logmech = this._logmech?.internalValue;
    }
    if (this._queryBand !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryBand = this._queryBand;
    }
    if (this._rawDataSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawDataSchema = this._rawDataSchema;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._sslMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationTeradataConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableTypeDedupe = undefined;
      this._dropCascade = undefined;
      this._host = undefined;
      this._jdbcUrlParams = undefined;
      this._logmech.internalValue = undefined;
      this._queryBand = undefined;
      this._rawDataSchema = undefined;
      this._schema = undefined;
      this._ssl = undefined;
      this._sslMode.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableTypeDedupe = value.disableTypeDedupe;
      this._dropCascade = value.dropCascade;
      this._host = value.host;
      this._jdbcUrlParams = value.jdbcUrlParams;
      this._logmech.internalValue = value.logmech;
      this._queryBand = value.queryBand;
      this._rawDataSchema = value.rawDataSchema;
      this._schema = value.schema;
      this._ssl = value.ssl;
      this._sslMode.internalValue = value.sslMode;
    }
  }

  // disable_type_dedupe - computed: true, optional: true, required: false
  private _disableTypeDedupe?: boolean | cdktf.IResolvable; 
  public get disableTypeDedupe() {
    return this.getBooleanAttribute('disable_type_dedupe');
  }
  public set disableTypeDedupe(value: boolean | cdktf.IResolvable) {
    this._disableTypeDedupe = value;
  }
  public resetDisableTypeDedupe() {
    this._disableTypeDedupe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTypeDedupeInput() {
    return this._disableTypeDedupe;
  }

  // drop_cascade - computed: true, optional: true, required: false
  private _dropCascade?: boolean | cdktf.IResolvable; 
  public get dropCascade() {
    return this.getBooleanAttribute('drop_cascade');
  }
  public set dropCascade(value: boolean | cdktf.IResolvable) {
    this._dropCascade = value;
  }
  public resetDropCascade() {
    this._dropCascade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCascadeInput() {
    return this._dropCascade;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // jdbc_url_params - computed: false, optional: true, required: false
  private _jdbcUrlParams?: string; 
  public get jdbcUrlParams() {
    return this.getStringAttribute('jdbc_url_params');
  }
  public set jdbcUrlParams(value: string) {
    this._jdbcUrlParams = value;
  }
  public resetJdbcUrlParams() {
    this._jdbcUrlParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcUrlParamsInput() {
    return this._jdbcUrlParams;
  }

  // logmech - computed: false, optional: true, required: false
  private _logmech = new DestinationTeradataConfigurationLogmechOutputReference(this, "logmech");
  public get logmech() {
    return this._logmech;
  }
  public putLogmech(value: DestinationTeradataConfigurationLogmech) {
    this._logmech.internalValue = value;
  }
  public resetLogmech() {
    this._logmech.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logmechInput() {
    return this._logmech.internalValue;
  }

  // query_band - computed: false, optional: true, required: false
  private _queryBand?: string; 
  public get queryBand() {
    return this.getStringAttribute('query_band');
  }
  public set queryBand(value: string) {
    this._queryBand = value;
  }
  public resetQueryBand() {
    this._queryBand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryBandInput() {
    return this._queryBand;
  }

  // raw_data_schema - computed: false, optional: true, required: false
  private _rawDataSchema?: string; 
  public get rawDataSchema() {
    return this.getStringAttribute('raw_data_schema');
  }
  public set rawDataSchema(value: string) {
    this._rawDataSchema = value;
  }
  public resetRawDataSchema() {
    this._rawDataSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawDataSchemaInput() {
    return this._rawDataSchema;
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // ssl - computed: true, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // ssl_mode - computed: false, optional: true, required: false
  private _sslMode = new DestinationTeradataConfigurationSslModeOutputReference(this, "ssl_mode");
  public get sslMode() {
    return this._sslMode;
  }
  public putSslMode(value: DestinationTeradataConfigurationSslMode) {
    this._sslMode.internalValue = value;
  }
  public resetSslMode() {
    this._sslMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode.internalValue;
  }
}
export interface DestinationTeradataResourceAllocationDefault {
}

export function destinationTeradataResourceAllocationDefaultToTerraform(struct?: DestinationTeradataResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationTeradataResourceAllocationDefaultToHclTerraform(struct?: DestinationTeradataResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationTeradataResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationTeradataResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationTeradataResourceAllocationDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface DestinationTeradataResourceAllocationJobSpecificResourceRequirements {
}

export function destinationTeradataResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: DestinationTeradataResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationTeradataResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: DestinationTeradataResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationTeradataResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationTeradataResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationTeradataResourceAllocationJobSpecificResourceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface DestinationTeradataResourceAllocationJobSpecific {
}

export function destinationTeradataResourceAllocationJobSpecificToTerraform(struct?: DestinationTeradataResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationTeradataResourceAllocationJobSpecificToHclTerraform(struct?: DestinationTeradataResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationTeradataResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DestinationTeradataResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationTeradataResourceAllocationJobSpecific | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // resource_requirements - computed: true, optional: false, required: false
  private _resourceRequirements = new DestinationTeradataResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class DestinationTeradataResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): DestinationTeradataResourceAllocationJobSpecificOutputReference {
    return new DestinationTeradataResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationTeradataResourceAllocation {
}

export function destinationTeradataResourceAllocationToTerraform(struct?: DestinationTeradataResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationTeradataResourceAllocationToHclTerraform(struct?: DestinationTeradataResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationTeradataResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationTeradataResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationTeradataResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new DestinationTeradataResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new DestinationTeradataResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata airbyte_destination_teradata}
*/
export class DestinationTeradata extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_destination_teradata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationTeradata resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationTeradata to import
  * @param importFromId The id of the existing DestinationTeradata that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationTeradata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_destination_teradata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_teradata airbyte_destination_teradata} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationTeradataConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationTeradataConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_destination_teradata',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration.internalValue = config.configuration;
    this._definitionId = config.definitionId;
    this._name = config.name;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new DestinationTeradataConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DestinationTeradataConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // definition_id - computed: true, optional: true, required: false
  private _definitionId?: string; 
  public get definitionId() {
    return this.getStringAttribute('definition_id');
  }
  public set definitionId(value: string) {
    this._definitionId = value;
  }
  public resetDefinitionId() {
    this._definitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionIdInput() {
    return this._definitionId;
  }

  // destination_id - computed: true, optional: false, required: false
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }

  // destination_type - computed: true, optional: false, required: false
  public get destinationType() {
    return this.getStringAttribute('destination_type');
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

  // resource_allocation - computed: true, optional: false, required: false
  private _resourceAllocation = new DestinationTeradataResourceAllocationOutputReference(this, "resource_allocation");
  public get resourceAllocation() {
    return this._resourceAllocation;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: destinationTeradataConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: destinationTeradataConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DestinationTeradataConfiguration",
      },
      definition_id: {
        value: cdktf.stringToHclTerraform(this._definitionId),
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
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
