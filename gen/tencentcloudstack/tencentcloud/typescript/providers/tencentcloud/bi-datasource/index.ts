// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_datasource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BiDatasourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_datasource#catalog BiDatasource#catalog}
  */
  readonly catalog?: string;
  /**
  * Charset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_datasource#charset BiDatasource#charset}
  */
  readonly charset: string;
  /**
  * Third-party datasource identification, this parameter can be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_datasource#data_origin BiDatasource#data_origin}
  */
  readonly dataOrigin?: string;
  /**
  * Third-party datasource project id, this parameter can be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_datasource#data_origin_datasource_id BiDatasource#data_origin_datasource_id}
  */
  readonly dataOriginDatasourceId?: string;
  /**
  * Third-party datasource project id, this parameter can be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_datasource#data_origin_project_id BiDatasource#data_origin_project_id}
  */
  readonly dataOriginProjectId?: string;
  /**
  * Host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_datasource#db_host BiDatasource#db_host}
  */
  readonly dbHost: string;
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_datasource#db_name BiDatasource#db_name}
  */
  readonly dbName: string;
  /**
  * Port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_datasource#db_port BiDatasource#db_port}
  */
  readonly dbPort: number;
  /**
  * Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_datasource#db_pwd BiDatasource#db_pwd}
  */
  readonly dbPwd: string;
  /**
  * `MYSQL`, `MSSQL`, `POSTGRE`, `ORACLE`, `CLICKHOUSE`, `TIDB`, `HIVE`, `PRESTO`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_datasource#db_type BiDatasource#db_type}
  */
  readonly dbType: string;
  /**
  * User name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_datasource#db_user BiDatasource#db_user}
  */
  readonly dbUser: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_datasource#id BiDatasource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_datasource#project_id BiDatasource#project_id}
  */
  readonly projectId: number;
  /**
  * Own or Cloud, default: `Own`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_datasource#service_type BiDatasource#service_type}
  */
  readonly serviceType?: string;
  /**
  * Datasource name in BI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_datasource#source_name BiDatasource#source_name}
  */
  readonly sourceName: string;
  /**
  * Tencent cloud private network unified identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_datasource#uniq_vpc_id BiDatasource#uniq_vpc_id}
  */
  readonly uniqVpcId?: string;
  /**
  * Tencent cloud private network identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_datasource#vpc_id BiDatasource#vpc_id}
  */
  readonly vpcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_datasource tencentcloud_bi_datasource}
