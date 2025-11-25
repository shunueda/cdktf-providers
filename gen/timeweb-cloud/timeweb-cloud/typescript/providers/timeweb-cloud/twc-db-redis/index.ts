// https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_db_redis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TwcDbRedisConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_db_redis#id TwcDbRedis#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Flag that shows allowability database only by external IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_db_redis#is_external_ip TwcDbRedis#is_external_ip}
  */
  readonly isExternalIp?: boolean | cdktf.IResolvable;
  /**
  * Login for database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_db_redis#login TwcDbRedis#login}
  */
  readonly login?: string;
  /**
  * Name for database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_db_redis#name TwcDbRedis#name}
  */
  readonly name: string;
  /**
  * Password for database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_db_redis#password TwcDbRedis#password}
  */
  readonly password: string;
  /**
  * Preset ID for database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_db_redis#preset_id TwcDbRedis#preset_id}
  */
  readonly presetId: number;
  /**
  * Project ID for created DB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_db_redis#project_id TwcDbRedis#project_id}
  */
  readonly projectId?: number;
  /**
  * local_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_db_redis#local_network TwcDbRedis#local_network}
  */
  readonly localNetwork?: TwcDbRedisLocalNetwork;
}
export interface TwcDbRedisDiskStats {
}

export function twcDbRedisDiskStatsToTerraform(struct?: TwcDbRedisDiskStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function twcDbRedisDiskStatsToHclTerraform(struct?: TwcDbRedisDiskStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TwcDbRedisDiskStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TwcDbRedisDiskStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TwcDbRedisDiskStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getNumberAttribute('used');
  }
}

export class TwcDbRedisDiskStatsList extends cdktf.ComplexList {

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
  public get(index: number): TwcDbRedisDiskStatsOutputReference {
    return new TwcDbRedisDiskStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TwcDbRedisLocalNetwork {
  /**
  * ID of VPC for assign address from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_db_redis#id TwcDbRedis#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Address in VPC subnetwork for manual assign
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_db_redis#ip TwcDbRedis#ip}
  */
  readonly ip?: string;
}

export function twcDbRedisLocalNetworkToTerraform(struct?: TwcDbRedisLocalNetworkOutputReference | TwcDbRedisLocalNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function twcDbRedisLocalNetworkToHclTerraform(struct?: TwcDbRedisLocalNetworkOutputReference | TwcDbRedisLocalNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TwcDbRedisLocalNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TwcDbRedisLocalNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TwcDbRedisLocalNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._ip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._ip = value.ip;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_db_redis twc_db_redis}
*/
export class TwcDbRedis extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twc_db_redis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TwcDbRedis resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TwcDbRedis to import
  * @param importFromId The id of the existing TwcDbRedis that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_db_redis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TwcDbRedis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twc_db_redis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_db_redis twc_db_redis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TwcDbRedisConfig
  */
  public constructor(scope: Construct, id: string, config: TwcDbRedisConfig) {
    super(scope, id, {
      terraformResourceType: 'twc_db_redis',
      terraformGeneratorMetadata: {
        providerName: 'timeweb-cloud',
        providerVersion: '1.6.7',
        providerVersionConstraint: '1.6.7'
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
    this._isExternalIp = config.isExternalIp;
    this._login = config.login;
    this._name = config.name;
    this._password = config.password;
    this._presetId = config.presetId;
    this._projectId = config.projectId;
    this._localNetwork.internalValue = config.localNetwork;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disk_stats - computed: true, optional: false, required: false
  private _diskStats = new TwcDbRedisDiskStatsList(this, "disk_stats", false);
  public get diskStats() {
    return this._diskStats;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
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

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // is_external_ip - computed: true, optional: true, required: false
  private _isExternalIp?: boolean | cdktf.IResolvable; 
  public get isExternalIp() {
    return this.getBooleanAttribute('is_external_ip');
  }
  public set isExternalIp(value: boolean | cdktf.IResolvable) {
    this._isExternalIp = value;
  }
  public resetIsExternalIp() {
    this._isExternalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isExternalIpInput() {
    return this._isExternalIp;
  }

  // local_ip - computed: true, optional: false, required: false
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }

  // login - computed: false, optional: true, required: false
  private _login?: string; 
  public get login() {
    return this.getStringAttribute('login');
  }
  public set login(value: string) {
    this._login = value;
  }
  public resetLogin() {
    this._login = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // preset_id - computed: false, optional: false, required: true
  private _presetId?: number; 
  public get presetId() {
    return this.getNumberAttribute('preset_id');
  }
  public set presetId(value: number) {
    this._presetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get presetIdInput() {
    return this._presetId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // local_network - computed: false, optional: true, required: false
  private _localNetwork = new TwcDbRedisLocalNetworkOutputReference(this, "local_network");
  public get localNetwork() {
    return this._localNetwork;
  }
  public putLocalNetwork(value: TwcDbRedisLocalNetwork) {
    this._localNetwork.internalValue = value;
  }
  public resetLocalNetwork() {
    this._localNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNetworkInput() {
    return this._localNetwork.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      is_external_ip: cdktf.booleanToTerraform(this._isExternalIp),
      login: cdktf.stringToTerraform(this._login),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      preset_id: cdktf.numberToTerraform(this._presetId),
      project_id: cdktf.numberToTerraform(this._projectId),
      local_network: twcDbRedisLocalNetworkToTerraform(this._localNetwork.internalValue),
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
      is_external_ip: {
        value: cdktf.booleanToHclTerraform(this._isExternalIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      login: {
        value: cdktf.stringToHclTerraform(this._login),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preset_id: {
        value: cdktf.numberToHclTerraform(this._presetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_network: {
        value: twcDbRedisLocalNetworkToHclTerraform(this._localNetwork.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TwcDbRedisLocalNetworkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
