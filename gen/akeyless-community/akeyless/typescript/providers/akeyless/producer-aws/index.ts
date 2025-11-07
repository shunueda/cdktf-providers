// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProducerAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The types of credentials to retrieve from AWS. Options:[iam_user,assume_role]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#access_mode ProducerAws#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Access Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#aws_access_key_id ProducerAws#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * Access Secret Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#aws_access_secret_key ProducerAws#aws_access_secret_key}
  */
  readonly awsAccessSecretKey?: string;
  /**
  * AWS Role ARNs to be use in the Assume Role operation. Multiple values should be separated by comma
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#aws_role_arns ProducerAws#aws_role_arns}
  */
  readonly awsRoleArns?: string;
  /**
  * Enable AWS User console access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#aws_user_console_access ProducerAws#aws_user_console_access}
  */
  readonly awsUserConsoleAccess?: boolean | cdktf.IResolvable;
  /**
  * UserGroup name(s). Multiple values should be separated by comma
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#aws_user_groups ProducerAws#aws_user_groups}
  */
  readonly awsUserGroups?: string;
  /**
  * Policy ARN(s). Multiple values should be separated by comma
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#aws_user_policies ProducerAws#aws_user_policies}
  */
  readonly awsUserPolicies?: string;
  /**
  * Enable AWS User programmatic access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#aws_user_programmatic_access ProducerAws#aws_user_programmatic_access}
  */
  readonly awsUserProgrammaticAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#id ProducerAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Producer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#name ProducerAws#name}
  */
  readonly name: string;
  /**
  * Encrypt producer with following key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#producer_encryption_key_name ProducerAws#producer_encryption_key_name}
  */
  readonly producerEncryptionKeyName?: string;
  /**
  * Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#region ProducerAws#region}
  */
  readonly region?: string;
  /**
  * The aws account id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#secure_access_aws_account_id ProducerAws#secure_access_aws_account_id}
  */
  readonly secureAccessAwsAccountId?: string;
  /**
  * The aws native cli
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#secure_access_aws_native_cli ProducerAws#secure_access_aws_native_cli}
  */
  readonly secureAccessAwsNativeCli?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#secure_access_aws_region ProducerAws#secure_access_aws_region}
  */
  readonly secureAccessAwsRegion?: string;
  /**
  * Path to the SSH Certificate Issuer for your Akeyless Bastion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#secure_access_bastion_issuer ProducerAws#secure_access_bastion_issuer}
  */
  readonly secureAccessBastionIssuer?: string;
  /**
  * Enable/Disable secure remote access, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#secure_access_enable ProducerAws#secure_access_enable}
  */
  readonly secureAccessEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#secure_access_url ProducerAws#secure_access_url}
  */
  readonly secureAccessUrl?: string;
  /**
  * Enable Web Secure Remote Access 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#secure_access_web ProducerAws#secure_access_web}
  */
  readonly secureAccessWeb?: boolean | cdktf.IResolvable;
  /**
  * Secure browser via Akeyless Web Access Bastion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#secure_access_web_browsing ProducerAws#secure_access_web_browsing}
  */
  readonly secureAccessWebBrowsing?: boolean | cdktf.IResolvable;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: -t Tag1 -t Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#tags ProducerAws#tags}
  */
  readonly tags?: string[];
  /**
  * Name of existing target to use in producer creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#target_name ProducerAws#target_name}
  */
  readonly targetName?: string;
  /**
  * User TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#user_ttl ProducerAws#user_ttl}
  */
  readonly userTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws akeyless_producer_aws}
