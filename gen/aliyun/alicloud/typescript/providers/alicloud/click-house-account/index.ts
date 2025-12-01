// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClickHouseAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_account#account_description ClickHouseAccount#account_description}
  */
  readonly accountDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_account#account_name ClickHouseAccount#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_account#account_password ClickHouseAccount#account_password}
  */
  readonly accountPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_account#allow_databases ClickHouseAccount#allow_databases}
  */
  readonly allowDatabases?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_account#allow_dictionaries ClickHouseAccount#allow_dictionaries}
  */
  readonly allowDictionaries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_account#db_cluster_id ClickHouseAccount#db_cluster_id}
  */
  readonly dbClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_account#ddl_authority ClickHouseAccount#ddl_authority}
  */
  readonly ddlAuthority?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_account#dml_authority ClickHouseAccount#dml_authority}
  */
  readonly dmlAuthority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_account#id ClickHouseAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_account#total_databases ClickHouseAccount#total_databases}
  */
  readonly totalDatabases?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_account#total_dictionaries ClickHouseAccount#total_dictionaries}
  */
  readonly totalDictionaries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_account#type ClickHouseAccount#type}
  */
  readonly type?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_account#timeouts ClickHouseAccount#timeouts}
  */
  readonly timeouts?: ClickHouseAccountTimeouts;
}
export interface ClickHouseAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_account#create ClickHouseAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_account#delete ClickHouseAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_account#update ClickHouseAccount#update}
  */
  readonly update?: string;
}

