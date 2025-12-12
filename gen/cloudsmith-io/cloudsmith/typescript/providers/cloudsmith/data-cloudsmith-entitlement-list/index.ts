// https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/data-sources/entitlement_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudsmithEntitlementListConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, only include active tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/data-sources/entitlement_list#active_token DataCloudsmithEntitlementList#active_token}
  */
  readonly activeToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/data-sources/entitlement_list#id DataCloudsmithEntitlementList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The namespace slug.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/data-sources/entitlement_list#namespace DataCloudsmithEntitlementList#namespace}
  */
  readonly namespace: string;
  /**
  * A search term for querying names of entitlements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/data-sources/entitlement_list#query DataCloudsmithEntitlementList#query}
  */
  readonly query?: string[];
  /**
  * The repository slug.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/data-sources/entitlement_list#repository DataCloudsmithEntitlementList#repository}
  */
  readonly repository: string;
  /**
  * Show entitlement token strings in results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/data-sources/entitlement_list#show_token DataCloudsmithEntitlementList#show_token}
  */
  readonly showToken?: boolean | cdktf.IResolvable;
}
export interface DataCloudsmithEntitlementListEntitlementTokens {
}

export function dataCloudsmithEntitlementListEntitlementTokensToTerraform(struct?: DataCloudsmithEntitlementListEntitlementTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudsmithEntitlementListEntitlementTokensToHclTerraform(struct?: DataCloudsmithEntitlementListEntitlementTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudsmithEntitlementListEntitlementTokensOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudsmithEntitlementListEntitlementTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudsmithEntitlementListEntitlementTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clients - computed: true, optional: false, required: false
  public get clients() {
    return this.getNumberAttribute('clients');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // disable_url - computed: true, optional: false, required: false
  public get disableUrl() {
    return this.getStringAttribute('disable_url');
  }

  // downloads - computed: true, optional: false, required: false
  public get downloads() {
    return this.getNumberAttribute('downloads');
  }

  // enable_url - computed: true, optional: false, required: false
  public get enableUrl() {
    return this.getStringAttribute('enable_url');
  }

  // eula_required - computed: true, optional: false, required: false
  public get eulaRequired() {
    return this.getBooleanAttribute('eula_required');
  }

  // has_limits - computed: true, optional: false, required: false
  public get hasLimits() {
    return this.getBooleanAttribute('has_limits');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getNumberAttribute('identifier');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // is_limited - computed: true, optional: false, required: false
  public get isLimited() {
    return this.getBooleanAttribute('is_limited');
  }

  // limit_bandwidth - computed: true, optional: false, required: false
  public get limitBandwidth() {
    return this.getNumberAttribute('limit_bandwidth');
  }

  // limit_bandwidth_unit - computed: true, optional: false, required: false
  public get limitBandwidthUnit() {
    return this.getStringAttribute('limit_bandwidth_unit');
  }

  // limit_date_range_from - computed: true, optional: false, required: false
  public get limitDateRangeFrom() {
    return this.getStringAttribute('limit_date_range_from');
  }

  // limit_date_range_to - computed: true, optional: false, required: false
  public get limitDateRangeTo() {
    return this.getStringAttribute('limit_date_range_to');
  }

  // limit_num_clients - computed: true, optional: false, required: false
  public get limitNumClients() {
    return this.getNumberAttribute('limit_num_clients');
  }

  // limit_num_downloads - computed: true, optional: false, required: false
  public get limitNumDownloads() {
    return this.getNumberAttribute('limit_num_downloads');
  }

  // limit_package_query - computed: true, optional: false, required: false
  public get limitPackageQuery() {
    return this.getStringAttribute('limit_package_query');
  }

  // limit_path_query - computed: true, optional: false, required: false
  public get limitPathQuery() {
    return this.getStringAttribute('limit_path_query');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // refresh_url - computed: true, optional: false, required: false
  public get refreshUrl() {
    return this.getStringAttribute('refresh_url');
  }

  // reset_url - computed: true, optional: false, required: false
  public get resetUrl() {
    return this.getStringAttribute('reset_url');
  }

  // scheduled_reset_at - computed: true, optional: false, required: false
  public get scheduledResetAt() {
    return this.getStringAttribute('scheduled_reset_at');
  }

  // scheduled_reset_period - computed: true, optional: false, required: false
  public get scheduledResetPeriod() {
    return this.getStringAttribute('scheduled_reset_period');
  }

  // self_url - computed: true, optional: false, required: false
  public get selfUrl() {
    return this.getStringAttribute('self_url');
  }

  // slug_perm - computed: true, optional: false, required: false
  public get slugPerm() {
    return this.getStringAttribute('slug_perm');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_by_url - computed: true, optional: false, required: false
  public get updatedByUrl() {
    return this.getStringAttribute('updated_by_url');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // user_url - computed: true, optional: false, required: false
  public get userUrl() {
    return this.getStringAttribute('user_url');
  }
}

export class DataCloudsmithEntitlementListEntitlementTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudsmithEntitlementListEntitlementTokensOutputReference {
    return new DataCloudsmithEntitlementListEntitlementTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/data-sources/entitlement_list cloudsmith_entitlement_list}
*/
export class DataCloudsmithEntitlementList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudsmith_entitlement_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudsmithEntitlementList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudsmithEntitlementList to import
  * @param importFromId The id of the existing DataCloudsmithEntitlementList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/data-sources/entitlement_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudsmithEntitlementList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudsmith_entitlement_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/data-sources/entitlement_list cloudsmith_entitlement_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudsmithEntitlementListConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudsmithEntitlementListConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudsmith_entitlement_list',
      terraformGeneratorMetadata: {
        providerName: 'cloudsmith',
        providerVersion: '0.0.67',
        providerVersionConstraint: '0.0.67'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeToken = config.activeToken;
    this._id = config.id;
    this._namespace = config.namespace;
    this._query = config.query;
    this._repository = config.repository;
    this._showToken = config.showToken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_token - computed: false, optional: true, required: false
  private _activeToken?: boolean | cdktf.IResolvable; 
  public get activeToken() {
    return this.getBooleanAttribute('active_token');
  }
  public set activeToken(value: boolean | cdktf.IResolvable) {
    this._activeToken = value;
  }
  public resetActiveToken() {
    this._activeToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTokenInput() {
    return this._activeToken;
  }

  // entitlement_tokens - computed: true, optional: false, required: false
  private _entitlementTokens = new DataCloudsmithEntitlementListEntitlementTokensList(this, "entitlement_tokens", false);
  public get entitlementTokens() {
    return this._entitlementTokens;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string[]; 
  public get query() {
    return cdktf.Fn.tolist(this.getListAttribute('query'));
  }
  public set query(value: string[]) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // show_token - computed: false, optional: true, required: false
  private _showToken?: boolean | cdktf.IResolvable; 
  public get showToken() {
    return this.getBooleanAttribute('show_token');
  }
  public set showToken(value: boolean | cdktf.IResolvable) {
    this._showToken = value;
  }
  public resetShowToken() {
    this._showToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showTokenInput() {
    return this._showToken;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_token: cdktf.booleanToTerraform(this._activeToken),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      query: cdktf.listMapper(cdktf.stringToTerraform, false)(this._query),
      repository: cdktf.stringToTerraform(this._repository),
      show_token: cdktf.booleanToTerraform(this._showToken),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_token: {
        value: cdktf.booleanToHclTerraform(this._activeToken),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._query),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_token: {
        value: cdktf.booleanToHclTerraform(this._showToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
