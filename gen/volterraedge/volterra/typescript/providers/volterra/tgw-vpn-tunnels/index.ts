// https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_vpn_tunnels
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TgwVpnTunnelsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_vpn_tunnels#id TgwVpnTunnels#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_vpn_tunnels#name TgwVpnTunnels#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_vpn_tunnels#namespace TgwVpnTunnels#namespace}
  */
  readonly namespace: string;
  /**
  * vpn_tunnel_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_vpn_tunnels#vpn_tunnel_config TgwVpnTunnels#vpn_tunnel_config}
  */
  readonly vpnTunnelConfig: TgwVpnTunnelsVpnTunnelConfig[] | cdktf.IResolvable;
}
export interface TgwVpnTunnelsVpnTunnelConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_vpn_tunnels#node_id TgwVpnTunnels#node_id}
  */
  readonly nodeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_vpn_tunnels#node_name TgwVpnTunnels#node_name}
  */
  readonly nodeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_vpn_tunnels#tunnel_remote_ips TgwVpnTunnels#tunnel_remote_ips}
  */
  readonly tunnelRemoteIps: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_vpn_tunnels#type TgwVpnTunnels#type}
  */
  readonly type?: string;
}

export function tgwVpnTunnelsVpnTunnelConfigToTerraform(struct?: TgwVpnTunnelsVpnTunnelConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    tunnel_remote_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tunnelRemoteIps),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function tgwVpnTunnelsVpnTunnelConfigToHclTerraform(struct?: TgwVpnTunnelsVpnTunnelConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_remote_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tunnelRemoteIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class TgwVpnTunnelsVpnTunnelConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TgwVpnTunnelsVpnTunnelConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._tunnelRemoteIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelRemoteIps = this._tunnelRemoteIps;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TgwVpnTunnelsVpnTunnelConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeId = undefined;
      this._nodeName = undefined;
      this._tunnelRemoteIps = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeId = value.nodeId;
      this._nodeName = value.nodeName;
      this._tunnelRemoteIps = value.tunnelRemoteIps;
      this._type = value.type;
    }
  }

  // node_id - computed: false, optional: false, required: true
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // node_name - computed: false, optional: false, required: true
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // tunnel_remote_ips - computed: false, optional: false, required: true
  private _tunnelRemoteIps?: string[]; 
  public get tunnelRemoteIps() {
    return this.getListAttribute('tunnel_remote_ips');
  }
  public set tunnelRemoteIps(value: string[]) {
    this._tunnelRemoteIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelRemoteIpsInput() {
    return this._tunnelRemoteIps;
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
}

export class TgwVpnTunnelsVpnTunnelConfigList extends cdktf.ComplexList {
  public internalValue? : TgwVpnTunnelsVpnTunnelConfig[] | cdktf.IResolvable

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
  public get(index: number): TgwVpnTunnelsVpnTunnelConfigOutputReference {
    return new TgwVpnTunnelsVpnTunnelConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_vpn_tunnels volterra_tgw_vpn_tunnels}
*/
export class TgwVpnTunnels extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_tgw_vpn_tunnels";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TgwVpnTunnels resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TgwVpnTunnels to import
  * @param importFromId The id of the existing TgwVpnTunnels that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_vpn_tunnels#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TgwVpnTunnels to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_tgw_vpn_tunnels", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_vpn_tunnels volterra_tgw_vpn_tunnels} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TgwVpnTunnelsConfig
  */
  public constructor(scope: Construct, id: string, config: TgwVpnTunnelsConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_tgw_vpn_tunnels',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.45',
        providerVersionConstraint: '0.11.45'
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
    this._name = config.name;
    this._namespace = config.namespace;
    this._vpnTunnelConfig.internalValue = config.vpnTunnelConfig;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // vpn_tunnel_config - computed: false, optional: false, required: true
  private _vpnTunnelConfig = new TgwVpnTunnelsVpnTunnelConfigList(this, "vpn_tunnel_config", false);
  public get vpnTunnelConfig() {
    return this._vpnTunnelConfig;
  }
  public putVpnTunnelConfig(value: TgwVpnTunnelsVpnTunnelConfig[] | cdktf.IResolvable) {
    this._vpnTunnelConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnTunnelConfigInput() {
    return this._vpnTunnelConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      vpn_tunnel_config: cdktf.listMapper(tgwVpnTunnelsVpnTunnelConfigToTerraform, true)(this._vpnTunnelConfig.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_tunnel_config: {
        value: cdktf.listMapperHcl(tgwVpnTunnelsVpnTunnelConfigToHclTerraform, true)(this._vpnTunnelConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TgwVpnTunnelsVpnTunnelConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