export function clickHouseAccountTimeoutsToTerraform(struct?: ClickHouseAccountTimeouts | cdktf.IResolvable): any {
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


export function clickHouseAccountTimeoutsToHclTerraform(struct?: ClickHouseAccountTimeouts | cdktf.IResolvable): any {
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

export class ClickHouseAccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClickHouseAccountTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickHouseAccountTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_account alicloud_click_house_account}
*/
export class ClickHouseAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_click_house_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClickHouseAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClickHouseAccount to import
  * @param importFromId The id of the existing ClickHouseAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClickHouseAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_click_house_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_account alicloud_click_house_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClickHouseAccountConfig
  */
  public constructor(scope: Construct, id: string, config: ClickHouseAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_click_house_account',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountDescription = config.accountDescription;
    this._accountName = config.accountName;
    this._accountPassword = config.accountPassword;
    this._allowDatabases = config.allowDatabases;
    this._allowDictionaries = config.allowDictionaries;
    this._dbClusterId = config.dbClusterId;
    this._ddlAuthority = config.ddlAuthority;
    this._dmlAuthority = config.dmlAuthority;
    this._id = config.id;
    this._totalDatabases = config.totalDatabases;
    this._totalDictionaries = config.totalDictionaries;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_description - computed: false, optional: true, required: false
  private _accountDescription?: string; 
  public get accountDescription() {
    return this.getStringAttribute('account_description');
  }
  public set accountDescription(value: string) {
    this._accountDescription = value;
  }
  public resetAccountDescription() {
    this._accountDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDescriptionInput() {
    return this._accountDescription;
  }

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // account_password - computed: false, optional: false, required: true
  private _accountPassword?: string; 
  public get accountPassword() {
    return this.getStringAttribute('account_password');
  }
  public set accountPassword(value: string) {
    this._accountPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountPasswordInput() {
    return this._accountPassword;
  }

  // allow_databases - computed: true, optional: true, required: false
  private _allowDatabases?: string; 
  public get allowDatabases() {
    return this.getStringAttribute('allow_databases');
  }
  public set allowDatabases(value: string) {
    this._allowDatabases = value;
  }
  public resetAllowDatabases() {
    this._allowDatabases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDatabasesInput() {
    return this._allowDatabases;
  }

  // allow_dictionaries - computed: true, optional: true, required: false
  private _allowDictionaries?: string; 
  public get allowDictionaries() {
    return this.getStringAttribute('allow_dictionaries');
  }
  public set allowDictionaries(value: string) {
    this._allowDictionaries = value;
  }
  public resetAllowDictionaries() {
    this._allowDictionaries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDictionariesInput() {
    return this._allowDictionaries;
  }

  // db_cluster_id - computed: false, optional: false, required: true
  private _dbClusterId?: string; 
  public get dbClusterId() {
    return this.getStringAttribute('db_cluster_id');
  }
  public set dbClusterId(value: string) {
    this._dbClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterIdInput() {
    return this._dbClusterId;
  }

  // ddl_authority - computed: true, optional: true, required: false
  private _ddlAuthority?: boolean | cdktf.IResolvable; 
  public get ddlAuthority() {
    return this.getBooleanAttribute('ddl_authority');
  }
  public set ddlAuthority(value: boolean | cdktf.IResolvable) {
    this._ddlAuthority = value;
  }
  public resetDdlAuthority() {
    this._ddlAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddlAuthorityInput() {
    return this._ddlAuthority;
  }

  // dml_authority - computed: true, optional: true, required: false
  private _dmlAuthority?: string; 
  public get dmlAuthority() {
    return this.getStringAttribute('dml_authority');
  }
  public set dmlAuthority(value: string) {
    this._dmlAuthority = value;
  }
  public resetDmlAuthority() {
    this._dmlAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmlAuthorityInput() {
    return this._dmlAuthority;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // total_databases - computed: true, optional: true, required: false
  private _totalDatabases?: string; 
  public get totalDatabases() {
    return this.getStringAttribute('total_databases');
  }
  public set totalDatabases(value: string) {
    this._totalDatabases = value;
  }
  public resetTotalDatabases() {
    this._totalDatabases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDatabasesInput() {
    return this._totalDatabases;
  }

  // total_dictionaries - computed: true, optional: true, required: false
  private _totalDictionaries?: string; 
  public get totalDictionaries() {
    return this.getStringAttribute('total_dictionaries');
  }
  public set totalDictionaries(value: string) {
    this._totalDictionaries = value;
  }
  public resetTotalDictionaries() {
    this._totalDictionaries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDictionariesInput() {
    return this._totalDictionaries;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClickHouseAccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClickHouseAccountTimeouts) {
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
      account_description: cdktf.stringToTerraform(this._accountDescription),
      account_name: cdktf.stringToTerraform(this._accountName),
      account_password: cdktf.stringToTerraform(this._accountPassword),
      allow_databases: cdktf.stringToTerraform(this._allowDatabases),
      allow_dictionaries: cdktf.stringToTerraform(this._allowDictionaries),
      db_cluster_id: cdktf.stringToTerraform(this._dbClusterId),
      ddl_authority: cdktf.booleanToTerraform(this._ddlAuthority),
      dml_authority: cdktf.stringToTerraform(this._dmlAuthority),
      id: cdktf.stringToTerraform(this._id),
      total_databases: cdktf.stringToTerraform(this._totalDatabases),
      total_dictionaries: cdktf.stringToTerraform(this._totalDictionaries),
      type: cdktf.stringToTerraform(this._type),
      timeouts: clickHouseAccountTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_description: {
        value: cdktf.stringToHclTerraform(this._accountDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_password: {
        value: cdktf.stringToHclTerraform(this._accountPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_databases: {
        value: cdktf.stringToHclTerraform(this._allowDatabases),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_dictionaries: {
        value: cdktf.stringToHclTerraform(this._allowDictionaries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_id: {
        value: cdktf.stringToHclTerraform(this._dbClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddl_authority: {
        value: cdktf.booleanToHclTerraform(this._ddlAuthority),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dml_authority: {
        value: cdktf.stringToHclTerraform(this._dmlAuthority),
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
      total_databases: {
        value: cdktf.stringToHclTerraform(this._totalDatabases),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      total_dictionaries: {
        value: cdktf.stringToHclTerraform(this._totalDictionaries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: clickHouseAccountTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClickHouseAccountTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
