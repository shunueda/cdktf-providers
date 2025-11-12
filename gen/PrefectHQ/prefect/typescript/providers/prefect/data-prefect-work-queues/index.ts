// https://registry.terraform.io/providers/prefecthq/prefect/2.90.0/docs/data-sources/work_queues
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPrefectWorkQueuesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID (UUID), defaults to the account set in the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.0/docs/data-sources/work_queues#account_id DataPrefectWorkQueues#account_id}
  */
  readonly accountId?: string;
  /**
  * Work queue IDs (UUID) to search for (work queues with any matching UUID are returned)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.0/docs/data-sources/work_queues#filter_any DataPrefectWorkQueues#filter_any}
  */
  readonly filterAny?: string[];
  /**
  * Name of the associated work pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.0/docs/data-sources/work_queues#work_pool_name DataPrefectWorkQueues#work_pool_name}
  */
  readonly workPoolName: string;
  /**
  * Workspace ID (UUID), defaults to the workspace set in the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.0/docs/data-sources/work_queues#workspace_id DataPrefectWorkQueues#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface DataPrefectWorkQueuesWorkQueues {
  /**
  * The concurrency limit applied to this work queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.0/docs/data-sources/work_queues#concurrency_limit DataPrefectWorkQueues#concurrency_limit}
  */
  readonly concurrencyLimit?: number;
  /**
  * Description of the work queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.0/docs/data-sources/work_queues#description DataPrefectWorkQueues#description}
  */
  readonly description?: string;
  /**
  * Work queue ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.0/docs/data-sources/work_queues#id DataPrefectWorkQueues#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the work queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.0/docs/data-sources/work_queues#name DataPrefectWorkQueues#name}
  */
  readonly name?: string;
  /**
  * Name of the associated work pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.0/docs/data-sources/work_queues#work_pool_name DataPrefectWorkQueues#work_pool_name}
  */
  readonly workPoolName: string;
}

export function dataPrefectWorkQueuesWorkQueuesToTerraform(struct?: DataPrefectWorkQueuesWorkQueues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency_limit: cdktf.numberToTerraform(struct!.concurrencyLimit),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    work_pool_name: cdktf.stringToTerraform(struct!.workPoolName),
  }
}


export function dataPrefectWorkQueuesWorkQueuesToHclTerraform(struct?: DataPrefectWorkQueuesWorkQueues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrency_limit: {
      value: cdktf.numberToHclTerraform(struct!.concurrencyLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.workPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPrefectWorkQueuesWorkQueuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPrefectWorkQueuesWorkQueues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrencyLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrencyLimit = this._concurrencyLimit;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._workPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.workPoolName = this._workPoolName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrefectWorkQueuesWorkQueues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._concurrencyLimit = undefined;
      this._description = undefined;
      this._id = undefined;
      this._name = undefined;
      this._workPoolName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._concurrencyLimit = value.concurrencyLimit;
      this._description = value.description;
      this._id = value.id;
      this._name = value.name;
      this._workPoolName = value.workPoolName;
    }
  }

  // concurrency_limit - computed: true, optional: true, required: false
  private _concurrencyLimit?: number; 
  public get concurrencyLimit() {
    return this.getNumberAttribute('concurrency_limit');
  }
  public set concurrencyLimit(value: number) {
    this._concurrencyLimit = value;
  }
  public resetConcurrencyLimit() {
    this._concurrencyLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyLimitInput() {
    return this._concurrencyLimit;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // description - computed: true, optional: true, required: false
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

  // is_paused - computed: true, optional: false, required: false
  public get isPaused() {
    return this.getBooleanAttribute('is_paused');
  }

  // name - computed: true, optional: true, required: false
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

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // work_pool_name - computed: true, optional: false, required: true
  private _workPoolName?: string; 
  public get workPoolName() {
    return this.getStringAttribute('work_pool_name');
  }
  public set workPoolName(value: string) {
    this._workPoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workPoolNameInput() {
    return this._workPoolName;
  }
}

export class DataPrefectWorkQueuesWorkQueuesList extends cdktf.ComplexList {
  public internalValue? : DataPrefectWorkQueuesWorkQueues[] | cdktf.IResolvable

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
  public get(index: number): DataPrefectWorkQueuesWorkQueuesOutputReference {
    return new DataPrefectWorkQueuesWorkQueuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.0/docs/data-sources/work_queues prefect_work_queues}
*/
export class DataPrefectWorkQueues extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_work_queues";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPrefectWorkQueues resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPrefectWorkQueues to import
  * @param importFromId The id of the existing DataPrefectWorkQueues that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.0/docs/data-sources/work_queues#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPrefectWorkQueues to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_work_queues", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.0/docs/data-sources/work_queues prefect_work_queues} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPrefectWorkQueuesConfig
  */
  public constructor(scope: Construct, id: string, config: DataPrefectWorkQueuesConfig) {
    super(scope, id, {
      terraformResourceType: 'prefect_work_queues',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.90.0',
        providerVersionConstraint: '2.90.0'
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
    this._filterAny = config.filterAny;
    this._workPoolName = config.workPoolName;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // filter_any - computed: false, optional: true, required: false
  private _filterAny?: string[]; 
  public get filterAny() {
    return this.getListAttribute('filter_any');
  }
  public set filterAny(value: string[]) {
    this._filterAny = value;
  }
  public resetFilterAny() {
    this._filterAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterAnyInput() {
    return this._filterAny;
  }

  // work_pool_name - computed: false, optional: false, required: true
  private _workPoolName?: string; 
  public get workPoolName() {
    return this.getStringAttribute('work_pool_name');
  }
  public set workPoolName(value: string) {
    this._workPoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workPoolNameInput() {
    return this._workPoolName;
  }

  // work_queues - computed: true, optional: false, required: false
  private _workQueues = new DataPrefectWorkQueuesWorkQueuesList(this, "work_queues", true);
  public get workQueues() {
    return this._workQueues;
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      filter_any: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterAny),
      work_pool_name: cdktf.stringToTerraform(this._workPoolName),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
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
      filter_any: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterAny),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      work_pool_name: {
        value: cdktf.stringToHclTerraform(this._workPoolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
