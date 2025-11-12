// https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudconnectoruserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#id Cloudconnectoruser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#name Cloudconnectoruser#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#password Cloudconnectoruser#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#private_key Cloudconnectoruser#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#public_key Cloudconnectoruser#public_key}
  */
  readonly publicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#tenant_ref Cloudconnectoruser#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#uuid Cloudconnectoruser#uuid}
  */
  readonly uuid?: string;
  /**
  * azure_serviceprincipal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#azure_serviceprincipal Cloudconnectoruser#azure_serviceprincipal}
  */
  readonly azureServiceprincipal?: CloudconnectoruserAzureServiceprincipal[] | cdktf.IResolvable;
  /**
  * azure_userpass block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#azure_userpass Cloudconnectoruser#azure_userpass}
  */
  readonly azureUserpass?: CloudconnectoruserAzureUserpass[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#configpb_attributes Cloudconnectoruser#configpb_attributes}
  */
  readonly configpbAttributes?: CloudconnectoruserConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * gcp_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#gcp_credentials Cloudconnectoruser#gcp_credentials}
  */
  readonly gcpCredentials?: CloudconnectoruserGcpCredentials[] | cdktf.IResolvable;
  /**
  * nsxt_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#nsxt_credentials Cloudconnectoruser#nsxt_credentials}
  */
  readonly nsxtCredentials?: CloudconnectoruserNsxtCredentials[] | cdktf.IResolvable;
  /**
  * oci_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#oci_credentials Cloudconnectoruser#oci_credentials}
  */
  readonly ociCredentials?: CloudconnectoruserOciCredentials[] | cdktf.IResolvable;
  /**
  * tencent_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#tencent_credentials Cloudconnectoruser#tencent_credentials}
  */
  readonly tencentCredentials?: CloudconnectoruserTencentCredentials[] | cdktf.IResolvable;
  /**
  * vcenter_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#vcenter_credentials Cloudconnectoruser#vcenter_credentials}
  */
  readonly vcenterCredentials?: CloudconnectoruserVcenterCredentials[] | cdktf.IResolvable;
}
export interface CloudconnectoruserAzureServiceprincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#application_id Cloudconnectoruser#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#authentication_token Cloudconnectoruser#authentication_token}
  */
  readonly authenticationToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#tenant_id Cloudconnectoruser#tenant_id}
  */
  readonly tenantId?: string;
}

