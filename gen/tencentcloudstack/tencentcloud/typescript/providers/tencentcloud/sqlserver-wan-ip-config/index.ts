// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_wan_ip_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlserverWanIpConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to open wan ip, true: enable; false: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_wan_ip_config#enable_wan_ip SqlserverWanIpConfig#enable_wan_ip}
  */
  readonly enableWanIp: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_wan_ip_config#id SqlserverWanIpConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_wan_ip_config#instance_id SqlserverWanIpConfig#instance_id}
  */
  readonly instanceId: string;
  /**
  * Read only group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_wan_ip_config#ro_group_id SqlserverWanIpConfig#ro_group_id}
  */
  readonly roGroupId?: string;
}
export interface SqlserverWanIpConfigRoGroup {
}

export function sqlserverWanIpConfigRoGroupToTerraform(struct?: SqlserverWanIpConfigRoGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sqlserverWanIpConfigRoGroupToHclTerraform(struct?: SqlserverWanIpConfigRoGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SqlserverWanIpConfigRoGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SqlserverWanIpConfigRoGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlserverWanIpConfigRoGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_pod_domain - computed: true, optional: false, required: false
  public get dnsPodDomain() {
    return this.getStringAttribute('dns_pod_domain');
  }

  // tgw_wan_vport - computed: true, optional: false, required: false
  public get tgwWanVport() {
    return this.getNumberAttribute('tgw_wan_vport');
  }
}

export class SqlserverWanIpConfigRoGroupList extends cdktf.ComplexList {

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
  public get(index: number): SqlserverWanIpConfigRoGroupOutputReference {
    return new SqlserverWanIpConfigRoGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_wan_ip_config tencentcloud_sqlserver_wan_ip_config}
*/
export class SqlserverWanIpConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sqlserver_wan_ip_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlserverWanIpConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlserverWanIpConfig to import
  * @param importFromId The id of the existing SqlserverWanIpConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_wan_ip_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlserverWanIpConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sqlserver_wan_ip_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_wan_ip_config tencentcloud_sqlserver_wan_ip_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlserverWanIpConfigConfig
  */
  public constructor(scope: Construct, id: string, config: SqlserverWanIpConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sqlserver_wan_ip_config',
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
    this._enableWanIp = config.enableWanIp;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._roGroupId = config.roGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_pod_domain - computed: true, optional: false, required: false
  public get dnsPodDomain() {
    return this.getStringAttribute('dns_pod_domain');
  }

  // enable_wan_ip - computed: false, optional: false, required: true
  private _enableWanIp?: boolean | cdktf.IResolvable; 
  public get enableWanIp() {
    return this.getBooleanAttribute('enable_wan_ip');
  }
  public set enableWanIp(value: boolean | cdktf.IResolvable) {
    this._enableWanIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWanIpInput() {
    return this._enableWanIp;
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

  // ro_group - computed: true, optional: false, required: false
  private _roGroup = new SqlserverWanIpConfigRoGroupList(this, "ro_group", true);
  public get roGroup() {
    return this._roGroup;
  }

  // ro_group_id - computed: false, optional: true, required: false
  private _roGroupId?: string; 
  public get roGroupId() {
    return this.getStringAttribute('ro_group_id');
  }
  public set roGroupId(value: string) {
    this._roGroupId = value;
  }
  public resetRoGroupId() {
    this._roGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roGroupIdInput() {
    return this._roGroupId;
  }

  // tgw_wan_vport - computed: true, optional: false, required: false
  public get tgwWanVport() {
    return this.getNumberAttribute('tgw_wan_vport');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_wan_ip: cdktf.booleanToTerraform(this._enableWanIp),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      ro_group_id: cdktf.stringToTerraform(this._roGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_wan_ip: {
        value: cdktf.booleanToHclTerraform(this._enableWanIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      ro_group_id: {
        value: cdktf.stringToHclTerraform(this._roGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
