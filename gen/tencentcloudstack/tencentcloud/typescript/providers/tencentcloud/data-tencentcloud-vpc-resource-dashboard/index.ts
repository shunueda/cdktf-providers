// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/vpc_resource_dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudVpcResourceDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/vpc_resource_dashboard#id DataTencentcloudVpcResourceDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/vpc_resource_dashboard#result_output_file DataTencentcloudVpcResourceDashboard#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Vpc instance ID, e.g. vpc-f1xjkw1b.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/vpc_resource_dashboard#vpc_ids DataTencentcloudVpcResourceDashboard#vpc_ids}
  */
  readonly vpcIds: string[];
}
export interface DataTencentcloudVpcResourceDashboardResourceDashboardSet {
}

export function dataTencentcloudVpcResourceDashboardResourceDashboardSetToTerraform(struct?: DataTencentcloudVpcResourceDashboardResourceDashboardSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVpcResourceDashboardResourceDashboardSetToHclTerraform(struct?: DataTencentcloudVpcResourceDashboardResourceDashboardSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVpcResourceDashboardResourceDashboardSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVpcResourceDashboardResourceDashboardSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVpcResourceDashboardResourceDashboardSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cdb - computed: true, optional: false, required: false
  public get cdb() {
    return this.getNumberAttribute('cdb');
  }

  // cfs - computed: true, optional: false, required: false
  public get cfs() {
    return this.getNumberAttribute('cfs');
  }

  // ckafka - computed: true, optional: false, required: false
  public get ckafka() {
    return this.getNumberAttribute('ckafka');
  }

  // classic_link - computed: true, optional: false, required: false
  public get classicLink() {
    return this.getNumberAttribute('classic_link');
  }

  // cmem - computed: true, optional: false, required: false
  public get cmem() {
    return this.getNumberAttribute('cmem');
  }

  // cnas - computed: true, optional: false, required: false
  public get cnas() {
    return this.getNumberAttribute('cnas');
  }

  // cts_db - computed: true, optional: false, required: false
  public get ctsDb() {
    return this.getNumberAttribute('cts_db');
  }

  // cvm - computed: true, optional: false, required: false
  public get cvm() {
    return this.getNumberAttribute('cvm');
  }

  // cynos_db_mysql - computed: true, optional: false, required: false
  public get cynosDbMysql() {
    return this.getNumberAttribute('cynos_db_mysql');
  }

  // cynos_db_postgres - computed: true, optional: false, required: false
  public get cynosDbPostgres() {
    return this.getNumberAttribute('cynos_db_postgres');
  }

  // db_audit - computed: true, optional: false, required: false
  public get dbAudit() {
    return this.getNumberAttribute('db_audit');
  }

  // dcdb - computed: true, optional: false, required: false
  public get dcdb() {
    return this.getNumberAttribute('dcdb');
  }

  // dcg - computed: true, optional: false, required: false
  public get dcg() {
    return this.getNumberAttribute('dcg');
  }

  // elastic_search - computed: true, optional: false, required: false
  public get elasticSearch() {
    return this.getNumberAttribute('elastic_search');
  }

  // emr - computed: true, optional: false, required: false
  public get emr() {
    return this.getNumberAttribute('emr');
  }

  // flow_log - computed: true, optional: false, required: false
  public get flowLog() {
    return this.getNumberAttribute('flow_log');
  }

  // greenplumn - computed: true, optional: false, required: false
  public get greenplumn() {
    return this.getNumberAttribute('greenplumn');
  }

  // grocery - computed: true, optional: false, required: false
  public get grocery() {
    return this.getNumberAttribute('grocery');
  }

  // hsm - computed: true, optional: false, required: false
  public get hsm() {
    return this.getNumberAttribute('hsm');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getNumberAttribute('ip');
  }

  // itop - computed: true, optional: false, required: false
  public get itop() {
    return this.getNumberAttribute('itop');
  }

  // lb - computed: true, optional: false, required: false
  public get lb() {
    return this.getNumberAttribute('lb');
  }

  // maria_db - computed: true, optional: false, required: false
  public get mariaDb() {
    return this.getNumberAttribute('maria_db');
  }

  // mongo_db - computed: true, optional: false, required: false
  public get mongoDb() {
    return this.getNumberAttribute('mongo_db');
  }

  // nas - computed: true, optional: false, required: false
  public get nas() {
    return this.getNumberAttribute('nas');
  }

  // nat - computed: true, optional: false, required: false
  public get nat() {
    return this.getNumberAttribute('nat');
  }

  // network_acl - computed: true, optional: false, required: false
  public get networkAcl() {
    return this.getNumberAttribute('network_acl');
  }

  // network_detect - computed: true, optional: false, required: false
  public get networkDetect() {
    return this.getNumberAttribute('network_detect');
  }

  // oracle - computed: true, optional: false, required: false
  public get oracle() {
    return this.getNumberAttribute('oracle');
  }

  // pcx - computed: true, optional: false, required: false
  public get pcx() {
    return this.getNumberAttribute('pcx');
  }

  // postgres - computed: true, optional: false, required: false
  public get postgres() {
    return this.getNumberAttribute('postgres');
  }

  // redis - computed: true, optional: false, required: false
  public get redis() {
    return this.getNumberAttribute('redis');
  }

  // route_table - computed: true, optional: false, required: false
  public get routeTable() {
    return this.getNumberAttribute('route_table');
  }

  // seal - computed: true, optional: false, required: false
  public get seal() {
    return this.getNumberAttribute('seal');
  }

  // sql_server - computed: true, optional: false, required: false
  public get sqlServer() {
    return this.getNumberAttribute('sql_server');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getNumberAttribute('subnet');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // t_baas - computed: true, optional: false, required: false
  public get tBaas() {
    return this.getNumberAttribute('t_baas');
  }

  // tcaplus - computed: true, optional: false, required: false
  public get tcaplus() {
    return this.getNumberAttribute('tcaplus');
  }

  // ti_db - computed: true, optional: false, required: false
  public get tiDb() {
    return this.getNumberAttribute('ti_db');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpngw - computed: true, optional: false, required: false
  public get vpngw() {
    return this.getNumberAttribute('vpngw');
  }
}

export class DataTencentcloudVpcResourceDashboardResourceDashboardSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVpcResourceDashboardResourceDashboardSetOutputReference {
    return new DataTencentcloudVpcResourceDashboardResourceDashboardSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/vpc_resource_dashboard tencentcloud_vpc_resource_dashboard}
*/
export class DataTencentcloudVpcResourceDashboard extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_resource_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudVpcResourceDashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudVpcResourceDashboard to import
  * @param importFromId The id of the existing DataTencentcloudVpcResourceDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/vpc_resource_dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudVpcResourceDashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_resource_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/vpc_resource_dashboard tencentcloud_vpc_resource_dashboard} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudVpcResourceDashboardConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudVpcResourceDashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_resource_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
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
    this._resultOutputFile = config.resultOutputFile;
    this._vpcIds = config.vpcIds;
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

  // resource_dashboard_set - computed: true, optional: false, required: false
  private _resourceDashboardSet = new DataTencentcloudVpcResourceDashboardResourceDashboardSetList(this, "resource_dashboard_set", false);
  public get resourceDashboardSet() {
    return this._resourceDashboardSet;
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

  // vpc_ids - computed: false, optional: false, required: true
  private _vpcIds?: string[]; 
  public get vpcIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_ids'));
  }
  public set vpcIds(value: string[]) {
    this._vpcIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdsInput() {
    return this._vpcIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      vpc_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcIds),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpcIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
