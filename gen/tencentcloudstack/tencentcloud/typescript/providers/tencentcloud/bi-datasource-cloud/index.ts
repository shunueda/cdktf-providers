// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BiDatasourceCloudConfig extends cdktf.TerraformMetaArguments {
  /**
  * Charset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud#charset BiDatasourceCloud#charset}
  */
  readonly charset: string;
  /**
  * Cluster id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud#cluster_id BiDatasourceCloud#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Third-party datasource identification, this parameter can be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud#data_origin BiDatasourceCloud#data_origin}
  */
  readonly dataOrigin?: string;
  /**
  * Third-party datasource project id, this parameter can be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud#data_origin_datasource_id BiDatasourceCloud#data_origin_datasource_id}
  */
  readonly dataOriginDatasourceId?: string;
  /**
  * Third-party datasource project id, this parameter can be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud#data_origin_project_id BiDatasourceCloud#data_origin_project_id}
  */
  readonly dataOriginProjectId?: string;
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud#db_name BiDatasourceCloud#db_name}
  */
  readonly dbName: string;
  /**
  * Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud#db_pwd BiDatasourceCloud#db_pwd}
  */
  readonly dbPwd: string;
  /**
  * `MYSQL`, `TDSQL-C_MYSQL`, `TDSQL_MYSQL`, `MSSQL`, `POSTGRESQL`, `MARIADB`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud#db_type BiDatasourceCloud#db_type}
  */
  readonly dbType: string;
  /**
  * User name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud#db_user BiDatasourceCloud#db_user}
  */
  readonly dbUser: string;
  /**
  * Extended parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud#extra_param BiDatasourceCloud#extra_param}
  */
  readonly extraParam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud#id BiDatasourceCloud#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud#project_id BiDatasourceCloud#project_id}
  */
  readonly projectId: string;
  /**
  * Region identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud#region_id BiDatasourceCloud#region_id}
  */
  readonly regionId?: string;
  /**
  * Datasource name in BI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud#source_name BiDatasourceCloud#source_name}
  */
  readonly sourceName: string;
  /**
  * Unified vpc identification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud#uniq_vpc_id BiDatasourceCloud#uniq_vpc_id}
  */
  readonly uniqVpcId?: string;
  /**
  * Public cloud intranet ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud#vip BiDatasourceCloud#vip}
  */
  readonly vip?: string;
  /**
  * Vpc identification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud#vpc_id BiDatasourceCloud#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Public cloud intranet port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud#vport BiDatasourceCloud#vport}
  */
  readonly vport?: string;
  /**
  * service_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud#service_type BiDatasourceCloud#service_type}
  */
  readonly serviceType: BiDatasourceCloudServiceType;
}
export interface BiDatasourceCloudServiceType {
  /**
  * Instance Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud#instance_id BiDatasourceCloud#instance_id}
  */
  readonly instanceId: string;
  /**
  * Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud#region BiDatasourceCloud#region}
  */
  readonly region: string;
  /**
  * Service type, Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud#type BiDatasourceCloud#type}
  */
  readonly type: string;
}

