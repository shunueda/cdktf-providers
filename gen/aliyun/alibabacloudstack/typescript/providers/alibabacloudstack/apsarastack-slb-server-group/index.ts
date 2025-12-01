// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_server_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackSlbServerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_server_group#delete_protection_validation ApsarastackSlbServerGroup#delete_protection_validation}
  */
  readonly deleteProtectionValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_server_group#id ApsarastackSlbServerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_server_group#load_balancer_id ApsarastackSlbServerGroup#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_server_group#name ApsarastackSlbServerGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_server_group#vserver_group_name ApsarastackSlbServerGroup#vserver_group_name}
  */
  readonly vserverGroupName?: string;
  /**
  * servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_server_group#servers ApsarastackSlbServerGroup#servers}
  */
  readonly servers?: ApsarastackSlbServerGroupServers[] | cdktf.IResolvable;
}
export interface ApsarastackSlbServerGroupServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_server_group#port ApsarastackSlbServerGroup#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_server_group#server_ids ApsarastackSlbServerGroup#server_ids}
  */
  readonly serverIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_server_group#type ApsarastackSlbServerGroup#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_server_group#weight ApsarastackSlbServerGroup#weight}
  */
  readonly weight?: number;
}

export function apsarastackSlbServerGroupServersToTerraform(struct?: ApsarastackSlbServerGroupServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    server_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serverIds),
    type: cdktf.stringToTerraform(struct!.type),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function apsarastackSlbServerGroupServersToHclTerraform(struct?: ApsarastackSlbServerGroupServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serverIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackSlbServerGroupServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApsarastackSlbServerGroupServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serverIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIds = this._serverIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackSlbServerGroupServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._serverIds = undefined;
      this._type = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._serverIds = value.serverIds;
      this._type = value.type;
      this._weight = value.weight;
    }
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

  // server_ids - computed: false, optional: false, required: true
  private _serverIds?: string[]; 
  public get serverIds() {
    return cdktf.Fn.tolist(this.getListAttribute('server_ids'));
  }
  public set serverIds(value: string[]) {
    this._serverIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdsInput() {
    return this._serverIds;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ApsarastackSlbServerGroupServersList extends cdktf.ComplexList {
  public internalValue? : ApsarastackSlbServerGroupServers[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackSlbServerGroupServersOutputReference {
    return new ApsarastackSlbServerGroupServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_server_group apsarastack_slb_server_group}
*/
export class ApsarastackSlbServerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_slb_server_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackSlbServerGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackSlbServerGroup to import
  * @param importFromId The id of the existing ApsarastackSlbServerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_server_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackSlbServerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_slb_server_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_server_group apsarastack_slb_server_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackSlbServerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackSlbServerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_slb_server_group',
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
    this._deleteProtectionValidation = config.deleteProtectionValidation;
    this._id = config.id;
    this._loadBalancerId = config.loadBalancerId;
    this._name = config.name;
    this._vserverGroupName = config.vserverGroupName;
    this._servers.internalValue = config.servers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_protection_validation - computed: false, optional: true, required: false
  private _deleteProtectionValidation?: boolean | cdktf.IResolvable; 
  public get deleteProtectionValidation() {
    return this.getBooleanAttribute('delete_protection_validation');
  }
  public set deleteProtectionValidation(value: boolean | cdktf.IResolvable) {
    this._deleteProtectionValidation = value;
  }
  public resetDeleteProtectionValidation() {
    this._deleteProtectionValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionValidationInput() {
    return this._deleteProtectionValidation;
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

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // vserver_group_name - computed: true, optional: true, required: false
  private _vserverGroupName?: string; 
  public get vserverGroupName() {
    return this.getStringAttribute('vserver_group_name');
  }
  public set vserverGroupName(value: string) {
    this._vserverGroupName = value;
  }
  public resetVserverGroupName() {
    this._vserverGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vserverGroupNameInput() {
    return this._vserverGroupName;
  }

  // servers - computed: false, optional: true, required: false
  private _servers = new ApsarastackSlbServerGroupServersList(this, "servers", true);
  public get servers() {
    return this._servers;
  }
  public putServers(value: ApsarastackSlbServerGroupServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_protection_validation: cdktf.booleanToTerraform(this._deleteProtectionValidation),
      id: cdktf.stringToTerraform(this._id),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      name: cdktf.stringToTerraform(this._name),
      vserver_group_name: cdktf.stringToTerraform(this._vserverGroupName),
      servers: cdktf.listMapper(apsarastackSlbServerGroupServersToTerraform, true)(this._servers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_protection_validation: {
        value: cdktf.booleanToHclTerraform(this._deleteProtectionValidation),
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
      load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerId),
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
      vserver_group_name: {
        value: cdktf.stringToHclTerraform(this._vserverGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servers: {
        value: cdktf.listMapperHcl(apsarastackSlbServerGroupServersToHclTerraform, true)(this._servers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackSlbServerGroupServersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
