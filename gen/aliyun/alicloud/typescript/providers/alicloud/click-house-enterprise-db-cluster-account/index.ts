// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/click_house_enterprise_db_cluster_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClickHouseEnterpriseDbClusterAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/click_house_enterprise_db_cluster_account#account ClickHouseEnterpriseDbClusterAccount#account}
  */
  readonly account: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/click_house_enterprise_db_cluster_account#account_type ClickHouseEnterpriseDbClusterAccount#account_type}
  */
  readonly accountType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/click_house_enterprise_db_cluster_account#db_instance_id ClickHouseEnterpriseDbClusterAccount#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/click_house_enterprise_db_cluster_account#description ClickHouseEnterpriseDbClusterAccount#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/click_house_enterprise_db_cluster_account#id ClickHouseEnterpriseDbClusterAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/click_house_enterprise_db_cluster_account#password ClickHouseEnterpriseDbClusterAccount#password}
  */
  readonly password: string;
  /**
  * dml_auth_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/click_house_enterprise_db_cluster_account#dml_auth_setting ClickHouseEnterpriseDbClusterAccount#dml_auth_setting}
  */
  readonly dmlAuthSetting?: ClickHouseEnterpriseDbClusterAccountDmlAuthSetting;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/click_house_enterprise_db_cluster_account#timeouts ClickHouseEnterpriseDbClusterAccount#timeouts}
  */
  readonly timeouts?: ClickHouseEnterpriseDbClusterAccountTimeouts;
}
export interface ClickHouseEnterpriseDbClusterAccountDmlAuthSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/click_house_enterprise_db_cluster_account#allow_databases ClickHouseEnterpriseDbClusterAccount#allow_databases}
  */
  readonly allowDatabases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/click_house_enterprise_db_cluster_account#allow_dictionaries ClickHouseEnterpriseDbClusterAccount#allow_dictionaries}
  */
  readonly allowDictionaries?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/click_house_enterprise_db_cluster_account#ddl_authority ClickHouseEnterpriseDbClusterAccount#ddl_authority}
  */
  readonly ddlAuthority: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/click_house_enterprise_db_cluster_account#dml_authority ClickHouseEnterpriseDbClusterAccount#dml_authority}
  */
  readonly dmlAuthority: number;
}

export function clickHouseEnterpriseDbClusterAccountDmlAuthSettingToTerraform(struct?: ClickHouseEnterpriseDbClusterAccountDmlAuthSettingOutputReference | ClickHouseEnterpriseDbClusterAccountDmlAuthSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_databases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowDatabases),
    allow_dictionaries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowDictionaries),
    ddl_authority: cdktf.booleanToTerraform(struct!.ddlAuthority),
    dml_authority: cdktf.numberToTerraform(struct!.dmlAuthority),
  }
}


