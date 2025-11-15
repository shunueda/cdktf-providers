// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_jenkins
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformConnectorJenkinsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Tags to filter delegates for connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_jenkins#delegate_selectors PlatformConnectorJenkins#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_jenkins#description PlatformConnectorJenkins#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_jenkins#id PlatformConnectorJenkins#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_jenkins#identifier PlatformConnectorJenkins#identifier}
  */
  readonly identifier: string;
  /**
  * Jenkins Url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_jenkins#jenkins_url PlatformConnectorJenkins#jenkins_url}
  */
  readonly jenkinsUrl: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_jenkins#name PlatformConnectorJenkins#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_jenkins#org_id PlatformConnectorJenkins#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_jenkins#project_id PlatformConnectorJenkins#project_id}
  */
  readonly projectId?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_jenkins#tags PlatformConnectorJenkins#tags}
  */
  readonly tags?: string[];
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_jenkins#auth PlatformConnectorJenkins#auth}
  */
  readonly auth?: PlatformConnectorJenkinsAuth;
}
export interface PlatformConnectorJenkinsAuthJenkinsBearerToken {
  /**
  * Reference of the token. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_jenkins#token_ref PlatformConnectorJenkins#token_ref}
  */
  readonly tokenRef: string;
}

export function platformConnectorJenkinsAuthJenkinsBearerTokenToTerraform(struct?: PlatformConnectorJenkinsAuthJenkinsBearerTokenOutputReference | PlatformConnectorJenkinsAuthJenkinsBearerToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_ref: cdktf.stringToTerraform(struct!.tokenRef),
  }
}


export function platformConnectorJenkinsAuthJenkinsBearerTokenToHclTerraform(struct?: PlatformConnectorJenkinsAuthJenkinsBearerTokenOutputReference | PlatformConnectorJenkinsAuthJenkinsBearerToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token_ref: {
      value: cdktf.stringToHclTerraform(struct!.tokenRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorJenkinsAuthJenkinsBearerTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorJenkinsAuthJenkinsBearerToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenRef = this._tokenRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorJenkinsAuthJenkinsBearerToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tokenRef = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tokenRef = value.tokenRef;
    }
  }

  // token_ref - computed: false, optional: false, required: true
  private _tokenRef?: string; 
  public get tokenRef() {
    return this.getStringAttribute('token_ref');
  }
  public set tokenRef(value: string) {
    this._tokenRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRefInput() {
    return this._tokenRef;
  }
}
export interface PlatformConnectorJenkinsAuthJenkinsUserNamePassword {
  /**
  * Reference to a secret containing the password to use for authentication. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_jenkins#password_ref PlatformConnectorJenkins#password_ref}
  */
  readonly passwordRef: string;
  /**
  * Username to use for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_jenkins#username PlatformConnectorJenkins#username}
  */
  readonly username?: string;
  /**
  * Username reference to use for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_jenkins#username_ref PlatformConnectorJenkins#username_ref}
  */
  readonly usernameRef?: string;
}

export function platformConnectorJenkinsAuthJenkinsUserNamePasswordToTerraform(struct?: PlatformConnectorJenkinsAuthJenkinsUserNamePasswordOutputReference | PlatformConnectorJenkinsAuthJenkinsUserNamePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_ref: cdktf.stringToTerraform(struct!.passwordRef),
    username: cdktf.stringToTerraform(struct!.username),
    username_ref: cdktf.stringToTerraform(struct!.usernameRef),
  }
}


