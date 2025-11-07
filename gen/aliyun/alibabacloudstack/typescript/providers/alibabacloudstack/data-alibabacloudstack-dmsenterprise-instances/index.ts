// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/dmsenterprise_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackDmsenterpriseInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/dmsenterprise_instances#env_type DataAlibabacloudstackDmsenterpriseInstances#env_type}
  */
  readonly envType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/dmsenterprise_instances#id DataAlibabacloudstackDmsenterpriseInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/dmsenterprise_instances#instance_alias_regex DataAlibabacloudstackDmsenterpriseInstances#instance_alias_regex}
  */
  readonly instanceAliasRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/dmsenterprise_instances#instance_source DataAlibabacloudstackDmsenterpriseInstances#instance_source}
  */
  readonly instanceSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/dmsenterprise_instances#instance_type DataAlibabacloudstackDmsenterpriseInstances#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/dmsenterprise_instances#name_regex DataAlibabacloudstackDmsenterpriseInstances#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/dmsenterprise_instances#net_type DataAlibabacloudstackDmsenterpriseInstances#net_type}
  */
  readonly netType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/dmsenterprise_instances#output_file DataAlibabacloudstackDmsenterpriseInstances#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/dmsenterprise_instances#search_key DataAlibabacloudstackDmsenterpriseInstances#search_key}
  */
  readonly searchKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/dmsenterprise_instances#status DataAlibabacloudstackDmsenterpriseInstances#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/dmsenterprise_instances#tid DataAlibabacloudstackDmsenterpriseInstances#tid}
  */
  readonly tid?: number;
}
export interface DataAlibabacloudstackDmsenterpriseInstancesInstances {
}

