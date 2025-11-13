// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cat_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCatNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cat_node#id DataTencentcloudCatNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * is IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cat_node#is_ipv6 DataTencentcloudCatNode#is_ipv6}
  */
  readonly isIpv6?: boolean | cdktf.IResolvable;
  /**
  * Node area:1=Chinese Mainland,2=Hong Kong, Macao and Taiwan,3=Overseas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cat_node#location DataTencentcloudCatNode#location}
  */
  readonly location?: number;
  /**
  * Node name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cat_node#node_name DataTencentcloudCatNode#node_name}
  */
  readonly nodeName?: string;
  /**
  * Node type 1:IDC,2:LastMile,3:Mobile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cat_node#node_type DataTencentcloudCatNode#node_type}
  */
  readonly nodeType?: number;
  /**
  * Payment mode:1=Trial version,2=Paid version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cat_node#pay_mode DataTencentcloudCatNode#pay_mode}
  */
  readonly payMode?: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cat_node#result_output_file DataTencentcloudCatNode#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudCatNodeNodeDefine {
}

export function dataTencentcloudCatNodeNodeDefineToTerraform(struct?: DataTencentcloudCatNodeNodeDefine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCatNodeNodeDefineToHclTerraform(struct?: DataTencentcloudCatNodeNodeDefine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCatNodeNodeDefineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCatNodeNodeDefine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCatNodeNodeDefine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // code_type - computed: true, optional: false, required: false
  public get codeType() {
    return this.getStringAttribute('code_type');
  }

  // district - computed: true, optional: false, required: false
  public get district() {
    return this.getStringAttribute('district');
  }

  // ip_type - computed: true, optional: false, required: false
  public get ipType() {
    return this.getNumberAttribute('ip_type');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getNumberAttribute('location');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // net_service - computed: true, optional: false, required: false
  public get netService() {
    return this.getStringAttribute('net_service');
  }

  // node_define_status - computed: true, optional: false, required: false
  public get nodeDefineStatus() {
    return this.getNumberAttribute('node_define_status');
  }

  // task_types - computed: true, optional: false, required: false
  public get taskTypes() {
    return this.getNumberListAttribute('task_types');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }
}

export class DataTencentcloudCatNodeNodeDefineList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCatNodeNodeDefineOutputReference {
    return new DataTencentcloudCatNodeNodeDefineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cat_node tencentcloud_cat_node}
*/
export class DataTencentcloudCatNode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cat_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCatNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCatNode to import
  * @param importFromId The id of the existing DataTencentcloudCatNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cat_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCatNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cat_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cat_node tencentcloud_cat_node} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCatNodeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCatNodeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cat_node',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
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
    this._isIpv6 = config.isIpv6;
    this._location = config.location;
    this._nodeName = config.nodeName;
    this._nodeType = config.nodeType;
    this._payMode = config.payMode;
    this._resultOutputFile = config.resultOutputFile;
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

  // is_ipv6 - computed: false, optional: true, required: false
  private _isIpv6?: boolean | cdktf.IResolvable; 
  public get isIpv6() {
    return this.getBooleanAttribute('is_ipv6');
  }
  public set isIpv6(value: boolean | cdktf.IResolvable) {
    this._isIpv6 = value;
  }
  public resetIsIpv6() {
    this._isIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIpv6Input() {
    return this._isIpv6;
  }

  // location - computed: false, optional: true, required: false
  private _location?: number; 
  public get location() {
    return this.getNumberAttribute('location');
  }
  public set location(value: number) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // node_define - computed: true, optional: false, required: false
  private _nodeDefine = new DataTencentcloudCatNodeNodeDefineList(this, "node_define", false);
  public get nodeDefine() {
    return this._nodeDefine;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // node_type - computed: false, optional: true, required: false
  private _nodeType?: number; 
  public get nodeType() {
    return this.getNumberAttribute('node_type');
  }
  public set nodeType(value: number) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // pay_mode - computed: false, optional: true, required: false
  private _payMode?: number; 
  public get payMode() {
    return this.getNumberAttribute('pay_mode');
  }
  public set payMode(value: number) {
    this._payMode = value;
  }
  public resetPayMode() {
    this._payMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payModeInput() {
    return this._payMode;
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
      id: cdktf.stringToTerraform(this._id),
      is_ipv6: cdktf.booleanToTerraform(this._isIpv6),
      location: cdktf.numberToTerraform(this._location),
      node_name: cdktf.stringToTerraform(this._nodeName),
      node_type: cdktf.numberToTerraform(this._nodeType),
      pay_mode: cdktf.numberToTerraform(this._payMode),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
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
      is_ipv6: {
        value: cdktf.booleanToHclTerraform(this._isIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: cdktf.numberToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_name: {
        value: cdktf.stringToHclTerraform(this._nodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_type: {
        value: cdktf.numberToHclTerraform(this._nodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pay_mode: {
        value: cdktf.numberToHclTerraform(this._payMode),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
