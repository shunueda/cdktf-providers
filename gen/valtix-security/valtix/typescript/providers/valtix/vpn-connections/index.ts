// https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/vpn_connections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnConnectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/vpn_connections#connection_set_id VpnConnections#connection_set_id}
  */
  readonly connectionSetId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/vpn_connections#id VpnConnections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * vpn_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/vpn_connections#vpn_connection VpnConnections#vpn_connection}
  */
  readonly vpnConnection?: VpnConnectionsVpnConnection[] | cdktf.IResolvable;
}
export interface VpnConnectionsVpnConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/vpn_connections#description VpnConnections#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/vpn_connections#ipsec_profile VpnConnections#ipsec_profile}
  */
  readonly ipsecProfile: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/vpn_connections#name VpnConnections#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/vpn_connections#pre_shared_key VpnConnections#pre_shared_key}
  */
  readonly preSharedKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/vpn_connections#tunnel_address_left VpnConnections#tunnel_address_left}
  */
  readonly tunnelAddressLeft: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/vpn_connections#tunnel_address_right VpnConnections#tunnel_address_right}
  */
  readonly tunnelAddressRight: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/vpn_connections#tunnel_endpoint_left VpnConnections#tunnel_endpoint_left}
  */
  readonly tunnelEndpointLeft: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/vpn_connections#tunnel_endpoint_right VpnConnections#tunnel_endpoint_right}
  */
  readonly tunnelEndpointRight: string;
}

export function vpnConnectionsVpnConnectionToTerraform(struct?: VpnConnectionsVpnConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    ipsec_profile: cdktf.numberToTerraform(struct!.ipsecProfile),
    name: cdktf.stringToTerraform(struct!.name),
    pre_shared_key: cdktf.stringToTerraform(struct!.preSharedKey),
    tunnel_address_left: cdktf.stringToTerraform(struct!.tunnelAddressLeft),
    tunnel_address_right: cdktf.stringToTerraform(struct!.tunnelAddressRight),
    tunnel_endpoint_left: cdktf.stringToTerraform(struct!.tunnelEndpointLeft),
    tunnel_endpoint_right: cdktf.stringToTerraform(struct!.tunnelEndpointRight),
  }
}


