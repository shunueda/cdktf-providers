// https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_openshift
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceendpointOpenshiftConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_openshift#accept_untrusted_certs ServiceendpointOpenshift#accept_untrusted_certs}
  */
  readonly acceptUntrustedCerts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_openshift#certificate_authority_file ServiceendpointOpenshift#certificate_authority_file}
  */
  readonly certificateAuthorityFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_openshift#description ServiceendpointOpenshift#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_openshift#id ServiceendpointOpenshift#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_openshift#project_id ServiceendpointOpenshift#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_openshift#server_url ServiceendpointOpenshift#server_url}
  */
  readonly serverUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_openshift#service_endpoint_name ServiceendpointOpenshift#service_endpoint_name}
  */
  readonly serviceEndpointName: string;
  /**
  * auth_basic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_openshift#auth_basic ServiceendpointOpenshift#auth_basic}
  */
  readonly authBasic?: ServiceendpointOpenshiftAuthBasic;
  /**
  * auth_none block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_openshift#auth_none ServiceendpointOpenshift#auth_none}
  */
  readonly authNone?: ServiceendpointOpenshiftAuthNone;
  /**
  * auth_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_openshift#auth_token ServiceendpointOpenshift#auth_token}
  */
  readonly authToken?: ServiceendpointOpenshiftAuthToken;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_openshift#timeouts ServiceendpointOpenshift#timeouts}
  */
  readonly timeouts?: ServiceendpointOpenshiftTimeouts;
}
export interface ServiceendpointOpenshiftAuthBasic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_openshift#password ServiceendpointOpenshift#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_openshift#username ServiceendpointOpenshift#username}
  */
  readonly username: string;
}

