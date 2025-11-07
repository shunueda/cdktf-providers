// https://registry.terraform.io/providers/traceableai/awsapigateway/0.7.0/docs/resources/resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/awsapigateway/0.7.0/docs/resources/resource#id Resource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/awsapigateway/0.7.0/docs/resources/resource#identifier Resource#identifier}
  */
  readonly identifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/awsapigateway/0.7.0/docs/resources/resource#ignore_access_log_settings Resource#ignore_access_log_settings}
  */
  readonly ignoreAccessLogSettings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/awsapigateway/0.7.0/docs/resources/resource#timeout Resource#timeout}
  */
  readonly timeout?: string;
  /**
  * accounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/awsapigateway/0.7.0/docs/resources/resource#accounts Resource#accounts}
  */
  readonly accounts: ResourceAccounts[] | cdktf.IResolvable;
}
export interface ResourceAccounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/awsapigateway/0.7.0/docs/resources/resource#api_list Resource#api_list}
  */
  readonly apiList: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/awsapigateway/0.7.0/docs/resources/resource#cross_account_role_arn Resource#cross_account_role_arn}
  */
  readonly crossAccountRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/awsapigateway/0.7.0/docs/resources/resource#exclude Resource#exclude}
  */
  readonly exclude: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/awsapigateway/0.7.0/docs/resources/resource#region Resource#region}
  */
  readonly region: string;
}

export function resourceAccountsToTerraform(struct?: ResourceAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiList),
    cross_account_role_arn: cdktf.stringToTerraform(struct!.crossAccountRoleArn),
    exclude: cdktf.booleanToTerraform(struct!.exclude),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function resourceAccountsToHclTerraform(struct?: ResourceAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cross_account_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude: {
      value: cdktf.booleanToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiList !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiList = this._apiList;
    }
    if (this._crossAccountRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRoleArn = this._crossAccountRoleArn;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiList = undefined;
      this._crossAccountRoleArn = undefined;
      this._exclude = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiList = value.apiList;
      this._crossAccountRoleArn = value.crossAccountRoleArn;
      this._exclude = value.exclude;
      this._region = value.region;
    }
  }

  // api_list - computed: false, optional: false, required: true
  private _apiList?: string[]; 
  public get apiList() {
    return this.getListAttribute('api_list');
  }
  public set apiList(value: string[]) {
    this._apiList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiListInput() {
    return this._apiList;
  }

  // cross_account_role_arn - computed: false, optional: false, required: true
  private _crossAccountRoleArn?: string; 
  public get crossAccountRoleArn() {
    return this.getStringAttribute('cross_account_role_arn');
  }
  public set crossAccountRoleArn(value: string) {
    this._crossAccountRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleArnInput() {
    return this._crossAccountRoleArn;
  }

  // exclude - computed: false, optional: false, required: true
  private _exclude?: boolean | cdktf.IResolvable; 
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }
  public set exclude(value: boolean | cdktf.IResolvable) {
    this._exclude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class ResourceAccountsList extends cdktf.ComplexList {
  public internalValue? : ResourceAccounts[] | cdktf.IResolvable

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
  public get(index: number): ResourceAccountsOutputReference {
    return new ResourceAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/traceableai/awsapigateway/0.7.0/docs/resources/resource awsapigateway_resource}
*/
export class Resource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awsapigateway_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Resource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Resource to import
  * @param importFromId The id of the existing Resource that should be imported. Refer to the {@link https://registry.terraform.io/providers/traceableai/awsapigateway/0.7.0/docs/resources/resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Resource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awsapigateway_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/traceableai/awsapigateway/0.7.0/docs/resources/resource awsapigateway_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'awsapigateway_resource',
      terraformGeneratorMetadata: {
        providerName: 'awsapigateway',
        providerVersion: '0.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._identifier = config.identifier;
    this._ignoreAccessLogSettings = config.ignoreAccessLogSettings;
    this._timeout = config.timeout;
    this._accounts.internalValue = config.accounts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // ignore_access_log_settings - computed: false, optional: true, required: false
  private _ignoreAccessLogSettings?: boolean | cdktf.IResolvable; 
  public get ignoreAccessLogSettings() {
    return this.getBooleanAttribute('ignore_access_log_settings');
  }
  public set ignoreAccessLogSettings(value: boolean | cdktf.IResolvable) {
    this._ignoreAccessLogSettings = value;
  }
  public resetIgnoreAccessLogSettings() {
    this._ignoreAccessLogSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreAccessLogSettingsInput() {
    return this._ignoreAccessLogSettings;
  }

  // log_group_names - computed: true, optional: false, required: false
  public get logGroupNames() {
    return this.getListAttribute('log_group_names');
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // accounts - computed: false, optional: false, required: true
  private _accounts = new ResourceAccountsList(this, "accounts", false);
  public get accounts() {
    return this._accounts;
  }
  public putAccounts(value: ResourceAccounts[] | cdktf.IResolvable) {
    this._accounts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsInput() {
    return this._accounts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      ignore_access_log_settings: cdktf.booleanToTerraform(this._ignoreAccessLogSettings),
      timeout: cdktf.stringToTerraform(this._timeout),
      accounts: cdktf.listMapper(resourceAccountsToTerraform, true)(this._accounts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      ignore_access_log_settings: {
        value: cdktf.booleanToHclTerraform(this._ignoreAccessLogSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounts: {
        value: cdktf.listMapperHcl(resourceAccountsToHclTerraform, true)(this._accounts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceAccountsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
