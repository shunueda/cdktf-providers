// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DmsEnterpriseInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#data_link_name DmsEnterpriseInstance#data_link_name}
  */
  readonly dataLinkName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#database_password DmsEnterpriseInstance#database_password}
  */
  readonly databasePassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#database_user DmsEnterpriseInstance#database_user}
  */
  readonly databaseUser: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#dba_id DmsEnterpriseInstance#dba_id}
  */
  readonly dbaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#dba_uid DmsEnterpriseInstance#dba_uid}
  */
  readonly dbaUid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#ddl_online DmsEnterpriseInstance#ddl_online}
  */
  readonly ddlOnline?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#ecs_instance_id DmsEnterpriseInstance#ecs_instance_id}
  */
  readonly ecsInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#ecs_region DmsEnterpriseInstance#ecs_region}
  */
  readonly ecsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#env_type DmsEnterpriseInstance#env_type}
  */
  readonly envType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#export_timeout DmsEnterpriseInstance#export_timeout}
  */
  readonly exportTimeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#host DmsEnterpriseInstance#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#id DmsEnterpriseInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#instance_alias DmsEnterpriseInstance#instance_alias}
  */
  readonly instanceAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#instance_id DmsEnterpriseInstance#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#instance_name DmsEnterpriseInstance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#instance_source DmsEnterpriseInstance#instance_source}
  */
  readonly instanceSource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#instance_type DmsEnterpriseInstance#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#network_type DmsEnterpriseInstance#network_type}
  */
  readonly networkType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#port DmsEnterpriseInstance#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#query_timeout DmsEnterpriseInstance#query_timeout}
  */
  readonly queryTimeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#safe_rule DmsEnterpriseInstance#safe_rule}
  */
  readonly safeRule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#safe_rule_id DmsEnterpriseInstance#safe_rule_id}
  */
  readonly safeRuleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#sid DmsEnterpriseInstance#sid}
  */
  readonly sid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#skip_test DmsEnterpriseInstance#skip_test}
  */
  readonly skipTest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#tid DmsEnterpriseInstance#tid}
  */
  readonly tid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#use_dsql DmsEnterpriseInstance#use_dsql}
  */
  readonly useDsql?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#vpc_id DmsEnterpriseInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#timeouts DmsEnterpriseInstance#timeouts}
  */
  readonly timeouts?: DmsEnterpriseInstanceTimeouts;
}
export interface DmsEnterpriseInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#create DmsEnterpriseInstance#create}
  */
  readonly create?: string;
}