export function clickHouseEnterpriseDbClusterAccountDmlAuthSettingToHclTerraform(struct?: ClickHouseEnterpriseDbClusterAccountDmlAuthSettingOutputReference | ClickHouseEnterpriseDbClusterAccountDmlAuthSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_databases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowDatabases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_dictionaries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowDictionaries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ddl_authority: {
      value: cdktf.booleanToHclTerraform(struct!.ddlAuthority),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dml_authority: {
      value: cdktf.numberToHclTerraform(struct!.dmlAuthority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickHouseEnterpriseDbClusterAccountDmlAuthSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClickHouseEnterpriseDbClusterAccountDmlAuthSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowDatabases !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDatabases = this._allowDatabases;
    }
    if (this._allowDictionaries !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDictionaries = this._allowDictionaries;
    }
    if (this._ddlAuthority !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddlAuthority = this._ddlAuthority;
    }
    if (this._dmlAuthority !== undefined) {
      hasAnyValues = true;
      internalValueResult.dmlAuthority = this._dmlAuthority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickHouseEnterpriseDbClusterAccountDmlAuthSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowDatabases = undefined;
      this._allowDictionaries = undefined;
      this._ddlAuthority = undefined;
      this._dmlAuthority = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowDatabases = value.allowDatabases;
      this._allowDictionaries = value.allowDictionaries;
      this._ddlAuthority = value.ddlAuthority;
      this._dmlAuthority = value.dmlAuthority;
    }
  }

  // allow_databases - computed: false, optional: true, required: false
  private _allowDatabases?: string[]; 
  public get allowDatabases() {
    return this.getListAttribute('allow_databases');
  }
  public set allowDatabases(value: string[]) {
    this._allowDatabases = value;
  }
  public resetAllowDatabases() {
    this._allowDatabases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDatabasesInput() {
    return this._allowDatabases;
  }

  // allow_dictionaries - computed: false, optional: true, required: false
  private _allowDictionaries?: string[]; 
  public get allowDictionaries() {
    return this.getListAttribute('allow_dictionaries');
  }
  public set allowDictionaries(value: string[]) {
    this._allowDictionaries = value;
  }
  public resetAllowDictionaries() {
    this._allowDictionaries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDictionariesInput() {
    return this._allowDictionaries;
  }

  // ddl_authority - computed: false, optional: false, required: true
  private _ddlAuthority?: boolean | cdktf.IResolvable; 
  public get ddlAuthority() {
    return this.getBooleanAttribute('ddl_authority');
  }
  public set ddlAuthority(value: boolean | cdktf.IResolvable) {
    this._ddlAuthority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ddlAuthorityInput() {
    return this._ddlAuthority;
  }

  // dml_authority - computed: false, optional: false, required: true
  private _dmlAuthority?: number; 
  public get dmlAuthority() {
    return this.getNumberAttribute('dml_authority');
  }
  public set dmlAuthority(value: number) {
    this._dmlAuthority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dmlAuthorityInput() {
    return this._dmlAuthority;
  }
}
export interface ClickHouseEnterpriseDbClusterAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/click_house_enterprise_db_cluster_account#create ClickHouseEnterpriseDbClusterAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/click_house_enterprise_db_cluster_account#delete ClickHouseEnterpriseDbClusterAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/click_house_enterprise_db_cluster_account#update ClickHouseEnterpriseDbClusterAccount#update}
  */
  readonly update?: string;
}

export function clickHouseEnterpriseDbClusterAccountTimeoutsToTerraform(struct?: ClickHouseEnterpriseDbClusterAccountTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function clickHouseEnterpriseDbClusterAccountTimeoutsToHclTerraform(struct?: ClickHouseEnterpriseDbClusterAccountTimeouts | cdktf.IResolvable): any {
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

export class ClickHouseEnterpriseDbClusterAccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClickHouseEnterpriseDbClusterAccountTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickHouseEnterpriseDbClusterAccountTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/click_house_enterprise_db_cluster_account alicloud_click_house_enterprise_db_cluster_account}
*/
export class ClickHouseEnterpriseDbClusterAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_click_house_enterprise_db_cluster_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClickHouseEnterpriseDbClusterAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClickHouseEnterpriseDbClusterAccount to import
  * @param importFromId The id of the existing ClickHouseEnterpriseDbClusterAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/click_house_enterprise_db_cluster_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClickHouseEnterpriseDbClusterAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_click_house_enterprise_db_cluster_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/click_house_enterprise_db_cluster_account alicloud_click_house_enterprise_db_cluster_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClickHouseEnterpriseDbClusterAccountConfig
  */
  public constructor(scope: Construct, id: string, config: ClickHouseEnterpriseDbClusterAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_click_house_enterprise_db_cluster_account',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._account = config.account;
    this._accountType = config.accountType;
    this._dbInstanceId = config.dbInstanceId;
    this._description = config.description;
    this._id = config.id;
    this._password = config.password;
    this._dmlAuthSetting.internalValue = config.dmlAuthSetting;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // account_type - computed: false, optional: false, required: true
  private _accountType?: string; 
  public get accountType() {
    return this.getStringAttribute('account_type');
  }
  public set accountType(value: string) {
    this._accountType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeInput() {
    return this._accountType;
  }

  // db_instance_id - computed: false, optional: false, required: true
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
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

  // dml_auth_setting - computed: false, optional: true, required: false
  private _dmlAuthSetting = new ClickHouseEnterpriseDbClusterAccountDmlAuthSettingOutputReference(this, "dml_auth_setting");
  public get dmlAuthSetting() {
    return this._dmlAuthSetting;
  }
  public putDmlAuthSetting(value: ClickHouseEnterpriseDbClusterAccountDmlAuthSetting) {
    this._dmlAuthSetting.internalValue = value;
  }
  public resetDmlAuthSetting() {
    this._dmlAuthSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmlAuthSettingInput() {
    return this._dmlAuthSetting.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClickHouseEnterpriseDbClusterAccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClickHouseEnterpriseDbClusterAccountTimeouts) {
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
      account: cdktf.stringToTerraform(this._account),
      account_type: cdktf.stringToTerraform(this._accountType),
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      dml_auth_setting: clickHouseEnterpriseDbClusterAccountDmlAuthSettingToTerraform(this._dmlAuthSetting.internalValue),
      timeouts: clickHouseEnterpriseDbClusterAccountTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.stringToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_type: {
        value: cdktf.stringToHclTerraform(this._accountType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dml_auth_setting: {
        value: clickHouseEnterpriseDbClusterAccountDmlAuthSettingToHclTerraform(this._dmlAuthSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClickHouseEnterpriseDbClusterAccountDmlAuthSettingList",
      },
      timeouts: {
        value: clickHouseEnterpriseDbClusterAccountTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClickHouseEnterpriseDbClusterAccountTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