export function platformConnectorJenkinsAuthJenkinsUserNamePasswordToHclTerraform(struct?: PlatformConnectorJenkinsAuthJenkinsUserNamePasswordOutputReference | PlatformConnectorJenkinsAuthJenkinsUserNamePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_ref: {
      value: cdktf.stringToHclTerraform(struct!.passwordRef),
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
    username_ref: {
      value: cdktf.stringToHclTerraform(struct!.usernameRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorJenkinsAuthJenkinsUserNamePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorJenkinsAuthJenkinsUserNamePassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordRef = this._passwordRef;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameRef = this._usernameRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorJenkinsAuthJenkinsUserNamePassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._passwordRef = undefined;
      this._username = undefined;
      this._usernameRef = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._passwordRef = value.passwordRef;
      this._username = value.username;
      this._usernameRef = value.usernameRef;
    }
  }

  // password_ref - computed: false, optional: false, required: true
  private _passwordRef?: string; 
  public get passwordRef() {
    return this.getStringAttribute('password_ref');
  }
  public set passwordRef(value: string) {
    this._passwordRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRefInput() {
    return this._passwordRef;
  }

  // username - computed: false, optional: true, required: false
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

  // username_ref - computed: false, optional: true, required: false
  private _usernameRef?: string; 
  public get usernameRef() {
    return this.getStringAttribute('username_ref');
  }
  public set usernameRef(value: string) {
    this._usernameRef = value;
  }
  public resetUsernameRef() {
    this._usernameRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameRefInput() {
    return this._usernameRef;
  }
}
export interface PlatformConnectorJenkinsAuth {
  /**
  * Can be one of UsernamePassword, Anonymous, Bearer Token(HTTP Header)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_jenkins#type PlatformConnectorJenkins#type}
  */
  readonly type: string;
  /**
  * jenkins_bearer_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_jenkins#jenkins_bearer_token PlatformConnectorJenkins#jenkins_bearer_token}
  */
  readonly jenkinsBearerToken?: PlatformConnectorJenkinsAuthJenkinsBearerToken;
  /**
  * jenkins_user_name_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_jenkins#jenkins_user_name_password PlatformConnectorJenkins#jenkins_user_name_password}
  */
  readonly jenkinsUserNamePassword?: PlatformConnectorJenkinsAuthJenkinsUserNamePassword;
}

export function platformConnectorJenkinsAuthToTerraform(struct?: PlatformConnectorJenkinsAuthOutputReference | PlatformConnectorJenkinsAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    jenkins_bearer_token: platformConnectorJenkinsAuthJenkinsBearerTokenToTerraform(struct!.jenkinsBearerToken),
    jenkins_user_name_password: platformConnectorJenkinsAuthJenkinsUserNamePasswordToTerraform(struct!.jenkinsUserNamePassword),
  }
}


export function platformConnectorJenkinsAuthToHclTerraform(struct?: PlatformConnectorJenkinsAuthOutputReference | PlatformConnectorJenkinsAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jenkins_bearer_token: {
      value: platformConnectorJenkinsAuthJenkinsBearerTokenToHclTerraform(struct!.jenkinsBearerToken),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorJenkinsAuthJenkinsBearerTokenList",
    },
    jenkins_user_name_password: {
      value: platformConnectorJenkinsAuthJenkinsUserNamePasswordToHclTerraform(struct!.jenkinsUserNamePassword),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorJenkinsAuthJenkinsUserNamePasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorJenkinsAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorJenkinsAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._jenkinsBearerToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jenkinsBearerToken = this._jenkinsBearerToken?.internalValue;
    }
    if (this._jenkinsUserNamePassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jenkinsUserNamePassword = this._jenkinsUserNamePassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorJenkinsAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._jenkinsBearerToken.internalValue = undefined;
      this._jenkinsUserNamePassword.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._jenkinsBearerToken.internalValue = value.jenkinsBearerToken;
      this._jenkinsUserNamePassword.internalValue = value.jenkinsUserNamePassword;
    }
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

  // jenkins_bearer_token - computed: false, optional: true, required: false
  private _jenkinsBearerToken = new PlatformConnectorJenkinsAuthJenkinsBearerTokenOutputReference(this, "jenkins_bearer_token");
  public get jenkinsBearerToken() {
    return this._jenkinsBearerToken;
  }
  public putJenkinsBearerToken(value: PlatformConnectorJenkinsAuthJenkinsBearerToken) {
    this._jenkinsBearerToken.internalValue = value;
  }
  public resetJenkinsBearerToken() {
    this._jenkinsBearerToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jenkinsBearerTokenInput() {
    return this._jenkinsBearerToken.internalValue;
  }

  // jenkins_user_name_password - computed: false, optional: true, required: false
  private _jenkinsUserNamePassword = new PlatformConnectorJenkinsAuthJenkinsUserNamePasswordOutputReference(this, "jenkins_user_name_password");
  public get jenkinsUserNamePassword() {
    return this._jenkinsUserNamePassword;
  }
  public putJenkinsUserNamePassword(value: PlatformConnectorJenkinsAuthJenkinsUserNamePassword) {
    this._jenkinsUserNamePassword.internalValue = value;
  }
  public resetJenkinsUserNamePassword() {
    this._jenkinsUserNamePassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jenkinsUserNamePasswordInput() {
    return this._jenkinsUserNamePassword.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_jenkins harness_platform_connector_jenkins}
*/
export class PlatformConnectorJenkins extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_jenkins";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformConnectorJenkins resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformConnectorJenkins to import
  * @param importFromId The id of the existing PlatformConnectorJenkins that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_jenkins#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformConnectorJenkins to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_jenkins", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_jenkins harness_platform_connector_jenkins} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformConnectorJenkinsConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformConnectorJenkinsConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_jenkins',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.2',
        providerVersionConstraint: '0.39.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delegateSelectors = config.delegateSelectors;
    this._description = config.description;
    this._id = config.id;
    this._identifier = config.identifier;
    this._jenkinsUrl = config.jenkinsUrl;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._tags = config.tags;
    this._auth.internalValue = config.auth;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delegate_selectors - computed: false, optional: true, required: false
  private _delegateSelectors?: string[]; 
  public get delegateSelectors() {
    return cdktf.Fn.tolist(this.getListAttribute('delegate_selectors'));
  }
  public set delegateSelectors(value: string[]) {
    this._delegateSelectors = value;
  }
  public resetDelegateSelectors() {
    this._delegateSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateSelectorsInput() {
    return this._delegateSelectors;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // jenkins_url - computed: false, optional: false, required: true
  private _jenkinsUrl?: string; 
  public get jenkinsUrl() {
    return this.getStringAttribute('jenkins_url');
  }
  public set jenkinsUrl(value: string) {
    this._jenkinsUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jenkinsUrlInput() {
    return this._jenkinsUrl;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new PlatformConnectorJenkinsAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: PlatformConnectorJenkinsAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._delegateSelectors),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      jenkins_url: cdktf.stringToTerraform(this._jenkinsUrl),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      auth: platformConnectorJenkinsAuthToTerraform(this._auth.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delegate_selectors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._delegateSelectors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jenkins_url: {
        value: cdktf.stringToHclTerraform(this._jenkinsUrl),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auth: {
        value: platformConnectorJenkinsAuthToHclTerraform(this._auth.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorJenkinsAuthList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
