// https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#cluster IdentityProvider#cluster}
  */
  readonly cluster: string;
  /**
  * Details of the Github identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#github IdentityProvider#github}
  */
  readonly github?: IdentityProviderGithub;
  /**
  * Details of the Gitlab identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#gitlab IdentityProvider#gitlab}
  */
  readonly gitlab?: IdentityProviderGitlab;
  /**
  * Details of the Google identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#google IdentityProvider#google}
  */
  readonly google?: IdentityProviderGoogle;
  /**
  * Details of the 'htpasswd' identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#htpasswd IdentityProvider#htpasswd}
  */
  readonly htpasswd?: IdentityProviderHtpasswd;
  /**
  * Details of the LDAP identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#ldap IdentityProvider#ldap}
  */
  readonly ldap?: IdentityProviderLdap;
  /**
  * Specifies how new identities are mapped to users when they log in. Options are `add`, `claim`, `generate` and `lookup`. (default is `claim`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#mapping_method IdentityProvider#mapping_method}
  */
  readonly mappingMethod?: string;
  /**
  * Name of the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#name IdentityProvider#name}
  */
  readonly name: string;
  /**
  * Details of the OpenID identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#openid IdentityProvider#openid}
  */
  readonly openid?: IdentityProviderOpenid;
}
export interface IdentityProviderGithub {
  /**
  * Path to PEM-encoded certificate file to use when making requests to the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#ca IdentityProvider#ca}
  */
  readonly ca?: string;
  /**
  * Client identifier of a registered Github OAuth application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#client_id IdentityProvider#client_id}
  */
  readonly clientId: string;
  /**
  * Client secret issued by Github.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#client_secret IdentityProvider#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Optional domain to use with a hosted instance of GitHub Enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#hostname IdentityProvider#hostname}
  */
  readonly hostname?: string;
  /**
  * Only users that are members of at least one of the listed organizations will be allowed to log in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#organizations IdentityProvider#organizations}
  */
  readonly organizations?: string[];
  /**
  * Only users that are members of at least one of the listed teams will be allowed to log in. The format is `<org>`/`<team>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#teams IdentityProvider#teams}
  */
  readonly teams?: string[];
}

export function identityProviderGithubToTerraform(struct?: IdentityProviderGithub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: cdktf.stringToTerraform(struct!.ca),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    organizations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.organizations),
    teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teams),
  }
}