export function dataAlibabacloudstackDmsenterpriseInstancesInstancesToTerraform(struct?: DataAlibabacloudstackDmsenterpriseInstancesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackDmsenterpriseInstancesInstancesToHclTerraform(struct?: DataAlibabacloudstackDmsenterpriseInstancesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackDmsenterpriseInstancesInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackDmsenterpriseInstancesInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackDmsenterpriseInstancesInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_link_name - computed: true, optional: false, required: false
  public get dataLinkName() {
    return this.getStringAttribute('data_link_name');
  }

  // database_password - computed: true, optional: false, required: false
  public get databasePassword() {
    return this.getStringAttribute('database_password');
  }

  // database_user - computed: true, optional: false, required: false
  public get databaseUser() {
    return this.getStringAttribute('database_user');
  }

  // dba_id - computed: true, optional: false, required: false
  public get dbaId() {
    return this.getStringAttribute('dba_id');
  }

  // dba_nick_name - computed: true, optional: false, required: false
  public get dbaNickName() {
    return this.getStringAttribute('dba_nick_name');
  }

  // ddl_online - computed: true, optional: false, required: false
  public get ddlOnline() {
    return this.getNumberAttribute('ddl_online');
  }

  // ecs_instance_id - computed: true, optional: false, required: false
  public get ecsInstanceId() {
    return this.getStringAttribute('ecs_instance_id');
  }

  // ecs_region - computed: true, optional: false, required: false
  public get ecsRegion() {
    return this.getStringAttribute('ecs_region');
  }

  // env_type - computed: true, optional: false, required: false
  public get envType() {
    return this.getStringAttribute('env_type');
  }

  // export_timeout - computed: true, optional: false, required: false
  public get exportTimeout() {
    return this.getNumberAttribute('export_timeout');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_alias - computed: true, optional: false, required: false
  public get instanceAlias() {
    return this.getStringAttribute('instance_alias');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // instance_source - computed: true, optional: false, required: false
  public get instanceSource() {
    return this.getStringAttribute('instance_source');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // query_timeout - computed: true, optional: false, required: false
  public get queryTimeout() {
    return this.getNumberAttribute('query_timeout');
  }

  // safe_rule_id - computed: true, optional: false, required: false
  public get safeRuleId() {
    return this.getStringAttribute('safe_rule_id');
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // use_dsql - computed: true, optional: false, required: false
  public get useDsql() {
    return this.getNumberAttribute('use_dsql');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataAlibabacloudstackDmsenterpriseInstancesInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackDmsenterpriseInstancesInstancesOutputReference {
    return new DataAlibabacloudstackDmsenterpriseInstancesInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/dmsenterprise_instances alibabacloudstack_dmsenterprise_instances}
*/
export class DataAlibabacloudstackDmsenterpriseInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_dmsenterprise_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackDmsenterpriseInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackDmsenterpriseInstances to import
  * @param importFromId The id of the existing DataAlibabacloudstackDmsenterpriseInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/dmsenterprise_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackDmsenterpriseInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_dmsenterprise_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/dmsenterprise_instances alibabacloudstack_dmsenterprise_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackDmsenterpriseInstancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackDmsenterpriseInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_dmsenterprise_instances',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._envType = config.envType;
    this._id = config.id;
    this._instanceAliasRegex = config.instanceAliasRegex;
    this._instanceSource = config.instanceSource;
    this._instanceType = config.instanceType;
    this._nameRegex = config.nameRegex;
    this._netType = config.netType;
    this._outputFile = config.outputFile;
    this._searchKey = config.searchKey;
    this._status = config.status;
    this._tid = config.tid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // env_type - computed: false, optional: true, required: false
  private _envType?: string; 
  public get envType() {
    return this.getStringAttribute('env_type');
  }
  public set envType(value: string) {
    this._envType = value;
  }
  public resetEnvType() {
    this._envType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envTypeInput() {
    return this._envType;
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // instance_alias_regex - computed: false, optional: true, required: false
  private _instanceAliasRegex?: string; 
  public get instanceAliasRegex() {
    return this.getStringAttribute('instance_alias_regex');
  }
  public set instanceAliasRegex(value: string) {
    this._instanceAliasRegex = value;
  }
  public resetInstanceAliasRegex() {
    this._instanceAliasRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceAliasRegexInput() {
    return this._instanceAliasRegex;
  }

  // instance_source - computed: false, optional: true, required: false
  private _instanceSource?: string; 
  public get instanceSource() {
    return this.getStringAttribute('instance_source');
  }
  public set instanceSource(value: string) {
    this._instanceSource = value;
  }
  public resetInstanceSource() {
    this._instanceSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSourceInput() {
    return this._instanceSource;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // instances - computed: true, optional: false, required: false
  private _instances = new DataAlibabacloudstackDmsenterpriseInstancesInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // net_type - computed: false, optional: true, required: false
  private _netType?: string; 
  public get netType() {
    return this.getStringAttribute('net_type');
  }
  public set netType(value: string) {
    this._netType = value;
  }
  public resetNetType() {
    this._netType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netTypeInput() {
    return this._netType;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // search_key - computed: false, optional: true, required: false
  private _searchKey?: string; 
  public get searchKey() {
    return this.getStringAttribute('search_key');
  }
  public set searchKey(value: string) {
    this._searchKey = value;
  }
  public resetSearchKey() {
    this._searchKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchKeyInput() {
    return this._searchKey;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tid - computed: false, optional: true, required: false
  private _tid?: number; 
  public get tid() {
    return this.getNumberAttribute('tid');
  }
  public set tid(value: number) {
    this._tid = value;
  }
  public resetTid() {
    this._tid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tidInput() {
    return this._tid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      env_type: cdktf.stringToTerraform(this._envType),
      id: cdktf.stringToTerraform(this._id),
      instance_alias_regex: cdktf.stringToTerraform(this._instanceAliasRegex),
      instance_source: cdktf.stringToTerraform(this._instanceSource),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      net_type: cdktf.stringToTerraform(this._netType),
      output_file: cdktf.stringToTerraform(this._outputFile),
      search_key: cdktf.stringToTerraform(this._searchKey),
      status: cdktf.stringToTerraform(this._status),
      tid: cdktf.numberToTerraform(this._tid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      env_type: {
        value: cdktf.stringToHclTerraform(this._envType),
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
      instance_alias_regex: {
        value: cdktf.stringToHclTerraform(this._instanceAliasRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_source: {
        value: cdktf.stringToHclTerraform(this._instanceSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net_type: {
        value: cdktf.stringToHclTerraform(this._netType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_key: {
        value: cdktf.stringToHclTerraform(this._searchKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tid: {
        value: cdktf.numberToHclTerraform(this._tid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
