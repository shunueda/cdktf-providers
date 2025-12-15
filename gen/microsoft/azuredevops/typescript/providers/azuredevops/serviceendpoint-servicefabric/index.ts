// https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceendpointServicefabricConfig extends cdktf.TerraformMetaArguments {
  /**
  * Client connection endpoint for the cluster. Prefix the value with 'tcp://';. This value overrides the publish profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#cluster_endpoint ServiceendpointServicefabric#cluster_endpoint}
  */
  readonly clusterEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#description ServiceendpointServicefabric#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#id ServiceendpointServicefabric#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#project_id ServiceendpointServicefabric#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#service_endpoint_name ServiceendpointServicefabric#service_endpoint_name}
  */
  readonly serviceEndpointName: string;
  /**
  * azure_active_directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#azure_active_directory ServiceendpointServicefabric#azure_active_directory}
  */
  readonly azureActiveDirectory?: ServiceendpointServicefabricAzureActiveDirectory;
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#certificate ServiceendpointServicefabric#certificate}
  */
  readonly certificate?: ServiceendpointServicefabricCertificate;
  /**
  * none block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#none ServiceendpointServicefabric#none}
  */
  readonly none?: ServiceendpointServicefabricNone;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#timeouts ServiceendpointServicefabric#timeouts}
  */
  readonly timeouts?: ServiceendpointServicefabricTimeouts;
}
export interface ServiceendpointServicefabricAzureActiveDirectory {
  /**
  * Password for the Azure Active Directory account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#password ServiceendpointServicefabric#password}
  */
  readonly password: string;
  /**
  * The common name(s) of the cluster's certificate(s). This is used to verify the identity of the cluster. This value overrides the publish profile. Separate multiple common names with a comma (',')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#server_certificate_common_name ServiceendpointServicefabric#server_certificate_common_name}
  */
  readonly serverCertificateCommonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#server_certificate_lookup ServiceendpointServicefabric#server_certificate_lookup}
  */
  readonly serverCertificateLookup: string;
  /**
  * The thumbprint(s) of the cluster's certificate(s). This is used to verify the identity of the cluster. This value overrides the publish profile. Separate multiple thumbprints with a comma (',')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#server_certificate_thumbprint ServiceendpointServicefabric#server_certificate_thumbprint}
  */
  readonly serverCertificateThumbprint?: string;
  /**
  * Specify an Azure Active Directory account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#username ServiceendpointServicefabric#username}
  */
  readonly username: string;
}

