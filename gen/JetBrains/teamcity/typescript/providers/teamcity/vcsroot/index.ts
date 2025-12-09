// https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VcsrootConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#git Vcsroot#git}
  */
  readonly git: VcsrootGit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#id Vcsroot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#name Vcsroot#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#polling_interval Vcsroot#polling_interval}
  */
  readonly pollingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#project_id Vcsroot#project_id}
  */
  readonly projectId: string;
}
export interface VcsrootGit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#auth_method Vcsroot#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#branch Vcsroot#branch}
  */
  readonly branch: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#branch_spec Vcsroot#branch_spec}
  */
  readonly branchSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#checkout_policy Vcsroot#checkout_policy}
  */
  readonly checkoutPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#clean_files_policy Vcsroot#clean_files_policy}
  */
  readonly cleanFilesPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#clean_policy Vcsroot#clean_policy}
  */
  readonly cleanPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#convert_crlf Vcsroot#convert_crlf}
  */
  readonly convertCrlf?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#ignore_known_hosts Vcsroot#ignore_known_hosts}
  */
  readonly ignoreKnownHosts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#passphrase Vcsroot#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#password Vcsroot#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#path_to_git Vcsroot#path_to_git}
  */
  readonly pathToGit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#private_key_path Vcsroot#private_key_path}
  */
  readonly privateKeyPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#push_url Vcsroot#push_url}
  */
  readonly pushUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#submodules Vcsroot#submodules}
  */
  readonly submodules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#tags_as_branches Vcsroot#tags_as_branches}
  */
  readonly tagsAsBranches?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#token_id Vcsroot#token_id}
  */
  readonly tokenId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#uploaded_key Vcsroot#uploaded_key}
  */
  readonly uploadedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#url Vcsroot#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#username Vcsroot#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#username_for_tags Vcsroot#username_for_tags}
  */
  readonly usernameForTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#username_style Vcsroot#username_style}
  */
  readonly usernameStyle?: string;
}

export function vcsrootGitToTerraform(struct?: VcsrootGit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    branch: cdktf.stringToTerraform(struct!.branch),
    branch_spec: cdktf.stringToTerraform(struct!.branchSpec),
    checkout_policy: cdktf.stringToTerraform(struct!.checkoutPolicy),
    clean_files_policy: cdktf.stringToTerraform(struct!.cleanFilesPolicy),
    clean_policy: cdktf.stringToTerraform(struct!.cleanPolicy),
    convert_crlf: cdktf.booleanToTerraform(struct!.convertCrlf),
    ignore_known_hosts: cdktf.booleanToTerraform(struct!.ignoreKnownHosts),
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
    password: cdktf.stringToTerraform(struct!.password),
    path_to_git: cdktf.stringToTerraform(struct!.pathToGit),
    private_key_path: cdktf.stringToTerraform(struct!.privateKeyPath),
    push_url: cdktf.stringToTerraform(struct!.pushUrl),
    submodules: cdktf.stringToTerraform(struct!.submodules),
    tags_as_branches: cdktf.booleanToTerraform(struct!.tagsAsBranches),
    token_id: cdktf.stringToTerraform(struct!.tokenId),
    uploaded_key: cdktf.stringToTerraform(struct!.uploadedKey),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
    username_for_tags: cdktf.stringToTerraform(struct!.usernameForTags),
    username_style: cdktf.stringToTerraform(struct!.usernameStyle),
  }
}