export function cloudconnectoruserAzureServiceprincipalToTerraform(struct?: CloudconnectoruserAzureServiceprincipal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    authentication_token: cdktf.stringToTerraform(struct!.authenticationToken),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function cloudconnectoruserAzureServiceprincipalToHclTerraform(struct?: CloudconnectoruserAzureServiceprincipal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_token: {
      value: cdktf.stringToHclTerraform(struct!.authenticationToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class CloudconnectoruserAzureServiceprincipalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudconnectoruserAzureServiceprincipal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._authenticationToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationToken = this._authenticationToken;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudconnectoruserAzureServiceprincipal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationId = undefined;
      this._authenticationToken = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationId = value.applicationId;
      this._authenticationToken = value.authenticationToken;
      this._tenantId = value.tenantId;
    }
  }

  // application_id - computed: true, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // authentication_token - computed: true, optional: true, required: false
  private _authenticationToken?: string; 
  public get authenticationToken() {
    return this.getStringAttribute('authentication_token');
  }
  public set authenticationToken(value: string) {
    this._authenticationToken = value;
  }
  public resetAuthenticationToken() {
    this._authenticationToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTokenInput() {
    return this._authenticationToken;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

export class CloudconnectoruserAzureServiceprincipalList extends cdktf.ComplexList {
  public internalValue? : CloudconnectoruserAzureServiceprincipal[] | cdktf.IResolvable

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
  public get(index: number): CloudconnectoruserAzureServiceprincipalOutputReference {
    return new CloudconnectoruserAzureServiceprincipalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudconnectoruserAzureUserpass {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#password Cloudconnectoruser#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#tenant_name Cloudconnectoruser#tenant_name}
  */
  readonly tenantName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#username Cloudconnectoruser#username}
  */
  readonly username?: string;
}

export function cloudconnectoruserAzureUserpassToTerraform(struct?: CloudconnectoruserAzureUserpass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    tenant_name: cdktf.stringToTerraform(struct!.tenantName),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function cloudconnectoruserAzureUserpassToHclTerraform(struct?: CloudconnectoruserAzureUserpass | cdktf.IResolvable): any {
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
    tenant_name: {
      value: cdktf.stringToHclTerraform(struct!.tenantName),
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

export class CloudconnectoruserAzureUserpassOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudconnectoruserAzureUserpass | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._tenantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantName = this._tenantName;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudconnectoruserAzureUserpass | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._tenantName = undefined;
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
      this._tenantName = value.tenantName;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // tenant_name - computed: true, optional: true, required: false
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  public resetTenantName() {
    this._tenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class CloudconnectoruserAzureUserpassList extends cdktf.ComplexList {
  public internalValue? : CloudconnectoruserAzureUserpass[] | cdktf.IResolvable

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
  public get(index: number): CloudconnectoruserAzureUserpassOutputReference {
    return new CloudconnectoruserAzureUserpassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudconnectoruserConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#version Cloudconnectoruser#version}
  */
  readonly version?: string;
}

export function cloudconnectoruserConfigpbAttributesToTerraform(struct?: CloudconnectoruserConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function cloudconnectoruserConfigpbAttributesToHclTerraform(struct?: CloudconnectoruserConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudconnectoruserConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudconnectoruserConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudconnectoruserConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class CloudconnectoruserConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : CloudconnectoruserConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): CloudconnectoruserConfigpbAttributesOutputReference {
    return new CloudconnectoruserConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudconnectoruserGcpCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#service_account_keyfile_data Cloudconnectoruser#service_account_keyfile_data}
  */
  readonly serviceAccountKeyfileData?: string;
}

export function cloudconnectoruserGcpCredentialsToTerraform(struct?: CloudconnectoruserGcpCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account_keyfile_data: cdktf.stringToTerraform(struct!.serviceAccountKeyfileData),
  }
}


export function cloudconnectoruserGcpCredentialsToHclTerraform(struct?: CloudconnectoruserGcpCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account_keyfile_data: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountKeyfileData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudconnectoruserGcpCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudconnectoruserGcpCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountKeyfileData !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountKeyfileData = this._serviceAccountKeyfileData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudconnectoruserGcpCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceAccountKeyfileData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceAccountKeyfileData = value.serviceAccountKeyfileData;
    }
  }

  // service_account_keyfile_data - computed: true, optional: true, required: false
  private _serviceAccountKeyfileData?: string; 
  public get serviceAccountKeyfileData() {
    return this.getStringAttribute('service_account_keyfile_data');
  }
  public set serviceAccountKeyfileData(value: string) {
    this._serviceAccountKeyfileData = value;
  }
  public resetServiceAccountKeyfileData() {
    this._serviceAccountKeyfileData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyfileDataInput() {
    return this._serviceAccountKeyfileData;
  }
}

export class CloudconnectoruserGcpCredentialsList extends cdktf.ComplexList {
  public internalValue? : CloudconnectoruserGcpCredentials[] | cdktf.IResolvable

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
  public get(index: number): CloudconnectoruserGcpCredentialsOutputReference {
    return new CloudconnectoruserGcpCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudconnectoruserNsxtCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#password Cloudconnectoruser#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#username Cloudconnectoruser#username}
  */
  readonly username?: string;
}

export function cloudconnectoruserNsxtCredentialsToTerraform(struct?: CloudconnectoruserNsxtCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function cloudconnectoruserNsxtCredentialsToHclTerraform(struct?: CloudconnectoruserNsxtCredentials | cdktf.IResolvable): any {
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

export class CloudconnectoruserNsxtCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudconnectoruserNsxtCredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudconnectoruserNsxtCredentials | cdktf.IResolvable | undefined) {
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

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class CloudconnectoruserNsxtCredentialsList extends cdktf.ComplexList {
  public internalValue? : CloudconnectoruserNsxtCredentials[] | cdktf.IResolvable

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
  public get(index: number): CloudconnectoruserNsxtCredentialsOutputReference {
    return new CloudconnectoruserNsxtCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudconnectoruserOciCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#fingerprint Cloudconnectoruser#fingerprint}
  */
  readonly fingerprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#key_content Cloudconnectoruser#key_content}
  */
  readonly keyContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#pass_phrase Cloudconnectoruser#pass_phrase}
  */
  readonly passPhrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#user Cloudconnectoruser#user}
  */
  readonly user?: string;
}

export function cloudconnectoruserOciCredentialsToTerraform(struct?: CloudconnectoruserOciCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fingerprint: cdktf.stringToTerraform(struct!.fingerprint),
    key_content: cdktf.stringToTerraform(struct!.keyContent),
    pass_phrase: cdktf.stringToTerraform(struct!.passPhrase),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function cloudconnectoruserOciCredentialsToHclTerraform(struct?: CloudconnectoruserOciCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fingerprint: {
      value: cdktf.stringToHclTerraform(struct!.fingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_content: {
      value: cdktf.stringToHclTerraform(struct!.keyContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pass_phrase: {
      value: cdktf.stringToHclTerraform(struct!.passPhrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudconnectoruserOciCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudconnectoruserOciCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprint = this._fingerprint;
    }
    if (this._keyContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyContent = this._keyContent;
    }
    if (this._passPhrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passPhrase = this._passPhrase;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudconnectoruserOciCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fingerprint = undefined;
      this._keyContent = undefined;
      this._passPhrase = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fingerprint = value.fingerprint;
      this._keyContent = value.keyContent;
      this._passPhrase = value.passPhrase;
      this._user = value.user;
    }
  }

  // fingerprint - computed: true, optional: true, required: false
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  public resetFingerprint() {
    this._fingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }

  // key_content - computed: true, optional: true, required: false
  private _keyContent?: string; 
  public get keyContent() {
    return this.getStringAttribute('key_content');
  }
  public set keyContent(value: string) {
    this._keyContent = value;
  }
  public resetKeyContent() {
    this._keyContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyContentInput() {
    return this._keyContent;
  }

  // pass_phrase - computed: true, optional: true, required: false
  private _passPhrase?: string; 
  public get passPhrase() {
    return this.getStringAttribute('pass_phrase');
  }
  public set passPhrase(value: string) {
    this._passPhrase = value;
  }
  public resetPassPhrase() {
    this._passPhrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passPhraseInput() {
    return this._passPhrase;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class CloudconnectoruserOciCredentialsList extends cdktf.ComplexList {
  public internalValue? : CloudconnectoruserOciCredentials[] | cdktf.IResolvable

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
  public get(index: number): CloudconnectoruserOciCredentialsOutputReference {
    return new CloudconnectoruserOciCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudconnectoruserTencentCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#secret_id Cloudconnectoruser#secret_id}
  */
  readonly secretId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#secret_key Cloudconnectoruser#secret_key}
  */
  readonly secretKey: string;
}

export function cloudconnectoruserTencentCredentialsToTerraform(struct?: CloudconnectoruserTencentCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function cloudconnectoruserTencentCredentialsToHclTerraform(struct?: CloudconnectoruserTencentCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudconnectoruserTencentCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudconnectoruserTencentCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudconnectoruserTencentCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretId = undefined;
      this._secretKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretId = value.secretId;
      this._secretKey = value.secretKey;
    }
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}

export class CloudconnectoruserTencentCredentialsList extends cdktf.ComplexList {
  public internalValue? : CloudconnectoruserTencentCredentials[] | cdktf.IResolvable

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
  public get(index: number): CloudconnectoruserTencentCredentialsOutputReference {
    return new CloudconnectoruserTencentCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudconnectoruserVcenterCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#password Cloudconnectoruser#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#username Cloudconnectoruser#username}
  */
  readonly username?: string;
}

export function cloudconnectoruserVcenterCredentialsToTerraform(struct?: CloudconnectoruserVcenterCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function cloudconnectoruserVcenterCredentialsToHclTerraform(struct?: CloudconnectoruserVcenterCredentials | cdktf.IResolvable): any {
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

export class CloudconnectoruserVcenterCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudconnectoruserVcenterCredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudconnectoruserVcenterCredentials | cdktf.IResolvable | undefined) {
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

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class CloudconnectoruserVcenterCredentialsList extends cdktf.ComplexList {
  public internalValue? : CloudconnectoruserVcenterCredentials[] | cdktf.IResolvable

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
  public get(index: number): CloudconnectoruserVcenterCredentialsOutputReference {
    return new CloudconnectoruserVcenterCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser avi_cloudconnectoruser}
*/
export class Cloudconnectoruser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_cloudconnectoruser";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cloudconnectoruser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cloudconnectoruser to import
  * @param importFromId The id of the existing Cloudconnectoruser that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cloudconnectoruser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_cloudconnectoruser", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudconnectoruser avi_cloudconnectoruser} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudconnectoruserConfig
  */
  public constructor(scope: Construct, id: string, config: CloudconnectoruserConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_cloudconnectoruser',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.5',
        providerVersionConstraint: '30.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._password = config.password;
    this._privateKey = config.privateKey;
    this._publicKey = config.publicKey;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._azureServiceprincipal.internalValue = config.azureServiceprincipal;
    this._azureUserpass.internalValue = config.azureUserpass;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._gcpCredentials.internalValue = config.gcpCredentials;
    this._nsxtCredentials.internalValue = config.nsxtCredentials;
    this._ociCredentials.internalValue = config.ociCredentials;
    this._tencentCredentials.internalValue = config.tencentCredentials;
    this._vcenterCredentials.internalValue = config.vcenterCredentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // private_key - computed: true, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // public_key - computed: true, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // azure_serviceprincipal - computed: false, optional: true, required: false
  private _azureServiceprincipal = new CloudconnectoruserAzureServiceprincipalList(this, "azure_serviceprincipal", true);
  public get azureServiceprincipal() {
    return this._azureServiceprincipal;
  }
  public putAzureServiceprincipal(value: CloudconnectoruserAzureServiceprincipal[] | cdktf.IResolvable) {
    this._azureServiceprincipal.internalValue = value;
  }
  public resetAzureServiceprincipal() {
    this._azureServiceprincipal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureServiceprincipalInput() {
    return this._azureServiceprincipal.internalValue;
  }

  // azure_userpass - computed: false, optional: true, required: false
  private _azureUserpass = new CloudconnectoruserAzureUserpassList(this, "azure_userpass", true);
  public get azureUserpass() {
    return this._azureUserpass;
  }
  public putAzureUserpass(value: CloudconnectoruserAzureUserpass[] | cdktf.IResolvable) {
    this._azureUserpass.internalValue = value;
  }
  public resetAzureUserpass() {
    this._azureUserpass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureUserpassInput() {
    return this._azureUserpass.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new CloudconnectoruserConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: CloudconnectoruserConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // gcp_credentials - computed: false, optional: true, required: false
  private _gcpCredentials = new CloudconnectoruserGcpCredentialsList(this, "gcp_credentials", true);
  public get gcpCredentials() {
    return this._gcpCredentials;
  }
  public putGcpCredentials(value: CloudconnectoruserGcpCredentials[] | cdktf.IResolvable) {
    this._gcpCredentials.internalValue = value;
  }
  public resetGcpCredentials() {
    this._gcpCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpCredentialsInput() {
    return this._gcpCredentials.internalValue;
  }

  // nsxt_credentials - computed: false, optional: true, required: false
  private _nsxtCredentials = new CloudconnectoruserNsxtCredentialsList(this, "nsxt_credentials", true);
  public get nsxtCredentials() {
    return this._nsxtCredentials;
  }
  public putNsxtCredentials(value: CloudconnectoruserNsxtCredentials[] | cdktf.IResolvable) {
    this._nsxtCredentials.internalValue = value;
  }
  public resetNsxtCredentials() {
    this._nsxtCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtCredentialsInput() {
    return this._nsxtCredentials.internalValue;
  }

  // oci_credentials - computed: false, optional: true, required: false
  private _ociCredentials = new CloudconnectoruserOciCredentialsList(this, "oci_credentials", true);
  public get ociCredentials() {
    return this._ociCredentials;
  }
  public putOciCredentials(value: CloudconnectoruserOciCredentials[] | cdktf.IResolvable) {
    this._ociCredentials.internalValue = value;
  }
  public resetOciCredentials() {
    this._ociCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociCredentialsInput() {
    return this._ociCredentials.internalValue;
  }

  // tencent_credentials - computed: false, optional: true, required: false
  private _tencentCredentials = new CloudconnectoruserTencentCredentialsList(this, "tencent_credentials", true);
  public get tencentCredentials() {
    return this._tencentCredentials;
  }
  public putTencentCredentials(value: CloudconnectoruserTencentCredentials[] | cdktf.IResolvable) {
    this._tencentCredentials.internalValue = value;
  }
  public resetTencentCredentials() {
    this._tencentCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tencentCredentialsInput() {
    return this._tencentCredentials.internalValue;
  }

  // vcenter_credentials - computed: false, optional: true, required: false
  private _vcenterCredentials = new CloudconnectoruserVcenterCredentialsList(this, "vcenter_credentials", true);
  public get vcenterCredentials() {
    return this._vcenterCredentials;
  }
  public putVcenterCredentials(value: CloudconnectoruserVcenterCredentials[] | cdktf.IResolvable) {
    this._vcenterCredentials.internalValue = value;
  }
  public resetVcenterCredentials() {
    this._vcenterCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterCredentialsInput() {
    return this._vcenterCredentials.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      private_key: cdktf.stringToTerraform(this._privateKey),
      public_key: cdktf.stringToTerraform(this._publicKey),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      azure_serviceprincipal: cdktf.listMapper(cloudconnectoruserAzureServiceprincipalToTerraform, true)(this._azureServiceprincipal.internalValue),
      azure_userpass: cdktf.listMapper(cloudconnectoruserAzureUserpassToTerraform, true)(this._azureUserpass.internalValue),
      configpb_attributes: cdktf.listMapper(cloudconnectoruserConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      gcp_credentials: cdktf.listMapper(cloudconnectoruserGcpCredentialsToTerraform, true)(this._gcpCredentials.internalValue),
      nsxt_credentials: cdktf.listMapper(cloudconnectoruserNsxtCredentialsToTerraform, true)(this._nsxtCredentials.internalValue),
      oci_credentials: cdktf.listMapper(cloudconnectoruserOciCredentialsToTerraform, true)(this._ociCredentials.internalValue),
      tencent_credentials: cdktf.listMapper(cloudconnectoruserTencentCredentialsToTerraform, true)(this._tencentCredentials.internalValue),
      vcenter_credentials: cdktf.listMapper(cloudconnectoruserVcenterCredentialsToTerraform, true)(this._vcenterCredentials.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key: {
        value: cdktf.stringToHclTerraform(this._publicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_serviceprincipal: {
        value: cdktf.listMapperHcl(cloudconnectoruserAzureServiceprincipalToHclTerraform, true)(this._azureServiceprincipal.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudconnectoruserAzureServiceprincipalList",
      },
      azure_userpass: {
        value: cdktf.listMapperHcl(cloudconnectoruserAzureUserpassToHclTerraform, true)(this._azureUserpass.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudconnectoruserAzureUserpassList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(cloudconnectoruserConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudconnectoruserConfigpbAttributesList",
      },
      gcp_credentials: {
        value: cdktf.listMapperHcl(cloudconnectoruserGcpCredentialsToHclTerraform, true)(this._gcpCredentials.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudconnectoruserGcpCredentialsList",
      },
      nsxt_credentials: {
        value: cdktf.listMapperHcl(cloudconnectoruserNsxtCredentialsToHclTerraform, true)(this._nsxtCredentials.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudconnectoruserNsxtCredentialsList",
      },
      oci_credentials: {
        value: cdktf.listMapperHcl(cloudconnectoruserOciCredentialsToHclTerraform, true)(this._ociCredentials.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudconnectoruserOciCredentialsList",
      },
      tencent_credentials: {
        value: cdktf.listMapperHcl(cloudconnectoruserTencentCredentialsToHclTerraform, true)(this._tencentCredentials.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudconnectoruserTencentCredentialsList",
      },
      vcenter_credentials: {
        value: cdktf.listMapperHcl(cloudconnectoruserVcenterCredentialsToHclTerraform, true)(this._vcenterCredentials.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudconnectoruserVcenterCredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
