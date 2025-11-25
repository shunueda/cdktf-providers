// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dbbrain_sql_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbbrainSqlFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dbbrain_sql_filter#duration DbbrainSqlFilter#duration}
  */
  readonly duration: number;
  /**
  * filter key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dbbrain_sql_filter#filter_key DbbrainSqlFilter#filter_key}
  */
  readonly filterKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dbbrain_sql_filter#id DbbrainSqlFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dbbrain_sql_filter#instance_id DbbrainSqlFilter#instance_id}
  */
  readonly instanceId: string;
  /**
  * maximum concurreny.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dbbrain_sql_filter#max_concurrency DbbrainSqlFilter#max_concurrency}
  */
  readonly maxConcurrency: number;
  /**
  * product, optional value is &amp;#39;mysql&amp;#39;, &amp;#39;cynosdb&amp;#39;.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dbbrain_sql_filter#product DbbrainSqlFilter#product}
  */
  readonly product?: string;
  /**
  * sql type, optional value is SELECT, UPDATE, DELETE, INSERT, REPLACE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dbbrain_sql_filter#sql_type DbbrainSqlFilter#sql_type}
  */
  readonly sqlType: string;
  /**
  * filter status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dbbrain_sql_filter#status DbbrainSqlFilter#status}
  */
  readonly status?: string;
  /**
  * session_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dbbrain_sql_filter#session_token DbbrainSqlFilter#session_token}
  */
  readonly sessionToken: DbbrainSqlFilterSessionToken;
}
export interface DbbrainSqlFilterSessionToken {
  /**
  * password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dbbrain_sql_filter#password DbbrainSqlFilter#password}
  */
  readonly password: string;
  /**
  * user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dbbrain_sql_filter#user DbbrainSqlFilter#user}
  */
  readonly user: string;
}

export function dbbrainSqlFilterSessionTokenToTerraform(struct?: DbbrainSqlFilterSessionTokenOutputReference | DbbrainSqlFilterSessionToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dbbrainSqlFilterSessionTokenToHclTerraform(struct?: DbbrainSqlFilterSessionTokenOutputReference | DbbrainSqlFilterSessionToken): any {
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbbrainSqlFilterSessionTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbbrainSqlFilterSessionToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbbrainSqlFilterSessionToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._user = value.user;
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

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dbbrain_sql_filter tencentcloud_dbbrain_sql_filter}
*/
export class DbbrainSqlFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dbbrain_sql_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbbrainSqlFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbbrainSqlFilter to import
  * @param importFromId The id of the existing DbbrainSqlFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dbbrain_sql_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbbrainSqlFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dbbrain_sql_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dbbrain_sql_filter tencentcloud_dbbrain_sql_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbbrainSqlFilterConfig
  */
  public constructor(scope: Construct, id: string, config: DbbrainSqlFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dbbrain_sql_filter',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._duration = config.duration;
    this._filterKey = config.filterKey;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._maxConcurrency = config.maxConcurrency;
    this._product = config.product;
    this._sqlType = config.sqlType;
    this._status = config.status;
    this._sessionToken.internalValue = config.sessionToken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // filter_id - computed: true, optional: false, required: false
  public get filterId() {
    return this.getNumberAttribute('filter_id');
  }

  // filter_key - computed: false, optional: false, required: true
  private _filterKey?: string; 
  public get filterKey() {
    return this.getStringAttribute('filter_key');
  }
  public set filterKey(value: string) {
    this._filterKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterKeyInput() {
    return this._filterKey;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // max_concurrency - computed: false, optional: false, required: true
  private _maxConcurrency?: number; 
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }
  public set maxConcurrency(value: number) {
    this._maxConcurrency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // product - computed: false, optional: true, required: false
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // sql_type - computed: false, optional: false, required: true
  private _sqlType?: string; 
  public get sqlType() {
    return this.getStringAttribute('sql_type');
  }
  public set sqlType(value: string) {
    this._sqlType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlTypeInput() {
    return this._sqlType;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // session_token - computed: false, optional: false, required: true
  private _sessionToken = new DbbrainSqlFilterSessionTokenOutputReference(this, "session_token");
  public get sessionToken() {
    return this._sessionToken;
  }
  public putSessionToken(value: DbbrainSqlFilterSessionToken) {
    this._sessionToken.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTokenInput() {
    return this._sessionToken.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      duration: cdktf.numberToTerraform(this._duration),
      filter_key: cdktf.stringToTerraform(this._filterKey),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      max_concurrency: cdktf.numberToTerraform(this._maxConcurrency),
      product: cdktf.stringToTerraform(this._product),
      sql_type: cdktf.stringToTerraform(this._sqlType),
      status: cdktf.stringToTerraform(this._status),
      session_token: dbbrainSqlFilterSessionTokenToTerraform(this._sessionToken.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filter_key: {
        value: cdktf.stringToHclTerraform(this._filterKey),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_concurrency: {
        value: cdktf.numberToHclTerraform(this._maxConcurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      product: {
        value: cdktf.stringToHclTerraform(this._product),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_type: {
        value: cdktf.stringToHclTerraform(this._sqlType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_token: {
        value: dbbrainSqlFilterSessionTokenToHclTerraform(this._sessionToken.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbbrainSqlFilterSessionTokenList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