*/
export class ProducerAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_producer_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProducerAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProducerAws to import
  * @param importFromId The id of the existing ProducerAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProducerAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_producer_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_aws akeyless_producer_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProducerAwsConfig
  */
  public constructor(scope: Construct, id: string, config: ProducerAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_producer_aws',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessMode = config.accessMode;
    this._awsAccessKeyId = config.awsAccessKeyId;
    this._awsAccessSecretKey = config.awsAccessSecretKey;
    this._awsRoleArns = config.awsRoleArns;
    this._awsUserConsoleAccess = config.awsUserConsoleAccess;
    this._awsUserGroups = config.awsUserGroups;
    this._awsUserPolicies = config.awsUserPolicies;
    this._awsUserProgrammaticAccess = config.awsUserProgrammaticAccess;
    this._id = config.id;
    this._name = config.name;
    this._producerEncryptionKeyName = config.producerEncryptionKeyName;
    this._region = config.region;
    this._secureAccessAwsAccountId = config.secureAccessAwsAccountId;
    this._secureAccessAwsNativeCli = config.secureAccessAwsNativeCli;
    this._secureAccessAwsRegion = config.secureAccessAwsRegion;
    this._secureAccessBastionIssuer = config.secureAccessBastionIssuer;
    this._secureAccessEnable = config.secureAccessEnable;
    this._secureAccessUrl = config.secureAccessUrl;
    this._secureAccessWeb = config.secureAccessWeb;
    this._secureAccessWebBrowsing = config.secureAccessWebBrowsing;
    this._tags = config.tags;
    this._targetName = config.targetName;
    this._userTtl = config.userTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_mode - computed: false, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // aws_access_key_id - computed: false, optional: true, required: false
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  public resetAwsAccessKeyId() {
    this._awsAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_access_secret_key - computed: false, optional: true, required: false
  private _awsAccessSecretKey?: string; 
  public get awsAccessSecretKey() {
    return this.getStringAttribute('aws_access_secret_key');
  }
  public set awsAccessSecretKey(value: string) {
    this._awsAccessSecretKey = value;
  }
  public resetAwsAccessSecretKey() {
    this._awsAccessSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessSecretKeyInput() {
    return this._awsAccessSecretKey;
  }

  // aws_role_arns - computed: false, optional: true, required: false
  private _awsRoleArns?: string; 
  public get awsRoleArns() {
    return this.getStringAttribute('aws_role_arns');
  }
  public set awsRoleArns(value: string) {
    this._awsRoleArns = value;
  }
  public resetAwsRoleArns() {
    this._awsRoleArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRoleArnsInput() {
    return this._awsRoleArns;
  }

  // aws_user_console_access - computed: false, optional: true, required: false
  private _awsUserConsoleAccess?: boolean | cdktf.IResolvable; 
  public get awsUserConsoleAccess() {
    return this.getBooleanAttribute('aws_user_console_access');
  }
  public set awsUserConsoleAccess(value: boolean | cdktf.IResolvable) {
    this._awsUserConsoleAccess = value;
  }
  public resetAwsUserConsoleAccess() {
    this._awsUserConsoleAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsUserConsoleAccessInput() {
    return this._awsUserConsoleAccess;
  }

  // aws_user_groups - computed: false, optional: true, required: false
  private _awsUserGroups?: string; 
  public get awsUserGroups() {
    return this.getStringAttribute('aws_user_groups');
  }
  public set awsUserGroups(value: string) {
    this._awsUserGroups = value;
  }
  public resetAwsUserGroups() {
    this._awsUserGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsUserGroupsInput() {
    return this._awsUserGroups;
  }

  // aws_user_policies - computed: false, optional: true, required: false
  private _awsUserPolicies?: string; 
  public get awsUserPolicies() {
    return this.getStringAttribute('aws_user_policies');
  }
  public set awsUserPolicies(value: string) {
    this._awsUserPolicies = value;
  }
  public resetAwsUserPolicies() {
    this._awsUserPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsUserPoliciesInput() {
    return this._awsUserPolicies;
  }

  // aws_user_programmatic_access - computed: false, optional: true, required: false
  private _awsUserProgrammaticAccess?: boolean | cdktf.IResolvable; 
  public get awsUserProgrammaticAccess() {
    return this.getBooleanAttribute('aws_user_programmatic_access');
  }
  public set awsUserProgrammaticAccess(value: boolean | cdktf.IResolvable) {
    this._awsUserProgrammaticAccess = value;
  }
  public resetAwsUserProgrammaticAccess() {
    this._awsUserProgrammaticAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsUserProgrammaticAccessInput() {
    return this._awsUserProgrammaticAccess;
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

  // producer_encryption_key_name - computed: false, optional: true, required: false
  private _producerEncryptionKeyName?: string; 
  public get producerEncryptionKeyName() {
    return this.getStringAttribute('producer_encryption_key_name');
  }
  public set producerEncryptionKeyName(value: string) {
    this._producerEncryptionKeyName = value;
  }
  public resetProducerEncryptionKeyName() {
    this._producerEncryptionKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerEncryptionKeyNameInput() {
    return this._producerEncryptionKeyName;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secure_access_aws_account_id - computed: false, optional: true, required: false
  private _secureAccessAwsAccountId?: string; 
  public get secureAccessAwsAccountId() {
    return this.getStringAttribute('secure_access_aws_account_id');
  }
  public set secureAccessAwsAccountId(value: string) {
    this._secureAccessAwsAccountId = value;
  }
  public resetSecureAccessAwsAccountId() {
    this._secureAccessAwsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessAwsAccountIdInput() {
    return this._secureAccessAwsAccountId;
  }

  // secure_access_aws_native_cli - computed: false, optional: true, required: false
  private _secureAccessAwsNativeCli?: boolean | cdktf.IResolvable; 
  public get secureAccessAwsNativeCli() {
    return this.getBooleanAttribute('secure_access_aws_native_cli');
  }
  public set secureAccessAwsNativeCli(value: boolean | cdktf.IResolvable) {
    this._secureAccessAwsNativeCli = value;
  }
  public resetSecureAccessAwsNativeCli() {
    this._secureAccessAwsNativeCli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessAwsNativeCliInput() {
    return this._secureAccessAwsNativeCli;
  }

  // secure_access_aws_region - computed: true, optional: true, required: false
  private _secureAccessAwsRegion?: string; 
  public get secureAccessAwsRegion() {
    return this.getStringAttribute('secure_access_aws_region');
  }
  public set secureAccessAwsRegion(value: string) {
    this._secureAccessAwsRegion = value;
  }
  public resetSecureAccessAwsRegion() {
    this._secureAccessAwsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessAwsRegionInput() {
    return this._secureAccessAwsRegion;
  }

  // secure_access_bastion_issuer - computed: false, optional: true, required: false
  private _secureAccessBastionIssuer?: string; 
  public get secureAccessBastionIssuer() {
    return this.getStringAttribute('secure_access_bastion_issuer');
  }
  public set secureAccessBastionIssuer(value: string) {
    this._secureAccessBastionIssuer = value;
  }
  public resetSecureAccessBastionIssuer() {
    this._secureAccessBastionIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessBastionIssuerInput() {
    return this._secureAccessBastionIssuer;
  }

  // secure_access_enable - computed: false, optional: true, required: false
  private _secureAccessEnable?: string; 
  public get secureAccessEnable() {
    return this.getStringAttribute('secure_access_enable');
  }
  public set secureAccessEnable(value: string) {
    this._secureAccessEnable = value;
  }
  public resetSecureAccessEnable() {
    this._secureAccessEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessEnableInput() {
    return this._secureAccessEnable;
  }

  // secure_access_url - computed: true, optional: true, required: false
  private _secureAccessUrl?: string; 
  public get secureAccessUrl() {
    return this.getStringAttribute('secure_access_url');
  }
  public set secureAccessUrl(value: string) {
    this._secureAccessUrl = value;
  }
  public resetSecureAccessUrl() {
    this._secureAccessUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessUrlInput() {
    return this._secureAccessUrl;
  }

  // secure_access_web - computed: false, optional: true, required: false
  private _secureAccessWeb?: boolean | cdktf.IResolvable; 
  public get secureAccessWeb() {
    return this.getBooleanAttribute('secure_access_web');
  }
  public set secureAccessWeb(value: boolean | cdktf.IResolvable) {
    this._secureAccessWeb = value;
  }
  public resetSecureAccessWeb() {
    this._secureAccessWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessWebInput() {
    return this._secureAccessWeb;
  }

  // secure_access_web_browsing - computed: false, optional: true, required: false
  private _secureAccessWebBrowsing?: boolean | cdktf.IResolvable; 
  public get secureAccessWebBrowsing() {
    return this.getBooleanAttribute('secure_access_web_browsing');
  }
  public set secureAccessWebBrowsing(value: boolean | cdktf.IResolvable) {
    this._secureAccessWebBrowsing = value;
  }
  public resetSecureAccessWebBrowsing() {
    this._secureAccessWebBrowsing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessWebBrowsingInput() {
    return this._secureAccessWebBrowsing;
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

  // target_name - computed: false, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // user_ttl - computed: false, optional: true, required: false
  private _userTtl?: string; 
  public get userTtl() {
    return this.getStringAttribute('user_ttl');
  }
  public set userTtl(value: string) {
    this._userTtl = value;
  }
  public resetUserTtl() {
    this._userTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTtlInput() {
    return this._userTtl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_mode: cdktf.stringToTerraform(this._accessMode),
      aws_access_key_id: cdktf.stringToTerraform(this._awsAccessKeyId),
      aws_access_secret_key: cdktf.stringToTerraform(this._awsAccessSecretKey),
      aws_role_arns: cdktf.stringToTerraform(this._awsRoleArns),
      aws_user_console_access: cdktf.booleanToTerraform(this._awsUserConsoleAccess),
      aws_user_groups: cdktf.stringToTerraform(this._awsUserGroups),
      aws_user_policies: cdktf.stringToTerraform(this._awsUserPolicies),
      aws_user_programmatic_access: cdktf.booleanToTerraform(this._awsUserProgrammaticAccess),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      producer_encryption_key_name: cdktf.stringToTerraform(this._producerEncryptionKeyName),
      region: cdktf.stringToTerraform(this._region),
      secure_access_aws_account_id: cdktf.stringToTerraform(this._secureAccessAwsAccountId),
      secure_access_aws_native_cli: cdktf.booleanToTerraform(this._secureAccessAwsNativeCli),
      secure_access_aws_region: cdktf.stringToTerraform(this._secureAccessAwsRegion),
      secure_access_bastion_issuer: cdktf.stringToTerraform(this._secureAccessBastionIssuer),
      secure_access_enable: cdktf.stringToTerraform(this._secureAccessEnable),
      secure_access_url: cdktf.stringToTerraform(this._secureAccessUrl),
      secure_access_web: cdktf.booleanToTerraform(this._secureAccessWeb),
      secure_access_web_browsing: cdktf.booleanToTerraform(this._secureAccessWebBrowsing),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target_name: cdktf.stringToTerraform(this._targetName),
      user_ttl: cdktf.stringToTerraform(this._userTtl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_mode: {
        value: cdktf.stringToHclTerraform(this._accessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_access_key_id: {
        value: cdktf.stringToHclTerraform(this._awsAccessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_access_secret_key: {
        value: cdktf.stringToHclTerraform(this._awsAccessSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_role_arns: {
        value: cdktf.stringToHclTerraform(this._awsRoleArns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_user_console_access: {
        value: cdktf.booleanToHclTerraform(this._awsUserConsoleAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aws_user_groups: {
        value: cdktf.stringToHclTerraform(this._awsUserGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_user_policies: {
        value: cdktf.stringToHclTerraform(this._awsUserPolicies),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_user_programmatic_access: {
        value: cdktf.booleanToHclTerraform(this._awsUserProgrammaticAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      producer_encryption_key_name: {
        value: cdktf.stringToHclTerraform(this._producerEncryptionKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_aws_account_id: {
        value: cdktf.stringToHclTerraform(this._secureAccessAwsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_aws_native_cli: {
        value: cdktf.booleanToHclTerraform(this._secureAccessAwsNativeCli),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secure_access_aws_region: {
        value: cdktf.stringToHclTerraform(this._secureAccessAwsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_bastion_issuer: {
        value: cdktf.stringToHclTerraform(this._secureAccessBastionIssuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_enable: {
        value: cdktf.stringToHclTerraform(this._secureAccessEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_url: {
        value: cdktf.stringToHclTerraform(this._secureAccessUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_web: {
        value: cdktf.booleanToHclTerraform(this._secureAccessWeb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secure_access_web_browsing: {
        value: cdktf.booleanToHclTerraform(this._secureAccessWebBrowsing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_name: {
        value: cdktf.stringToHclTerraform(this._targetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ttl: {
        value: cdktf.stringToHclTerraform(this._userTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
