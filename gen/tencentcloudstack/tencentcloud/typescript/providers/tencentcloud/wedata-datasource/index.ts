// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_datasource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WedataDatasourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * BizParams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_datasource#biz_params WedataDatasource#biz_params}
  */
  readonly bizParams?: string;
  /**
  * DataSource Category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_datasource#category WedataDatasource#category}
  */
  readonly category: string;
  /**
  * ClusterId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_datasource#cluster_id WedataDatasource#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Collect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_datasource#collect WedataDatasource#collect}
  */
  readonly collect?: string;
  /**
  * COSBucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_datasource#cos_bucket WedataDatasource#cos_bucket}
  */
  readonly cosBucket?: string;
  /**
  * Cos region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_datasource#cos_region WedataDatasource#cos_region}
  */
  readonly cosRegion?: string;
  /**
  * Dbname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_datasource#database_name WedataDatasource#database_name}
  */
  readonly databaseName?: string;
  /**
  * Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_datasource#description WedataDatasource#description}
  */
  readonly description?: string;
  /**
  * Display.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_datasource#display WedataDatasource#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_datasource#id WedataDatasource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_datasource#instance WedataDatasource#instance}
  */
  readonly instance?: string;
  /**
  * DataSource Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_datasource#name WedataDatasource#name}
  */
  readonly name: string;
  /**
  * Owner projectId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_datasource#owner_project_id WedataDatasource#owner_project_id}
  */
  readonly ownerProjectId: string;
  /**
  * Owner Project Ident.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_datasource#owner_project_ident WedataDatasource#owner_project_ident}
  */
  readonly ownerProjectIdent: string;
  /**
  * Owner project name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_datasource#owner_project_name WedataDatasource#owner_project_name}
  */
  readonly ownerProjectName: string;
  /**
  * Params.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_datasource#params WedataDatasource#params}
  */
  readonly params: string;
  /**
  * Status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_datasource#status WedataDatasource#status}
  */
  readonly status?: number;
  /**
  * DataSource Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_datasource#type WedataDatasource#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_datasource tencentcloud_wedata_datasource}
*/
export class WedataDatasource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_datasource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WedataDatasource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WedataDatasource to import
  * @param importFromId The id of the existing WedataDatasource that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_datasource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WedataDatasource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_datasource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_datasource tencentcloud_wedata_datasource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WedataDatasourceConfig
  */
  public constructor(scope: Construct, id: string, config: WedataDatasourceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_datasource',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bizParams = config.bizParams;
    this._category = config.category;
    this._clusterId = config.clusterId;
    this._collect = config.collect;
    this._cosBucket = config.cosBucket;
    this._cosRegion = config.cosRegion;
    this._databaseName = config.databaseName;
    this._description = config.description;
    this._display = config.display;
    this._id = config.id;
    this._instance = config.instance;
    this._name = config.name;
    this._ownerProjectId = config.ownerProjectId;
    this._ownerProjectIdent = config.ownerProjectIdent;
    this._ownerProjectName = config.ownerProjectName;
    this._params = config.params;
    this._status = config.status;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // biz_params - computed: false, optional: true, required: false
  private _bizParams?: string; 
  public get bizParams() {
    return this.getStringAttribute('biz_params');
  }
  public set bizParams(value: string) {
    this._bizParams = value;
  }
  public resetBizParams() {
    this._bizParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bizParamsInput() {
    return this._bizParams;
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // collect - computed: true, optional: true, required: false
  private _collect?: string; 
  public get collect() {
    return this.getStringAttribute('collect');
  }
  public set collect(value: string) {
    this._collect = value;
  }
  public resetCollect() {
    this._collect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectInput() {
    return this._collect;
  }

  // cos_bucket - computed: false, optional: true, required: false
  private _cosBucket?: string; 
  public get cosBucket() {
    return this.getStringAttribute('cos_bucket');
  }
  public set cosBucket(value: string) {
    this._cosBucket = value;
  }
  public resetCosBucket() {
    this._cosBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosBucketInput() {
    return this._cosBucket;
  }

  // cos_region - computed: false, optional: true, required: false
  private _cosRegion?: string; 
  public get cosRegion() {
    return this.getStringAttribute('cos_region');
  }
  public set cosRegion(value: string) {
    this._cosRegion = value;
  }
  public resetCosRegion() {
    this._cosRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosRegionInput() {
    return this._cosRegion;
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // description - computed: false, optional: true, required: false
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

  // display - computed: false, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
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

  // instance - computed: false, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // owner_project_id - computed: false, optional: false, required: true
  private _ownerProjectId?: string; 
  public get ownerProjectId() {
    return this.getStringAttribute('owner_project_id');
  }
  public set ownerProjectId(value: string) {
    this._ownerProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerProjectIdInput() {
    return this._ownerProjectId;
  }

  // owner_project_ident - computed: false, optional: false, required: true
  private _ownerProjectIdent?: string; 
  public get ownerProjectIdent() {
    return this.getStringAttribute('owner_project_ident');
  }
  public set ownerProjectIdent(value: string) {
    this._ownerProjectIdent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerProjectIdentInput() {
    return this._ownerProjectIdent;
  }

  // owner_project_name - computed: false, optional: false, required: true
  private _ownerProjectName?: string; 
  public get ownerProjectName() {
    return this.getStringAttribute('owner_project_name');
  }
  public set ownerProjectName(value: string) {
    this._ownerProjectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerProjectNameInput() {
    return this._ownerProjectName;
  }

  // params - computed: false, optional: false, required: true
  private _params?: string; 
  public get params() {
    return this.getStringAttribute('params');
  }
  public set params(value: string) {
    this._params = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // params_out - computed: true, optional: false, required: false
  public get paramsOut() {
    return this.getStringAttribute('params_out');
  }

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      biz_params: cdktf.stringToTerraform(this._bizParams),
      category: cdktf.stringToTerraform(this._category),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      collect: cdktf.stringToTerraform(this._collect),
      cos_bucket: cdktf.stringToTerraform(this._cosBucket),
      cos_region: cdktf.stringToTerraform(this._cosRegion),
      database_name: cdktf.stringToTerraform(this._databaseName),
      description: cdktf.stringToTerraform(this._description),
      display: cdktf.stringToTerraform(this._display),
      id: cdktf.stringToTerraform(this._id),
      instance: cdktf.stringToTerraform(this._instance),
      name: cdktf.stringToTerraform(this._name),
      owner_project_id: cdktf.stringToTerraform(this._ownerProjectId),
      owner_project_ident: cdktf.stringToTerraform(this._ownerProjectIdent),
      owner_project_name: cdktf.stringToTerraform(this._ownerProjectName),
      params: cdktf.stringToTerraform(this._params),
      status: cdktf.numberToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      biz_params: {
        value: cdktf.stringToHclTerraform(this._bizParams),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collect: {
        value: cdktf.stringToHclTerraform(this._collect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos_bucket: {
        value: cdktf.stringToHclTerraform(this._cosBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos_region: {
        value: cdktf.stringToHclTerraform(this._cosRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display: {
        value: cdktf.stringToHclTerraform(this._display),
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
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_project_id: {
        value: cdktf.stringToHclTerraform(this._ownerProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_project_ident: {
        value: cdktf.stringToHclTerraform(this._ownerProjectIdent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_project_name: {
        value: cdktf.stringToHclTerraform(this._ownerProjectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      params: {
        value: cdktf.stringToHclTerraform(this._params),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
