// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/clb_redirections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudClbRedirectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the CLB to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/clb_redirections#clb_id DataTencentcloudClbRedirections#clb_id}
  */
  readonly clbId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/clb_redirections#id DataTencentcloudClbRedirections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/clb_redirections#result_output_file DataTencentcloudClbRedirections#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * ID of source listener to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/clb_redirections#source_listener_id DataTencentcloudClbRedirections#source_listener_id}
  */
  readonly sourceListenerId: string;
  /**
  * Rule ID of source listener to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/clb_redirections#source_rule_id DataTencentcloudClbRedirections#source_rule_id}
  */
  readonly sourceRuleId: string;
  /**
  * ID of target listener to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/clb_redirections#target_listener_id DataTencentcloudClbRedirections#target_listener_id}
  */
  readonly targetListenerId?: string;
  /**
  * Rule ID of target listener to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/clb_redirections#target_rule_id DataTencentcloudClbRedirections#target_rule_id}
  */
  readonly targetRuleId?: string;
}
export interface DataTencentcloudClbRedirectionsRedirectionListStruct {
}

export function dataTencentcloudClbRedirectionsRedirectionListStructToTerraform(struct?: DataTencentcloudClbRedirectionsRedirectionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClbRedirectionsRedirectionListStructToHclTerraform(struct?: DataTencentcloudClbRedirectionsRedirectionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClbRedirectionsRedirectionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClbRedirectionsRedirectionListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClbRedirectionsRedirectionListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clb_id - computed: true, optional: false, required: false
  public get clbId() {
    return this.getStringAttribute('clb_id');
  }

  // source_listener_id - computed: true, optional: false, required: false
  public get sourceListenerId() {
    return this.getStringAttribute('source_listener_id');
  }

  // source_rule_id - computed: true, optional: false, required: false
  public get sourceRuleId() {
    return this.getStringAttribute('source_rule_id');
  }

  // target_listener_id - computed: true, optional: false, required: false
  public get targetListenerId() {
    return this.getStringAttribute('target_listener_id');
  }

  // target_rule_id - computed: true, optional: false, required: false
  public get targetRuleId() {
    return this.getStringAttribute('target_rule_id');
  }
}

export class DataTencentcloudClbRedirectionsRedirectionListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClbRedirectionsRedirectionListStructOutputReference {
    return new DataTencentcloudClbRedirectionsRedirectionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/clb_redirections tencentcloud_clb_redirections}
*/
export class DataTencentcloudClbRedirections extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clb_redirections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudClbRedirections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudClbRedirections to import
  * @param importFromId The id of the existing DataTencentcloudClbRedirections that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/clb_redirections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudClbRedirections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clb_redirections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/clb_redirections tencentcloud_clb_redirections} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudClbRedirectionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudClbRedirectionsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clb_redirections',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clbId = config.clbId;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._sourceListenerId = config.sourceListenerId;
    this._sourceRuleId = config.sourceRuleId;
    this._targetListenerId = config.targetListenerId;
    this._targetRuleId = config.targetRuleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clb_id - computed: false, optional: false, required: true
  private _clbId?: string; 
  public get clbId() {
    return this.getStringAttribute('clb_id');
  }
  public set clbId(value: string) {
    this._clbId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clbIdInput() {
    return this._clbId;
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

  // redirection_list - computed: true, optional: false, required: false
  private _redirectionList = new DataTencentcloudClbRedirectionsRedirectionListStructList(this, "redirection_list", false);
  public get redirectionList() {
    return this._redirectionList;
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

  // source_listener_id - computed: false, optional: false, required: true
  private _sourceListenerId?: string; 
  public get sourceListenerId() {
    return this.getStringAttribute('source_listener_id');
  }
  public set sourceListenerId(value: string) {
    this._sourceListenerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceListenerIdInput() {
    return this._sourceListenerId;
  }

  // source_rule_id - computed: false, optional: false, required: true
  private _sourceRuleId?: string; 
  public get sourceRuleId() {
    return this.getStringAttribute('source_rule_id');
  }
  public set sourceRuleId(value: string) {
    this._sourceRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRuleIdInput() {
    return this._sourceRuleId;
  }

  // target_listener_id - computed: false, optional: true, required: false
  private _targetListenerId?: string; 
  public get targetListenerId() {
    return this.getStringAttribute('target_listener_id');
  }
  public set targetListenerId(value: string) {
    this._targetListenerId = value;
  }
  public resetTargetListenerId() {
    this._targetListenerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetListenerIdInput() {
    return this._targetListenerId;
  }

  // target_rule_id - computed: false, optional: true, required: false
  private _targetRuleId?: string; 
  public get targetRuleId() {
    return this.getStringAttribute('target_rule_id');
  }
  public set targetRuleId(value: string) {
    this._targetRuleId = value;
  }
  public resetTargetRuleId() {
    this._targetRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRuleIdInput() {
    return this._targetRuleId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clb_id: cdktf.stringToTerraform(this._clbId),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      source_listener_id: cdktf.stringToTerraform(this._sourceListenerId),
      source_rule_id: cdktf.stringToTerraform(this._sourceRuleId),
      target_listener_id: cdktf.stringToTerraform(this._targetListenerId),
      target_rule_id: cdktf.stringToTerraform(this._targetRuleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clb_id: {
        value: cdktf.stringToHclTerraform(this._clbId),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_listener_id: {
        value: cdktf.stringToHclTerraform(this._sourceListenerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_rule_id: {
        value: cdktf.stringToHclTerraform(this._sourceRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_listener_id: {
        value: cdktf.stringToHclTerraform(this._targetListenerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_rule_id: {
        value: cdktf.stringToHclTerraform(this._targetRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