export function identityProviderGithubToHclTerraform(struct?: IdentityProviderGithub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: cdktf.stringToHclTerraform(struct!.ca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.organizations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    teams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.teams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderGithub | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._organizations !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizations = this._organizations;
    }
    if (this._teams !== undefined) {
      hasAnyValues = true;
      internalValueResult.teams = this._teams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderGithub | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._hostname = undefined;
      this._organizations = undefined;
      this._teams = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca = value.ca;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._hostname = value.hostname;
      this._organizations = value.organizations;
      this._teams = value.teams;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
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

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // organizations - computed: false, optional: true, required: false
  private _organizations?: string[]; 
  public get organizations() {
    return this.getListAttribute('organizations');
  }
  public set organizations(value: string[]) {
    this._organizations = value;
  }
  public resetOrganizations() {
    this._organizations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationsInput() {
    return this._organizations;
  }

  // teams - computed: false, optional: true, required: false
  private _teams?: string[]; 
  public get teams() {
    return this.getListAttribute('teams');
  }
  public set teams(value: string[]) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }
}
export interface IdentityProviderGitlab {
  /**
  * Optional trusted certificate authority bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#ca IdentityProvider#ca}
  */
  readonly ca?: string;
  /**
  * Client identifier of a registered Gitlab OAuth application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#client_id IdentityProvider#client_id}
  */
  readonly clientId: string;
  /**
  * Client secret issued by Gitlab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#client_secret IdentityProvider#client_secret}
  */
  readonly clientSecret: string;
  /**
  * URL of the Gitlab instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#url IdentityProvider#url}
  */
  readonly url: string;
}

export function identityProviderGitlabToTerraform(struct?: IdentityProviderGitlab | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: cdktf.stringToTerraform(struct!.ca),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function identityProviderGitlabToHclTerraform(struct?: IdentityProviderGitlab | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: cdktf.stringToHclTerraform(struct!.ca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderGitlabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderGitlab | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderGitlab | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca = value.ca;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._url = value.url;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
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

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface IdentityProviderGoogle {
  /**
  * Client identifier of a registered Google OAuth application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#client_id IdentityProvider#client_id}
  */
  readonly clientId: string;
  /**
  * Client secret issued by Google.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#client_secret IdentityProvider#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Restrict users to a Google Apps domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#hosted_domain IdentityProvider#hosted_domain}
  */
  readonly hostedDomain?: string;
}

export function identityProviderGoogleToTerraform(struct?: IdentityProviderGoogle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    hosted_domain: cdktf.stringToTerraform(struct!.hostedDomain),
  }
}


export function identityProviderGoogleToHclTerraform(struct?: IdentityProviderGoogle | cdktf.IResolvable): any {
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
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosted_domain: {
      value: cdktf.stringToHclTerraform(struct!.hostedDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderGoogleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderGoogle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._hostedDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostedDomain = this._hostedDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderGoogle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._hostedDomain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._hostedDomain = value.hostedDomain;
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

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // hosted_domain - computed: false, optional: true, required: false
  private _hostedDomain?: string; 
  public get hostedDomain() {
    return this.getStringAttribute('hosted_domain');
  }
  public set hostedDomain(value: string) {
    this._hostedDomain = value;
  }
  public resetHostedDomain() {
    this._hostedDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedDomainInput() {
    return this._hostedDomain;
  }
}
export interface IdentityProviderHtpasswdUsers {
  /**
  * User password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#password IdentityProvider#password}
  */
  readonly password: string;
  /**
  * User username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#username IdentityProvider#username}
  */
  readonly username: string;
}

export function identityProviderHtpasswdUsersToTerraform(struct?: IdentityProviderHtpasswdUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function identityProviderHtpasswdUsersToHclTerraform(struct?: IdentityProviderHtpasswdUsers | cdktf.IResolvable): any {
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

export class IdentityProviderHtpasswdUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityProviderHtpasswdUsers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityProviderHtpasswdUsers | cdktf.IResolvable | undefined) {
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

export class IdentityProviderHtpasswdUsersList extends cdktf.ComplexList {
  public internalValue? : IdentityProviderHtpasswdUsers[] | cdktf.IResolvable

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
  public get(index: number): IdentityProviderHtpasswdUsersOutputReference {
    return new IdentityProviderHtpasswdUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityProviderHtpasswd {
  /**
  * A list of htpasswd user credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#users IdentityProvider#users}
  */
  readonly users: IdentityProviderHtpasswdUsers[] | cdktf.IResolvable;
}

export function identityProviderHtpasswdToTerraform(struct?: IdentityProviderHtpasswd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    users: cdktf.listMapper(identityProviderHtpasswdUsersToTerraform, false)(struct!.users),
  }
}


export function identityProviderHtpasswdToHclTerraform(struct?: IdentityProviderHtpasswd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    users: {
      value: cdktf.listMapperHcl(identityProviderHtpasswdUsersToHclTerraform, false)(struct!.users),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityProviderHtpasswdUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderHtpasswdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderHtpasswd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderHtpasswd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._users.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._users.internalValue = value.users;
    }
  }

  // users - computed: false, optional: false, required: true
  private _users = new IdentityProviderHtpasswdUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: IdentityProviderHtpasswdUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}
export interface IdentityProviderLdapAttributes {
  /**
  * The list of attributes whose values should be used as the email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#email IdentityProvider#email}
  */
  readonly email?: string[];
  /**
  * The list of attributes whose values should be used as the user ID. (default ['dn'])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#id IdentityProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * The list of attributes whose values should be used as the display name. (default ['cn'])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#name IdentityProvider#name}
  */
  readonly name?: string[];
  /**
  * The list of attributes whose values should be used as the preferred username. (default ['uid'])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#preferred_username IdentityProvider#preferred_username}
  */
  readonly preferredUsername?: string[];
}

export function identityProviderLdapAttributesToTerraform(struct?: IdentityProviderLdapAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
    preferred_username: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preferredUsername),
  }
}


export function identityProviderLdapAttributesToHclTerraform(struct?: IdentityProviderLdapAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.email),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    preferred_username: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preferredUsername),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderLdapAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderLdapAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._preferredUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredUsername = this._preferredUsername;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderLdapAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._id = undefined;
      this._name = undefined;
      this._preferredUsername = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._id = value.id;
      this._name = value.name;
      this._preferredUsername = value.preferredUsername;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string[]; 
  public get email() {
    return this.getListAttribute('email');
  }
  public set email(value: string[]) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string[]; 
  public get id() {
    return this.getListAttribute('id');
  }
  public set id(value: string[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string[]; 
  public get name() {
    return this.getListAttribute('name');
  }
  public set name(value: string[]) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // preferred_username - computed: true, optional: true, required: false
  private _preferredUsername?: string[]; 
  public get preferredUsername() {
    return this.getListAttribute('preferred_username');
  }
  public set preferredUsername(value: string[]) {
    this._preferredUsername = value;
  }
  public resetPreferredUsername() {
    this._preferredUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredUsernameInput() {
    return this._preferredUsername;
  }
}
export interface IdentityProviderLdap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#attributes IdentityProvider#attributes}
  */
  readonly attributes: IdentityProviderLdapAttributes;
  /**
  * DN to bind with during the search phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#bind_dn IdentityProvider#bind_dn}
  */
  readonly bindDn?: string;
  /**
  * Password to bind with during the search phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#bind_password IdentityProvider#bind_password}
  */
  readonly bindPassword?: string;
  /**
  * Optional trusted certificate authority bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#ca IdentityProvider#ca}
  */
  readonly ca?: string;
  /**
  * Do not make TLS connections to the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#insecure IdentityProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * An RFC 2255 URL which specifies the LDAP search parameters to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#url IdentityProvider#url}
  */
  readonly url: string;
}

export function identityProviderLdapToTerraform(struct?: IdentityProviderLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: identityProviderLdapAttributesToTerraform(struct!.attributes),
    bind_dn: cdktf.stringToTerraform(struct!.bindDn),
    bind_password: cdktf.stringToTerraform(struct!.bindPassword),
    ca: cdktf.stringToTerraform(struct!.ca),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function identityProviderLdapToHclTerraform(struct?: IdentityProviderLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: identityProviderLdapAttributesToHclTerraform(struct!.attributes),
      isBlock: true,
      type: "struct",
      storageClassType: "IdentityProviderLdapAttributes",
    },
    bind_dn: {
      value: cdktf.stringToHclTerraform(struct!.bindDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bind_password: {
      value: cdktf.stringToHclTerraform(struct!.bindPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca: {
      value: cdktf.stringToHclTerraform(struct!.ca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderLdap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._bindDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindDn = this._bindDn;
    }
    if (this._bindPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindPassword = this._bindPassword;
    }
    if (this._ca !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderLdap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._bindDn = undefined;
      this._bindPassword = undefined;
      this._ca = undefined;
      this._insecure = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._bindDn = value.bindDn;
      this._bindPassword = value.bindPassword;
      this._ca = value.ca;
      this._insecure = value.insecure;
      this._url = value.url;
    }
  }

  // attributes - computed: false, optional: false, required: true
  private _attributes = new IdentityProviderLdapAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: IdentityProviderLdapAttributes) {
    this._attributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // bind_dn - computed: false, optional: true, required: false
  private _bindDn?: string; 
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }
  public set bindDn(value: string) {
    this._bindDn = value;
  }
  public resetBindDn() {
    this._bindDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindDnInput() {
    return this._bindDn;
  }

  // bind_password - computed: false, optional: true, required: false
  private _bindPassword?: string; 
  public get bindPassword() {
    return this.getStringAttribute('bind_password');
  }
  public set bindPassword(value: string) {
    this._bindPassword = value;
  }
  public resetBindPassword() {
    this._bindPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindPasswordInput() {
    return this._bindPassword;
  }

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // insecure - computed: true, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface IdentityProviderOpenidClaims {
  /**
  * List of claims to use as the email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#email IdentityProvider#email}
  */
  readonly email?: string[];
  /**
  * List of claims to use as the groups names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#groups IdentityProvider#groups}
  */
  readonly groups?: string[];
  /**
  * List of claims to use as the display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#name IdentityProvider#name}
  */
  readonly name?: string[];
  /**
  * List of claims to use as the preferred username when provisioning a user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#preferred_username IdentityProvider#preferred_username}
  */
  readonly preferredUsername?: string[];
}

export function identityProviderOpenidClaimsToTerraform(struct?: IdentityProviderOpenidClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
    preferred_username: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preferredUsername),
  }
}


export function identityProviderOpenidClaimsToHclTerraform(struct?: IdentityProviderOpenidClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.email),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    preferred_username: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preferredUsername),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderOpenidClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderOpenidClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._preferredUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredUsername = this._preferredUsername;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderOpenidClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._groups = undefined;
      this._name = undefined;
      this._preferredUsername = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._groups = value.groups;
      this._name = value.name;
      this._preferredUsername = value.preferredUsername;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string[]; 
  public get email() {
    return this.getListAttribute('email');
  }
  public set email(value: string[]) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string[]; 
  public get name() {
    return this.getListAttribute('name');
  }
  public set name(value: string[]) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // preferred_username - computed: false, optional: true, required: false
  private _preferredUsername?: string[]; 
  public get preferredUsername() {
    return this.getListAttribute('preferred_username');
  }
  public set preferredUsername(value: string[]) {
    this._preferredUsername = value;
  }
  public resetPreferredUsername() {
    this._preferredUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredUsernameInput() {
    return this._preferredUsername;
  }
}
export interface IdentityProviderOpenid {
  /**
  * Optional trusted certificate authority bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#ca IdentityProvider#ca}
  */
  readonly ca?: string;
  /**
  * OpenID Claims config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#claims IdentityProvider#claims}
  */
  readonly claims: IdentityProviderOpenidClaims;
  /**
  * Client ID from the registered application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#client_id IdentityProvider#client_id}
  */
  readonly clientId: string;
  /**
  * Client Secret from the registered application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#client_secret IdentityProvider#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#extra_authorize_parameters IdentityProvider#extra_authorize_parameters}
  */
  readonly extraAuthorizeParameters?: { [key: string]: string };
  /**
  * List of scopes to request, in addition to the 'openid' scope, during the authorization token request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#extra_scopes IdentityProvider#extra_scopes}
  */
  readonly extraScopes?: string[];
  /**
  * The URL that the OpenID Provider asserts as the Issuer Identifier. It must use the https scheme with no URL query parameters or fragment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#issuer IdentityProvider#issuer}
  */
  readonly issuer: string;
}

export function identityProviderOpenidToTerraform(struct?: IdentityProviderOpenid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: cdktf.stringToTerraform(struct!.ca),
    claims: identityProviderOpenidClaimsToTerraform(struct!.claims),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    extra_authorize_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraAuthorizeParameters),
    extra_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraScopes),
    issuer: cdktf.stringToTerraform(struct!.issuer),
  }
}


export function identityProviderOpenidToHclTerraform(struct?: IdentityProviderOpenid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: cdktf.stringToHclTerraform(struct!.ca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claims: {
      value: identityProviderOpenidClaimsToHclTerraform(struct!.claims),
      isBlock: true,
      type: "struct",
      storageClassType: "IdentityProviderOpenidClaims",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_authorize_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraAuthorizeParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderOpenidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderOpenid | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca;
    }
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._extraAuthorizeParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraAuthorizeParameters = this._extraAuthorizeParameters;
    }
    if (this._extraScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraScopes = this._extraScopes;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderOpenid | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca = undefined;
      this._claims.internalValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._extraAuthorizeParameters = undefined;
      this._extraScopes = undefined;
      this._issuer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca = value.ca;
      this._claims.internalValue = value.claims;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._extraAuthorizeParameters = value.extraAuthorizeParameters;
      this._extraScopes = value.extraScopes;
      this._issuer = value.issuer;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // claims - computed: false, optional: false, required: true
  private _claims = new IdentityProviderOpenidClaimsOutputReference(this, "claims");
  public get claims() {
    return this._claims;
  }
  public putClaims(value: IdentityProviderOpenidClaims) {
    this._claims.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
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

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // extra_authorize_parameters - computed: false, optional: true, required: false
  private _extraAuthorizeParameters?: { [key: string]: string }; 
  public get extraAuthorizeParameters() {
    return this.getStringMapAttribute('extra_authorize_parameters');
  }
  public set extraAuthorizeParameters(value: { [key: string]: string }) {
    this._extraAuthorizeParameters = value;
  }
  public resetExtraAuthorizeParameters() {
    this._extraAuthorizeParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraAuthorizeParametersInput() {
    return this._extraAuthorizeParameters;
  }

  // extra_scopes - computed: false, optional: true, required: false
  private _extraScopes?: string[]; 
  public get extraScopes() {
    return this.getListAttribute('extra_scopes');
  }
  public set extraScopes(value: string[]) {
    this._extraScopes = value;
  }
  public resetExtraScopes() {
    this._extraScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraScopesInput() {
    return this._extraScopes;
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider rhcs_identity_provider}
*/
export class IdentityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rhcs_identity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityProvider to import
  * @param importFromId The id of the existing IdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rhcs_identity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/identity_provider rhcs_identity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'rhcs_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'rhcs',
        providerVersion: '1.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cluster = config.cluster;
    this._github.internalValue = config.github;
    this._gitlab.internalValue = config.gitlab;
    this._google.internalValue = config.google;
    this._htpasswd.internalValue = config.htpasswd;
    this._ldap.internalValue = config.ldap;
    this._mappingMethod = config.mappingMethod;
    this._name = config.name;
    this._openid.internalValue = config.openid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // github - computed: false, optional: true, required: false
  private _github = new IdentityProviderGithubOutputReference(this, "github");
  public get github() {
    return this._github;
  }
  public putGithub(value: IdentityProviderGithub) {
    this._github.internalValue = value;
  }
  public resetGithub() {
    this._github.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInput() {
    return this._github.internalValue;
  }

  // gitlab - computed: false, optional: true, required: false
  private _gitlab = new IdentityProviderGitlabOutputReference(this, "gitlab");
  public get gitlab() {
    return this._gitlab;
  }
  public putGitlab(value: IdentityProviderGitlab) {
    this._gitlab.internalValue = value;
  }
  public resetGitlab() {
    this._gitlab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabInput() {
    return this._gitlab.internalValue;
  }

  // google - computed: false, optional: true, required: false
  private _google = new IdentityProviderGoogleOutputReference(this, "google");
  public get google() {
    return this._google;
  }
  public putGoogle(value: IdentityProviderGoogle) {
    this._google.internalValue = value;
  }
  public resetGoogle() {
    this._google.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleInput() {
    return this._google.internalValue;
  }

  // htpasswd - computed: false, optional: true, required: false
  private _htpasswd = new IdentityProviderHtpasswdOutputReference(this, "htpasswd");
  public get htpasswd() {
    return this._htpasswd;
  }
  public putHtpasswd(value: IdentityProviderHtpasswd) {
    this._htpasswd.internalValue = value;
  }
  public resetHtpasswd() {
    this._htpasswd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htpasswdInput() {
    return this._htpasswd.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ldap - computed: false, optional: true, required: false
  private _ldap = new IdentityProviderLdapOutputReference(this, "ldap");
  public get ldap() {
    return this._ldap;
  }
  public putLdap(value: IdentityProviderLdap) {
    this._ldap.internalValue = value;
  }
  public resetLdap() {
    this._ldap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap.internalValue;
  }

  // mapping_method - computed: true, optional: true, required: false
  private _mappingMethod?: string; 
  public get mappingMethod() {
    return this.getStringAttribute('mapping_method');
  }
  public set mappingMethod(value: string) {
    this._mappingMethod = value;
  }
  public resetMappingMethod() {
    this._mappingMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingMethodInput() {
    return this._mappingMethod;
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

  // openid - computed: false, optional: true, required: false
  private _openid = new IdentityProviderOpenidOutputReference(this, "openid");
  public get openid() {
    return this._openid;
  }
  public putOpenid(value: IdentityProviderOpenid) {
    this._openid.internalValue = value;
  }
  public resetOpenid() {
    this._openid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openidInput() {
    return this._openid.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.stringToTerraform(this._cluster),
      github: identityProviderGithubToTerraform(this._github.internalValue),
      gitlab: identityProviderGitlabToTerraform(this._gitlab.internalValue),
      google: identityProviderGoogleToTerraform(this._google.internalValue),
      htpasswd: identityProviderHtpasswdToTerraform(this._htpasswd.internalValue),
      ldap: identityProviderLdapToTerraform(this._ldap.internalValue),
      mapping_method: cdktf.stringToTerraform(this._mappingMethod),
      name: cdktf.stringToTerraform(this._name),
      openid: identityProviderOpenidToTerraform(this._openid.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      github: {
        value: identityProviderGithubToHclTerraform(this._github.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityProviderGithub",
      },
      gitlab: {
        value: identityProviderGitlabToHclTerraform(this._gitlab.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityProviderGitlab",
      },
      google: {
        value: identityProviderGoogleToHclTerraform(this._google.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityProviderGoogle",
      },
      htpasswd: {
        value: identityProviderHtpasswdToHclTerraform(this._htpasswd.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityProviderHtpasswd",
      },
      ldap: {
        value: identityProviderLdapToHclTerraform(this._ldap.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityProviderLdap",
      },
      mapping_method: {
        value: cdktf.stringToHclTerraform(this._mappingMethod),
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
      openid: {
        value: identityProviderOpenidToHclTerraform(this._openid.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityProviderOpenid",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
