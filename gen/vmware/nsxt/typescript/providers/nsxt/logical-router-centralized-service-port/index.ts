// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/logical_router_centralized_service_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicalRouterCentralizedServicePortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/logical_router_centralized_service_port#description LogicalRouterCentralizedServicePort#description}
  */
  readonly description?: string;
  /**
  * The display name of this resource. Defaults to ID if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/logical_router_centralized_service_port#display_name LogicalRouterCentralizedServicePort#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/logical_router_centralized_service_port#id LogicalRouterCentralizedServicePort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Logical router port subnet (ipAddress / prefix length)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/logical_router_centralized_service_port#ip_address LogicalRouterCentralizedServicePort#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Identifier for port on logical switch to connect to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/logical_router_centralized_service_port#linked_logical_switch_port_id LogicalRouterCentralizedServicePort#linked_logical_switch_port_id}
  */
  readonly linkedLogicalSwitchPortId: string;
  /**
  * Identifier for logical router on which this port is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/logical_router_centralized_service_port#logical_router_id LogicalRouterCentralizedServicePort#logical_router_id}
  */
  readonly logicalRouterId: string;
  /**
  * Unicast Reverse Path Forwarding mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/logical_router_centralized_service_port#urpf_mode LogicalRouterCentralizedServicePort#urpf_mode}
  */
  readonly urpfMode?: string;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/logical_router_centralized_service_port#tag LogicalRouterCentralizedServicePort#tag}
  */
  readonly tag?: LogicalRouterCentralizedServicePortTag[] | cdktf.IResolvable;
}
export interface LogicalRouterCentralizedServicePortTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/logical_router_centralized_service_port#scope LogicalRouterCentralizedServicePort#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/logical_router_centralized_service_port#tag LogicalRouterCentralizedServicePort#tag}
  */
  readonly tag?: string;
}

export function logicalRouterCentralizedServicePortTagToTerraform(struct?: LogicalRouterCentralizedServicePortTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function logicalRouterCentralizedServicePortTagToHclTerraform(struct?: LogicalRouterCentralizedServicePortTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterCentralizedServicePortTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterCentralizedServicePortTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterCentralizedServicePortTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class LogicalRouterCentralizedServicePortTagList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterCentralizedServicePortTag[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterCentralizedServicePortTagOutputReference {
    return new LogicalRouterCentralizedServicePortTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/logical_router_centralized_service_port nsxt_logical_router_centralized_service_port}
*/
export class LogicalRouterCentralizedServicePort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_logical_router_centralized_service_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogicalRouterCentralizedServicePort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogicalRouterCentralizedServicePort to import
  * @param importFromId The id of the existing LogicalRouterCentralizedServicePort that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/logical_router_centralized_service_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogicalRouterCentralizedServicePort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_logical_router_centralized_service_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/logical_router_centralized_service_port nsxt_logical_router_centralized_service_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicalRouterCentralizedServicePortConfig
  */
  public constructor(scope: Construct, id: string, config: LogicalRouterCentralizedServicePortConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_logical_router_centralized_service_port',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.11.0',
        providerVersionConstraint: '3.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._linkedLogicalSwitchPortId = config.linkedLogicalSwitchPortId;
    this._logicalRouterId = config.logicalRouterId;
    this._urpfMode = config.urpfMode;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // linked_logical_switch_port_id - computed: false, optional: false, required: true
  private _linkedLogicalSwitchPortId?: string; 
  public get linkedLogicalSwitchPortId() {
    return this.getStringAttribute('linked_logical_switch_port_id');
  }
  public set linkedLogicalSwitchPortId(value: string) {
    this._linkedLogicalSwitchPortId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedLogicalSwitchPortIdInput() {
    return this._linkedLogicalSwitchPortId;
  }

  // logical_router_id - computed: false, optional: false, required: true
  private _logicalRouterId?: string; 
  public get logicalRouterId() {
    return this.getStringAttribute('logical_router_id');
  }
  public set logicalRouterId(value: string) {
    this._logicalRouterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalRouterIdInput() {
    return this._logicalRouterId;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // urpf_mode - computed: false, optional: true, required: false
  private _urpfMode?: string; 
  public get urpfMode() {
    return this.getStringAttribute('urpf_mode');
  }
  public set urpfMode(value: string) {
    this._urpfMode = value;
  }
  public resetUrpfMode() {
    this._urpfMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urpfModeInput() {
    return this._urpfMode;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new LogicalRouterCentralizedServicePortTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: LogicalRouterCentralizedServicePortTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      linked_logical_switch_port_id: cdktf.stringToTerraform(this._linkedLogicalSwitchPortId),
      logical_router_id: cdktf.stringToTerraform(this._logicalRouterId),
      urpf_mode: cdktf.stringToTerraform(this._urpfMode),
      tag: cdktf.listMapper(logicalRouterCentralizedServicePortTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linked_logical_switch_port_id: {
        value: cdktf.stringToHclTerraform(this._linkedLogicalSwitchPortId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logical_router_id: {
        value: cdktf.stringToHclTerraform(this._logicalRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      urpf_mode: {
        value: cdktf.stringToHclTerraform(this._urpfMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.listMapperHcl(logicalRouterCentralizedServicePortTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LogicalRouterCentralizedServicePortTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
