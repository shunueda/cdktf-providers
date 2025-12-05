// https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow this connection to be utilized with either on-premises data gateways or VNet data gateways. If the value of [`connectivity_type`](#connectivity_type) attribute is `VirtualNetworkGateway` this attribute is **NULL**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#allow_connection_usage_in_gateway Connection#allow_connection_usage_in_gateway}
  */
  readonly allowConnectionUsageInGateway?: boolean | cdktf.IResolvable;
  /**
  * The Connection connection details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#connection_details Connection#connection_details}
  */
  readonly connectionDetails: ConnectionConnectionDetails;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> The Connection connectivity type. Value must be one of : `ShareableCloud`, `VirtualNetworkGateway`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#connectivity_type Connection#connectivity_type}
  */
  readonly connectivityType: string;
  /**
  * The Connection credential details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#credential_details Connection#credential_details}
  */
  readonly credentialDetails: ConnectionCredentialDetails;
  /**
  * The Connection display name. String length must be at most 123.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#display_name Connection#display_name}
  */
  readonly displayName: string;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> The Connection gateway object ID. If the value of [`connectivity_type`](#connectivity_type) attribute is `VirtualNetworkGateway` this attribute is **REQUIRED**. If the value of [`connectivity_type`](#connectivity_type) attribute is `ShareableCloud` this attribute is **NULL**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#gateway_id Connection#gateway_id}
  */
  readonly gatewayId?: string;
  /**
  * The Connection privacy level. Value defaults to `Organizational`. Value must be one of : `None`, `Organizational`, `Private`, `Public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#privacy_level Connection#privacy_level}
  */
  readonly privacyLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#timeouts Connection#timeouts}
  */
  readonly timeouts?: ConnectionTimeouts;
}
export interface ConnectionConnectionDetailsParameters {
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> The name of the parameter. Name must contain at least one non-whitespace character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#name Connection#name}
  */
  readonly name: string;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> The value of the parameter. Value must contain at least one non-whitespace character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#value Connection#value}
  */
  readonly value: string;
}

