// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_backend_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackSlbBackendServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_backend_server#delete_protection_validation ApsarastackSlbBackendServer#delete_protection_validation}
  */
  readonly deleteProtectionValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_backend_server#id ApsarastackSlbBackendServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_backend_server#load_balancer_id ApsarastackSlbBackendServer#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * backend_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_backend_server#backend_servers ApsarastackSlbBackendServer#backend_servers}
  */
  readonly backendServers?: ApsarastackSlbBackendServerBackendServers[] | cdktf.IResolvable;
}
export interface ApsarastackSlbBackendServerBackendServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_backend_server#server_id ApsarastackSlbBackendServer#server_id}
  */
  readonly serverId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_backend_server#weight ApsarastackSlbBackendServer#weight}
  */
  readonly weight?: number;
}

export function apsarastackSlbBackendServerBackendServersToTerraform(struct?: ApsarastackSlbBackendServerBackendServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_id: cdktf.stringToTerraform(struct!.serverId),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function apsarastackSlbBackendServerBackendServersToHclTerraform(struct?: ApsarastackSlbBackendServerBackendServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_id: {
      value: cdktf.stringToHclTerraform(struct!.serverId),
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

export class ApsarastackSlbBackendServerBackendServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackSlbBackendServerBackendServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverId = this._serverId;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackSlbBackendServerBackendServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverId = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverId = value.serverId;
      this._weight = value.weight;
    }
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
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

export class ApsarastackSlbBackendServerBackendServersList extends cdktf.ComplexList {
  public internalValue? : ApsarastackSlbBackendServerBackendServers[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackSlbBackendServerBackendServersOutputReference {
    return new ApsarastackSlbBackendServerBackendServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_backend_server apsarastack_slb_backend_server}
*/
export class ApsarastackSlbBackendServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_slb_backend_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackSlbBackendServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackSlbBackendServer to import
  * @param importFromId The id of the existing ApsarastackSlbBackendServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_backend_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackSlbBackendServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_slb_backend_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_backend_server apsarastack_slb_backend_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackSlbBackendServerConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackSlbBackendServerConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_slb_backend_server',
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
    this._backendServers.internalValue = config.backendServers;
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

  // backend_servers - computed: false, optional: true, required: false
  private _backendServers = new ApsarastackSlbBackendServerBackendServersList(this, "backend_servers", true);
  public get backendServers() {
    return this._backendServers;
  }
  public putBackendServers(value: ApsarastackSlbBackendServerBackendServers[] | cdktf.IResolvable) {
    this._backendServers.internalValue = value;
  }
  public resetBackendServers() {
    this._backendServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServersInput() {
    return this._backendServers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_protection_validation: cdktf.booleanToTerraform(this._deleteProtectionValidation),
      id: cdktf.stringToTerraform(this._id),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      backend_servers: cdktf.listMapper(apsarastackSlbBackendServerBackendServersToTerraform, true)(this._backendServers.internalValue),
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
      backend_servers: {
        value: cdktf.listMapperHcl(apsarastackSlbBackendServerBackendServersToHclTerraform, true)(this._backendServers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackSlbBackendServerBackendServersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