export function dmsEnterpriseInstanceTimeoutsToTerraform(struct?: DmsEnterpriseInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function dmsEnterpriseInstanceTimeoutsToHclTerraform(struct?: DmsEnterpriseInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsEnterpriseInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DmsEnterpriseInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsEnterpriseInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance alibabacloudstack_dms_enterprise_instance}
*/
export class DmsEnterpriseInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_dms_enterprise_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DmsEnterpriseInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DmsEnterpriseInstance to import
  * @param importFromId The id of the existing DmsEnterpriseInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DmsEnterpriseInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_dms_enterprise_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dms_enterprise_instance alibabacloudstack_dms_enterprise_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsEnterpriseInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DmsEnterpriseInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_dms_enterprise_instance',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataLinkName = config.dataLinkName;
    this._databasePassword = config.databasePassword;
    this._databaseUser = config.databaseUser;
    this._dbaId = config.dbaId;
    this._dbaUid = config.dbaUid;
    this._ddlOnline = config.ddlOnline;
    this._ecsInstanceId = config.ecsInstanceId;
    this._ecsRegion = config.ecsRegion;
    this._envType = config.envType;
    this._exportTimeout = config.exportTimeout;
    this._host = config.host;
    this._id = config.id;
    this._instanceAlias = config.instanceAlias;
    this._instanceId = config.instanceId;
    this._instanceName = config.instanceName;
    this._instanceSource = config.instanceSource;
    this._instanceType = config.instanceType;
    this._networkType = config.networkType;
    this._port = config.port;
    this._queryTimeout = config.queryTimeout;
    this._safeRule = config.safeRule;
    this._safeRuleId = config.safeRuleId;
    this._sid = config.sid;
    this._skipTest = config.skipTest;
    this._tid = config.tid;
    this._useDsql = config.useDsql;
    this._vpcId = config.vpcId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_link_name - computed: false, optional: true, required: false
  private _dataLinkName?: string; 
  public get dataLinkName() {
    return this.getStringAttribute('data_link_name');
  }
  public set dataLinkName(value: string) {
    this._dataLinkName = value;
  }
  public resetDataLinkName() {
    this._dataLinkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLinkNameInput() {
    return this._dataLinkName;
  }

  // database_password - computed: false, optional: false, required: true
  private _databasePassword?: string; 
  public get databasePassword() {
    return this.getStringAttribute('database_password');
  }
  public set databasePassword(value: string) {
    this._databasePassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databasePasswordInput() {
    return this._databasePassword;
  }

  // database_user - computed: false, optional: false, required: true
  private _databaseUser?: string; 
  public get databaseUser() {
    return this.getStringAttribute('database_user');
  }
  public set databaseUser(value: string) {
    this._databaseUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseUserInput() {
    return this._databaseUser;
  }

  // dba_id - computed: true, optional: true, required: false
  private _dbaId?: string; 
  public get dbaId() {
    return this.getStringAttribute('dba_id');
  }
  public set dbaId(value: string) {
    this._dbaId = value;
  }
  public resetDbaId() {
    this._dbaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbaIdInput() {
    return this._dbaId;
  }

  // dba_nick_name - computed: true, optional: false, required: false
  public get dbaNickName() {
    return this.getStringAttribute('dba_nick_name');
  }

  // dba_uid - computed: false, optional: false, required: true
  private _dbaUid?: number; 
  public get dbaUid() {
    return this.getNumberAttribute('dba_uid');
  }
  public set dbaUid(value: number) {
    this._dbaUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbaUidInput() {
    return this._dbaUid;
  }

  // ddl_online - computed: false, optional: true, required: false
  private _ddlOnline?: number; 
  public get ddlOnline() {
    return this.getNumberAttribute('ddl_online');
  }
  public set ddlOnline(value: number) {
    this._ddlOnline = value;
  }
  public resetDdlOnline() {
    this._ddlOnline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddlOnlineInput() {
    return this._ddlOnline;
  }

  // ecs_instance_id - computed: true, optional: true, required: false
  private _ecsInstanceId?: string; 
  public get ecsInstanceId() {
    return this.getStringAttribute('ecs_instance_id');
  }
  public set ecsInstanceId(value: string) {
    this._ecsInstanceId = value;
  }
  public resetEcsInstanceId() {
    this._ecsInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsInstanceIdInput() {
    return this._ecsInstanceId;
  }

  // ecs_region - computed: false, optional: true, required: false
  private _ecsRegion?: string; 
  public get ecsRegion() {
    return this.getStringAttribute('ecs_region');
  }
  public set ecsRegion(value: string) {
    this._ecsRegion = value;
  }
  public resetEcsRegion() {
    this._ecsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsRegionInput() {
    return this._ecsRegion;
  }

  // env_type - computed: false, optional: false, required: true
  private _envType?: string; 
  public get envType() {
    return this.getStringAttribute('env_type');
  }
  public set envType(value: string) {
    this._envType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envTypeInput() {
    return this._envType;
  }

  // export_timeout - computed: false, optional: false, required: true
  private _exportTimeout?: number; 
  public get exportTimeout() {
    return this.getNumberAttribute('export_timeout');
  }
  public set exportTimeout(value: number) {
    this._exportTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportTimeoutInput() {
    return this._exportTimeout;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // instance_alias - computed: true, optional: true, required: false
  private _instanceAlias?: string; 
  public get instanceAlias() {
    return this.getStringAttribute('instance_alias');
  }
  public set instanceAlias(value: string) {
    this._instanceAlias = value;
  }
  public resetInstanceAlias() {
    this._instanceAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceAliasInput() {
    return this._instanceAlias;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_name - computed: true, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // instance_source - computed: false, optional: false, required: true
  private _instanceSource?: string; 
  public get instanceSource() {
    return this.getStringAttribute('instance_source');
  }
  public set instanceSource(value: string) {
    this._instanceSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSourceInput() {
    return this._instanceSource;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // network_type - computed: false, optional: false, required: true
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // query_timeout - computed: false, optional: false, required: true
  private _queryTimeout?: number; 
  public get queryTimeout() {
    return this.getNumberAttribute('query_timeout');
  }
  public set queryTimeout(value: number) {
    this._queryTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTimeoutInput() {
    return this._queryTimeout;
  }

  // safe_rule - computed: false, optional: false, required: true
  private _safeRule?: string; 
  public get safeRule() {
    return this.getStringAttribute('safe_rule');
  }
  public set safeRule(value: string) {
    this._safeRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get safeRuleInput() {
    return this._safeRule;
  }

  // safe_rule_id - computed: true, optional: true, required: false
  private _safeRuleId?: string; 
  public get safeRuleId() {
    return this.getStringAttribute('safe_rule_id');
  }
  public set safeRuleId(value: string) {
    this._safeRuleId = value;
  }
  public resetSafeRuleId() {
    this._safeRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeRuleIdInput() {
    return this._safeRuleId;
  }

  // sid - computed: false, optional: true, required: false
  private _sid?: string; 
  public get sid() {
    return this.getStringAttribute('sid');
  }
  public set sid(value: string) {
    this._sid = value;
  }
  public resetSid() {
    this._sid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }

  // skip_test - computed: false, optional: true, required: false
  private _skipTest?: boolean | cdktf.IResolvable; 
  public get skipTest() {
    return this.getBooleanAttribute('skip_test');
  }
  public set skipTest(value: boolean | cdktf.IResolvable) {
    this._skipTest = value;
  }
  public resetSkipTest() {
    this._skipTest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTestInput() {
    return this._skipTest;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // use_dsql - computed: false, optional: true, required: false
  private _useDsql?: number; 
  public get useDsql() {
    return this.getNumberAttribute('use_dsql');
  }
  public set useDsql(value: number) {
    this._useDsql = value;
  }
  public resetUseDsql() {
    this._useDsql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDsqlInput() {
    return this._useDsql;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DmsEnterpriseInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DmsEnterpriseInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_link_name: cdktf.stringToTerraform(this._dataLinkName),
      database_password: cdktf.stringToTerraform(this._databasePassword),
      database_user: cdktf.stringToTerraform(this._databaseUser),
      dba_id: cdktf.stringToTerraform(this._dbaId),
      dba_uid: cdktf.numberToTerraform(this._dbaUid),
      ddl_online: cdktf.numberToTerraform(this._ddlOnline),
      ecs_instance_id: cdktf.stringToTerraform(this._ecsInstanceId),
      ecs_region: cdktf.stringToTerraform(this._ecsRegion),
      env_type: cdktf.stringToTerraform(this._envType),
      export_timeout: cdktf.numberToTerraform(this._exportTimeout),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      instance_alias: cdktf.stringToTerraform(this._instanceAlias),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_source: cdktf.stringToTerraform(this._instanceSource),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      network_type: cdktf.stringToTerraform(this._networkType),
      port: cdktf.numberToTerraform(this._port),
      query_timeout: cdktf.numberToTerraform(this._queryTimeout),
      safe_rule: cdktf.stringToTerraform(this._safeRule),
      safe_rule_id: cdktf.stringToTerraform(this._safeRuleId),
      sid: cdktf.stringToTerraform(this._sid),
      skip_test: cdktf.booleanToTerraform(this._skipTest),
      tid: cdktf.numberToTerraform(this._tid),
      use_dsql: cdktf.numberToTerraform(this._useDsql),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: dmsEnterpriseInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_link_name: {
        value: cdktf.stringToHclTerraform(this._dataLinkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_password: {
        value: cdktf.stringToHclTerraform(this._databasePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_user: {
        value: cdktf.stringToHclTerraform(this._databaseUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dba_id: {
        value: cdktf.stringToHclTerraform(this._dbaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dba_uid: {
        value: cdktf.numberToHclTerraform(this._dbaUid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ddl_online: {
        value: cdktf.numberToHclTerraform(this._ddlOnline),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ecs_instance_id: {
        value: cdktf.stringToHclTerraform(this._ecsInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecs_region: {
        value: cdktf.stringToHclTerraform(this._ecsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env_type: {
        value: cdktf.stringToHclTerraform(this._envType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_timeout: {
        value: cdktf.numberToHclTerraform(this._exportTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      instance_alias: {
        value: cdktf.stringToHclTerraform(this._instanceAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
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
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query_timeout: {
        value: cdktf.numberToHclTerraform(this._queryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      safe_rule: {
        value: cdktf.stringToHclTerraform(this._safeRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      safe_rule_id: {
        value: cdktf.stringToHclTerraform(this._safeRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sid: {
        value: cdktf.stringToHclTerraform(this._sid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_test: {
        value: cdktf.booleanToHclTerraform(this._skipTest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tid: {
        value: cdktf.numberToHclTerraform(this._tid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_dsql: {
        value: cdktf.numberToHclTerraform(this._useDsql),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dmsEnterpriseInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DmsEnterpriseInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