export function vpnConnectionsVpnConnectionToHclTerraform(struct?: VpnConnectionsVpnConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_profile: {
      value: cdktf.numberToHclTerraform(struct!.ipsecProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_shared_key: {
      value: cdktf.stringToHclTerraform(struct!.preSharedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_address_left: {
      value: cdktf.stringToHclTerraform(struct!.tunnelAddressLeft),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_address_right: {
      value: cdktf.stringToHclTerraform(struct!.tunnelAddressRight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_endpoint_left: {
      value: cdktf.stringToHclTerraform(struct!.tunnelEndpointLeft),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_endpoint_right: {
      value: cdktf.stringToHclTerraform(struct!.tunnelEndpointRight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnConnectionsVpnConnectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnConnectionsVpnConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ipsecProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecProfile = this._ipsecProfile;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._preSharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.preSharedKey = this._preSharedKey;
    }
    if (this._tunnelAddressLeft !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelAddressLeft = this._tunnelAddressLeft;
    }
    if (this._tunnelAddressRight !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelAddressRight = this._tunnelAddressRight;
    }
    if (this._tunnelEndpointLeft !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelEndpointLeft = this._tunnelEndpointLeft;
    }
    if (this._tunnelEndpointRight !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelEndpointRight = this._tunnelEndpointRight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnConnectionsVpnConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._ipsecProfile = undefined;
      this._name = undefined;
      this._preSharedKey = undefined;
      this._tunnelAddressLeft = undefined;
      this._tunnelAddressRight = undefined;
      this._tunnelEndpointLeft = undefined;
      this._tunnelEndpointRight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._ipsecProfile = value.ipsecProfile;
      this._name = value.name;
      this._preSharedKey = value.preSharedKey;
      this._tunnelAddressLeft = value.tunnelAddressLeft;
      this._tunnelAddressRight = value.tunnelAddressRight;
      this._tunnelEndpointLeft = value.tunnelEndpointLeft;
      this._tunnelEndpointRight = value.tunnelEndpointRight;
    }
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getNumberAttribute('connection_id');
  }

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

  // ipsec_profile - computed: false, optional: false, required: true
  private _ipsecProfile?: number; 
  public get ipsecProfile() {
    return this.getNumberAttribute('ipsec_profile');
  }
  public set ipsecProfile(value: number) {
    this._ipsecProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecProfileInput() {
    return this._ipsecProfile;
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

  // pre_shared_key - computed: false, optional: false, required: true
  private _preSharedKey?: string; 
  public get preSharedKey() {
    return this.getStringAttribute('pre_shared_key');
  }
  public set preSharedKey(value: string) {
    this._preSharedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyInput() {
    return this._preSharedKey;
  }

  // tunnel_address_left - computed: false, optional: false, required: true
  private _tunnelAddressLeft?: string; 
  public get tunnelAddressLeft() {
    return this.getStringAttribute('tunnel_address_left');
  }
  public set tunnelAddressLeft(value: string) {
    this._tunnelAddressLeft = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelAddressLeftInput() {
    return this._tunnelAddressLeft;
  }

  // tunnel_address_right - computed: false, optional: false, required: true
  private _tunnelAddressRight?: string; 
  public get tunnelAddressRight() {
    return this.getStringAttribute('tunnel_address_right');
  }
  public set tunnelAddressRight(value: string) {
    this._tunnelAddressRight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelAddressRightInput() {
    return this._tunnelAddressRight;
  }

  // tunnel_endpoint_left - computed: false, optional: false, required: true
  private _tunnelEndpointLeft?: string; 
  public get tunnelEndpointLeft() {
    return this.getStringAttribute('tunnel_endpoint_left');
  }
  public set tunnelEndpointLeft(value: string) {
    this._tunnelEndpointLeft = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelEndpointLeftInput() {
    return this._tunnelEndpointLeft;
  }

  // tunnel_endpoint_right - computed: false, optional: false, required: true
  private _tunnelEndpointRight?: string; 
  public get tunnelEndpointRight() {
    return this.getStringAttribute('tunnel_endpoint_right');
  }
  public set tunnelEndpointRight(value: string) {
    this._tunnelEndpointRight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelEndpointRightInput() {
    return this._tunnelEndpointRight;
  }
}

export class VpnConnectionsVpnConnectionList extends cdktf.ComplexList {
  public internalValue? : VpnConnectionsVpnConnection[] | cdktf.IResolvable

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
  public get(index: number): VpnConnectionsVpnConnectionOutputReference {
    return new VpnConnectionsVpnConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/vpn_connections valtix_vpn_connections}
*/
export class VpnConnections extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "valtix_vpn_connections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnConnections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnConnections to import
  * @param importFromId The id of the existing VpnConnections that should be imported. Refer to the {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/vpn_connections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnConnections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "valtix_vpn_connections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/vpn_connections valtix_vpn_connections} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnConnectionsConfig
  */
  public constructor(scope: Construct, id: string, config: VpnConnectionsConfig) {
    super(scope, id, {
      terraformResourceType: 'valtix_vpn_connections',
      terraformGeneratorMetadata: {
        providerName: 'valtix',
        providerVersion: '25.9.2',
        providerVersionConstraint: '25.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionSetId = config.connectionSetId;
    this._id = config.id;
    this._vpnConnection.internalValue = config.vpnConnection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_set_id - computed: false, optional: false, required: true
  private _connectionSetId?: number; 
  public get connectionSetId() {
    return this.getNumberAttribute('connection_set_id');
  }
  public set connectionSetId(value: number) {
    this._connectionSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionSetIdInput() {
    return this._connectionSetId;
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

  // vpn_connection - computed: false, optional: true, required: false
  private _vpnConnection = new VpnConnectionsVpnConnectionList(this, "vpn_connection", false);
  public get vpnConnection() {
    return this._vpnConnection;
  }
  public putVpnConnection(value: VpnConnectionsVpnConnection[] | cdktf.IResolvable) {
    this._vpnConnection.internalValue = value;
  }
  public resetVpnConnection() {
    this._vpnConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnConnectionInput() {
    return this._vpnConnection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_set_id: cdktf.numberToTerraform(this._connectionSetId),
      id: cdktf.stringToTerraform(this._id),
      vpn_connection: cdktf.listMapper(vpnConnectionsVpnConnectionToTerraform, true)(this._vpnConnection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_set_id: {
        value: cdktf.numberToHclTerraform(this._connectionSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_connection: {
        value: cdktf.listMapperHcl(vpnConnectionsVpnConnectionToHclTerraform, true)(this._vpnConnection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnConnectionsVpnConnectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
