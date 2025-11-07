// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/remote_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmRemoteNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of the remote network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/remote_network#id DataScmRemoteNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of the remote network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/remote_network#name DataScmRemoteNetwork#name}
  */
  readonly name?: string;
}
export interface DataScmRemoteNetworkEcmpTunnelsProtocolBgp {
}

export function dataScmRemoteNetworkEcmpTunnelsProtocolBgpToTerraform(struct?: DataScmRemoteNetworkEcmpTunnelsProtocolBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmRemoteNetworkEcmpTunnelsProtocolBgpToHclTerraform(struct?: DataScmRemoteNetworkEcmpTunnelsProtocolBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmRemoteNetworkEcmpTunnelsProtocolBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmRemoteNetworkEcmpTunnelsProtocolBgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmRemoteNetworkEcmpTunnelsProtocolBgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // do_not_export_routes - computed: true, optional: false, required: false
  public get doNotExportRoutes() {
    return this.getBooleanAttribute('do_not_export_routes');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // local_ip_address - computed: true, optional: false, required: false
  public get localIpAddress() {
    return this.getStringAttribute('local_ip_address');
  }

  // originate_default_route - computed: true, optional: false, required: false
  public get originateDefaultRoute() {
    return this.getBooleanAttribute('originate_default_route');
  }

  // peer_as - computed: true, optional: false, required: false
  public get peerAs() {
    return this.getStringAttribute('peer_as');
  }

  // peer_ip_address - computed: true, optional: false, required: false
  public get peerIpAddress() {
    return this.getStringAttribute('peer_ip_address');
  }

  // peering_type - computed: true, optional: false, required: false
  public get peeringType() {
    return this.getStringAttribute('peering_type');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // summarize_mobile_user_routes - computed: true, optional: false, required: false
  public get summarizeMobileUserRoutes() {
    return this.getBooleanAttribute('summarize_mobile_user_routes');
  }
}
export interface DataScmRemoteNetworkEcmpTunnelsProtocol {
}

export function dataScmRemoteNetworkEcmpTunnelsProtocolToTerraform(struct?: DataScmRemoteNetworkEcmpTunnelsProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmRemoteNetworkEcmpTunnelsProtocolToHclTerraform(struct?: DataScmRemoteNetworkEcmpTunnelsProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmRemoteNetworkEcmpTunnelsProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmRemoteNetworkEcmpTunnelsProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmRemoteNetworkEcmpTunnelsProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp - computed: true, optional: false, required: false
  private _bgp = new DataScmRemoteNetworkEcmpTunnelsProtocolBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
}
export interface DataScmRemoteNetworkEcmpTunnels {
}

export function dataScmRemoteNetworkEcmpTunnelsToTerraform(struct?: DataScmRemoteNetworkEcmpTunnels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmRemoteNetworkEcmpTunnelsToHclTerraform(struct?: DataScmRemoteNetworkEcmpTunnels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmRemoteNetworkEcmpTunnelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmRemoteNetworkEcmpTunnels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmRemoteNetworkEcmpTunnels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipsec_tunnel - computed: true, optional: false, required: false
  public get ipsecTunnel() {
    return this.getStringAttribute('ipsec_tunnel');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: false
  private _protocol = new DataScmRemoteNetworkEcmpTunnelsProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
}

export class DataScmRemoteNetworkEcmpTunnelsList extends cdktf.ComplexList {

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
  public get(index: number): DataScmRemoteNetworkEcmpTunnelsOutputReference {
    return new DataScmRemoteNetworkEcmpTunnelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmRemoteNetworkProtocolBgp {
}

export function dataScmRemoteNetworkProtocolBgpToTerraform(struct?: DataScmRemoteNetworkProtocolBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmRemoteNetworkProtocolBgpToHclTerraform(struct?: DataScmRemoteNetworkProtocolBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmRemoteNetworkProtocolBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmRemoteNetworkProtocolBgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmRemoteNetworkProtocolBgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // do_not_export_routes - computed: true, optional: false, required: false
  public get doNotExportRoutes() {
    return this.getBooleanAttribute('do_not_export_routes');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // local_ip_address - computed: true, optional: false, required: false
  public get localIpAddress() {
    return this.getStringAttribute('local_ip_address');
  }

  // originate_default_route - computed: true, optional: false, required: false
  public get originateDefaultRoute() {
    return this.getBooleanAttribute('originate_default_route');
  }

  // peer_as - computed: true, optional: false, required: false
  public get peerAs() {
    return this.getStringAttribute('peer_as');
  }

  // peer_ip_address - computed: true, optional: false, required: false
  public get peerIpAddress() {
    return this.getStringAttribute('peer_ip_address');
  }

  // peering_type - computed: true, optional: false, required: false
  public get peeringType() {
    return this.getStringAttribute('peering_type');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // summarize_mobile_user_routes - computed: true, optional: false, required: false
  public get summarizeMobileUserRoutes() {
    return this.getBooleanAttribute('summarize_mobile_user_routes');
  }
}
export interface DataScmRemoteNetworkProtocolBgpPeer {
}

export function dataScmRemoteNetworkProtocolBgpPeerToTerraform(struct?: DataScmRemoteNetworkProtocolBgpPeer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmRemoteNetworkProtocolBgpPeerToHclTerraform(struct?: DataScmRemoteNetworkProtocolBgpPeer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmRemoteNetworkProtocolBgpPeerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmRemoteNetworkProtocolBgpPeer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmRemoteNetworkProtocolBgpPeer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local_ip_address - computed: true, optional: false, required: false
  public get localIpAddress() {
    return this.getStringAttribute('local_ip_address');
  }

  // peer_ip_address - computed: true, optional: false, required: false
  public get peerIpAddress() {
    return this.getStringAttribute('peer_ip_address');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export interface DataScmRemoteNetworkProtocol {
}

export function dataScmRemoteNetworkProtocolToTerraform(struct?: DataScmRemoteNetworkProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmRemoteNetworkProtocolToHclTerraform(struct?: DataScmRemoteNetworkProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmRemoteNetworkProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmRemoteNetworkProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmRemoteNetworkProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp - computed: true, optional: false, required: false
  private _bgp = new DataScmRemoteNetworkProtocolBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }

  // bgp_peer - computed: true, optional: false, required: false
  private _bgpPeer = new DataScmRemoteNetworkProtocolBgpPeerOutputReference(this, "bgp_peer");
  public get bgpPeer() {
    return this._bgpPeer;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/remote_network scm_remote_network}
*/
export class DataScmRemoteNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_remote_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmRemoteNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmRemoteNetwork to import
  * @param importFromId The id of the existing DataScmRemoteNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/remote_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmRemoteNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_remote_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/remote_network scm_remote_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmRemoteNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmRemoteNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_remote_network',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.3'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ecmp_load_balancing - computed: true, optional: false, required: false
  public get ecmpLoadBalancing() {
    return this.getStringAttribute('ecmp_load_balancing');
  }

  // ecmp_tunnels - computed: true, optional: false, required: false
  private _ecmpTunnels = new DataScmRemoteNetworkEcmpTunnelsList(this, "ecmp_tunnels", false);
  public get ecmpTunnels() {
    return this._ecmpTunnels;
  }

  // encrypted_values - computed: true, optional: false, required: false
  private _encryptedValues = new cdktf.StringMap(this, "encrypted_values");
  public get encryptedValues() {
    return this._encryptedValues;
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
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

  // ipsec_tunnel - computed: true, optional: false, required: false
  public get ipsecTunnel() {
    return this.getStringAttribute('ipsec_tunnel');
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
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

  // protocol - computed: true, optional: false, required: false
  private _protocol = new DataScmRemoteNetworkProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // secondary_ipsec_tunnel - computed: true, optional: false, required: false
  public get secondaryIpsecTunnel() {
    return this.getStringAttribute('secondary_ipsec_tunnel');
  }

  // spn_name - computed: true, optional: false, required: false
  public get spnName() {
    return this.getStringAttribute('spn_name');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