export function serviceendpointOpenshiftAuthBasicToTerraform(struct?: ServiceendpointOpenshiftAuthBasicOutputReference | ServiceendpointOpenshiftAuthBasic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function serviceendpointOpenshiftAuthBasicToHclTerraform(struct?: ServiceendpointOpenshiftAuthBasicOutputReference | ServiceendpointOpenshiftAuthBasic): any {
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

export class ServiceendpointOpenshiftAuthBasicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceendpointOpenshiftAuthBasic | undefined {
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

  public set internalValue(value: ServiceendpointOpenshiftAuthBasic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ServiceendpointOpenshiftAuthNone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_openshift#kube_config ServiceendpointOpenshift#kube_config}
  */
  readonly kubeConfig?: string;
}

export function serviceendpointOpenshiftAuthNoneToTerraform(struct?: ServiceendpointOpenshiftAuthNoneOutputReference | ServiceendpointOpenshiftAuthNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kube_config: cdktf.stringToTerraform(struct!.kubeConfig),
  }
}


export function serviceendpointOpenshiftAuthNoneToHclTerraform(struct?: ServiceendpointOpenshiftAuthNoneOutputReference | ServiceendpointOpenshiftAuthNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kube_config: {
      value: cdktf.stringToHclTerraform(struct!.kubeConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceendpointOpenshiftAuthNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceendpointOpenshiftAuthNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubeConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeConfig = this._kubeConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceendpointOpenshiftAuthNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kubeConfig = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kubeConfig = value.kubeConfig;
    }
  }

  // kube_config - computed: false, optional: true, required: false
  private _kubeConfig?: string; 
  public get kubeConfig() {
    return this.getStringAttribute('kube_config');
  }
  public set kubeConfig(value: string) {
    this._kubeConfig = value;
  }
  public resetKubeConfig() {
    this._kubeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeConfigInput() {
    return this._kubeConfig;
  }
}
export interface ServiceendpointOpenshiftAuthToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_openshift#token ServiceendpointOpenshift#token}
  */
  readonly token: string;
}

export function serviceendpointOpenshiftAuthTokenToTerraform(struct?: ServiceendpointOpenshiftAuthTokenOutputReference | ServiceendpointOpenshiftAuthToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function serviceendpointOpenshiftAuthTokenToHclTerraform(struct?: ServiceendpointOpenshiftAuthTokenOutputReference | ServiceendpointOpenshiftAuthToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceendpointOpenshiftAuthTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceendpointOpenshiftAuthToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceendpointOpenshiftAuthToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._token = value.token;
    }
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface ServiceendpointOpenshiftTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_openshift#create ServiceendpointOpenshift#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_openshift#delete ServiceendpointOpenshift#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_openshift#read ServiceendpointOpenshift#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_openshift#update ServiceendpointOpenshift#update}
  */
  readonly update?: string;
}

export function serviceendpointOpenshiftTimeoutsToTerraform(struct?: ServiceendpointOpenshiftTimeouts | cdktf.IResolvable): any {
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


export function serviceendpointOpenshiftTimeoutsToHclTerraform(struct?: ServiceendpointOpenshiftTimeouts | cdktf.IResolvable): any {
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

export class ServiceendpointOpenshiftTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceendpointOpenshiftTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceendpointOpenshiftTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_openshift azuredevops_serviceendpoint_openshift}
*/
export class ServiceendpointOpenshift extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_serviceendpoint_openshift";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceendpointOpenshift resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceendpointOpenshift to import
  * @param importFromId The id of the existing ServiceendpointOpenshift that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_openshift#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceendpointOpenshift to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_serviceendpoint_openshift", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_openshift azuredevops_serviceendpoint_openshift} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceendpointOpenshiftConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceendpointOpenshiftConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_serviceendpoint_openshift',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptUntrustedCerts = config.acceptUntrustedCerts;
    this._certificateAuthorityFile = config.certificateAuthorityFile;
    this._description = config.description;
    this._id = config.id;
    this._projectId = config.projectId;
    this._serverUrl = config.serverUrl;
    this._serviceEndpointName = config.serviceEndpointName;
    this._authBasic.internalValue = config.authBasic;
    this._authNone.internalValue = config.authNone;
    this._authToken.internalValue = config.authToken;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_untrusted_certs - computed: false, optional: true, required: false
  private _acceptUntrustedCerts?: boolean | cdktf.IResolvable; 
  public get acceptUntrustedCerts() {
    return this.getBooleanAttribute('accept_untrusted_certs');
  }
  public set acceptUntrustedCerts(value: boolean | cdktf.IResolvable) {
    this._acceptUntrustedCerts = value;
  }
  public resetAcceptUntrustedCerts() {
    this._acceptUntrustedCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptUntrustedCertsInput() {
    return this._acceptUntrustedCerts;
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new cdktf.StringMap(this, "authorization");
  public get authorization() {
    return this._authorization;
  }

  // certificate_authority_file - computed: false, optional: true, required: false
  private _certificateAuthorityFile?: string; 
  public get certificateAuthorityFile() {
    return this.getStringAttribute('certificate_authority_file');
  }
  public set certificateAuthorityFile(value: string) {
    this._certificateAuthorityFile = value;
  }
  public resetCertificateAuthorityFile() {
    this._certificateAuthorityFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityFileInput() {
    return this._certificateAuthorityFile;
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

  // server_url - computed: false, optional: true, required: false
  private _serverUrl?: string; 
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }
  public set serverUrl(value: string) {
    this._serverUrl = value;
  }
  public resetServerUrl() {
    this._serverUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlInput() {
    return this._serverUrl;
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

  // auth_basic - computed: false, optional: true, required: false
  private _authBasic = new ServiceendpointOpenshiftAuthBasicOutputReference(this, "auth_basic");
  public get authBasic() {
    return this._authBasic;
  }
  public putAuthBasic(value: ServiceendpointOpenshiftAuthBasic) {
    this._authBasic.internalValue = value;
  }
  public resetAuthBasic() {
    this._authBasic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authBasicInput() {
    return this._authBasic.internalValue;
  }

  // auth_none - computed: false, optional: true, required: false
  private _authNone = new ServiceendpointOpenshiftAuthNoneOutputReference(this, "auth_none");
  public get authNone() {
    return this._authNone;
  }
  public putAuthNone(value: ServiceendpointOpenshiftAuthNone) {
    this._authNone.internalValue = value;
  }
  public resetAuthNone() {
    this._authNone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authNoneInput() {
    return this._authNone.internalValue;
  }

  // auth_token - computed: false, optional: true, required: false
  private _authToken = new ServiceendpointOpenshiftAuthTokenOutputReference(this, "auth_token");
  public get authToken() {
    return this._authToken;
  }
  public putAuthToken(value: ServiceendpointOpenshiftAuthToken) {
    this._authToken.internalValue = value;
  }
  public resetAuthToken() {
    this._authToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceendpointOpenshiftTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceendpointOpenshiftTimeouts) {
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
      accept_untrusted_certs: cdktf.booleanToTerraform(this._acceptUntrustedCerts),
      certificate_authority_file: cdktf.stringToTerraform(this._certificateAuthorityFile),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      server_url: cdktf.stringToTerraform(this._serverUrl),
      service_endpoint_name: cdktf.stringToTerraform(this._serviceEndpointName),
      auth_basic: serviceendpointOpenshiftAuthBasicToTerraform(this._authBasic.internalValue),
      auth_none: serviceendpointOpenshiftAuthNoneToTerraform(this._authNone.internalValue),
      auth_token: serviceendpointOpenshiftAuthTokenToTerraform(this._authToken.internalValue),
      timeouts: serviceendpointOpenshiftTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_untrusted_certs: {
        value: cdktf.booleanToHclTerraform(this._acceptUntrustedCerts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate_authority_file: {
        value: cdktf.stringToHclTerraform(this._certificateAuthorityFile),
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
      server_url: {
        value: cdktf.stringToHclTerraform(this._serverUrl),
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
      auth_basic: {
        value: serviceendpointOpenshiftAuthBasicToHclTerraform(this._authBasic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceendpointOpenshiftAuthBasicList",
      },
      auth_none: {
        value: serviceendpointOpenshiftAuthNoneToHclTerraform(this._authNone.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceendpointOpenshiftAuthNoneList",
      },
      auth_token: {
        value: serviceendpointOpenshiftAuthTokenToHclTerraform(this._authToken.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceendpointOpenshiftAuthTokenList",
      },
      timeouts: {
        value: serviceendpointOpenshiftTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceendpointOpenshiftTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