*/
export class BiDatasource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_bi_datasource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BiDatasource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BiDatasource to import
  * @param importFromId The id of the existing BiDatasource that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_datasource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BiDatasource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_bi_datasource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_datasource tencentcloud_bi_datasource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BiDatasourceConfig
  */
  public constructor(scope: Construct, id: string, config: BiDatasourceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_bi_datasource',
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
    this._catalog = config.catalog;
    this._charset = config.charset;
    this._dataOrigin = config.dataOrigin;
    this._dataOriginDatasourceId = config.dataOriginDatasourceId;
    this._dataOriginProjectId = config.dataOriginProjectId;
    this._dbHost = config.dbHost;
    this._dbName = config.dbName;
    this._dbPort = config.dbPort;
    this._dbPwd = config.dbPwd;
    this._dbType = config.dbType;
    this._dbUser = config.dbUser;
    this._id = config.id;
    this._projectId = config.projectId;
    this._serviceType = config.serviceType;
    this._sourceName = config.sourceName;
    this._uniqVpcId = config.uniqVpcId;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog - computed: false, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // charset - computed: false, optional: false, required: true
  private _charset?: string; 
  public get charset() {
    return this.getStringAttribute('charset');
  }
  public set charset(value: string) {
    this._charset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get charsetInput() {
    return this._charset;
  }

  // data_origin - computed: false, optional: true, required: false
  private _dataOrigin?: string; 
  public get dataOrigin() {
    return this.getStringAttribute('data_origin');
  }
  public set dataOrigin(value: string) {
    this._dataOrigin = value;
  }
  public resetDataOrigin() {
    this._dataOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataOriginInput() {
    return this._dataOrigin;
  }

  // data_origin_datasource_id - computed: false, optional: true, required: false
  private _dataOriginDatasourceId?: string; 
  public get dataOriginDatasourceId() {
    return this.getStringAttribute('data_origin_datasource_id');
  }
  public set dataOriginDatasourceId(value: string) {
    this._dataOriginDatasourceId = value;
  }
  public resetDataOriginDatasourceId() {
    this._dataOriginDatasourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataOriginDatasourceIdInput() {
    return this._dataOriginDatasourceId;
  }

  // data_origin_project_id - computed: false, optional: true, required: false
  private _dataOriginProjectId?: string; 
  public get dataOriginProjectId() {
    return this.getStringAttribute('data_origin_project_id');
  }
  public set dataOriginProjectId(value: string) {
    this._dataOriginProjectId = value;
  }
  public resetDataOriginProjectId() {
    this._dataOriginProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataOriginProjectIdInput() {
    return this._dataOriginProjectId;
  }

  // db_host - computed: false, optional: false, required: true
  private _dbHost?: string; 
  public get dbHost() {
    return this.getStringAttribute('db_host');
  }
  public set dbHost(value: string) {
    this._dbHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbHostInput() {
    return this._dbHost;
  }

  // db_name - computed: false, optional: false, required: true
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // db_port - computed: false, optional: false, required: true
  private _dbPort?: number; 
  public get dbPort() {
    return this.getNumberAttribute('db_port');
  }
  public set dbPort(value: number) {
    this._dbPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbPortInput() {
    return this._dbPort;
  }

  // db_pwd - computed: false, optional: false, required: true
  private _dbPwd?: string; 
  public get dbPwd() {
    return this.getStringAttribute('db_pwd');
  }
  public set dbPwd(value: string) {
    this._dbPwd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbPwdInput() {
    return this._dbPwd;
  }

  // db_type - computed: false, optional: false, required: true
  private _dbType?: string; 
  public get dbType() {
    return this.getStringAttribute('db_type');
  }
  public set dbType(value: string) {
    this._dbType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbTypeInput() {
    return this._dbType;
  }

  // db_user - computed: false, optional: false, required: true
  private _dbUser?: string; 
  public get dbUser() {
    return this.getStringAttribute('db_user');
  }
  public set dbUser(value: string) {
    this._dbUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUserInput() {
    return this._dbUser;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // source_name - computed: false, optional: false, required: true
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // uniq_vpc_id - computed: false, optional: true, required: false
  private _uniqVpcId?: string; 
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }
  public set uniqVpcId(value: string) {
    this._uniqVpcId = value;
  }
  public resetUniqVpcId() {
    this._uniqVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqVpcIdInput() {
    return this._uniqVpcId;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog: cdktf.stringToTerraform(this._catalog),
      charset: cdktf.stringToTerraform(this._charset),
      data_origin: cdktf.stringToTerraform(this._dataOrigin),
      data_origin_datasource_id: cdktf.stringToTerraform(this._dataOriginDatasourceId),
      data_origin_project_id: cdktf.stringToTerraform(this._dataOriginProjectId),
      db_host: cdktf.stringToTerraform(this._dbHost),
      db_name: cdktf.stringToTerraform(this._dbName),
      db_port: cdktf.numberToTerraform(this._dbPort),
      db_pwd: cdktf.stringToTerraform(this._dbPwd),
      db_type: cdktf.stringToTerraform(this._dbType),
      db_user: cdktf.stringToTerraform(this._dbUser),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.numberToTerraform(this._projectId),
      service_type: cdktf.stringToTerraform(this._serviceType),
      source_name: cdktf.stringToTerraform(this._sourceName),
      uniq_vpc_id: cdktf.stringToTerraform(this._uniqVpcId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog: {
        value: cdktf.stringToHclTerraform(this._catalog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      charset: {
        value: cdktf.stringToHclTerraform(this._charset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_origin: {
        value: cdktf.stringToHclTerraform(this._dataOrigin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_origin_datasource_id: {
        value: cdktf.stringToHclTerraform(this._dataOriginDatasourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_origin_project_id: {
        value: cdktf.stringToHclTerraform(this._dataOriginProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_host: {
        value: cdktf.stringToHclTerraform(this._dbHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_name: {
        value: cdktf.stringToHclTerraform(this._dbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_port: {
        value: cdktf.numberToHclTerraform(this._dbPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_pwd: {
        value: cdktf.stringToHclTerraform(this._dbPwd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_type: {
        value: cdktf.stringToHclTerraform(this._dbType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_user: {
        value: cdktf.stringToHclTerraform(this._dbUser),
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
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_name: {
        value: cdktf.stringToHclTerraform(this._sourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uniq_vpc_id: {
        value: cdktf.stringToHclTerraform(this._uniqVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
