// https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/retrieve_vm_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RetrieveVmGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/retrieve_vm_group#config_id RetrieveVmGroup#config_id}
  */
  readonly configId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/retrieve_vm_group#count_num RetrieveVmGroup#count_num}
  */
  readonly countNum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/retrieve_vm_group#id RetrieveVmGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/retrieve_vm_group#preempt_interval RetrieveVmGroup#preempt_interval}
  */
  readonly preemptInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/retrieve_vm_group#refresh_token_when_create RetrieveVmGroup#refresh_token_when_create}
  */
  readonly refreshTokenWhenCreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/retrieve_vm_group#refresh_token_when_destroy RetrieveVmGroup#refresh_token_when_destroy}
  */
  readonly refreshTokenWhenDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/retrieve_vm_group#require_exact_count RetrieveVmGroup#require_exact_count}
  */
  readonly requireExactCount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/retrieve_vm_group#retrieve_status RetrieveVmGroup#retrieve_status}
  */
  readonly retrieveStatus?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/retrieve_vm_group#task_name RetrieveVmGroup#task_name}
  */
  readonly taskName: string;
}
export interface RetrieveVmGroupEntitlements {
}

export function retrieveVmGroupEntitlementsToTerraform(struct?: RetrieveVmGroupEntitlements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function retrieveVmGroupEntitlementsToHclTerraform(struct?: RetrieveVmGroupEntitlements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RetrieveVmGroupEntitlementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RetrieveVmGroupEntitlements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RetrieveVmGroupEntitlements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getNumberAttribute('config_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // token_status - computed: true, optional: false, required: false
  public get tokenStatus() {
    return this.getStringAttribute('token_status');
  }
}

export class RetrieveVmGroupEntitlementsList extends cdktf.ComplexList {

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
  public get(index: number): RetrieveVmGroupEntitlementsOutputReference {
    return new RetrieveVmGroupEntitlementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/retrieve_vm_group fortiflexvm_retrieve_vm_group}
*/
export class RetrieveVmGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiflexvm_retrieve_vm_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RetrieveVmGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RetrieveVmGroup to import
  * @param importFromId The id of the existing RetrieveVmGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/retrieve_vm_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RetrieveVmGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiflexvm_retrieve_vm_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/retrieve_vm_group fortiflexvm_retrieve_vm_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RetrieveVmGroupConfig
  */
  public constructor(scope: Construct, id: string, config: RetrieveVmGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiflexvm_retrieve_vm_group',
      terraformGeneratorMetadata: {
        providerName: 'fortiflexvm',
        providerVersion: '2.4.4',
        providerVersionConstraint: '2.4.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configId = config.configId;
    this._countNum = config.countNum;
    this._id = config.id;
    this._preemptInterval = config.preemptInterval;
    this._refreshTokenWhenCreate = config.refreshTokenWhenCreate;
    this._refreshTokenWhenDestroy = config.refreshTokenWhenDestroy;
    this._requireExactCount = config.requireExactCount;
    this._retrieveStatus = config.retrieveStatus;
    this._taskName = config.taskName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: false, optional: false, required: true
  private _configId?: number; 
  public get configId() {
    return this.getNumberAttribute('config_id');
  }
  public set configId(value: number) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // count_num - computed: false, optional: false, required: true
  private _countNum?: number; 
  public get countNum() {
    return this.getNumberAttribute('count_num');
  }
  public set countNum(value: number) {
    this._countNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countNumInput() {
    return this._countNum;
  }

  // entitlements - computed: true, optional: false, required: false
  private _entitlements = new RetrieveVmGroupEntitlementsList(this, "entitlements", false);
  public get entitlements() {
    return this._entitlements;
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

  // preempt_interval - computed: false, optional: true, required: false
  private _preemptInterval?: number; 
  public get preemptInterval() {
    return this.getNumberAttribute('preempt_interval');
  }
  public set preemptInterval(value: number) {
    this._preemptInterval = value;
  }
  public resetPreemptInterval() {
    this._preemptInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptIntervalInput() {
    return this._preemptInterval;
  }

  // refresh_token_when_create - computed: false, optional: true, required: false
  private _refreshTokenWhenCreate?: boolean | cdktf.IResolvable; 
  public get refreshTokenWhenCreate() {
    return this.getBooleanAttribute('refresh_token_when_create');
  }
  public set refreshTokenWhenCreate(value: boolean | cdktf.IResolvable) {
    this._refreshTokenWhenCreate = value;
  }
  public resetRefreshTokenWhenCreate() {
    this._refreshTokenWhenCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenWhenCreateInput() {
    return this._refreshTokenWhenCreate;
  }

  // refresh_token_when_destroy - computed: false, optional: true, required: false
  private _refreshTokenWhenDestroy?: boolean | cdktf.IResolvable; 
  public get refreshTokenWhenDestroy() {
    return this.getBooleanAttribute('refresh_token_when_destroy');
  }
  public set refreshTokenWhenDestroy(value: boolean | cdktf.IResolvable) {
    this._refreshTokenWhenDestroy = value;
  }
  public resetRefreshTokenWhenDestroy() {
    this._refreshTokenWhenDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenWhenDestroyInput() {
    return this._refreshTokenWhenDestroy;
  }

  // require_exact_count - computed: false, optional: true, required: false
  private _requireExactCount?: boolean | cdktf.IResolvable; 
  public get requireExactCount() {
    return this.getBooleanAttribute('require_exact_count');
  }
  public set requireExactCount(value: boolean | cdktf.IResolvable) {
    this._requireExactCount = value;
  }
  public resetRequireExactCount() {
    this._requireExactCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireExactCountInput() {
    return this._requireExactCount;
  }

  // retrieve_status - computed: false, optional: true, required: false
  private _retrieveStatus?: string[]; 
  public get retrieveStatus() {
    return this.getListAttribute('retrieve_status');
  }
  public set retrieveStatus(value: string[]) {
    this._retrieveStatus = value;
  }
  public resetRetrieveStatus() {
    this._retrieveStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveStatusInput() {
    return this._retrieveStatus;
  }

  // task_name - computed: false, optional: false, required: true
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_id: cdktf.numberToTerraform(this._configId),
      count_num: cdktf.numberToTerraform(this._countNum),
      id: cdktf.stringToTerraform(this._id),
      preempt_interval: cdktf.numberToTerraform(this._preemptInterval),
      refresh_token_when_create: cdktf.booleanToTerraform(this._refreshTokenWhenCreate),
      refresh_token_when_destroy: cdktf.booleanToTerraform(this._refreshTokenWhenDestroy),
      require_exact_count: cdktf.booleanToTerraform(this._requireExactCount),
      retrieve_status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._retrieveStatus),
      task_name: cdktf.stringToTerraform(this._taskName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_id: {
        value: cdktf.numberToHclTerraform(this._configId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      count_num: {
        value: cdktf.numberToHclTerraform(this._countNum),
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
      preempt_interval: {
        value: cdktf.numberToHclTerraform(this._preemptInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      refresh_token_when_create: {
        value: cdktf.booleanToHclTerraform(this._refreshTokenWhenCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      refresh_token_when_destroy: {
        value: cdktf.booleanToHclTerraform(this._refreshTokenWhenDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_exact_count: {
        value: cdktf.booleanToHclTerraform(this._requireExactCount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retrieve_status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._retrieveStatus),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      task_name: {
        value: cdktf.stringToHclTerraform(this._taskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
