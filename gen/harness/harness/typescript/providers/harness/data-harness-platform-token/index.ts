// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessPlatformTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account Identifier for the Entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_token#account_id DataHarnessPlatformToken#account_id}
  */
  readonly accountId: string;
  /**
  * Identifier of the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_token#apikey_id DataHarnessPlatformToken#apikey_id}
  */
  readonly apikeyId: string;
  /**
  * Type of the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_token#apikey_type DataHarnessPlatformToken#apikey_type}
  */
  readonly apikeyType: string;
  /**
  * Email Id of the user who created the Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_token#email DataHarnessPlatformToken#email}
  */
  readonly email?: string;
  /**
  * Encoded password of the Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_token#encoded_password DataHarnessPlatformToken#encoded_password}
  */
  readonly encodedPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_token#id DataHarnessPlatformToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_token#identifier DataHarnessPlatformToken#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_token#name DataHarnessPlatformToken#name}
  */
  readonly name?: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_token#org_id DataHarnessPlatformToken#org_id}
  */
  readonly orgId?: string;
  /**
  * Parent Entity Identifier of the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_token#parent_id DataHarnessPlatformToken#parent_id}
  */
  readonly parentId: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_token#project_id DataHarnessPlatformToken#project_id}
  */
  readonly projectId?: string;
  /**
  * Scheduled expiry time in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_token#scheduled_expire_time DataHarnessPlatformToken#scheduled_expire_time}
  */
  readonly scheduledExpireTime?: number;
  /**
  * Name of the user who created the Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_token#username DataHarnessPlatformToken#username}
  */
  readonly username?: string;
  /**
  * Boolean value to indicate if Token is valid or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_token#valid DataHarnessPlatformToken#valid}
  */
  readonly valid?: boolean | cdktf.IResolvable;
  /**
  * This is the time from which the Token is valid. The time is in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_token#valid_from DataHarnessPlatformToken#valid_from}
  */
  readonly validFrom?: number;
  /**
  * This is the time till which the Token is valid. The time is in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_token#valid_to DataHarnessPlatformToken#valid_to}
  */
  readonly validTo?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_token harness_platform_token}
*/
export class DataHarnessPlatformToken extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessPlatformToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessPlatformToken to import
  * @param importFromId The id of the existing DataHarnessPlatformToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessPlatformToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_token harness_platform_token} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessPlatformTokenConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessPlatformTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_token',
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
    this._accountId = config.accountId;
    this._apikeyId = config.apikeyId;
    this._apikeyType = config.apikeyType;
    this._email = config.email;
    this._encodedPassword = config.encodedPassword;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._parentId = config.parentId;
    this._projectId = config.projectId;
    this._scheduledExpireTime = config.scheduledExpireTime;
    this._username = config.username;
    this._valid = config.valid;
    this._validFrom = config.validFrom;
    this._validTo = config.validTo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // apikey_id - computed: false, optional: false, required: true
  private _apikeyId?: string; 
  public get apikeyId() {
    return this.getStringAttribute('apikey_id');
  }
  public set apikeyId(value: string) {
    this._apikeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apikeyIdInput() {
    return this._apikeyId;
  }

  // apikey_type - computed: false, optional: false, required: true
  private _apikeyType?: string; 
  public get apikeyType() {
    return this.getStringAttribute('apikey_type');
  }
  public set apikeyType(value: string) {
    this._apikeyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apikeyTypeInput() {
    return this._apikeyType;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // encoded_password - computed: false, optional: true, required: false
  private _encodedPassword?: string; 
  public get encodedPassword() {
    return this.getStringAttribute('encoded_password');
  }
  public set encodedPassword(value: string) {
    this._encodedPassword = value;
  }
  public resetEncodedPassword() {
    this._encodedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodedPasswordInput() {
    return this._encodedPassword;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // parent_id - computed: false, optional: false, required: true
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
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

  // scheduled_expire_time - computed: false, optional: true, required: false
  private _scheduledExpireTime?: number; 
  public get scheduledExpireTime() {
    return this.getNumberAttribute('scheduled_expire_time');
  }
  public set scheduledExpireTime(value: number) {
    this._scheduledExpireTime = value;
  }
  public resetScheduledExpireTime() {
    this._scheduledExpireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledExpireTimeInput() {
    return this._scheduledExpireTime;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
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

  // valid - computed: false, optional: true, required: false
  private _valid?: boolean | cdktf.IResolvable; 
  public get valid() {
    return this.getBooleanAttribute('valid');
  }
  public set valid(value: boolean | cdktf.IResolvable) {
    this._valid = value;
  }
  public resetValid() {
    this._valid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validInput() {
    return this._valid;
  }

  // valid_from - computed: false, optional: true, required: false
  private _validFrom?: number; 
  public get validFrom() {
    return this.getNumberAttribute('valid_from');
  }
  public set validFrom(value: number) {
    this._validFrom = value;
  }
  public resetValidFrom() {
    this._validFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validFromInput() {
    return this._validFrom;
  }

  // valid_to - computed: false, optional: true, required: false
  private _validTo?: number; 
  public get validTo() {
    return this.getNumberAttribute('valid_to');
  }
  public set validTo(value: number) {
    this._validTo = value;
  }
  public resetValidTo() {
    this._validTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validToInput() {
    return this._validTo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      apikey_id: cdktf.stringToTerraform(this._apikeyId),
      apikey_type: cdktf.stringToTerraform(this._apikeyType),
      email: cdktf.stringToTerraform(this._email),
      encoded_password: cdktf.stringToTerraform(this._encodedPassword),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      parent_id: cdktf.stringToTerraform(this._parentId),
      project_id: cdktf.stringToTerraform(this._projectId),
      scheduled_expire_time: cdktf.numberToTerraform(this._scheduledExpireTime),
      username: cdktf.stringToTerraform(this._username),
      valid: cdktf.booleanToTerraform(this._valid),
      valid_from: cdktf.numberToTerraform(this._validFrom),
      valid_to: cdktf.numberToTerraform(this._validTo),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apikey_id: {
        value: cdktf.stringToHclTerraform(this._apikeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apikey_type: {
        value: cdktf.stringToHclTerraform(this._apikeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encoded_password: {
        value: cdktf.stringToHclTerraform(this._encodedPassword),
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
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
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
      scheduled_expire_time: {
        value: cdktf.numberToHclTerraform(this._scheduledExpireTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid: {
        value: cdktf.booleanToHclTerraform(this._valid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      valid_from: {
        value: cdktf.numberToHclTerraform(this._validFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      valid_to: {
        value: cdktf.numberToHclTerraform(this._validTo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
