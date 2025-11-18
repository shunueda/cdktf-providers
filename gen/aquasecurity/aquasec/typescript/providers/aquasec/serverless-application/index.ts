// https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerlessApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The username of the user who created or last modified the serverless application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#author ServerlessApplication#author}
  */
  readonly author?: string;
  /**
  * Whether to automatically pull images from the registry on creation and daily
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#auto_pull ServerlessApplication#auto_pull}
  */
  readonly autoPull?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#auto_pull_max ServerlessApplication#auto_pull_max}
  */
  readonly autoPullMax?: number;
  /**
  * The description of the Serverless application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#auto_pull_pattern ServerlessApplication#auto_pull_pattern}
  */
  readonly autoPullPattern?: string;
  /**
  * The time of day to start pulling new images from the registry, in the format HH:MM (24-hour clock), defaults to 03:00
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#auto_pull_time ServerlessApplication#auto_pull_time}
  */
  readonly autoPullTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#cloud_project ServerlessApplication#cloud_project}
  */
  readonly cloudProject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#compute_provider ServerlessApplication#compute_provider}
  */
  readonly computeProvider: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#description ServerlessApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#exclude_tags ServerlessApplication#exclude_tags}
  */
  readonly excludeTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#external_id ServerlessApplication#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#id ServerlessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#include_tags ServerlessApplication#include_tags}
  */
  readonly includeTags?: string[];
  /**
  * The last time the registry was modified in UNIX time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#lastupdate ServerlessApplication#lastupdate}
  */
  readonly lastupdate?: number;
  /**
  * The name of the serverless application; string, required - this will be treated as the serverless application's ID, so choose a simple alphanumerical name without special signs and spaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#name ServerlessApplication#name}
  */
  readonly name: string;
  /**
  * The password for registry authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#password ServerlessApplication#password}
  */
  readonly password?: string;
  /**
  * Patterns for tags to be pulled from auto pull
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#pull_tags_pattern ServerlessApplication#pull_tags_pattern}
  */
  readonly pullTagsPattern?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#pull_tags_pattern_excluded ServerlessApplication#pull_tags_pattern_excluded}
  */
  readonly pullTagsPatternExcluded?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#region ServerlessApplication#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#role_arn ServerlessApplication#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The scanner group name (required when scanner_type = "specific" type)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#scanner_group_name ServerlessApplication#scanner_group_name}
  */
  readonly scannerGroupName?: string;
  /**
  * List of scanner names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#scanner_name ServerlessApplication#scanner_name}
  */
  readonly scannerName?: string[];
  /**
  * The Scanner type (either "any" or "specific")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#scanner_type ServerlessApplication#scanner_type}
  */
  readonly scannerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#sqs_url ServerlessApplication#sqs_url}
  */
  readonly sqsUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#subscription_id ServerlessApplication#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#tenant_id ServerlessApplication#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * The username for registry authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#username ServerlessApplication#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application aquasec_serverless_application}