export function serviceendpointServicefabricAzureActiveDirectoryToTerraform(struct?: ServiceendpointServicefabricAzureActiveDirectoryOutputReference | ServiceendpointServicefabricAzureActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    server_certificate_common_name: cdktf.stringToTerraform(struct!.serverCertificateCommonName),
    server_certificate_lookup: cdktf.stringToTerraform(struct!.serverCertificateLookup),
    server_certificate_thumbprint: cdktf.stringToTerraform(struct!.serverCertificateThumbprint),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function serviceendpointServicefabricAzureActiveDirectoryToHclTerraform(struct?: ServiceendpointServicefabricAzureActiveDirectoryOutputReference | ServiceendpointServicefabricAzureActiveDirectory): any {
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
    server_certificate_common_name: {
      value: cdktf.stringToHclTerraform(struct!.serverCertificateCommonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_certificate_lookup: {
      value: cdktf.stringToHclTerraform(struct!.serverCertificateLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_certificate_thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.serverCertificateThumbprint),
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

export class ServiceendpointServicefabricAzureActiveDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceendpointServicefabricAzureActiveDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._serverCertificateCommonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificateCommonName = this._serverCertificateCommonName;
    }
    if (this._serverCertificateLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificateLookup = this._serverCertificateLookup;
    }
    if (this._serverCertificateThumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificateThumbprint = this._serverCertificateThumbprint;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceendpointServicefabricAzureActiveDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._serverCertificateCommonName = undefined;
      this._serverCertificateLookup = undefined;
      this._serverCertificateThumbprint = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._serverCertificateCommonName = value.serverCertificateCommonName;
      this._serverCertificateLookup = value.serverCertificateLookup;
      this._serverCertificateThumbprint = value.serverCertificateThumbprint;
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

  // server_certificate_common_name - computed: false, optional: true, required: false
  private _serverCertificateCommonName?: string; 
  public get serverCertificateCommonName() {
    return this.getStringAttribute('server_certificate_common_name');
  }
  public set serverCertificateCommonName(value: string) {
    this._serverCertificateCommonName = value;
  }
  public resetServerCertificateCommonName() {
    this._serverCertificateCommonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateCommonNameInput() {
    return this._serverCertificateCommonName;
  }

  // server_certificate_lookup - computed: false, optional: false, required: true
  private _serverCertificateLookup?: string; 
  public get serverCertificateLookup() {
    return this.getStringAttribute('server_certificate_lookup');
  }
  public set serverCertificateLookup(value: string) {
    this._serverCertificateLookup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateLookupInput() {
    return this._serverCertificateLookup;
  }

  // server_certificate_thumbprint - computed: false, optional: true, required: false
  private _serverCertificateThumbprint?: string; 
  public get serverCertificateThumbprint() {
    return this.getStringAttribute('server_certificate_thumbprint');
  }
  public set serverCertificateThumbprint(value: string) {
    this._serverCertificateThumbprint = value;
  }
  public resetServerCertificateThumbprint() {
    this._serverCertificateThumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateThumbprintInput() {
    return this._serverCertificateThumbprint;
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
export interface ServiceendpointServicefabricCertificate {
  /**
  * Base64 encoding of the cluster's client certificate file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#client_certificate ServiceendpointServicefabric#client_certificate}
  */
  readonly clientCertificate: string;
  /**
  * Password for the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#client_certificate_password ServiceendpointServicefabric#client_certificate_password}
  */
  readonly clientCertificatePassword?: string;
  /**
  * The common name(s) of the cluster's certificate(s). This is used to verify the identity of the cluster. This value overrides the publish profile. Separate multiple common names with a comma (',')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#server_certificate_common_name ServiceendpointServicefabric#server_certificate_common_name}
  */
  readonly serverCertificateCommonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#server_certificate_lookup ServiceendpointServicefabric#server_certificate_lookup}
  */
  readonly serverCertificateLookup: string;
  /**
  * The thumbprint(s) of the cluster's certificate(s). This is used to verify the identity of the cluster. This value overrides the publish profile. Separate multiple thumbprints with a comma (',')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#server_certificate_thumbprint ServiceendpointServicefabric#server_certificate_thumbprint}
  */
  readonly serverCertificateThumbprint?: string;
}

export function serviceendpointServicefabricCertificateToTerraform(struct?: ServiceendpointServicefabricCertificateOutputReference | ServiceendpointServicefabricCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    client_certificate_password: cdktf.stringToTerraform(struct!.clientCertificatePassword),
    server_certificate_common_name: cdktf.stringToTerraform(struct!.serverCertificateCommonName),
    server_certificate_lookup: cdktf.stringToTerraform(struct!.serverCertificateLookup),
    server_certificate_thumbprint: cdktf.stringToTerraform(struct!.serverCertificateThumbprint),
  }
}


export function serviceendpointServicefabricCertificateToHclTerraform(struct?: ServiceendpointServicefabricCertificateOutputReference | ServiceendpointServicefabricCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate_password: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificatePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_certificate_common_name: {
      value: cdktf.stringToHclTerraform(struct!.serverCertificateCommonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_certificate_lookup: {
      value: cdktf.stringToHclTerraform(struct!.serverCertificateLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_certificate_thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.serverCertificateThumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceendpointServicefabricCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceendpointServicefabricCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._clientCertificatePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificatePassword = this._clientCertificatePassword;
    }
    if (this._serverCertificateCommonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificateCommonName = this._serverCertificateCommonName;
    }
    if (this._serverCertificateLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificateLookup = this._serverCertificateLookup;
    }
    if (this._serverCertificateThumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificateThumbprint = this._serverCertificateThumbprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceendpointServicefabricCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificate = undefined;
      this._clientCertificatePassword = undefined;
      this._serverCertificateCommonName = undefined;
      this._serverCertificateLookup = undefined;
      this._serverCertificateThumbprint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificate = value.clientCertificate;
      this._clientCertificatePassword = value.clientCertificatePassword;
      this._serverCertificateCommonName = value.serverCertificateCommonName;
      this._serverCertificateLookup = value.serverCertificateLookup;
      this._serverCertificateThumbprint = value.serverCertificateThumbprint;
    }
  }

  // client_certificate - computed: false, optional: false, required: true
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_certificate_password - computed: false, optional: true, required: false
  private _clientCertificatePassword?: string; 
  public get clientCertificatePassword() {
    return this.getStringAttribute('client_certificate_password');
  }
  public set clientCertificatePassword(value: string) {
    this._clientCertificatePassword = value;
  }
  public resetClientCertificatePassword() {
    this._clientCertificatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificatePasswordInput() {
    return this._clientCertificatePassword;
  }

  // server_certificate_common_name - computed: false, optional: true, required: false
  private _serverCertificateCommonName?: string; 
  public get serverCertificateCommonName() {
    return this.getStringAttribute('server_certificate_common_name');
  }
  public set serverCertificateCommonName(value: string) {
    this._serverCertificateCommonName = value;
  }
  public resetServerCertificateCommonName() {
    this._serverCertificateCommonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateCommonNameInput() {
    return this._serverCertificateCommonName;
  }

  // server_certificate_lookup - computed: false, optional: false, required: true
  private _serverCertificateLookup?: string; 
  public get serverCertificateLookup() {
    return this.getStringAttribute('server_certificate_lookup');
  }
  public set serverCertificateLookup(value: string) {
    this._serverCertificateLookup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateLookupInput() {
    return this._serverCertificateLookup;
  }

  // server_certificate_thumbprint - computed: false, optional: true, required: false
  private _serverCertificateThumbprint?: string; 
  public get serverCertificateThumbprint() {
    return this.getStringAttribute('server_certificate_thumbprint');
  }
  public set serverCertificateThumbprint(value: string) {
    this._serverCertificateThumbprint = value;
  }
  public resetServerCertificateThumbprint() {
    this._serverCertificateThumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateThumbprintInput() {
    return this._serverCertificateThumbprint;
  }
}
export interface ServiceendpointServicefabricNone {
  /**
  * Fully qualified domain SPN for gMSA account. This is applicable only if `unsecured` option is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#cluster_spn ServiceendpointServicefabric#cluster_spn}
  */
  readonly clusterSpn?: string;
  /**
  * Skip using windows security for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#unsecured ServiceendpointServicefabric#unsecured}
  */
  readonly unsecured?: boolean | cdktf.IResolvable;
}

export function serviceendpointServicefabricNoneToTerraform(struct?: ServiceendpointServicefabricNoneOutputReference | ServiceendpointServicefabricNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_spn: cdktf.stringToTerraform(struct!.clusterSpn),
    unsecured: cdktf.booleanToTerraform(struct!.unsecured),
  }
}


export function serviceendpointServicefabricNoneToHclTerraform(struct?: ServiceendpointServicefabricNoneOutputReference | ServiceendpointServicefabricNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_spn: {
      value: cdktf.stringToHclTerraform(struct!.clusterSpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsecured: {
      value: cdktf.booleanToHclTerraform(struct!.unsecured),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceendpointServicefabricNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceendpointServicefabricNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterSpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSpn = this._clusterSpn;
    }
    if (this._unsecured !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsecured = this._unsecured;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceendpointServicefabricNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterSpn = undefined;
      this._unsecured = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterSpn = value.clusterSpn;
      this._unsecured = value.unsecured;
    }
  }

  // cluster_spn - computed: false, optional: true, required: false
  private _clusterSpn?: string; 
  public get clusterSpn() {
    return this.getStringAttribute('cluster_spn');
  }
  public set clusterSpn(value: string) {
    this._clusterSpn = value;
  }
  public resetClusterSpn() {
    this._clusterSpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSpnInput() {
    return this._clusterSpn;
  }

  // unsecured - computed: false, optional: true, required: false
  private _unsecured?: boolean | cdktf.IResolvable; 
  public get unsecured() {
    return this.getBooleanAttribute('unsecured');
  }
  public set unsecured(value: boolean | cdktf.IResolvable) {
    this._unsecured = value;
  }
  public resetUnsecured() {
    this._unsecured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsecuredInput() {
    return this._unsecured;
  }
}
export interface ServiceendpointServicefabricTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#create ServiceendpointServicefabric#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#delete ServiceendpointServicefabric#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#read ServiceendpointServicefabric#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#update ServiceendpointServicefabric#update}
  */
  readonly update?: string;
}

export function serviceendpointServicefabricTimeoutsToTerraform(struct?: ServiceendpointServicefabricTimeouts | cdktf.IResolvable): any {
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


export function serviceendpointServicefabricTimeoutsToHclTerraform(struct?: ServiceendpointServicefabricTimeouts | cdktf.IResolvable): any {
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

export class ServiceendpointServicefabricTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceendpointServicefabricTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceendpointServicefabricTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric azuredevops_serviceendpoint_servicefabric}
*/
export class ServiceendpointServicefabric extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_serviceendpoint_servicefabric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceendpointServicefabric resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceendpointServicefabric to import
  * @param importFromId The id of the existing ServiceendpointServicefabric that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceendpointServicefabric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_serviceendpoint_servicefabric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_servicefabric azuredevops_serviceendpoint_servicefabric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceendpointServicefabricConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceendpointServicefabricConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_serviceendpoint_servicefabric',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.12.1',
        providerVersionConstraint: '1.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterEndpoint = config.clusterEndpoint;
    this._description = config.description;
    this._id = config.id;
    this._projectId = config.projectId;
    this._serviceEndpointName = config.serviceEndpointName;
    this._azureActiveDirectory.internalValue = config.azureActiveDirectory;
    this._certificate.internalValue = config.certificate;
    this._none.internalValue = config.none;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization - computed: true, optional: false, required: false
  private _authorization = new cdktf.StringMap(this, "authorization");
  public get authorization() {
    return this._authorization;
  }

  // cluster_endpoint - computed: false, optional: false, required: true
  private _clusterEndpoint?: string; 
  public get clusterEndpoint() {
    return this.getStringAttribute('cluster_endpoint');
  }
  public set clusterEndpoint(value: string) {
    this._clusterEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterEndpointInput() {
    return this._clusterEndpoint;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // service_endpoint_name - computed: false, optional: false, required: true
  private _serviceEndpointName?: string; 
  public get serviceEndpointName() {
    return this.getStringAttribute('service_endpoint_name');
  }
  public set serviceEndpointName(value: string) {
    this._serviceEndpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointNameInput() {
    return this._serviceEndpointName;
  }

  // azure_active_directory - computed: false, optional: true, required: false
  private _azureActiveDirectory = new ServiceendpointServicefabricAzureActiveDirectoryOutputReference(this, "azure_active_directory");
  public get azureActiveDirectory() {
    return this._azureActiveDirectory;
  }
  public putAzureActiveDirectory(value: ServiceendpointServicefabricAzureActiveDirectory) {
    this._azureActiveDirectory.internalValue = value;
  }
  public resetAzureActiveDirectory() {
    this._azureActiveDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureActiveDirectoryInput() {
    return this._azureActiveDirectory.internalValue;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new ServiceendpointServicefabricCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: ServiceendpointServicefabricCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none = new ServiceendpointServicefabricNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: ServiceendpointServicefabricNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceendpointServicefabricTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceendpointServicefabricTimeouts) {
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
      cluster_endpoint: cdktf.stringToTerraform(this._clusterEndpoint),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      service_endpoint_name: cdktf.stringToTerraform(this._serviceEndpointName),
      azure_active_directory: serviceendpointServicefabricAzureActiveDirectoryToTerraform(this._azureActiveDirectory.internalValue),
      certificate: serviceendpointServicefabricCertificateToTerraform(this._certificate.internalValue),
      none: serviceendpointServicefabricNoneToTerraform(this._none.internalValue),
      timeouts: serviceendpointServicefabricTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_endpoint: {
        value: cdktf.stringToHclTerraform(this._clusterEndpoint),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_endpoint_name: {
        value: cdktf.stringToHclTerraform(this._serviceEndpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_active_directory: {
        value: serviceendpointServicefabricAzureActiveDirectoryToHclTerraform(this._azureActiveDirectory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceendpointServicefabricAzureActiveDirectoryList",
      },
      certificate: {
        value: serviceendpointServicefabricCertificateToHclTerraform(this._certificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceendpointServicefabricCertificateList",
      },
      none: {
        value: serviceendpointServicefabricNoneToHclTerraform(this._none.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceendpointServicefabricNoneList",
      },
      timeouts: {
        value: serviceendpointServicefabricTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceendpointServicefabricTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
