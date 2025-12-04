// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cam_list_entities_for_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCamListEntitiesForPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Can take values of &amp;amp;#39;All&amp;amp;#39;, &amp;amp;#39;User&amp;amp;#39;, &amp;amp;#39;Group&amp;amp;#39;, and &amp;amp;#39;Role&amp;amp;#39;. &amp;amp;#39;All&amp;amp;#39; represents obtaining all entity types, &amp;amp;#39;User&amp;amp;#39; represents only obtaining sub accounts, &amp;amp;#39;Group&amp;amp;#39; represents only obtaining user groups, and &amp;amp;#39;Role&amp;amp;#39; represents only obtaining roles. The default value is&amp;amp;#39; All &amp;amp;#39;.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cam_list_entities_for_policy#entity_filter DataTencentcloudCamListEntitiesForPolicy#entity_filter}
  */
  readonly entityFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cam_list_entities_for_policy#id DataTencentcloudCamListEntitiesForPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Policy Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cam_list_entities_for_policy#policy_id DataTencentcloudCamListEntitiesForPolicy#policy_id}
  */
  readonly policyId: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cam_list_entities_for_policy#result_output_file DataTencentcloudCamListEntitiesForPolicy#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Per page size, default value is 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cam_list_entities_for_policy#rp DataTencentcloudCamListEntitiesForPolicy#rp}
  */
  readonly rp?: number;
}
export interface DataTencentcloudCamListEntitiesForPolicyListStruct {
}

export function dataTencentcloudCamListEntitiesForPolicyListStructToTerraform(struct?: DataTencentcloudCamListEntitiesForPolicyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCamListEntitiesForPolicyListStructToHclTerraform(struct?: DataTencentcloudCamListEntitiesForPolicyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCamListEntitiesForPolicyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCamListEntitiesForPolicyListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCamListEntitiesForPolicyListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attachment_time - computed: true, optional: false, required: false
  public get attachmentTime() {
    return this.getStringAttribute('attachment_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // related_type - computed: true, optional: false, required: false
  public get relatedType() {
    return this.getNumberAttribute('related_type');
  }

  // uin - computed: true, optional: false, required: false
  public get uin() {
    return this.getNumberAttribute('uin');
  }
}

export class DataTencentcloudCamListEntitiesForPolicyListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCamListEntitiesForPolicyListStructOutputReference {
    return new DataTencentcloudCamListEntitiesForPolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cam_list_entities_for_policy tencentcloud_cam_list_entities_for_policy}
*/
export class DataTencentcloudCamListEntitiesForPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cam_list_entities_for_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCamListEntitiesForPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCamListEntitiesForPolicy to import
  * @param importFromId The id of the existing DataTencentcloudCamListEntitiesForPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cam_list_entities_for_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCamListEntitiesForPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cam_list_entities_for_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cam_list_entities_for_policy tencentcloud_cam_list_entities_for_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCamListEntitiesForPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCamListEntitiesForPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cam_list_entities_for_policy',
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
    this._entityFilter = config.entityFilter;
    this._id = config.id;
    this._policyId = config.policyId;
    this._resultOutputFile = config.resultOutputFile;
    this._rp = config.rp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entity_filter - computed: false, optional: true, required: false
  private _entityFilter?: string; 
  public get entityFilter() {
    return this.getStringAttribute('entity_filter');
  }
  public set entityFilter(value: string) {
    this._entityFilter = value;
  }
  public resetEntityFilter() {
    this._entityFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityFilterInput() {
    return this._entityFilter;
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

  // list - computed: true, optional: false, required: false
  private _list = new DataTencentcloudCamListEntitiesForPolicyListStructList(this, "list", false);
  public get list() {
    return this._list;
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: number; 
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }
  public set policyId(value: number) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
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

  // rp - computed: false, optional: true, required: false
  private _rp?: number; 
  public get rp() {
    return this.getNumberAttribute('rp');
  }
  public set rp(value: number) {
    this._rp = value;
  }
  public resetRp() {
    this._rp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpInput() {
    return this._rp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entity_filter: cdktf.stringToTerraform(this._entityFilter),
      id: cdktf.stringToTerraform(this._id),
      policy_id: cdktf.numberToTerraform(this._policyId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      rp: cdktf.numberToTerraform(this._rp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entity_filter: {
        value: cdktf.stringToHclTerraform(this._entityFilter),
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
      policy_id: {
        value: cdktf.numberToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rp: {
        value: cdktf.numberToHclTerraform(this._rp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
