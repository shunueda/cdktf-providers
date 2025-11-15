// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_apikey
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessPlatformApikeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account Identifier for the Entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_apikey#account_id DataHarnessPlatformApikey#account_id}
  */
  readonly accountId: string;
  /**
  * Type of the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_apikey#apikey_type DataHarnessPlatformApikey#apikey_type}
  */
  readonly apikeyType: string;
  /**
  * Expiry time of the apiKey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_apikey#default_time_to_expire_token DataHarnessPlatformApikey#default_time_to_expire_token}
  */
  readonly defaultTimeToExpireToken?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_apikey#id DataHarnessPlatformApikey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_apikey#identifier DataHarnessPlatformApikey#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_apikey#name DataHarnessPlatformApikey#name}
  */
  readonly name?: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_apikey#org_id DataHarnessPlatformApikey#org_id}
  */
  readonly orgId?: string;
  /**
  * Parent Identifier for the Entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_apikey#parent_id DataHarnessPlatformApikey#parent_id}
  */
  readonly parentId: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_apikey#project_id DataHarnessPlatformApikey#project_id}
  */
  readonly projectId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_apikey harness_platform_apikey}
*/
export class DataHarnessPlatformApikey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_apikey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessPlatformApikey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessPlatformApikey to import
  * @param importFromId The id of the existing DataHarnessPlatformApikey that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_apikey#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessPlatformApikey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_apikey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_apikey harness_platform_apikey} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessPlatformApikeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessPlatformApikeyConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_apikey',
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
    this._apikeyType = config.apikeyType;
    this._defaultTimeToExpireToken = config.defaultTimeToExpireToken;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._parentId = config.parentId;
    this._projectId = config.projectId;
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

  // default_time_to_expire_token - computed: false, optional: true, required: false
  private _defaultTimeToExpireToken?: number; 
  public get defaultTimeToExpireToken() {
    return this.getNumberAttribute('default_time_to_expire_token');
  }
  public set defaultTimeToExpireToken(value: number) {
    this._defaultTimeToExpireToken = value;
  }
  public resetDefaultTimeToExpireToken() {
    this._defaultTimeToExpireToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTimeToExpireTokenInput() {
    return this._defaultTimeToExpireToken;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      apikey_type: cdktf.stringToTerraform(this._apikeyType),
      default_time_to_expire_token: cdktf.numberToTerraform(this._defaultTimeToExpireToken),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      parent_id: cdktf.stringToTerraform(this._parentId),
      project_id: cdktf.stringToTerraform(this._projectId),
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
      apikey_type: {
        value: cdktf.stringToHclTerraform(this._apikeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_time_to_expire_token: {
        value: cdktf.numberToHclTerraform(this._defaultTimeToExpireToken),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