export function vcsrootGitToHclTerraform(struct?: VcsrootGit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branch_spec: {
      value: cdktf.stringToHclTerraform(struct!.branchSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checkout_policy: {
      value: cdktf.stringToHclTerraform(struct!.checkoutPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clean_files_policy: {
      value: cdktf.stringToHclTerraform(struct!.cleanFilesPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clean_policy: {
      value: cdktf.stringToHclTerraform(struct!.cleanPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    convert_crlf: {
      value: cdktf.booleanToHclTerraform(struct!.convertCrlf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_known_hosts: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreKnownHosts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_to_git: {
      value: cdktf.stringToHclTerraform(struct!.pathToGit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_path: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    push_url: {
      value: cdktf.stringToHclTerraform(struct!.pushUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    submodules: {
      value: cdktf.stringToHclTerraform(struct!.submodules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags_as_branches: {
      value: cdktf.booleanToHclTerraform(struct!.tagsAsBranches),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    token_id: {
      value: cdktf.stringToHclTerraform(struct!.tokenId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uploaded_key: {
      value: cdktf.stringToHclTerraform(struct!.uploadedKey),
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
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_for_tags: {
      value: cdktf.stringToHclTerraform(struct!.usernameForTags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_style: {
      value: cdktf.stringToHclTerraform(struct!.usernameStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VcsrootGitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VcsrootGit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._branchSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchSpec = this._branchSpec;
    }
    if (this._checkoutPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkoutPolicy = this._checkoutPolicy;
    }
    if (this._cleanFilesPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanFilesPolicy = this._cleanFilesPolicy;
    }
    if (this._cleanPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanPolicy = this._cleanPolicy;
    }
    if (this._convertCrlf !== undefined) {
      hasAnyValues = true;
      internalValueResult.convertCrlf = this._convertCrlf;
    }
    if (this._ignoreKnownHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreKnownHosts = this._ignoreKnownHosts;
    }
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pathToGit !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathToGit = this._pathToGit;
    }
    if (this._privateKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPath = this._privateKeyPath;
    }
    if (this._pushUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushUrl = this._pushUrl;
    }
    if (this._submodules !== undefined) {
      hasAnyValues = true;
      internalValueResult.submodules = this._submodules;
    }
    if (this._tagsAsBranches !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagsAsBranches = this._tagsAsBranches;
    }
    if (this._tokenId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenId = this._tokenId;
    }
    if (this._uploadedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadedKey = this._uploadedKey;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameForTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameForTags = this._usernameForTags;
    }
    if (this._usernameStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameStyle = this._usernameStyle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VcsrootGit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authMethod = undefined;
      this._branch = undefined;
      this._branchSpec = undefined;
      this._checkoutPolicy = undefined;
      this._cleanFilesPolicy = undefined;
      this._cleanPolicy = undefined;
      this._convertCrlf = undefined;
      this._ignoreKnownHosts = undefined;
      this._passphrase = undefined;
      this._password = undefined;
      this._pathToGit = undefined;
      this._privateKeyPath = undefined;
      this._pushUrl = undefined;
      this._submodules = undefined;
      this._tagsAsBranches = undefined;
      this._tokenId = undefined;
      this._uploadedKey = undefined;
      this._url = undefined;
      this._username = undefined;
      this._usernameForTags = undefined;
      this._usernameStyle = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authMethod = value.authMethod;
      this._branch = value.branch;
      this._branchSpec = value.branchSpec;
      this._checkoutPolicy = value.checkoutPolicy;
      this._cleanFilesPolicy = value.cleanFilesPolicy;
      this._cleanPolicy = value.cleanPolicy;
      this._convertCrlf = value.convertCrlf;
      this._ignoreKnownHosts = value.ignoreKnownHosts;
      this._passphrase = value.passphrase;
      this._password = value.password;
      this._pathToGit = value.pathToGit;
      this._privateKeyPath = value.privateKeyPath;
      this._pushUrl = value.pushUrl;
      this._submodules = value.submodules;
      this._tagsAsBranches = value.tagsAsBranches;
      this._tokenId = value.tokenId;
      this._uploadedKey = value.uploadedKey;
      this._url = value.url;
      this._username = value.username;
      this._usernameForTags = value.usernameForTags;
      this._usernameStyle = value.usernameStyle;
    }
  }

  // auth_method - computed: false, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // branch_spec - computed: false, optional: true, required: false
  private _branchSpec?: string; 
  public get branchSpec() {
    return this.getStringAttribute('branch_spec');
  }
  public set branchSpec(value: string) {
    this._branchSpec = value;
  }
  public resetBranchSpec() {
    this._branchSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchSpecInput() {
    return this._branchSpec;
  }

  // checkout_policy - computed: true, optional: true, required: false
  private _checkoutPolicy?: string; 
  public get checkoutPolicy() {
    return this.getStringAttribute('checkout_policy');
  }
  public set checkoutPolicy(value: string) {
    this._checkoutPolicy = value;
  }
  public resetCheckoutPolicy() {
    this._checkoutPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkoutPolicyInput() {
    return this._checkoutPolicy;
  }

  // clean_files_policy - computed: true, optional: true, required: false
  private _cleanFilesPolicy?: string; 
  public get cleanFilesPolicy() {
    return this.getStringAttribute('clean_files_policy');
  }
  public set cleanFilesPolicy(value: string) {
    this._cleanFilesPolicy = value;
  }
  public resetCleanFilesPolicy() {
    this._cleanFilesPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanFilesPolicyInput() {
    return this._cleanFilesPolicy;
  }

  // clean_policy - computed: true, optional: true, required: false
  private _cleanPolicy?: string; 
  public get cleanPolicy() {
    return this.getStringAttribute('clean_policy');
  }
  public set cleanPolicy(value: string) {
    this._cleanPolicy = value;
  }
  public resetCleanPolicy() {
    this._cleanPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanPolicyInput() {
    return this._cleanPolicy;
  }

  // convert_crlf - computed: false, optional: true, required: false
  private _convertCrlf?: boolean | cdktf.IResolvable; 
  public get convertCrlf() {
    return this.getBooleanAttribute('convert_crlf');
  }
  public set convertCrlf(value: boolean | cdktf.IResolvable) {
    this._convertCrlf = value;
  }
  public resetConvertCrlf() {
    this._convertCrlf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convertCrlfInput() {
    return this._convertCrlf;
  }

  // ignore_known_hosts - computed: true, optional: true, required: false
  private _ignoreKnownHosts?: boolean | cdktf.IResolvable; 
  public get ignoreKnownHosts() {
    return this.getBooleanAttribute('ignore_known_hosts');
  }
  public set ignoreKnownHosts(value: boolean | cdktf.IResolvable) {
    this._ignoreKnownHosts = value;
  }
  public resetIgnoreKnownHosts() {
    this._ignoreKnownHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreKnownHostsInput() {
    return this._ignoreKnownHosts;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // password - computed: false, optional: true, required: false
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

  // path_to_git - computed: false, optional: true, required: false
  private _pathToGit?: string; 
  public get pathToGit() {
    return this.getStringAttribute('path_to_git');
  }
  public set pathToGit(value: string) {
    this._pathToGit = value;
  }
  public resetPathToGit() {
    this._pathToGit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathToGitInput() {
    return this._pathToGit;
  }

  // private_key_path - computed: false, optional: true, required: false
  private _privateKeyPath?: string; 
  public get privateKeyPath() {
    return this.getStringAttribute('private_key_path');
  }
  public set privateKeyPath(value: string) {
    this._privateKeyPath = value;
  }
  public resetPrivateKeyPath() {
    this._privateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPathInput() {
    return this._privateKeyPath;
  }

  // push_url - computed: false, optional: true, required: false
  private _pushUrl?: string; 
  public get pushUrl() {
    return this.getStringAttribute('push_url');
  }
  public set pushUrl(value: string) {
    this._pushUrl = value;
  }
  public resetPushUrl() {
    this._pushUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushUrlInput() {
    return this._pushUrl;
  }

  // submodules - computed: true, optional: true, required: false
  private _submodules?: string; 
  public get submodules() {
    return this.getStringAttribute('submodules');
  }
  public set submodules(value: string) {
    this._submodules = value;
  }
  public resetSubmodules() {
    this._submodules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get submodulesInput() {
    return this._submodules;
  }

  // tags_as_branches - computed: false, optional: true, required: false
  private _tagsAsBranches?: boolean | cdktf.IResolvable; 
  public get tagsAsBranches() {
    return this.getBooleanAttribute('tags_as_branches');
  }
  public set tagsAsBranches(value: boolean | cdktf.IResolvable) {
    this._tagsAsBranches = value;
  }
  public resetTagsAsBranches() {
    this._tagsAsBranches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAsBranchesInput() {
    return this._tagsAsBranches;
  }

  // token_id - computed: false, optional: true, required: false
  private _tokenId?: string; 
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }
  public set tokenId(value: string) {
    this._tokenId = value;
  }
  public resetTokenId() {
    this._tokenId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenIdInput() {
    return this._tokenId;
  }

  // uploaded_key - computed: false, optional: true, required: false
  private _uploadedKey?: string; 
  public get uploadedKey() {
    return this.getStringAttribute('uploaded_key');
  }
  public set uploadedKey(value: string) {
    this._uploadedKey = value;
  }
  public resetUploadedKey() {
    this._uploadedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadedKeyInput() {
    return this._uploadedKey;
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

  // username_for_tags - computed: false, optional: true, required: false
  private _usernameForTags?: string; 
  public get usernameForTags() {
    return this.getStringAttribute('username_for_tags');
  }
  public set usernameForTags(value: string) {
    this._usernameForTags = value;
  }
  public resetUsernameForTags() {
    this._usernameForTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameForTagsInput() {
    return this._usernameForTags;
  }

  // username_style - computed: true, optional: true, required: false
  private _usernameStyle?: string; 
  public get usernameStyle() {
    return this.getStringAttribute('username_style');
  }
  public set usernameStyle(value: string) {
    this._usernameStyle = value;
  }
  public resetUsernameStyle() {
    this._usernameStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameStyleInput() {
    return this._usernameStyle;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot teamcity_vcsroot}
*/
export class Vcsroot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "teamcity_vcsroot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vcsroot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vcsroot to import
  * @param importFromId The id of the existing Vcsroot that should be imported. Refer to the {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vcsroot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "teamcity_vcsroot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/vcsroot teamcity_vcsroot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VcsrootConfig
  */
  public constructor(scope: Construct, id: string, config: VcsrootConfig) {
    super(scope, id, {
      terraformResourceType: 'teamcity_vcsroot',
      terraformGeneratorMetadata: {
        providerName: 'teamcity',
        providerVersion: '0.0.87',
        providerVersionConstraint: '0.0.87'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._git.internalValue = config.git;
    this._id = config.id;
    this._name = config.name;
    this._pollingInterval = config.pollingInterval;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // git - computed: false, optional: false, required: true
  private _git = new VcsrootGitOutputReference(this, "git");
  public get git() {
    return this._git;
  }
  public putGit(value: VcsrootGit) {
    this._git.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitInput() {
    return this._git.internalValue;
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

  // polling_interval - computed: false, optional: true, required: false
  private _pollingInterval?: number; 
  public get pollingInterval() {
    return this.getNumberAttribute('polling_interval');
  }
  public set pollingInterval(value: number) {
    this._pollingInterval = value;
  }
  public resetPollingInterval() {
    this._pollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalInput() {
    return this._pollingInterval;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      git: vcsrootGitToTerraform(this._git.internalValue),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      polling_interval: cdktf.numberToTerraform(this._pollingInterval),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      git: {
        value: vcsrootGitToHclTerraform(this._git.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VcsrootGit",
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
      polling_interval: {
        value: cdktf.numberToHclTerraform(this._pollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
