// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/gaap_rule_real_servers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudGaapRuleRealServersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/gaap_rule_real_servers#id DataTencentcloudGaapRuleRealServers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/gaap_rule_real_servers#result_output_file DataTencentcloudGaapRuleRealServers#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Rule Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/gaap_rule_real_servers#rule_id DataTencentcloudGaapRuleRealServers#rule_id}
  */
  readonly ruleId: string;
}
export interface DataTencentcloudGaapRuleRealServersBindRealServerSet {
}

export function dataTencentcloudGaapRuleRealServersBindRealServerSetToTerraform(struct?: DataTencentcloudGaapRuleRealServersBindRealServerSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudGaapRuleRealServersBindRealServerSetToHclTerraform(struct?: DataTencentcloudGaapRuleRealServersBindRealServerSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudGaapRuleRealServersBindRealServerSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudGaapRuleRealServersBindRealServerSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudGaapRuleRealServersBindRealServerSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // down_ip_list - computed: true, optional: false, required: false
  public get downIpList() {
    return cdktf.Fn.tolist(this.getListAttribute('down_ip_list'));
  }

  // real_server_failover_role - computed: true, optional: false, required: false
  public get realServerFailoverRole() {
    return this.getStringAttribute('real_server_failover_role');
  }

  // real_server_id - computed: true, optional: false, required: false
  public get realServerId() {
    return this.getStringAttribute('real_server_id');
  }

  // real_server_ip - computed: true, optional: false, required: false
  public get realServerIp() {
    return this.getStringAttribute('real_server_ip');
  }

  // real_server_port - computed: true, optional: false, required: false
  public get realServerPort() {
    return this.getNumberAttribute('real_server_port');
  }

  // real_server_status - computed: true, optional: false, required: false
  public get realServerStatus() {
    return this.getNumberAttribute('real_server_status');
  }

  // real_server_weight - computed: true, optional: false, required: false
  public get realServerWeight() {
    return this.getNumberAttribute('real_server_weight');
  }
}

export class DataTencentcloudGaapRuleRealServersBindRealServerSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudGaapRuleRealServersBindRealServerSetOutputReference {
    return new DataTencentcloudGaapRuleRealServersBindRealServerSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudGaapRuleRealServersRealServerSet {
}

export function dataTencentcloudGaapRuleRealServersRealServerSetToTerraform(struct?: DataTencentcloudGaapRuleRealServersRealServerSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudGaapRuleRealServersRealServerSetToHclTerraform(struct?: DataTencentcloudGaapRuleRealServersRealServerSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudGaapRuleRealServersRealServerSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudGaapRuleRealServersRealServerSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudGaapRuleRealServersRealServerSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // in_ban_blacklist - computed: true, optional: false, required: false
  public get inBanBlacklist() {
    return this.getNumberAttribute('in_ban_blacklist');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // real_server_id - computed: true, optional: false, required: false
  public get realServerId() {
    return this.getStringAttribute('real_server_id');
  }

  // real_server_ip - computed: true, optional: false, required: false
  public get realServerIp() {
    return this.getStringAttribute('real_server_ip');
  }

  // real_server_name - computed: true, optional: false, required: false
  public get realServerName() {
    return this.getStringAttribute('real_server_name');
  }
}

export class DataTencentcloudGaapRuleRealServersRealServerSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudGaapRuleRealServersRealServerSetOutputReference {
    return new DataTencentcloudGaapRuleRealServersRealServerSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/gaap_rule_real_servers tencentcloud_gaap_rule_real_servers}
*/
export class DataTencentcloudGaapRuleRealServers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_gaap_rule_real_servers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudGaapRuleRealServers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudGaapRuleRealServers to import
  * @param importFromId The id of the existing DataTencentcloudGaapRuleRealServers that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/gaap_rule_real_servers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudGaapRuleRealServers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_gaap_rule_real_servers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/gaap_rule_real_servers tencentcloud_gaap_rule_real_servers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudGaapRuleRealServersConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudGaapRuleRealServersConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_gaap_rule_real_servers',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
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
    this._ruleId = config.ruleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bind_real_server_set - computed: true, optional: false, required: false
  private _bindRealServerSet = new DataTencentcloudGaapRuleRealServersBindRealServerSetList(this, "bind_real_server_set", false);
  public get bindRealServerSet() {
    return this._bindRealServerSet;
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

  // real_server_set - computed: true, optional: false, required: false
  private _realServerSet = new DataTencentcloudGaapRuleRealServersRealServerSetList(this, "real_server_set", false);
  public get realServerSet() {
    return this._realServerSet;
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

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      rule_id: cdktf.stringToTerraform(this._ruleId),
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
      rule_id: {
        value: cdktf.stringToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