export function connectionConnectionDetailsParametersToTerraform(struct?: ConnectionConnectionDetailsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function connectionConnectionDetailsParametersToHclTerraform(struct?: ConnectionConnectionDetailsParameters | cdktf.IResolvable): any {
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

export class ConnectionConnectionDetailsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionConnectionDetailsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionConnectionDetailsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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
      this._value = value.value;
    }
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
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

export class ConnectionConnectionDetailsParametersList extends cdktf.ComplexList {
  public internalValue? : ConnectionConnectionDetailsParameters[] | cdktf.IResolvable

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
  public get(index: number): ConnectionConnectionDetailsParametersOutputReference {
    return new ConnectionConnectionDetailsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionConnectionDetails {
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> The creation method used to create the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#creation_method Connection#creation_method}
  */
  readonly creationMethod: string;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> A set of connection parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#parameters Connection#parameters}
  */
  readonly parameters?: ConnectionConnectionDetailsParameters[] | cdktf.IResolvable;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> The type of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#type Connection#type}
  */
  readonly type: string;
}

export function connectionConnectionDetailsToTerraform(struct?: ConnectionConnectionDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    creation_method: cdktf.stringToTerraform(struct!.creationMethod),
    parameters: cdktf.listMapper(connectionConnectionDetailsParametersToTerraform, false)(struct!.parameters),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function connectionConnectionDetailsToHclTerraform(struct?: ConnectionConnectionDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    creation_method: {
      value: cdktf.stringToHclTerraform(struct!.creationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(connectionConnectionDetailsParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "ConnectionConnectionDetailsParametersList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionConnectionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionConnectionDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationMethod = this._creationMethod;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionConnectionDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._creationMethod = undefined;
      this._parameters.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._creationMethod = value.creationMethod;
      this._parameters.internalValue = value.parameters;
      this._type = value.type;
    }
  }

  // creation_method - computed: false, optional: false, required: true
  private _creationMethod?: string; 
  public get creationMethod() {
    return this.getStringAttribute('creation_method');
  }
  public set creationMethod(value: string) {
    this._creationMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get creationMethodInput() {
    return this._creationMethod;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new ConnectionConnectionDetailsParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ConnectionConnectionDetailsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ConnectionCredentialDetailsBasicCredentials {
  /**
  * The password (WO).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#password_wo Connection#password_wo}
  */
  readonly passwordWo: string;
  /**
  * The version of the `password_wo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#password_wo_version Connection#password_wo_version}
  */
  readonly passwordWoVersion: number;
  /**
  * The username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#username Connection#username}
  */
  readonly username: string;
}

export function connectionCredentialDetailsBasicCredentialsToTerraform(struct?: ConnectionCredentialDetailsBasicCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_wo: cdktf.stringToTerraform(struct!.passwordWo),
    password_wo_version: cdktf.numberToTerraform(struct!.passwordWoVersion),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function connectionCredentialDetailsBasicCredentialsToHclTerraform(struct?: ConnectionCredentialDetailsBasicCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_wo: {
      value: cdktf.stringToHclTerraform(struct!.passwordWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo_version: {
      value: cdktf.numberToHclTerraform(struct!.passwordWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ConnectionCredentialDetailsBasicCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionCredentialDetailsBasicCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWo = this._passwordWo;
    }
    if (this._passwordWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWoVersion = this._passwordWoVersion;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionCredentialDetailsBasicCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passwordWo = undefined;
      this._passwordWoVersion = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passwordWo = value.passwordWo;
      this._passwordWoVersion = value.passwordWoVersion;
      this._username = value.username;
    }
  }

  // password_wo - computed: false, optional: false, required: true
  private _passwordWo?: string; 
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // password_wo_version - computed: false, optional: false, required: true
  private _passwordWoVersion?: number; 
  public get passwordWoVersion() {
    return this.getNumberAttribute('password_wo_version');
  }
  public set passwordWoVersion(value: number) {
    this._passwordWoVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoVersionInput() {
    return this._passwordWoVersion;
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
export interface ConnectionCredentialDetailsKeyCredentials {
  /**
  * The key (WO).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#key_wo Connection#key_wo}
  */
  readonly keyWo: string;
  /**
  * The version of the `key_wo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#key_wo_version Connection#key_wo_version}
  */
  readonly keyWoVersion: number;
}

export function connectionCredentialDetailsKeyCredentialsToTerraform(struct?: ConnectionCredentialDetailsKeyCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_wo: cdktf.stringToTerraform(struct!.keyWo),
    key_wo_version: cdktf.numberToTerraform(struct!.keyWoVersion),
  }
}


export function connectionCredentialDetailsKeyCredentialsToHclTerraform(struct?: ConnectionCredentialDetailsKeyCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_wo: {
      value: cdktf.stringToHclTerraform(struct!.keyWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_wo_version: {
      value: cdktf.numberToHclTerraform(struct!.keyWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionCredentialDetailsKeyCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionCredentialDetailsKeyCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyWo = this._keyWo;
    }
    if (this._keyWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyWoVersion = this._keyWoVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionCredentialDetailsKeyCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyWo = undefined;
      this._keyWoVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyWo = value.keyWo;
      this._keyWoVersion = value.keyWoVersion;
    }
  }

  // key_wo - computed: false, optional: false, required: true
  private _keyWo?: string; 
  public get keyWo() {
    return this.getStringAttribute('key_wo');
  }
  public set keyWo(value: string) {
    this._keyWo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyWoInput() {
    return this._keyWo;
  }

  // key_wo_version - computed: false, optional: false, required: true
  private _keyWoVersion?: number; 
  public get keyWoVersion() {
    return this.getNumberAttribute('key_wo_version');
  }
  public set keyWoVersion(value: number) {
    this._keyWoVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyWoVersionInput() {
    return this._keyWoVersion;
  }
}
export interface ConnectionCredentialDetailsServicePrincipalCredentials {
  /**
  * The client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#client_id Connection#client_id}
  */
  readonly clientId: string;
  /**
  * The client secret (WO).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#client_secret_wo Connection#client_secret_wo}
  */
  readonly clientSecretWo: string;
  /**
  * The version of the `client_secret_wo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#client_secret_wo_version Connection#client_secret_wo_version}
  */
  readonly clientSecretWoVersion: number;
  /**
  * The tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#tenant_id Connection#tenant_id}
  */
  readonly tenantId: string;
}

export function connectionCredentialDetailsServicePrincipalCredentialsToTerraform(struct?: ConnectionCredentialDetailsServicePrincipalCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret_wo: cdktf.stringToTerraform(struct!.clientSecretWo),
    client_secret_wo_version: cdktf.numberToTerraform(struct!.clientSecretWoVersion),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function connectionCredentialDetailsServicePrincipalCredentialsToHclTerraform(struct?: ConnectionCredentialDetailsServicePrincipalCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_wo: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_wo_version: {
      value: cdktf.numberToHclTerraform(struct!.clientSecretWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionCredentialDetailsServicePrincipalCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionCredentialDetailsServicePrincipalCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretWo = this._clientSecretWo;
    }
    if (this._clientSecretWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretWoVersion = this._clientSecretWoVersion;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionCredentialDetailsServicePrincipalCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecretWo = undefined;
      this._clientSecretWoVersion = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecretWo = value.clientSecretWo;
      this._clientSecretWoVersion = value.clientSecretWoVersion;
      this._tenantId = value.tenantId;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret_wo - computed: false, optional: false, required: true
  private _clientSecretWo?: string; 
  public get clientSecretWo() {
    return this.getStringAttribute('client_secret_wo');
  }
  public set clientSecretWo(value: string) {
    this._clientSecretWo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretWoInput() {
    return this._clientSecretWo;
  }

  // client_secret_wo_version - computed: false, optional: false, required: true
  private _clientSecretWoVersion?: number; 
  public get clientSecretWoVersion() {
    return this.getNumberAttribute('client_secret_wo_version');
  }
  public set clientSecretWoVersion(value: number) {
    this._clientSecretWoVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretWoVersionInput() {
    return this._clientSecretWoVersion;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface ConnectionCredentialDetailsSharedAccessSignatureCredentials {
  /**
  * The token (WO).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#token_wo Connection#token_wo}
  */
  readonly tokenWo: string;
  /**
  * The version of the `token_wo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#token_wo_version Connection#token_wo_version}
  */
  readonly tokenWoVersion: number;
}

export function connectionCredentialDetailsSharedAccessSignatureCredentialsToTerraform(struct?: ConnectionCredentialDetailsSharedAccessSignatureCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_wo: cdktf.stringToTerraform(struct!.tokenWo),
    token_wo_version: cdktf.numberToTerraform(struct!.tokenWoVersion),
  }
}


export function connectionCredentialDetailsSharedAccessSignatureCredentialsToHclTerraform(struct?: ConnectionCredentialDetailsSharedAccessSignatureCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token_wo: {
      value: cdktf.stringToHclTerraform(struct!.tokenWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_wo_version: {
      value: cdktf.numberToHclTerraform(struct!.tokenWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionCredentialDetailsSharedAccessSignatureCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionCredentialDetailsSharedAccessSignatureCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenWo = this._tokenWo;
    }
    if (this._tokenWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenWoVersion = this._tokenWoVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionCredentialDetailsSharedAccessSignatureCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tokenWo = undefined;
      this._tokenWoVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tokenWo = value.tokenWo;
      this._tokenWoVersion = value.tokenWoVersion;
    }
  }

  // token_wo - computed: false, optional: false, required: true
  private _tokenWo?: string; 
  public get tokenWo() {
    return this.getStringAttribute('token_wo');
  }
  public set tokenWo(value: string) {
    this._tokenWo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenWoInput() {
    return this._tokenWo;
  }

  // token_wo_version - computed: false, optional: false, required: true
  private _tokenWoVersion?: number; 
  public get tokenWoVersion() {
    return this.getNumberAttribute('token_wo_version');
  }
  public set tokenWoVersion(value: number) {
    this._tokenWoVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenWoVersionInput() {
    return this._tokenWoVersion;
  }
}
export interface ConnectionCredentialDetails {
  /**
  * The basic credentials. If the value of [`<.credential_type`](#<.credential_type) attribute is `Basic` this attribute is **REQUIRED**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#basic_credentials Connection#basic_credentials}
  */
  readonly basicCredentials?: ConnectionCredentialDetailsBasicCredentials;
  /**
  * The connection encryption type. Value defaults to `NotEncrypted`. Value must be one of : `Any`, `Encrypted`, `NotEncrypted`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#connection_encryption Connection#connection_encryption}
  */
  readonly connectionEncryption?: string;
  /**
  * The credential type. Value must be one of : `Anonymous`, `Basic`, `Key`, `ServicePrincipal`, `SharedAccessSignature`, `Windows`, `WindowsWithoutImpersonation`, `WorkspaceIdentity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#credential_type Connection#credential_type}
  */
  readonly credentialType: string;
  /**
  * The key credentials. If the value of [`<.credential_type`](#<.credential_type) attribute is `Key` this attribute is **REQUIRED**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#key_credentials Connection#key_credentials}
  */
  readonly keyCredentials?: ConnectionCredentialDetailsKeyCredentials;
  /**
  * The service principal credentials. If the value of [`<.credential_type`](#<.credential_type) attribute is `ServicePrincipal` this attribute is **REQUIRED**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#service_principal_credentials Connection#service_principal_credentials}
  */
  readonly servicePrincipalCredentials?: ConnectionCredentialDetailsServicePrincipalCredentials;
  /**
  * The shared access signature credentials. If the value of [`<.credential_type`](#<.credential_type) attribute is `SharedAccessSignature` this attribute is **REQUIRED**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#shared_access_signature_credentials Connection#shared_access_signature_credentials}
  */
  readonly sharedAccessSignatureCredentials?: ConnectionCredentialDetailsSharedAccessSignatureCredentials;
  /**
  * The single sign-on type. Value defaults to `None`. Value must be one of : `Kerberos`, `KerberosDirectQueryAndRefresh`, `MicrosoftEntraID`, `None`, `SecurityAssertionMarkupLanguage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#single_sign_on_type Connection#single_sign_on_type}
  */
  readonly singleSignOnType?: string;
  /**
  * Whether the connection should skip the test connection during creation and update. `True` - Skip the test connection, `False` - Do not skip the test connection. Value defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#skip_test_connection Connection#skip_test_connection}
  */
  readonly skipTestConnection?: boolean | cdktf.IResolvable;
}

export function connectionCredentialDetailsToTerraform(struct?: ConnectionCredentialDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_credentials: connectionCredentialDetailsBasicCredentialsToTerraform(struct!.basicCredentials),
    connection_encryption: cdktf.stringToTerraform(struct!.connectionEncryption),
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    key_credentials: connectionCredentialDetailsKeyCredentialsToTerraform(struct!.keyCredentials),
    service_principal_credentials: connectionCredentialDetailsServicePrincipalCredentialsToTerraform(struct!.servicePrincipalCredentials),
    shared_access_signature_credentials: connectionCredentialDetailsSharedAccessSignatureCredentialsToTerraform(struct!.sharedAccessSignatureCredentials),
    single_sign_on_type: cdktf.stringToTerraform(struct!.singleSignOnType),
    skip_test_connection: cdktf.booleanToTerraform(struct!.skipTestConnection),
  }
}


export function connectionCredentialDetailsToHclTerraform(struct?: ConnectionCredentialDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_credentials: {
      value: connectionCredentialDetailsBasicCredentialsToHclTerraform(struct!.basicCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionCredentialDetailsBasicCredentials",
    },
    connection_encryption: {
      value: cdktf.stringToHclTerraform(struct!.connectionEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_credentials: {
      value: connectionCredentialDetailsKeyCredentialsToHclTerraform(struct!.keyCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionCredentialDetailsKeyCredentials",
    },
    service_principal_credentials: {
      value: connectionCredentialDetailsServicePrincipalCredentialsToHclTerraform(struct!.servicePrincipalCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionCredentialDetailsServicePrincipalCredentials",
    },
    shared_access_signature_credentials: {
      value: connectionCredentialDetailsSharedAccessSignatureCredentialsToHclTerraform(struct!.sharedAccessSignatureCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionCredentialDetailsSharedAccessSignatureCredentials",
    },
    single_sign_on_type: {
      value: cdktf.stringToHclTerraform(struct!.singleSignOnType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_test_connection: {
      value: cdktf.booleanToHclTerraform(struct!.skipTestConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionCredentialDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionCredentialDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicCredentials = this._basicCredentials?.internalValue;
    }
    if (this._connectionEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionEncryption = this._connectionEncryption;
    }
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._keyCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyCredentials = this._keyCredentials?.internalValue;
    }
    if (this._servicePrincipalCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipalCredentials = this._servicePrincipalCredentials?.internalValue;
    }
    if (this._sharedAccessSignatureCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedAccessSignatureCredentials = this._sharedAccessSignatureCredentials?.internalValue;
    }
    if (this._singleSignOnType !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleSignOnType = this._singleSignOnType;
    }
    if (this._skipTestConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipTestConnection = this._skipTestConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionCredentialDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicCredentials.internalValue = undefined;
      this._connectionEncryption = undefined;
      this._credentialType = undefined;
      this._keyCredentials.internalValue = undefined;
      this._servicePrincipalCredentials.internalValue = undefined;
      this._sharedAccessSignatureCredentials.internalValue = undefined;
      this._singleSignOnType = undefined;
      this._skipTestConnection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicCredentials.internalValue = value.basicCredentials;
      this._connectionEncryption = value.connectionEncryption;
      this._credentialType = value.credentialType;
      this._keyCredentials.internalValue = value.keyCredentials;
      this._servicePrincipalCredentials.internalValue = value.servicePrincipalCredentials;
      this._sharedAccessSignatureCredentials.internalValue = value.sharedAccessSignatureCredentials;
      this._singleSignOnType = value.singleSignOnType;
      this._skipTestConnection = value.skipTestConnection;
    }
  }

  // basic_credentials - computed: false, optional: true, required: false
  private _basicCredentials = new ConnectionCredentialDetailsBasicCredentialsOutputReference(this, "basic_credentials");
  public get basicCredentials() {
    return this._basicCredentials;
  }
  public putBasicCredentials(value: ConnectionCredentialDetailsBasicCredentials) {
    this._basicCredentials.internalValue = value;
  }
  public resetBasicCredentials() {
    this._basicCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicCredentialsInput() {
    return this._basicCredentials.internalValue;
  }

  // connection_encryption - computed: true, optional: true, required: false
  private _connectionEncryption?: string; 
  public get connectionEncryption() {
    return this.getStringAttribute('connection_encryption');
  }
  public set connectionEncryption(value: string) {
    this._connectionEncryption = value;
  }
  public resetConnectionEncryption() {
    this._connectionEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionEncryptionInput() {
    return this._connectionEncryption;
  }

  // credential_type - computed: false, optional: false, required: true
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // key_credentials - computed: false, optional: true, required: false
  private _keyCredentials = new ConnectionCredentialDetailsKeyCredentialsOutputReference(this, "key_credentials");
  public get keyCredentials() {
    return this._keyCredentials;
  }
  public putKeyCredentials(value: ConnectionCredentialDetailsKeyCredentials) {
    this._keyCredentials.internalValue = value;
  }
  public resetKeyCredentials() {
    this._keyCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyCredentialsInput() {
    return this._keyCredentials.internalValue;
  }

  // service_principal_credentials - computed: false, optional: true, required: false
  private _servicePrincipalCredentials = new ConnectionCredentialDetailsServicePrincipalCredentialsOutputReference(this, "service_principal_credentials");
  public get servicePrincipalCredentials() {
    return this._servicePrincipalCredentials;
  }
  public putServicePrincipalCredentials(value: ConnectionCredentialDetailsServicePrincipalCredentials) {
    this._servicePrincipalCredentials.internalValue = value;
  }
  public resetServicePrincipalCredentials() {
    this._servicePrincipalCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalCredentialsInput() {
    return this._servicePrincipalCredentials.internalValue;
  }

  // shared_access_signature_credentials - computed: false, optional: true, required: false
  private _sharedAccessSignatureCredentials = new ConnectionCredentialDetailsSharedAccessSignatureCredentialsOutputReference(this, "shared_access_signature_credentials");
  public get sharedAccessSignatureCredentials() {
    return this._sharedAccessSignatureCredentials;
  }
  public putSharedAccessSignatureCredentials(value: ConnectionCredentialDetailsSharedAccessSignatureCredentials) {
    this._sharedAccessSignatureCredentials.internalValue = value;
  }
  public resetSharedAccessSignatureCredentials() {
    this._sharedAccessSignatureCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAccessSignatureCredentialsInput() {
    return this._sharedAccessSignatureCredentials.internalValue;
  }

  // single_sign_on_type - computed: true, optional: true, required: false
  private _singleSignOnType?: string; 
  public get singleSignOnType() {
    return this.getStringAttribute('single_sign_on_type');
  }
  public set singleSignOnType(value: string) {
    this._singleSignOnType = value;
  }
  public resetSingleSignOnType() {
    this._singleSignOnType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnTypeInput() {
    return this._singleSignOnType;
  }

  // skip_test_connection - computed: true, optional: true, required: false
  private _skipTestConnection?: boolean | cdktf.IResolvable; 
  public get skipTestConnection() {
    return this.getBooleanAttribute('skip_test_connection');
  }
  public set skipTestConnection(value: boolean | cdktf.IResolvable) {
    this._skipTestConnection = value;
  }
  public resetSkipTestConnection() {
    this._skipTestConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTestConnectionInput() {
    return this._skipTestConnection;
  }
}
export interface ConnectionTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#create Connection#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#delete Connection#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#read Connection#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#update Connection#update}
  */
  readonly update?: string;
}

export function connectionTimeoutsToTerraform(struct?: ConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function connectionTimeoutsToHclTerraform(struct?: ConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection fabric_connection}
*/
export class Connection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fabric_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Connection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Connection to import
  * @param importFromId The id of the existing Connection that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Connection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fabric_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/connection fabric_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'fabric_connection',
      terraformGeneratorMetadata: {
        providerName: 'fabric',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowConnectionUsageInGateway = config.allowConnectionUsageInGateway;
    this._connectionDetails.internalValue = config.connectionDetails;
    this._connectivityType = config.connectivityType;
    this._credentialDetails.internalValue = config.credentialDetails;
    this._displayName = config.displayName;
    this._gatewayId = config.gatewayId;
    this._privacyLevel = config.privacyLevel;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_connection_usage_in_gateway - computed: true, optional: true, required: false
  private _allowConnectionUsageInGateway?: boolean | cdktf.IResolvable; 
  public get allowConnectionUsageInGateway() {
    return this.getBooleanAttribute('allow_connection_usage_in_gateway');
  }
  public set allowConnectionUsageInGateway(value: boolean | cdktf.IResolvable) {
    this._allowConnectionUsageInGateway = value;
  }
  public resetAllowConnectionUsageInGateway() {
    this._allowConnectionUsageInGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowConnectionUsageInGatewayInput() {
    return this._allowConnectionUsageInGateway;
  }

  // connection_details - computed: false, optional: false, required: true
  private _connectionDetails = new ConnectionConnectionDetailsOutputReference(this, "connection_details");
  public get connectionDetails() {
    return this._connectionDetails;
  }
  public putConnectionDetails(value: ConnectionConnectionDetails) {
    this._connectionDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDetailsInput() {
    return this._connectionDetails.internalValue;
  }

  // connectivity_type - computed: false, optional: false, required: true
  private _connectivityType?: string; 
  public get connectivityType() {
    return this.getStringAttribute('connectivity_type');
  }
  public set connectivityType(value: string) {
    this._connectivityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityTypeInput() {
    return this._connectivityType;
  }

  // credential_details - computed: false, optional: false, required: true
  private _credentialDetails = new ConnectionCredentialDetailsOutputReference(this, "credential_details");
  public get credentialDetails() {
    return this._credentialDetails;
  }
  public putCredentialDetails(value: ConnectionCredentialDetails) {
    this._credentialDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialDetailsInput() {
    return this._credentialDetails.internalValue;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // gateway_id - computed: false, optional: true, required: false
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  public resetGatewayId() {
    this._gatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // privacy_level - computed: true, optional: true, required: false
  private _privacyLevel?: string; 
  public get privacyLevel() {
    return this.getStringAttribute('privacy_level');
  }
  public set privacyLevel(value: string) {
    this._privacyLevel = value;
  }
  public resetPrivacyLevel() {
    this._privacyLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyLevelInput() {
    return this._privacyLevel;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ConnectionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_connection_usage_in_gateway: cdktf.booleanToTerraform(this._allowConnectionUsageInGateway),
      connection_details: connectionConnectionDetailsToTerraform(this._connectionDetails.internalValue),
      connectivity_type: cdktf.stringToTerraform(this._connectivityType),
      credential_details: connectionCredentialDetailsToTerraform(this._credentialDetails.internalValue),
      display_name: cdktf.stringToTerraform(this._displayName),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      privacy_level: cdktf.stringToTerraform(this._privacyLevel),
      timeouts: connectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_connection_usage_in_gateway: {
        value: cdktf.booleanToHclTerraform(this._allowConnectionUsageInGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connection_details: {
        value: connectionConnectionDetailsToHclTerraform(this._connectionDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectionConnectionDetails",
      },
      connectivity_type: {
        value: cdktf.stringToHclTerraform(this._connectivityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credential_details: {
        value: connectionCredentialDetailsToHclTerraform(this._credentialDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectionCredentialDetails",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privacy_level: {
        value: cdktf.stringToHclTerraform(this._privacyLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: connectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