*/
export class ServerlessApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_serverless_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServerlessApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServerlessApplication to import
  * @param importFromId The id of the existing ServerlessApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerlessApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_serverless_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/serverless_application aquasec_serverless_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerlessApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ServerlessApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_serverless_application',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._author = config.author;
    this._autoPull = config.autoPull;
    this._autoPullMax = config.autoPullMax;
    this._autoPullPattern = config.autoPullPattern;
    this._autoPullTime = config.autoPullTime;
    this._cloudProject = config.cloudProject;
    this._computeProvider = config.computeProvider;
    this._description = config.description;
    this._excludeTags = config.excludeTags;
    this._externalId = config.externalId;
    this._id = config.id;
    this._includeTags = config.includeTags;
    this._lastupdate = config.lastupdate;
    this._name = config.name;
    this._password = config.password;
    this._pullTagsPattern = config.pullTagsPattern;
    this._pullTagsPatternExcluded = config.pullTagsPatternExcluded;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._scannerGroupName = config.scannerGroupName;
    this._scannerName = config.scannerName;
    this._scannerType = config.scannerType;
    this._sqsUrl = config.sqsUrl;
    this._subscriptionId = config.subscriptionId;
    this._tenantId = config.tenantId;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // author - computed: true, optional: true, required: false
  private _author?: string; 
  public get author() {
    return this.getStringAttribute('author');
  }
  public set author(value: string) {
    this._author = value;
  }
  public resetAuthor() {
    this._author = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorInput() {
    return this._author;
  }

  // auto_pull - computed: false, optional: true, required: false
  private _autoPull?: boolean | cdktf.IResolvable; 
  public get autoPull() {
    return this.getBooleanAttribute('auto_pull');
  }
  public set autoPull(value: boolean | cdktf.IResolvable) {
    this._autoPull = value;
  }
  public resetAutoPull() {
    this._autoPull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPullInput() {
    return this._autoPull;
  }

  // auto_pull_max - computed: false, optional: true, required: false
  private _autoPullMax?: number; 
  public get autoPullMax() {
    return this.getNumberAttribute('auto_pull_max');
  }
  public set autoPullMax(value: number) {
    this._autoPullMax = value;
  }
  public resetAutoPullMax() {
    this._autoPullMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPullMaxInput() {
    return this._autoPullMax;
  }

  // auto_pull_pattern - computed: false, optional: true, required: false
  private _autoPullPattern?: string; 
  public get autoPullPattern() {
    return this.getStringAttribute('auto_pull_pattern');
  }
  public set autoPullPattern(value: string) {
    this._autoPullPattern = value;
  }
  public resetAutoPullPattern() {
    this._autoPullPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPullPatternInput() {
    return this._autoPullPattern;
  }

  // auto_pull_time - computed: true, optional: true, required: false
  private _autoPullTime?: string; 
  public get autoPullTime() {
    return this.getStringAttribute('auto_pull_time');
  }
  public set autoPullTime(value: string) {
    this._autoPullTime = value;
  }
  public resetAutoPullTime() {
    this._autoPullTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPullTimeInput() {
    return this._autoPullTime;
  }

  // cloud_project - computed: false, optional: true, required: false
  private _cloudProject?: string; 
  public get cloudProject() {
    return this.getStringAttribute('cloud_project');
  }
  public set cloudProject(value: string) {
    this._cloudProject = value;
  }
  public resetCloudProject() {
    this._cloudProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProjectInput() {
    return this._cloudProject;
  }

  // compute_provider - computed: false, optional: false, required: true
  private _computeProvider?: number; 
  public get computeProvider() {
    return this.getNumberAttribute('compute_provider');
  }
  public set computeProvider(value: number) {
    this._computeProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeProviderInput() {
    return this._computeProvider;
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

  // exclude_tags - computed: false, optional: true, required: false
  private _excludeTags?: string[]; 
  public get excludeTags() {
    return this.getListAttribute('exclude_tags');
  }
  public set excludeTags(value: string[]) {
    this._excludeTags = value;
  }
  public resetExcludeTags() {
    this._excludeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTagsInput() {
    return this._excludeTags;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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

  // include_tags - computed: false, optional: true, required: false
  private _includeTags?: string[]; 
  public get includeTags() {
    return this.getListAttribute('include_tags');
  }
  public set includeTags(value: string[]) {
    this._includeTags = value;
  }
  public resetIncludeTags() {
    this._includeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTagsInput() {
    return this._includeTags;
  }

  // lastupdate - computed: true, optional: true, required: false
  private _lastupdate?: number; 
  public get lastupdate() {
    return this.getNumberAttribute('lastupdate');
  }
  public set lastupdate(value: number) {
    this._lastupdate = value;
  }
  public resetLastupdate() {
    this._lastupdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastupdateInput() {
    return this._lastupdate;
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

  // pull_tags_pattern - computed: false, optional: true, required: false
  private _pullTagsPattern?: string[]; 
  public get pullTagsPattern() {
    return this.getListAttribute('pull_tags_pattern');
  }
  public set pullTagsPattern(value: string[]) {
    this._pullTagsPattern = value;
  }
  public resetPullTagsPattern() {
    this._pullTagsPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullTagsPatternInput() {
    return this._pullTagsPattern;
  }

  // pull_tags_pattern_excluded - computed: false, optional: true, required: false
  private _pullTagsPatternExcluded?: string[]; 
  public get pullTagsPatternExcluded() {
    return this.getListAttribute('pull_tags_pattern_excluded');
  }
  public set pullTagsPatternExcluded(value: string[]) {
    this._pullTagsPatternExcluded = value;
  }
  public resetPullTagsPatternExcluded() {
    this._pullTagsPatternExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullTagsPatternExcludedInput() {
    return this._pullTagsPatternExcluded;
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

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // scanner_group_name - computed: false, optional: true, required: false
  private _scannerGroupName?: string; 
  public get scannerGroupName() {
    return this.getStringAttribute('scanner_group_name');
  }
  public set scannerGroupName(value: string) {
    this._scannerGroupName = value;
  }
  public resetScannerGroupName() {
    this._scannerGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scannerGroupNameInput() {
    return this._scannerGroupName;
  }

  // scanner_name - computed: false, optional: true, required: false
  private _scannerName?: string[]; 
  public get scannerName() {
    return this.getListAttribute('scanner_name');
  }
  public set scannerName(value: string[]) {
    this._scannerName = value;
  }
  public resetScannerName() {
    this._scannerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scannerNameInput() {
    return this._scannerName;
  }

  // scanner_type - computed: false, optional: true, required: false
  private _scannerType?: string; 
  public get scannerType() {
    return this.getStringAttribute('scanner_type');
  }
  public set scannerType(value: string) {
    this._scannerType = value;
  }
  public resetScannerType() {
    this._scannerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scannerTypeInput() {
    return this._scannerType;
  }

  // sqs_url - computed: false, optional: true, required: false
  private _sqsUrl?: string; 
  public get sqsUrl() {
    return this.getStringAttribute('sqs_url');
  }
  public set sqsUrl(value: string) {
    this._sqsUrl = value;
  }
  public resetSqsUrl() {
    this._sqsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsUrlInput() {
    return this._sqsUrl;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      author: cdktf.stringToTerraform(this._author),
      auto_pull: cdktf.booleanToTerraform(this._autoPull),
      auto_pull_max: cdktf.numberToTerraform(this._autoPullMax),
      auto_pull_pattern: cdktf.stringToTerraform(this._autoPullPattern),
      auto_pull_time: cdktf.stringToTerraform(this._autoPullTime),
      cloud_project: cdktf.stringToTerraform(this._cloudProject),
      compute_provider: cdktf.numberToTerraform(this._computeProvider),
      description: cdktf.stringToTerraform(this._description),
      exclude_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeTags),
      external_id: cdktf.stringToTerraform(this._externalId),
      id: cdktf.stringToTerraform(this._id),
      include_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeTags),
      lastupdate: cdktf.numberToTerraform(this._lastupdate),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      pull_tags_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pullTagsPattern),
      pull_tags_pattern_excluded: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pullTagsPatternExcluded),
      region: cdktf.stringToTerraform(this._region),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      scanner_group_name: cdktf.stringToTerraform(this._scannerGroupName),
      scanner_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scannerName),
      scanner_type: cdktf.stringToTerraform(this._scannerType),
      sqs_url: cdktf.stringToTerraform(this._sqsUrl),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      author: {
        value: cdktf.stringToHclTerraform(this._author),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_pull: {
        value: cdktf.booleanToHclTerraform(this._autoPull),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_pull_max: {
        value: cdktf.numberToHclTerraform(this._autoPullMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_pull_pattern: {
        value: cdktf.stringToHclTerraform(this._autoPullPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_pull_time: {
        value: cdktf.stringToHclTerraform(this._autoPullTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_project: {
        value: cdktf.stringToHclTerraform(this._cloudProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_provider: {
        value: cdktf.numberToHclTerraform(this._computeProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
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
      include_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      lastupdate: {
        value: cdktf.numberToHclTerraform(this._lastupdate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      pull_tags_pattern: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pullTagsPattern),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      pull_tags_pattern_excluded: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pullTagsPatternExcluded),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scanner_group_name: {
        value: cdktf.stringToHclTerraform(this._scannerGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scanner_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scannerName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      scanner_type: {
        value: cdktf.stringToHclTerraform(this._scannerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sqs_url: {
        value: cdktf.stringToHclTerraform(this._sqsUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
