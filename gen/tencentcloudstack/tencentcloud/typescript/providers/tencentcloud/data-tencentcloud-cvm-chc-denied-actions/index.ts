// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cvm_chc_denied_actions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCvmChcDeniedActionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * CHC host IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cvm_chc_denied_actions#chc_ids DataTencentcloudCvmChcDeniedActions#chc_ids}
  */
  readonly chcIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cvm_chc_denied_actions#id DataTencentcloudCvmChcDeniedActions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cvm_chc_denied_actions#result_output_file DataTencentcloudCvmChcDeniedActions#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudCvmChcDeniedActionsChcHostDeniedActionSet {
}

export function dataTencentcloudCvmChcDeniedActionsChcHostDeniedActionSetToTerraform(struct?: DataTencentcloudCvmChcDeniedActionsChcHostDeniedActionSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCvmChcDeniedActionsChcHostDeniedActionSetToHclTerraform(struct?: DataTencentcloudCvmChcDeniedActionsChcHostDeniedActionSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCvmChcDeniedActionsChcHostDeniedActionSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCvmChcDeniedActionsChcHostDeniedActionSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCvmChcDeniedActionsChcHostDeniedActionSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chc_id - computed: true, optional: false, required: false
  public get chcId() {
    return this.getStringAttribute('chc_id');
  }

  // deny_actions - computed: true, optional: false, required: false
  public get denyActions() {
    return cdktf.Fn.tolist(this.getListAttribute('deny_actions'));
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataTencentcloudCvmChcDeniedActionsChcHostDeniedActionSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCvmChcDeniedActionsChcHostDeniedActionSetOutputReference {
    return new DataTencentcloudCvmChcDeniedActionsChcHostDeniedActionSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cvm_chc_denied_actions tencentcloud_cvm_chc_denied_actions}
*/
export class DataTencentcloudCvmChcDeniedActions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cvm_chc_denied_actions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCvmChcDeniedActions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCvmChcDeniedActions to import
  * @param importFromId The id of the existing DataTencentcloudCvmChcDeniedActions that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cvm_chc_denied_actions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCvmChcDeniedActions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cvm_chc_denied_actions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cvm_chc_denied_actions tencentcloud_cvm_chc_denied_actions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCvmChcDeniedActionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCvmChcDeniedActionsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cvm_chc_denied_actions',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._chcIds = config.chcIds;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chc_host_denied_action_set - computed: true, optional: false, required: false
  private _chcHostDeniedActionSet = new DataTencentcloudCvmChcDeniedActionsChcHostDeniedActionSetList(this, "chc_host_denied_action_set", false);
  public get chcHostDeniedActionSet() {
    return this._chcHostDeniedActionSet;
  }

  // chc_ids - computed: false, optional: false, required: true
  private _chcIds?: string[]; 
  public get chcIds() {
    return cdktf.Fn.tolist(this.getListAttribute('chc_ids'));
  }
  public set chcIds(value: string[]) {
    this._chcIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chcIdsInput() {
    return this._chcIds;
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

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      chc_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._chcIds),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      chc_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._chcIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
