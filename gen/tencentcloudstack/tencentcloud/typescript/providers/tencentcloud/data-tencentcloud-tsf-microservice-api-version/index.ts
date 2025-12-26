// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tsf_microservice_api_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudTsfMicroserviceApiVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tsf_microservice_api_version#id DataTencentcloudTsfMicroserviceApiVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * request method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tsf_microservice_api_version#method DataTencentcloudTsfMicroserviceApiVersion#method}
  */
  readonly method?: string;
  /**
  * Microservice ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tsf_microservice_api_version#microservice_id DataTencentcloudTsfMicroserviceApiVersion#microservice_id}
  */
  readonly microserviceId: string;
  /**
  * api path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tsf_microservice_api_version#path DataTencentcloudTsfMicroserviceApiVersion#path}
  */
  readonly path?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tsf_microservice_api_version#result_output_file DataTencentcloudTsfMicroserviceApiVersion#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudTsfMicroserviceApiVersionResult {
}

export function dataTencentcloudTsfMicroserviceApiVersionResultToTerraform(struct?: DataTencentcloudTsfMicroserviceApiVersionResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfMicroserviceApiVersionResultToHclTerraform(struct?: DataTencentcloudTsfMicroserviceApiVersionResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfMicroserviceApiVersionResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfMicroserviceApiVersionResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfMicroserviceApiVersionResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }

  // pkg_version - computed: true, optional: false, required: false
  public get pkgVersion() {
    return this.getStringAttribute('pkg_version');
  }
}

export class DataTencentcloudTsfMicroserviceApiVersionResultList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfMicroserviceApiVersionResultOutputReference {
    return new DataTencentcloudTsfMicroserviceApiVersionResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tsf_microservice_api_version tencentcloud_tsf_microservice_api_version}
*/
export class DataTencentcloudTsfMicroserviceApiVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_microservice_api_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudTsfMicroserviceApiVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudTsfMicroserviceApiVersion to import
  * @param importFromId The id of the existing DataTencentcloudTsfMicroserviceApiVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tsf_microservice_api_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudTsfMicroserviceApiVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_microservice_api_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tsf_microservice_api_version tencentcloud_tsf_microservice_api_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudTsfMicroserviceApiVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudTsfMicroserviceApiVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_microservice_api_version',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._method = config.method;
    this._microserviceId = config.microserviceId;
    this._path = config.path;
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

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // microservice_id - computed: false, optional: false, required: true
  private _microserviceId?: string; 
  public get microserviceId() {
    return this.getStringAttribute('microservice_id');
  }
  public set microserviceId(value: string) {
    this._microserviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get microserviceIdInput() {
    return this._microserviceId;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataTencentcloudTsfMicroserviceApiVersionResultList(this, "result", false);
  public get result() {
    return this._result;
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
      method: cdktf.stringToTerraform(this._method),
      microservice_id: cdktf.stringToTerraform(this._microserviceId),
      path: cdktf.stringToTerraform(this._path),
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
      method: {
        value: cdktf.stringToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      microservice_id: {
        value: cdktf.stringToHclTerraform(this._microserviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
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
