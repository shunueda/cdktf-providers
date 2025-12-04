// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/api_gateway_api_apps
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudApiGatewayApiAppsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Api app ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/api_gateway_api_apps#api_app_id DataTencentcloudApiGatewayApiApps#api_app_id}
  */
  readonly apiAppId?: string;
  /**
  * Api app name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/api_gateway_api_apps#api_app_name DataTencentcloudApiGatewayApiApps#api_app_name}
  */
  readonly apiAppName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/api_gateway_api_apps#id DataTencentcloudApiGatewayApiApps#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/api_gateway_api_apps#result_output_file DataTencentcloudApiGatewayApiApps#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudApiGatewayApiAppsApiAppListStruct {
}

export function dataTencentcloudApiGatewayApiAppsApiAppListStructToTerraform(struct?: DataTencentcloudApiGatewayApiAppsApiAppListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudApiGatewayApiAppsApiAppListStructToHclTerraform(struct?: DataTencentcloudApiGatewayApiAppsApiAppListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudApiGatewayApiAppsApiAppListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudApiGatewayApiAppsApiAppListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudApiGatewayApiAppsApiAppListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_app_desc - computed: true, optional: false, required: false
  public get apiAppDesc() {
    return this.getStringAttribute('api_app_desc');
  }

  // api_app_id - computed: true, optional: false, required: false
  public get apiAppId() {
    return this.getStringAttribute('api_app_id');
  }

  // api_app_key - computed: true, optional: false, required: false
  public get apiAppKey() {
    return this.getStringAttribute('api_app_key');
  }

  // api_app_name - computed: true, optional: false, required: false
  public get apiAppName() {
    return this.getStringAttribute('api_app_name');
  }

  // api_app_secret - computed: true, optional: false, required: false
  public get apiAppSecret() {
    return this.getStringAttribute('api_app_secret');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }
}

export class DataTencentcloudApiGatewayApiAppsApiAppListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudApiGatewayApiAppsApiAppListStructOutputReference {
    return new DataTencentcloudApiGatewayApiAppsApiAppListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/api_gateway_api_apps tencentcloud_api_gateway_api_apps}
*/
export class DataTencentcloudApiGatewayApiApps extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_api_gateway_api_apps";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudApiGatewayApiApps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudApiGatewayApiApps to import
  * @param importFromId The id of the existing DataTencentcloudApiGatewayApiApps that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/api_gateway_api_apps#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudApiGatewayApiApps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_api_gateway_api_apps", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/api_gateway_api_apps tencentcloud_api_gateway_api_apps} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudApiGatewayApiAppsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudApiGatewayApiAppsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_api_gateway_api_apps',
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
    this._apiAppId = config.apiAppId;
    this._apiAppName = config.apiAppName;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_app_id - computed: false, optional: true, required: false
  private _apiAppId?: string; 
  public get apiAppId() {
    return this.getStringAttribute('api_app_id');
  }
  public set apiAppId(value: string) {
    this._apiAppId = value;
  }
  public resetApiAppId() {
    this._apiAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAppIdInput() {
    return this._apiAppId;
  }

  // api_app_list - computed: true, optional: false, required: false
  private _apiAppList = new DataTencentcloudApiGatewayApiAppsApiAppListStructList(this, "api_app_list", false);
  public get apiAppList() {
    return this._apiAppList;
  }

  // api_app_name - computed: false, optional: true, required: false
  private _apiAppName?: string; 
  public get apiAppName() {
    return this.getStringAttribute('api_app_name');
  }
  public set apiAppName(value: string) {
    this._apiAppName = value;
  }
  public resetApiAppName() {
    this._apiAppName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAppNameInput() {
    return this._apiAppName;
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
      api_app_id: cdktf.stringToTerraform(this._apiAppId),
      api_app_name: cdktf.stringToTerraform(this._apiAppName),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_app_id: {
        value: cdktf.stringToHclTerraform(this._apiAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_app_name: {
        value: cdktf.stringToHclTerraform(this._apiAppName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