export function biDatasourceCloudServiceTypeToTerraform(struct?: BiDatasourceCloudServiceTypeOutputReference | BiDatasourceCloudServiceType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    region: cdktf.stringToTerraform(struct!.region),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function biDatasourceCloudServiceTypeToHclTerraform(struct?: BiDatasourceCloudServiceTypeOutputReference | BiDatasourceCloudServiceType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BiDatasourceCloudServiceTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BiDatasourceCloudServiceType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiDatasourceCloudServiceType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceId = undefined;
      this._region = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceId = value.instanceId;
      this._region = value.region;
      this._type = value.type;
    }
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud tencentcloud_bi_datasource_cloud}
*/
export class BiDatasourceCloud extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_bi_datasource_cloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BiDatasourceCloud resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BiDatasourceCloud to import
  * @param importFromId The id of the existing BiDatasourceCloud that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BiDatasourceCloud to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_bi_datasource_cloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/bi_datasource_cloud tencentcloud_bi_datasource_cloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BiDatasourceCloudConfig
  */
  public constructor(scope: Construct, id: string, config: BiDatasourceCloudConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_bi_datasource_cloud',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._charset = config.charset;
    this._clusterId = config.clusterId;
    this._dataOrigin = config.dataOrigin;
    this._dataOriginDatasourceId = config.dataOriginDatasourceId;
    this._dataOriginProjectId = config.dataOriginProjectId;
    this._dbName = config.dbName;
    this._dbPwd = config.dbPwd;
    this._dbType = config.dbType;
    this._dbUser = config.dbUser;
    this._extraParam = config.extraParam;
    this._id = config.id;
    this._projectId = config.projectId;
    this._regionId = config.regionId;
    this._sourceName = config.sourceName;
    this._uniqVpcId = config.uniqVpcId;
    this._vip = config.vip;
    this._vpcId = config.vpcId;
    this._vport = config.vport;
    this._serviceType.internalValue = config.serviceType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cluster_id - computed: false, optional: true, required: false
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

  // extra_param - computed: true, optional: true, required: false
  private _extraParam?: string; 
  public get extraParam() {
    return this.getStringAttribute('extra_param');
  }
  public set extraParam(value: string) {
    this._extraParam = value;
  }
  public resetExtraParam() {
    this._extraParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParamInput() {
    return this._extraParam;
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
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
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

  // vip - computed: false, optional: true, required: false
  private _vip?: string; 
  public get vip() {
    return this.getStringAttribute('vip');
  }
  public set vip(value: string) {
    this._vip = value;
  }
  public resetVip() {
    this._vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vport - computed: false, optional: true, required: false
  private _vport?: string; 
  public get vport() {
    return this.getStringAttribute('vport');
  }
  public set vport(value: string) {
    this._vport = value;
  }
  public resetVport() {
    this._vport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vportInput() {
    return this._vport;
  }

  // service_type - computed: false, optional: false, required: true
  private _serviceType = new BiDatasourceCloudServiceTypeOutputReference(this, "service_type");
  public get serviceType() {
    return this._serviceType;
  }
  public putServiceType(value: BiDatasourceCloudServiceType) {
    this._serviceType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      charset: cdktf.stringToTerraform(this._charset),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      data_origin: cdktf.stringToTerraform(this._dataOrigin),
      data_origin_datasource_id: cdktf.stringToTerraform(this._dataOriginDatasourceId),
      data_origin_project_id: cdktf.stringToTerraform(this._dataOriginProjectId),
      db_name: cdktf.stringToTerraform(this._dbName),
      db_pwd: cdktf.stringToTerraform(this._dbPwd),
      db_type: cdktf.stringToTerraform(this._dbType),
      db_user: cdktf.stringToTerraform(this._dbUser),
      extra_param: cdktf.stringToTerraform(this._extraParam),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      region_id: cdktf.stringToTerraform(this._regionId),
      source_name: cdktf.stringToTerraform(this._sourceName),
      uniq_vpc_id: cdktf.stringToTerraform(this._uniqVpcId),
      vip: cdktf.stringToTerraform(this._vip),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vport: cdktf.stringToTerraform(this._vport),
      service_type: biDatasourceCloudServiceTypeToTerraform(this._serviceType.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      charset: {
        value: cdktf.stringToHclTerraform(this._charset),
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
      db_name: {
        value: cdktf.stringToHclTerraform(this._dbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      extra_param: {
        value: cdktf.stringToHclTerraform(this._extraParam),
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
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
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
      vip: {
        value: cdktf.stringToHclTerraform(this._vip),
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
      vport: {
        value: cdktf.stringToHclTerraform(this._vport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_type: {
        value: biDatasourceCloudServiceTypeToHclTerraform(this._serviceType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BiDatasourceCloudServiceTypeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
