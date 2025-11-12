// https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs/data-sources/service_accounts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTemporalcloudServiceAccountsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataTemporalcloudServiceAccountsServiceAccountsNamespaceAccesses {
}

export function dataTemporalcloudServiceAccountsServiceAccountsNamespaceAccessesToTerraform(struct?: DataTemporalcloudServiceAccountsServiceAccountsNamespaceAccesses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTemporalcloudServiceAccountsServiceAccountsNamespaceAccessesToHclTerraform(struct?: DataTemporalcloudServiceAccountsServiceAccountsNamespaceAccesses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTemporalcloudServiceAccountsServiceAccountsNamespaceAccessesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTemporalcloudServiceAccountsServiceAccountsNamespaceAccesses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTemporalcloudServiceAccountsServiceAccountsNamespaceAccesses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }
}

export class DataTemporalcloudServiceAccountsServiceAccountsNamespaceAccessesList extends cdktf.ComplexList {
  public internalValue? : DataTemporalcloudServiceAccountsServiceAccountsNamespaceAccesses[] | cdktf.IResolvable

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
  public get(index: number): DataTemporalcloudServiceAccountsServiceAccountsNamespaceAccessesOutputReference {
    return new DataTemporalcloudServiceAccountsServiceAccountsNamespaceAccessesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTemporalcloudServiceAccountsServiceAccounts {
  /**
  * The set of namespace permissions for this service account, including each namespace and its role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs/data-sources/service_accounts#namespace_accesses DataTemporalcloudServiceAccounts#namespace_accesses}
  */
  readonly namespaceAccesses?: DataTemporalcloudServiceAccountsServiceAccountsNamespaceAccesses[] | cdktf.IResolvable;
}

export function dataTemporalcloudServiceAccountsServiceAccountsToTerraform(struct?: DataTemporalcloudServiceAccountsServiceAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_accesses: cdktf.listMapper(dataTemporalcloudServiceAccountsServiceAccountsNamespaceAccessesToTerraform, false)(struct!.namespaceAccesses),
  }
}


export function dataTemporalcloudServiceAccountsServiceAccountsToHclTerraform(struct?: DataTemporalcloudServiceAccountsServiceAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_accesses: {
      value: cdktf.listMapperHcl(dataTemporalcloudServiceAccountsServiceAccountsNamespaceAccessesToHclTerraform, false)(struct!.namespaceAccesses),
      isBlock: true,
      type: "set",
      storageClassType: "DataTemporalcloudServiceAccountsServiceAccountsNamespaceAccessesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTemporalcloudServiceAccountsServiceAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTemporalcloudServiceAccountsServiceAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceAccesses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceAccesses = this._namespaceAccesses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTemporalcloudServiceAccountsServiceAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaceAccesses.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaceAccesses.internalValue = value.namespaceAccesses;
    }
  }

  // account_access - computed: true, optional: false, required: false
  public get accountAccess() {
    return this.getStringAttribute('account_access');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace_accesses - computed: true, optional: true, required: false
  private _namespaceAccesses = new DataTemporalcloudServiceAccountsServiceAccountsNamespaceAccessesList(this, "namespace_accesses", true);
  public get namespaceAccesses() {
    return this._namespaceAccesses;
  }
  public putNamespaceAccesses(value: DataTemporalcloudServiceAccountsServiceAccountsNamespaceAccesses[] | cdktf.IResolvable) {
    this._namespaceAccesses.internalValue = value;
  }
  public resetNamespaceAccesses() {
    this._namespaceAccesses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceAccessesInput() {
    return this._namespaceAccesses.internalValue;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataTemporalcloudServiceAccountsServiceAccountsList extends cdktf.ComplexList {
  public internalValue? : DataTemporalcloudServiceAccountsServiceAccounts[] | cdktf.IResolvable

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
  public get(index: number): DataTemporalcloudServiceAccountsServiceAccountsOutputReference {
    return new DataTemporalcloudServiceAccountsServiceAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs/data-sources/service_accounts temporalcloud_service_accounts}
*/
export class DataTemporalcloudServiceAccounts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "temporalcloud_service_accounts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTemporalcloudServiceAccounts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTemporalcloudServiceAccounts to import
  * @param importFromId The id of the existing DataTemporalcloudServiceAccounts that should be imported. Refer to the {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs/data-sources/service_accounts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTemporalcloudServiceAccounts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "temporalcloud_service_accounts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs/data-sources/service_accounts temporalcloud_service_accounts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTemporalcloudServiceAccountsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTemporalcloudServiceAccountsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'temporalcloud_service_accounts',
      terraformGeneratorMetadata: {
        providerName: 'temporalcloud',
        providerVersion: '1.1.1',
        providerVersionConstraint: '1.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_accounts - computed: true, optional: false, required: false
  private _serviceAccounts = new DataTemporalcloudServiceAccountsServiceAccountsList(this, "service_accounts", false);
  public get serviceAccounts() {
    return this._serviceAccounts;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
