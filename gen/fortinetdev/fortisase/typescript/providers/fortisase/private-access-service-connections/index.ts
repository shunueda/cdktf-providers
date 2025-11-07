// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateAccessServiceConnectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * alias for serivce connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#alias PrivateAccessServiceConnections#alias}
  */
  readonly alias?: string;
  /**
  * IPSEC authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#auth PrivateAccessServiceConnections#auth}
  */
  readonly auth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#backup_links PrivateAccessServiceConnections#backup_links}
  */
  readonly backupLinks?: PrivateAccessServiceConnectionsBackupLinks[] | cdktf.IResolvable;
  /**
  * BGP Routing Peer IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#bgp_peer_ip PrivateAccessServiceConnections#bgp_peer_ip}
  */
  readonly bgpPeerIp?: string;
  /**
  * the name of IPSEC authentication certificate that uploaded to SASE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#ipsec_cert_name PrivateAccessServiceConnections#ipsec_cert_name}
  */
  readonly ipsecCertName?: string;
  /**
  * IKE version for IPSEC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#ipsec_ike_version PrivateAccessServiceConnections#ipsec_ike_version}
  */
  readonly ipsecIkeVersion?: string;
  /**
  * Peer PKI user name that created on SASE for IPSEC authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#ipsec_peer_name PrivateAccessServiceConnections#ipsec_peer_name}
  */
  readonly ipsecPeerName?: string;
  /**
  * IPSEC auth by pre shared key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#ipsec_pre_shared_key PrivateAccessServiceConnections#ipsec_pre_shared_key}
  */
  readonly ipsecPreSharedKey?: string;
  /**
  * IPSEC Remote Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#ipsec_remote_gw PrivateAccessServiceConnections#ipsec_remote_gw}
  */
  readonly ipsecRemoteGw?: string;
  /**
  * integer id for overlay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#overlay_network_id PrivateAccessServiceConnections#overlay_network_id}
  */
  readonly overlayNetworkId?: string;
  /**
  * Cost value to determine the priority of SASE spokes. Default cost is 5 if not provided through initial api request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#region_cost PrivateAccessServiceConnections#region_cost}
  */
  readonly regionCost?: PrivateAccessServiceConnectionsRegionCost;
  /**
  * route map tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#route_map_tag PrivateAccessServiceConnections#route_map_tag}
  */
  readonly routeMapTag?: string;
  /**
  * BGP Routing Design. Must be same as network configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#type PrivateAccessServiceConnections#type}
  */
  readonly type?: string;
}
export interface PrivateAccessServiceConnectionsBackupLinksCreate {
  /**
  * alias for serivce connection additional overlay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#alias PrivateAccessServiceConnections#alias}
  */
  readonly alias?: string;
  /**
  * IPSEC authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#auth PrivateAccessServiceConnections#auth}
  */
  readonly auth?: string;
  /**
  * the name of IPSEC authentication certificate that uploaded to SASE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#ipsec_cert_name PrivateAccessServiceConnections#ipsec_cert_name}
  */
  readonly ipsecCertName?: string;
  /**
  * IKE version for IPSEC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#ipsec_ike_version PrivateAccessServiceConnections#ipsec_ike_version}
  */
  readonly ipsecIkeVersion?: string;
  /**
  * Peer PKI user name that created on SASE for IPSEC authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#ipsec_peer_name PrivateAccessServiceConnections#ipsec_peer_name}
  */
  readonly ipsecPeerName?: string;
  /**
  * IPSEC auth by pre shared key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#ipsec_pre_shared_key PrivateAccessServiceConnections#ipsec_pre_shared_key}
  */
  readonly ipsecPreSharedKey?: string;
  /**
  * IPSEC Remote Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#ipsec_remote_gw PrivateAccessServiceConnections#ipsec_remote_gw}
  */
  readonly ipsecRemoteGw?: string;
  /**
  * integer id for overlay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#overlay_network_id PrivateAccessServiceConnections#overlay_network_id}
  */
  readonly overlayNetworkId?: string;
}

export function privateAccessServiceConnectionsBackupLinksCreateToTerraform(struct?: PrivateAccessServiceConnectionsBackupLinksCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    auth: cdktf.stringToTerraform(struct!.auth),
    ipsec_cert_name: cdktf.stringToTerraform(struct!.ipsecCertName),
    ipsec_ike_version: cdktf.stringToTerraform(struct!.ipsecIkeVersion),
    ipsec_peer_name: cdktf.stringToTerraform(struct!.ipsecPeerName),
    ipsec_pre_shared_key: cdktf.stringToTerraform(struct!.ipsecPreSharedKey),
    ipsec_remote_gw: cdktf.stringToTerraform(struct!.ipsecRemoteGw),
    overlay_network_id: cdktf.stringToTerraform(struct!.overlayNetworkId),
  }
}


export function privateAccessServiceConnectionsBackupLinksCreateToHclTerraform(struct?: PrivateAccessServiceConnectionsBackupLinksCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: cdktf.stringToHclTerraform(struct!.auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_cert_name: {
      value: cdktf.stringToHclTerraform(struct!.ipsecCertName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_ike_version: {
      value: cdktf.stringToHclTerraform(struct!.ipsecIkeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_peer_name: {
      value: cdktf.stringToHclTerraform(struct!.ipsecPeerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_pre_shared_key: {
      value: cdktf.stringToHclTerraform(struct!.ipsecPreSharedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_remote_gw: {
      value: cdktf.stringToHclTerraform(struct!.ipsecRemoteGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overlay_network_id: {
      value: cdktf.stringToHclTerraform(struct!.overlayNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateAccessServiceConnectionsBackupLinksCreateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivateAccessServiceConnectionsBackupLinksCreate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth;
    }
    if (this._ipsecCertName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecCertName = this._ipsecCertName;
    }
    if (this._ipsecIkeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecIkeVersion = this._ipsecIkeVersion;
    }
    if (this._ipsecPeerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPeerName = this._ipsecPeerName;
    }
    if (this._ipsecPreSharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPreSharedKey = this._ipsecPreSharedKey;
    }
    if (this._ipsecRemoteGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecRemoteGw = this._ipsecRemoteGw;
    }
    if (this._overlayNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlayNetworkId = this._overlayNetworkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateAccessServiceConnectionsBackupLinksCreate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._auth = undefined;
      this._ipsecCertName = undefined;
      this._ipsecIkeVersion = undefined;
      this._ipsecPeerName = undefined;
      this._ipsecPreSharedKey = undefined;
      this._ipsecRemoteGw = undefined;
      this._overlayNetworkId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._auth = value.auth;
      this._ipsecCertName = value.ipsecCertName;
      this._ipsecIkeVersion = value.ipsecIkeVersion;
      this._ipsecPeerName = value.ipsecPeerName;
      this._ipsecPreSharedKey = value.ipsecPreSharedKey;
      this._ipsecRemoteGw = value.ipsecRemoteGw;
      this._overlayNetworkId = value.overlayNetworkId;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // auth - computed: true, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // ipsec_cert_name - computed: true, optional: true, required: false
  private _ipsecCertName?: string; 
  public get ipsecCertName() {
    return this.getStringAttribute('ipsec_cert_name');
  }
  public set ipsecCertName(value: string) {
    this._ipsecCertName = value;
  }
  public resetIpsecCertName() {
    this._ipsecCertName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecCertNameInput() {
    return this._ipsecCertName;
  }

  // ipsec_ike_version - computed: true, optional: true, required: false
  private _ipsecIkeVersion?: string; 
  public get ipsecIkeVersion() {
    return this.getStringAttribute('ipsec_ike_version');
  }
  public set ipsecIkeVersion(value: string) {
    this._ipsecIkeVersion = value;
  }
  public resetIpsecIkeVersion() {
    this._ipsecIkeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecIkeVersionInput() {
    return this._ipsecIkeVersion;
  }

  // ipsec_peer_name - computed: true, optional: true, required: false
  private _ipsecPeerName?: string; 
  public get ipsecPeerName() {
    return this.getStringAttribute('ipsec_peer_name');
  }
  public set ipsecPeerName(value: string) {
    this._ipsecPeerName = value;
  }
  public resetIpsecPeerName() {
    this._ipsecPeerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPeerNameInput() {
    return this._ipsecPeerName;
  }

  // ipsec_pre_shared_key - computed: true, optional: true, required: false
  private _ipsecPreSharedKey?: string; 
  public get ipsecPreSharedKey() {
    return this.getStringAttribute('ipsec_pre_shared_key');
  }
  public set ipsecPreSharedKey(value: string) {
    this._ipsecPreSharedKey = value;
  }
  public resetIpsecPreSharedKey() {
    this._ipsecPreSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPreSharedKeyInput() {
    return this._ipsecPreSharedKey;
  }

  // ipsec_remote_gw - computed: true, optional: true, required: false
  private _ipsecRemoteGw?: string; 
  public get ipsecRemoteGw() {
    return this.getStringAttribute('ipsec_remote_gw');
  }
  public set ipsecRemoteGw(value: string) {
    this._ipsecRemoteGw = value;
  }
  public resetIpsecRemoteGw() {
    this._ipsecRemoteGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecRemoteGwInput() {
    return this._ipsecRemoteGw;
  }

  // overlay_network_id - computed: true, optional: true, required: false
  private _overlayNetworkId?: string; 
  public get overlayNetworkId() {
    return this.getStringAttribute('overlay_network_id');
  }
  public set overlayNetworkId(value: string) {
    this._overlayNetworkId = value;
  }
  public resetOverlayNetworkId() {
    this._overlayNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayNetworkIdInput() {
    return this._overlayNetworkId;
  }
}

export class PrivateAccessServiceConnectionsBackupLinksCreateList extends cdktf.ComplexList {
  public internalValue? : PrivateAccessServiceConnectionsBackupLinksCreate[] | cdktf.IResolvable

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
  public get(index: number): PrivateAccessServiceConnectionsBackupLinksCreateOutputReference {
    return new PrivateAccessServiceConnectionsBackupLinksCreateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivateAccessServiceConnectionsBackupLinksDelete {
  /**
  * unique id for additional IPsec overlays.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#id PrivateAccessServiceConnections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function privateAccessServiceConnectionsBackupLinksDeleteToTerraform(struct?: PrivateAccessServiceConnectionsBackupLinksDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function privateAccessServiceConnectionsBackupLinksDeleteToHclTerraform(struct?: PrivateAccessServiceConnectionsBackupLinksDelete | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateAccessServiceConnectionsBackupLinksDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivateAccessServiceConnectionsBackupLinksDelete | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateAccessServiceConnectionsBackupLinksDelete | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}

export class PrivateAccessServiceConnectionsBackupLinksDeleteList extends cdktf.ComplexList {
  public internalValue? : PrivateAccessServiceConnectionsBackupLinksDelete[] | cdktf.IResolvable

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
  public get(index: number): PrivateAccessServiceConnectionsBackupLinksDeleteOutputReference {
    return new PrivateAccessServiceConnectionsBackupLinksDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivateAccessServiceConnectionsBackupLinksUpdate {
  /**
  * alias for serivce connection additional overlay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#alias PrivateAccessServiceConnections#alias}
  */
  readonly alias?: string;
  /**
  * IPSEC authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#auth PrivateAccessServiceConnections#auth}
  */
  readonly auth?: string;
  /**
  * unique id for additional IPsec overlays.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#id PrivateAccessServiceConnections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * the name of IPSEC authentication certificate that uploaded to SASE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#ipsec_cert_name PrivateAccessServiceConnections#ipsec_cert_name}
  */
  readonly ipsecCertName?: string;
  /**
  * IKE version for IPSEC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#ipsec_ike_version PrivateAccessServiceConnections#ipsec_ike_version}
  */
  readonly ipsecIkeVersion?: string;
  /**
  * Peer PKI user name that created on SASE for IPSEC authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#ipsec_peer_name PrivateAccessServiceConnections#ipsec_peer_name}
  */
  readonly ipsecPeerName?: string;
  /**
  * IPSEC auth by pre shared key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#ipsec_pre_shared_key PrivateAccessServiceConnections#ipsec_pre_shared_key}
  */
  readonly ipsecPreSharedKey?: string;
  /**
  * IPSEC Remote Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#ipsec_remote_gw PrivateAccessServiceConnections#ipsec_remote_gw}
  */
  readonly ipsecRemoteGw?: string;
  /**
  * integer id for overlay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#overlay_network_id PrivateAccessServiceConnections#overlay_network_id}
  */
  readonly overlayNetworkId?: string;
}

export function privateAccessServiceConnectionsBackupLinksUpdateToTerraform(struct?: PrivateAccessServiceConnectionsBackupLinksUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    auth: cdktf.stringToTerraform(struct!.auth),
    id: cdktf.stringToTerraform(struct!.id),
    ipsec_cert_name: cdktf.stringToTerraform(struct!.ipsecCertName),
    ipsec_ike_version: cdktf.stringToTerraform(struct!.ipsecIkeVersion),
    ipsec_peer_name: cdktf.stringToTerraform(struct!.ipsecPeerName),
    ipsec_pre_shared_key: cdktf.stringToTerraform(struct!.ipsecPreSharedKey),
    ipsec_remote_gw: cdktf.stringToTerraform(struct!.ipsecRemoteGw),
    overlay_network_id: cdktf.stringToTerraform(struct!.overlayNetworkId),
  }
}


export function privateAccessServiceConnectionsBackupLinksUpdateToHclTerraform(struct?: PrivateAccessServiceConnectionsBackupLinksUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: cdktf.stringToHclTerraform(struct!.auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_cert_name: {
      value: cdktf.stringToHclTerraform(struct!.ipsecCertName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_ike_version: {
      value: cdktf.stringToHclTerraform(struct!.ipsecIkeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_peer_name: {
      value: cdktf.stringToHclTerraform(struct!.ipsecPeerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_pre_shared_key: {
      value: cdktf.stringToHclTerraform(struct!.ipsecPreSharedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_remote_gw: {
      value: cdktf.stringToHclTerraform(struct!.ipsecRemoteGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overlay_network_id: {
      value: cdktf.stringToHclTerraform(struct!.overlayNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateAccessServiceConnectionsBackupLinksUpdateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivateAccessServiceConnectionsBackupLinksUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipsecCertName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecCertName = this._ipsecCertName;
    }
    if (this._ipsecIkeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecIkeVersion = this._ipsecIkeVersion;
    }
    if (this._ipsecPeerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPeerName = this._ipsecPeerName;
    }
    if (this._ipsecPreSharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPreSharedKey = this._ipsecPreSharedKey;
    }
    if (this._ipsecRemoteGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecRemoteGw = this._ipsecRemoteGw;
    }
    if (this._overlayNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlayNetworkId = this._overlayNetworkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateAccessServiceConnectionsBackupLinksUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._auth = undefined;
      this._id = undefined;
      this._ipsecCertName = undefined;
      this._ipsecIkeVersion = undefined;
      this._ipsecPeerName = undefined;
      this._ipsecPreSharedKey = undefined;
      this._ipsecRemoteGw = undefined;
      this._overlayNetworkId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._auth = value.auth;
      this._id = value.id;
      this._ipsecCertName = value.ipsecCertName;
      this._ipsecIkeVersion = value.ipsecIkeVersion;
      this._ipsecPeerName = value.ipsecPeerName;
      this._ipsecPreSharedKey = value.ipsecPreSharedKey;
      this._ipsecRemoteGw = value.ipsecRemoteGw;
      this._overlayNetworkId = value.overlayNetworkId;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // auth - computed: true, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
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

  // ipsec_cert_name - computed: true, optional: true, required: false
  private _ipsecCertName?: string; 
  public get ipsecCertName() {
    return this.getStringAttribute('ipsec_cert_name');
  }
  public set ipsecCertName(value: string) {
    this._ipsecCertName = value;
  }
  public resetIpsecCertName() {
    this._ipsecCertName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecCertNameInput() {
    return this._ipsecCertName;
  }

  // ipsec_ike_version - computed: true, optional: true, required: false
  private _ipsecIkeVersion?: string; 
  public get ipsecIkeVersion() {
    return this.getStringAttribute('ipsec_ike_version');
  }
  public set ipsecIkeVersion(value: string) {
    this._ipsecIkeVersion = value;
  }
  public resetIpsecIkeVersion() {
    this._ipsecIkeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecIkeVersionInput() {
    return this._ipsecIkeVersion;
  }

  // ipsec_peer_name - computed: true, optional: true, required: false
  private _ipsecPeerName?: string; 
  public get ipsecPeerName() {
    return this.getStringAttribute('ipsec_peer_name');
  }
  public set ipsecPeerName(value: string) {
    this._ipsecPeerName = value;
  }
  public resetIpsecPeerName() {
    this._ipsecPeerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPeerNameInput() {
    return this._ipsecPeerName;
  }

  // ipsec_pre_shared_key - computed: true, optional: true, required: false
  private _ipsecPreSharedKey?: string; 
  public get ipsecPreSharedKey() {
    return this.getStringAttribute('ipsec_pre_shared_key');
  }
  public set ipsecPreSharedKey(value: string) {
    this._ipsecPreSharedKey = value;
  }
  public resetIpsecPreSharedKey() {
    this._ipsecPreSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPreSharedKeyInput() {
    return this._ipsecPreSharedKey;
  }

  // ipsec_remote_gw - computed: true, optional: true, required: false
  private _ipsecRemoteGw?: string; 
  public get ipsecRemoteGw() {
    return this.getStringAttribute('ipsec_remote_gw');
  }
  public set ipsecRemoteGw(value: string) {
    this._ipsecRemoteGw = value;
  }
  public resetIpsecRemoteGw() {
    this._ipsecRemoteGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecRemoteGwInput() {
    return this._ipsecRemoteGw;
  }

  // overlay_network_id - computed: true, optional: true, required: false
  private _overlayNetworkId?: string; 
  public get overlayNetworkId() {
    return this.getStringAttribute('overlay_network_id');
  }
  public set overlayNetworkId(value: string) {
    this._overlayNetworkId = value;
  }
  public resetOverlayNetworkId() {
    this._overlayNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayNetworkIdInput() {
    return this._overlayNetworkId;
  }
}

export class PrivateAccessServiceConnectionsBackupLinksUpdateList extends cdktf.ComplexList {
  public internalValue? : PrivateAccessServiceConnectionsBackupLinksUpdate[] | cdktf.IResolvable

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
  public get(index: number): PrivateAccessServiceConnectionsBackupLinksUpdateOutputReference {
    return new PrivateAccessServiceConnectionsBackupLinksUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivateAccessServiceConnectionsBackupLinks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#create PrivateAccessServiceConnections#create}
  */
  readonly create?: PrivateAccessServiceConnectionsBackupLinksCreate[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#delete PrivateAccessServiceConnections#delete}
  */
  readonly delete?: PrivateAccessServiceConnectionsBackupLinksDelete[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#update PrivateAccessServiceConnections#update}
  */
  readonly update?: PrivateAccessServiceConnectionsBackupLinksUpdate[] | cdktf.IResolvable;
}

export function privateAccessServiceConnectionsBackupLinksToTerraform(struct?: PrivateAccessServiceConnectionsBackupLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.listMapper(privateAccessServiceConnectionsBackupLinksCreateToTerraform, false)(struct!.create),
    delete: cdktf.listMapper(privateAccessServiceConnectionsBackupLinksDeleteToTerraform, false)(struct!.delete),
    update: cdktf.listMapper(privateAccessServiceConnectionsBackupLinksUpdateToTerraform, false)(struct!.update),
  }
}


export function privateAccessServiceConnectionsBackupLinksToHclTerraform(struct?: PrivateAccessServiceConnectionsBackupLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.listMapperHcl(privateAccessServiceConnectionsBackupLinksCreateToHclTerraform, false)(struct!.create),
      isBlock: true,
      type: "list",
      storageClassType: "PrivateAccessServiceConnectionsBackupLinksCreateList",
    },
    delete: {
      value: cdktf.listMapperHcl(privateAccessServiceConnectionsBackupLinksDeleteToHclTerraform, false)(struct!.delete),
      isBlock: true,
      type: "list",
      storageClassType: "PrivateAccessServiceConnectionsBackupLinksDeleteList",
    },
    update: {
      value: cdktf.listMapperHcl(privateAccessServiceConnectionsBackupLinksUpdateToHclTerraform, false)(struct!.update),
      isBlock: true,
      type: "list",
      storageClassType: "PrivateAccessServiceConnectionsBackupLinksUpdateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateAccessServiceConnectionsBackupLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivateAccessServiceConnectionsBackupLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create?.internalValue;
    }
    if (this._delete?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete?.internalValue;
    }
    if (this._update?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateAccessServiceConnectionsBackupLinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create.internalValue = undefined;
      this._delete.internalValue = undefined;
      this._update.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create.internalValue = value.create;
      this._delete.internalValue = value.delete;
      this._update.internalValue = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create = new PrivateAccessServiceConnectionsBackupLinksCreateList(this, "create", false);
  public get create() {
    return this._create;
  }
  public putCreate(value: PrivateAccessServiceConnectionsBackupLinksCreate[] | cdktf.IResolvable) {
    this._create.internalValue = value;
  }
  public resetCreate() {
    this._create.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create.internalValue;
  }

  // delete - computed: false, optional: true, required: false
  private _delete = new PrivateAccessServiceConnectionsBackupLinksDeleteList(this, "delete", false);
  public get delete() {
    return this._delete;
  }
  public putDelete(value: PrivateAccessServiceConnectionsBackupLinksDelete[] | cdktf.IResolvable) {
    this._delete.internalValue = value;
  }
  public resetDelete() {
    this._delete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete.internalValue;
  }

  // update - computed: false, optional: true, required: false
  private _update = new PrivateAccessServiceConnectionsBackupLinksUpdateList(this, "update", false);
  public get update() {
    return this._update;
  }
  public putUpdate(value: PrivateAccessServiceConnectionsBackupLinksUpdate[] | cdktf.IResolvable) {
    this._update.internalValue = value;
  }
  public resetUpdate() {
    this._update.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update.internalValue;
  }
}

export class PrivateAccessServiceConnectionsBackupLinksList extends cdktf.ComplexList {
  public internalValue? : PrivateAccessServiceConnectionsBackupLinks[] | cdktf.IResolvable

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
  public get(index: number): PrivateAccessServiceConnectionsBackupLinksOutputReference {
    return new PrivateAccessServiceConnectionsBackupLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivateAccessServiceConnectionsCommonConfig {
  /**
  * Autonomous System Number (ASN).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#as_number PrivateAccessServiceConnections#as_number}
  */
  readonly asNumber?: string;
  /**
  * BGP Routing Design.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#bgp_design PrivateAccessServiceConnections#bgp_design}
  */
  readonly bgpDesign?: string;
  /**
  * Available/unused subnet that can be used to assign loopback interface IP addresses used for BGP router IDs parameter on the FortiSASE security PoPs. /28 is the minimum subnet size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#bgp_router_ids_subnet PrivateAccessServiceConnections#bgp_router_ids_subnet}
  */
  readonly bgpRouterIdsSubnet?: string;
  /**
  * Configuration state of network configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#config_state PrivateAccessServiceConnections#config_state}
  */
  readonly configState?: string;
  /**
  * BGP Recursive Routing. Enabling this setting allows for interhub connectivity. When use BGP design on-loopback this has to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#recursive_next_hop PrivateAccessServiceConnections#recursive_next_hop}
  */
  readonly recursiveNextHop?: boolean | cdktf.IResolvable;
  /**
  * Health Check IP. Must be provided when enable sdwan rule which used to obtain Jitter, latency and packet loss measurements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#sdwan_health_check_vm PrivateAccessServiceConnections#sdwan_health_check_vm}
  */
  readonly sdwanHealthCheckVm?: string;
  /**
  * Hub Selection Method. Enabling this setting the highest priority service connection that meets minimum SLA requirements is selected. Otherwise BGP MED (Multi-Exit Discriminator) will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#sdwan_rule_enable PrivateAccessServiceConnections#sdwan_rule_enable}
  */
  readonly sdwanRuleEnable?: boolean | cdktf.IResolvable;
}

export function privateAccessServiceConnectionsCommonConfigToTerraform(struct?: PrivateAccessServiceConnectionsCommonConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_number: cdktf.stringToTerraform(struct!.asNumber),
    bgp_design: cdktf.stringToTerraform(struct!.bgpDesign),
    bgp_router_ids_subnet: cdktf.stringToTerraform(struct!.bgpRouterIdsSubnet),
    config_state: cdktf.stringToTerraform(struct!.configState),
    recursive_next_hop: cdktf.booleanToTerraform(struct!.recursiveNextHop),
    sdwan_health_check_vm: cdktf.stringToTerraform(struct!.sdwanHealthCheckVm),
    sdwan_rule_enable: cdktf.booleanToTerraform(struct!.sdwanRuleEnable),
  }
}


export function privateAccessServiceConnectionsCommonConfigToHclTerraform(struct?: PrivateAccessServiceConnectionsCommonConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_number: {
      value: cdktf.stringToHclTerraform(struct!.asNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_design: {
      value: cdktf.stringToHclTerraform(struct!.bgpDesign),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_router_ids_subnet: {
      value: cdktf.stringToHclTerraform(struct!.bgpRouterIdsSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_state: {
      value: cdktf.stringToHclTerraform(struct!.configState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recursive_next_hop: {
      value: cdktf.booleanToHclTerraform(struct!.recursiveNextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sdwan_health_check_vm: {
      value: cdktf.stringToHclTerraform(struct!.sdwanHealthCheckVm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_rule_enable: {
      value: cdktf.booleanToHclTerraform(struct!.sdwanRuleEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateAccessServiceConnectionsCommonConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateAccessServiceConnectionsCommonConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumber = this._asNumber;
    }
    if (this._bgpDesign !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpDesign = this._bgpDesign;
    }
    if (this._bgpRouterIdsSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpRouterIdsSubnet = this._bgpRouterIdsSubnet;
    }
    if (this._configState !== undefined) {
      hasAnyValues = true;
      internalValueResult.configState = this._configState;
    }
    if (this._recursiveNextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursiveNextHop = this._recursiveNextHop;
    }
    if (this._sdwanHealthCheckVm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanHealthCheckVm = this._sdwanHealthCheckVm;
    }
    if (this._sdwanRuleEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanRuleEnable = this._sdwanRuleEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateAccessServiceConnectionsCommonConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumber = undefined;
      this._bgpDesign = undefined;
      this._bgpRouterIdsSubnet = undefined;
      this._configState = undefined;
      this._recursiveNextHop = undefined;
      this._sdwanHealthCheckVm = undefined;
      this._sdwanRuleEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumber = value.asNumber;
      this._bgpDesign = value.bgpDesign;
      this._bgpRouterIdsSubnet = value.bgpRouterIdsSubnet;
      this._configState = value.configState;
      this._recursiveNextHop = value.recursiveNextHop;
      this._sdwanHealthCheckVm = value.sdwanHealthCheckVm;
      this._sdwanRuleEnable = value.sdwanRuleEnable;
    }
  }

  // as_number - computed: true, optional: true, required: false
  private _asNumber?: string; 
  public get asNumber() {
    return this.getStringAttribute('as_number');
  }
  public set asNumber(value: string) {
    this._asNumber = value;
  }
  public resetAsNumber() {
    this._asNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // bgp_design - computed: true, optional: true, required: false
  private _bgpDesign?: string; 
  public get bgpDesign() {
    return this.getStringAttribute('bgp_design');
  }
  public set bgpDesign(value: string) {
    this._bgpDesign = value;
  }
  public resetBgpDesign() {
    this._bgpDesign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpDesignInput() {
    return this._bgpDesign;
  }

  // bgp_router_ids_subnet - computed: true, optional: true, required: false
  private _bgpRouterIdsSubnet?: string; 
  public get bgpRouterIdsSubnet() {
    return this.getStringAttribute('bgp_router_ids_subnet');
  }
  public set bgpRouterIdsSubnet(value: string) {
    this._bgpRouterIdsSubnet = value;
  }
  public resetBgpRouterIdsSubnet() {
    this._bgpRouterIdsSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRouterIdsSubnetInput() {
    return this._bgpRouterIdsSubnet;
  }

  // config_state - computed: true, optional: true, required: false
  private _configState?: string; 
  public get configState() {
    return this.getStringAttribute('config_state');
  }
  public set configState(value: string) {
    this._configState = value;
  }
  public resetConfigState() {
    this._configState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configStateInput() {
    return this._configState;
  }

  // recursive_next_hop - computed: true, optional: true, required: false
  private _recursiveNextHop?: boolean | cdktf.IResolvable; 
  public get recursiveNextHop() {
    return this.getBooleanAttribute('recursive_next_hop');
  }
  public set recursiveNextHop(value: boolean | cdktf.IResolvable) {
    this._recursiveNextHop = value;
  }
  public resetRecursiveNextHop() {
    this._recursiveNextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveNextHopInput() {
    return this._recursiveNextHop;
  }

  // sdwan_health_check_vm - computed: true, optional: true, required: false
  private _sdwanHealthCheckVm?: string; 
  public get sdwanHealthCheckVm() {
    return this.getStringAttribute('sdwan_health_check_vm');
  }
  public set sdwanHealthCheckVm(value: string) {
    this._sdwanHealthCheckVm = value;
  }
  public resetSdwanHealthCheckVm() {
    this._sdwanHealthCheckVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanHealthCheckVmInput() {
    return this._sdwanHealthCheckVm;
  }

  // sdwan_rule_enable - computed: true, optional: true, required: false
  private _sdwanRuleEnable?: boolean | cdktf.IResolvable; 
  public get sdwanRuleEnable() {
    return this.getBooleanAttribute('sdwan_rule_enable');
  }
  public set sdwanRuleEnable(value: boolean | cdktf.IResolvable) {
    this._sdwanRuleEnable = value;
  }
  public resetSdwanRuleEnable() {
    this._sdwanRuleEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanRuleEnableInput() {
    return this._sdwanRuleEnable;
  }
}
export interface PrivateAccessServiceConnectionsConfigBackupLinks {
  /**
  * alias for serivce connection additional overlay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#alias PrivateAccessServiceConnections#alias}
  */
  readonly alias?: string;
  /**
  * IPSEC authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#auth PrivateAccessServiceConnections#auth}
  */
  readonly auth?: string;
  /**
  * unique id for additional IPsec overlays.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#id PrivateAccessServiceConnections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * the name of IPSEC authentication certificate that uploaded to SASE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#ipsec_cert_name PrivateAccessServiceConnections#ipsec_cert_name}
  */
  readonly ipsecCertName?: string;
  /**
  * IKE version for IPSEC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#ipsec_ike_version PrivateAccessServiceConnections#ipsec_ike_version}
  */
  readonly ipsecIkeVersion?: string;
  /**
  * Peer PKI user name that created on SASE for IPSEC authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#ipsec_peer_name PrivateAccessServiceConnections#ipsec_peer_name}
  */
  readonly ipsecPeerName?: string;
  /**
  * IPSEC Remote Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#ipsec_remote_gw PrivateAccessServiceConnections#ipsec_remote_gw}
  */
  readonly ipsecRemoteGw?: string;
  /**
  * integer id for overlay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#overlay_network_id PrivateAccessServiceConnections#overlay_network_id}
  */
  readonly overlayNetworkId?: string;
}

export function privateAccessServiceConnectionsConfigBackupLinksToTerraform(struct?: PrivateAccessServiceConnectionsConfigBackupLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    auth: cdktf.stringToTerraform(struct!.auth),
    id: cdktf.stringToTerraform(struct!.id),
    ipsec_cert_name: cdktf.stringToTerraform(struct!.ipsecCertName),
    ipsec_ike_version: cdktf.stringToTerraform(struct!.ipsecIkeVersion),
    ipsec_peer_name: cdktf.stringToTerraform(struct!.ipsecPeerName),
    ipsec_remote_gw: cdktf.stringToTerraform(struct!.ipsecRemoteGw),
    overlay_network_id: cdktf.stringToTerraform(struct!.overlayNetworkId),
  }
}


export function privateAccessServiceConnectionsConfigBackupLinksToHclTerraform(struct?: PrivateAccessServiceConnectionsConfigBackupLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: cdktf.stringToHclTerraform(struct!.auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_cert_name: {
      value: cdktf.stringToHclTerraform(struct!.ipsecCertName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_ike_version: {
      value: cdktf.stringToHclTerraform(struct!.ipsecIkeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_peer_name: {
      value: cdktf.stringToHclTerraform(struct!.ipsecPeerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_remote_gw: {
      value: cdktf.stringToHclTerraform(struct!.ipsecRemoteGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overlay_network_id: {
      value: cdktf.stringToHclTerraform(struct!.overlayNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateAccessServiceConnectionsConfigBackupLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivateAccessServiceConnectionsConfigBackupLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipsecCertName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecCertName = this._ipsecCertName;
    }
    if (this._ipsecIkeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecIkeVersion = this._ipsecIkeVersion;
    }
    if (this._ipsecPeerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPeerName = this._ipsecPeerName;
    }
    if (this._ipsecRemoteGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecRemoteGw = this._ipsecRemoteGw;
    }
    if (this._overlayNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlayNetworkId = this._overlayNetworkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateAccessServiceConnectionsConfigBackupLinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._auth = undefined;
      this._id = undefined;
      this._ipsecCertName = undefined;
      this._ipsecIkeVersion = undefined;
      this._ipsecPeerName = undefined;
      this._ipsecRemoteGw = undefined;
      this._overlayNetworkId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._auth = value.auth;
      this._id = value.id;
      this._ipsecCertName = value.ipsecCertName;
      this._ipsecIkeVersion = value.ipsecIkeVersion;
      this._ipsecPeerName = value.ipsecPeerName;
      this._ipsecRemoteGw = value.ipsecRemoteGw;
      this._overlayNetworkId = value.overlayNetworkId;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // auth - computed: true, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
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

  // ipsec_cert_name - computed: true, optional: true, required: false
  private _ipsecCertName?: string; 
  public get ipsecCertName() {
    return this.getStringAttribute('ipsec_cert_name');
  }
  public set ipsecCertName(value: string) {
    this._ipsecCertName = value;
  }
  public resetIpsecCertName() {
    this._ipsecCertName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecCertNameInput() {
    return this._ipsecCertName;
  }

  // ipsec_ike_version - computed: true, optional: true, required: false
  private _ipsecIkeVersion?: string; 
  public get ipsecIkeVersion() {
    return this.getStringAttribute('ipsec_ike_version');
  }
  public set ipsecIkeVersion(value: string) {
    this._ipsecIkeVersion = value;
  }
  public resetIpsecIkeVersion() {
    this._ipsecIkeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecIkeVersionInput() {
    return this._ipsecIkeVersion;
  }

  // ipsec_peer_name - computed: true, optional: true, required: false
  private _ipsecPeerName?: string; 
  public get ipsecPeerName() {
    return this.getStringAttribute('ipsec_peer_name');
  }
  public set ipsecPeerName(value: string) {
    this._ipsecPeerName = value;
  }
  public resetIpsecPeerName() {
    this._ipsecPeerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPeerNameInput() {
    return this._ipsecPeerName;
  }

  // ipsec_remote_gw - computed: true, optional: true, required: false
  private _ipsecRemoteGw?: string; 
  public get ipsecRemoteGw() {
    return this.getStringAttribute('ipsec_remote_gw');
  }
  public set ipsecRemoteGw(value: string) {
    this._ipsecRemoteGw = value;
  }
  public resetIpsecRemoteGw() {
    this._ipsecRemoteGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecRemoteGwInput() {
    return this._ipsecRemoteGw;
  }

  // overlay_network_id - computed: true, optional: true, required: false
  private _overlayNetworkId?: string; 
  public get overlayNetworkId() {
    return this.getStringAttribute('overlay_network_id');
  }
  public set overlayNetworkId(value: string) {
    this._overlayNetworkId = value;
  }
  public resetOverlayNetworkId() {
    this._overlayNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayNetworkIdInput() {
    return this._overlayNetworkId;
  }
}

export class PrivateAccessServiceConnectionsConfigBackupLinksList extends cdktf.ComplexList {
  public internalValue? : PrivateAccessServiceConnectionsConfigBackupLinks[] | cdktf.IResolvable

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
  public get(index: number): PrivateAccessServiceConnectionsConfigBackupLinksOutputReference {
    return new PrivateAccessServiceConnectionsConfigBackupLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivateAccessServiceConnectionsConfigRegionCost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#fra_f1 PrivateAccessServiceConnections#fra_f1}
  */
  readonly fraF1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#iad_f1 PrivateAccessServiceConnections#iad_f1}
  */
  readonly iadF1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#lon_f1 PrivateAccessServiceConnections#lon_f1}
  */
  readonly lonF1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#sjc_f1 PrivateAccessServiceConnections#sjc_f1}
  */
  readonly sjcF1?: number;
}

export function privateAccessServiceConnectionsConfigRegionCostToTerraform(struct?: PrivateAccessServiceConnectionsConfigRegionCost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fra_f1: cdktf.numberToTerraform(struct!.fraF1),
    iad_f1: cdktf.numberToTerraform(struct!.iadF1),
    lon_f1: cdktf.numberToTerraform(struct!.lonF1),
    sjc_f1: cdktf.numberToTerraform(struct!.sjcF1),
  }
}


export function privateAccessServiceConnectionsConfigRegionCostToHclTerraform(struct?: PrivateAccessServiceConnectionsConfigRegionCost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fra_f1: {
      value: cdktf.numberToHclTerraform(struct!.fraF1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iad_f1: {
      value: cdktf.numberToHclTerraform(struct!.iadF1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lon_f1: {
      value: cdktf.numberToHclTerraform(struct!.lonF1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sjc_f1: {
      value: cdktf.numberToHclTerraform(struct!.sjcF1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateAccessServiceConnectionsConfigRegionCostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateAccessServiceConnectionsConfigRegionCost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fraF1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fraF1 = this._fraF1;
    }
    if (this._iadF1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.iadF1 = this._iadF1;
    }
    if (this._lonF1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.lonF1 = this._lonF1;
    }
    if (this._sjcF1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sjcF1 = this._sjcF1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateAccessServiceConnectionsConfigRegionCost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fraF1 = undefined;
      this._iadF1 = undefined;
      this._lonF1 = undefined;
      this._sjcF1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fraF1 = value.fraF1;
      this._iadF1 = value.iadF1;
      this._lonF1 = value.lonF1;
      this._sjcF1 = value.sjcF1;
    }
  }

  // fra_f1 - computed: true, optional: true, required: false
  private _fraF1?: number; 
  public get fraF1() {
    return this.getNumberAttribute('fra_f1');
  }
  public set fraF1(value: number) {
    this._fraF1 = value;
  }
  public resetFraF1() {
    this._fraF1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fraF1Input() {
    return this._fraF1;
  }

  // iad_f1 - computed: true, optional: true, required: false
  private _iadF1?: number; 
  public get iadF1() {
    return this.getNumberAttribute('iad_f1');
  }
  public set iadF1(value: number) {
    this._iadF1 = value;
  }
  public resetIadF1() {
    this._iadF1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iadF1Input() {
    return this._iadF1;
  }

  // lon_f1 - computed: true, optional: true, required: false
  private _lonF1?: number; 
  public get lonF1() {
    return this.getNumberAttribute('lon_f1');
  }
  public set lonF1(value: number) {
    this._lonF1 = value;
  }
  public resetLonF1() {
    this._lonF1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lonF1Input() {
    return this._lonF1;
  }

  // sjc_f1 - computed: true, optional: true, required: false
  private _sjcF1?: number; 
  public get sjcF1() {
    return this.getNumberAttribute('sjc_f1');
  }
  public set sjcF1(value: number) {
    this._sjcF1 = value;
  }
  public resetSjcF1() {
    this._sjcF1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sjcF1Input() {
    return this._sjcF1;
  }
}
export interface PrivateAccessServiceConnectionsConfigA {
  /**
  * alias for serivce connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#alias PrivateAccessServiceConnections#alias}
  */
  readonly alias?: string;
  /**
  * IPSEC authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#auth PrivateAccessServiceConnections#auth}
  */
  readonly auth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#backup_links PrivateAccessServiceConnections#backup_links}
  */
  readonly backupLinks?: PrivateAccessServiceConnectionsConfigBackupLinks[] | cdktf.IResolvable;
  /**
  * BGP Routing Peer IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#bgp_peer_ip PrivateAccessServiceConnections#bgp_peer_ip}
  */
  readonly bgpPeerIp?: string;
  /**
  * the name of IPSEC authentication certificate that uploaded to SASE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#ipsec_cert_name PrivateAccessServiceConnections#ipsec_cert_name}
  */
  readonly ipsecCertName?: string;
  /**
  * IKE version for IPSEC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#ipsec_ike_version PrivateAccessServiceConnections#ipsec_ike_version}
  */
  readonly ipsecIkeVersion?: string;
  /**
  * Peer PKI user name that created on SASE for IPSEC authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#ipsec_peer_name PrivateAccessServiceConnections#ipsec_peer_name}
  */
  readonly ipsecPeerName?: string;
  /**
  * IPSEC Remote Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#ipsec_remote_gw PrivateAccessServiceConnections#ipsec_remote_gw}
  */
  readonly ipsecRemoteGw?: string;
  /**
  * integer id for overlay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#overlay_network_id PrivateAccessServiceConnections#overlay_network_id}
  */
  readonly overlayNetworkId?: string;
  /**
  * cost value to determine the priority of SASE spokes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#region_cost PrivateAccessServiceConnections#region_cost}
  */
  readonly regionCost?: PrivateAccessServiceConnectionsConfigRegionCost;
  /**
  * route map tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#route_map_tag PrivateAccessServiceConnections#route_map_tag}
  */
  readonly routeMapTag?: string;
}

export function privateAccessServiceConnectionsConfigAToTerraform(struct?: PrivateAccessServiceConnectionsConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    auth: cdktf.stringToTerraform(struct!.auth),
    backup_links: cdktf.listMapper(privateAccessServiceConnectionsConfigBackupLinksToTerraform, false)(struct!.backupLinks),
    bgp_peer_ip: cdktf.stringToTerraform(struct!.bgpPeerIp),
    ipsec_cert_name: cdktf.stringToTerraform(struct!.ipsecCertName),
    ipsec_ike_version: cdktf.stringToTerraform(struct!.ipsecIkeVersion),
    ipsec_peer_name: cdktf.stringToTerraform(struct!.ipsecPeerName),
    ipsec_remote_gw: cdktf.stringToTerraform(struct!.ipsecRemoteGw),
    overlay_network_id: cdktf.stringToTerraform(struct!.overlayNetworkId),
    region_cost: privateAccessServiceConnectionsConfigRegionCostToTerraform(struct!.regionCost),
    route_map_tag: cdktf.stringToTerraform(struct!.routeMapTag),
  }
}


export function privateAccessServiceConnectionsConfigAToHclTerraform(struct?: PrivateAccessServiceConnectionsConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: cdktf.stringToHclTerraform(struct!.auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_links: {
      value: cdktf.listMapperHcl(privateAccessServiceConnectionsConfigBackupLinksToHclTerraform, false)(struct!.backupLinks),
      isBlock: true,
      type: "list",
      storageClassType: "PrivateAccessServiceConnectionsConfigBackupLinksList",
    },
    bgp_peer_ip: {
      value: cdktf.stringToHclTerraform(struct!.bgpPeerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_cert_name: {
      value: cdktf.stringToHclTerraform(struct!.ipsecCertName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_ike_version: {
      value: cdktf.stringToHclTerraform(struct!.ipsecIkeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_peer_name: {
      value: cdktf.stringToHclTerraform(struct!.ipsecPeerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_remote_gw: {
      value: cdktf.stringToHclTerraform(struct!.ipsecRemoteGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overlay_network_id: {
      value: cdktf.stringToHclTerraform(struct!.overlayNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_cost: {
      value: privateAccessServiceConnectionsConfigRegionCostToHclTerraform(struct!.regionCost),
      isBlock: true,
      type: "struct",
      storageClassType: "PrivateAccessServiceConnectionsConfigRegionCost",
    },
    route_map_tag: {
      value: cdktf.stringToHclTerraform(struct!.routeMapTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateAccessServiceConnectionsConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateAccessServiceConnectionsConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth;
    }
    if (this._backupLinks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupLinks = this._backupLinks?.internalValue;
    }
    if (this._bgpPeerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpPeerIp = this._bgpPeerIp;
    }
    if (this._ipsecCertName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecCertName = this._ipsecCertName;
    }
    if (this._ipsecIkeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecIkeVersion = this._ipsecIkeVersion;
    }
    if (this._ipsecPeerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPeerName = this._ipsecPeerName;
    }
    if (this._ipsecRemoteGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecRemoteGw = this._ipsecRemoteGw;
    }
    if (this._overlayNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlayNetworkId = this._overlayNetworkId;
    }
    if (this._regionCost?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionCost = this._regionCost?.internalValue;
    }
    if (this._routeMapTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapTag = this._routeMapTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateAccessServiceConnectionsConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alias = undefined;
      this._auth = undefined;
      this._backupLinks.internalValue = undefined;
      this._bgpPeerIp = undefined;
      this._ipsecCertName = undefined;
      this._ipsecIkeVersion = undefined;
      this._ipsecPeerName = undefined;
      this._ipsecRemoteGw = undefined;
      this._overlayNetworkId = undefined;
      this._regionCost.internalValue = undefined;
      this._routeMapTag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alias = value.alias;
      this._auth = value.auth;
      this._backupLinks.internalValue = value.backupLinks;
      this._bgpPeerIp = value.bgpPeerIp;
      this._ipsecCertName = value.ipsecCertName;
      this._ipsecIkeVersion = value.ipsecIkeVersion;
      this._ipsecPeerName = value.ipsecPeerName;
      this._ipsecRemoteGw = value.ipsecRemoteGw;
      this._overlayNetworkId = value.overlayNetworkId;
      this._regionCost.internalValue = value.regionCost;
      this._routeMapTag = value.routeMapTag;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // auth - computed: true, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // backup_links - computed: true, optional: true, required: false
  private _backupLinks = new PrivateAccessServiceConnectionsConfigBackupLinksList(this, "backup_links", false);
  public get backupLinks() {
    return this._backupLinks;
  }
  public putBackupLinks(value: PrivateAccessServiceConnectionsConfigBackupLinks[] | cdktf.IResolvable) {
    this._backupLinks.internalValue = value;
  }
  public resetBackupLinks() {
    this._backupLinks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupLinksInput() {
    return this._backupLinks.internalValue;
  }

  // bgp_peer_ip - computed: true, optional: true, required: false
  private _bgpPeerIp?: string; 
  public get bgpPeerIp() {
    return this.getStringAttribute('bgp_peer_ip');
  }
  public set bgpPeerIp(value: string) {
    this._bgpPeerIp = value;
  }
  public resetBgpPeerIp() {
    this._bgpPeerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPeerIpInput() {
    return this._bgpPeerIp;
  }

  // ipsec_cert_name - computed: true, optional: true, required: false
  private _ipsecCertName?: string; 
  public get ipsecCertName() {
    return this.getStringAttribute('ipsec_cert_name');
  }
  public set ipsecCertName(value: string) {
    this._ipsecCertName = value;
  }
  public resetIpsecCertName() {
    this._ipsecCertName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecCertNameInput() {
    return this._ipsecCertName;
  }

  // ipsec_ike_version - computed: true, optional: true, required: false
  private _ipsecIkeVersion?: string; 
  public get ipsecIkeVersion() {
    return this.getStringAttribute('ipsec_ike_version');
  }
  public set ipsecIkeVersion(value: string) {
    this._ipsecIkeVersion = value;
  }
  public resetIpsecIkeVersion() {
    this._ipsecIkeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecIkeVersionInput() {
    return this._ipsecIkeVersion;
  }

  // ipsec_peer_name - computed: true, optional: true, required: false
  private _ipsecPeerName?: string; 
  public get ipsecPeerName() {
    return this.getStringAttribute('ipsec_peer_name');
  }
  public set ipsecPeerName(value: string) {
    this._ipsecPeerName = value;
  }
  public resetIpsecPeerName() {
    this._ipsecPeerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPeerNameInput() {
    return this._ipsecPeerName;
  }

  // ipsec_remote_gw - computed: true, optional: true, required: false
  private _ipsecRemoteGw?: string; 
  public get ipsecRemoteGw() {
    return this.getStringAttribute('ipsec_remote_gw');
  }
  public set ipsecRemoteGw(value: string) {
    this._ipsecRemoteGw = value;
  }
  public resetIpsecRemoteGw() {
    this._ipsecRemoteGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecRemoteGwInput() {
    return this._ipsecRemoteGw;
  }

  // overlay_network_id - computed: true, optional: true, required: false
  private _overlayNetworkId?: string; 
  public get overlayNetworkId() {
    return this.getStringAttribute('overlay_network_id');
  }
  public set overlayNetworkId(value: string) {
    this._overlayNetworkId = value;
  }
  public resetOverlayNetworkId() {
    this._overlayNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayNetworkIdInput() {
    return this._overlayNetworkId;
  }

  // region_cost - computed: true, optional: true, required: false
  private _regionCost = new PrivateAccessServiceConnectionsConfigRegionCostOutputReference(this, "region_cost");
  public get regionCost() {
    return this._regionCost;
  }
  public putRegionCost(value: PrivateAccessServiceConnectionsConfigRegionCost) {
    this._regionCost.internalValue = value;
  }
  public resetRegionCost() {
    this._regionCost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionCostInput() {
    return this._regionCost.internalValue;
  }

  // route_map_tag - computed: true, optional: true, required: false
  private _routeMapTag?: string; 
  public get routeMapTag() {
    return this.getStringAttribute('route_map_tag');
  }
  public set routeMapTag(value: string) {
    this._routeMapTag = value;
  }
  public resetRouteMapTag() {
    this._routeMapTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapTagInput() {
    return this._routeMapTag;
  }
}
export interface PrivateAccessServiceConnectionsIpAssigned {
  /**
  * BGP Router ID generated from Router ID Subnets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#bgp_router_id PrivateAccessServiceConnections#bgp_router_id}
  */
  readonly bgpRouterId?: string;
  /**
  * unique id for bgp router id assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#id PrivateAccessServiceConnections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * air port code for SASE spoke physical region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#region PrivateAccessServiceConnections#region}
  */
  readonly region?: string;
  /**
  * unique id related to network configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#sdwan_common_id PrivateAccessServiceConnections#sdwan_common_id}
  */
  readonly sdwanCommonId?: string;
  /**
  * id for SASE spoke
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#site_id PrivateAccessServiceConnections#site_id}
  */
  readonly siteId?: string;
}

export function privateAccessServiceConnectionsIpAssignedToTerraform(struct?: PrivateAccessServiceConnectionsIpAssigned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_router_id: cdktf.stringToTerraform(struct!.bgpRouterId),
    id: cdktf.stringToTerraform(struct!.id),
    region: cdktf.stringToTerraform(struct!.region),
    sdwan_common_id: cdktf.stringToTerraform(struct!.sdwanCommonId),
    site_id: cdktf.stringToTerraform(struct!.siteId),
  }
}


export function privateAccessServiceConnectionsIpAssignedToHclTerraform(struct?: PrivateAccessServiceConnectionsIpAssigned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_router_id: {
      value: cdktf.stringToHclTerraform(struct!.bgpRouterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_common_id: {
      value: cdktf.stringToHclTerraform(struct!.sdwanCommonId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_id: {
      value: cdktf.stringToHclTerraform(struct!.siteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateAccessServiceConnectionsIpAssignedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivateAccessServiceConnectionsIpAssigned | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpRouterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpRouterId = this._bgpRouterId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._sdwanCommonId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanCommonId = this._sdwanCommonId;
    }
    if (this._siteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteId = this._siteId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateAccessServiceConnectionsIpAssigned | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bgpRouterId = undefined;
      this._id = undefined;
      this._region = undefined;
      this._sdwanCommonId = undefined;
      this._siteId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bgpRouterId = value.bgpRouterId;
      this._id = value.id;
      this._region = value.region;
      this._sdwanCommonId = value.sdwanCommonId;
      this._siteId = value.siteId;
    }
  }

  // bgp_router_id - computed: true, optional: true, required: false
  private _bgpRouterId?: string; 
  public get bgpRouterId() {
    return this.getStringAttribute('bgp_router_id');
  }
  public set bgpRouterId(value: string) {
    this._bgpRouterId = value;
  }
  public resetBgpRouterId() {
    this._bgpRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRouterIdInput() {
    return this._bgpRouterId;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sdwan_common_id - computed: true, optional: true, required: false
  private _sdwanCommonId?: string; 
  public get sdwanCommonId() {
    return this.getStringAttribute('sdwan_common_id');
  }
  public set sdwanCommonId(value: string) {
    this._sdwanCommonId = value;
  }
  public resetSdwanCommonId() {
    this._sdwanCommonId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanCommonIdInput() {
    return this._sdwanCommonId;
  }

  // site_id - computed: true, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }
}

export class PrivateAccessServiceConnectionsIpAssignedList extends cdktf.ComplexList {
  public internalValue? : PrivateAccessServiceConnectionsIpAssigned[] | cdktf.IResolvable

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
  public get(index: number): PrivateAccessServiceConnectionsIpAssignedOutputReference {
    return new PrivateAccessServiceConnectionsIpAssignedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivateAccessServiceConnectionsRegionCost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#fra_f1 PrivateAccessServiceConnections#fra_f1}
  */
  readonly fraF1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#iad_f1 PrivateAccessServiceConnections#iad_f1}
  */
  readonly iadF1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#lon_f1 PrivateAccessServiceConnections#lon_f1}
  */
  readonly lonF1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#sjc_f1 PrivateAccessServiceConnections#sjc_f1}
  */
  readonly sjcF1?: number;
}

export function privateAccessServiceConnectionsRegionCostToTerraform(struct?: PrivateAccessServiceConnectionsRegionCost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fra_f1: cdktf.numberToTerraform(struct!.fraF1),
    iad_f1: cdktf.numberToTerraform(struct!.iadF1),
    lon_f1: cdktf.numberToTerraform(struct!.lonF1),
    sjc_f1: cdktf.numberToTerraform(struct!.sjcF1),
  }
}


export function privateAccessServiceConnectionsRegionCostToHclTerraform(struct?: PrivateAccessServiceConnectionsRegionCost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fra_f1: {
      value: cdktf.numberToHclTerraform(struct!.fraF1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iad_f1: {
      value: cdktf.numberToHclTerraform(struct!.iadF1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lon_f1: {
      value: cdktf.numberToHclTerraform(struct!.lonF1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sjc_f1: {
      value: cdktf.numberToHclTerraform(struct!.sjcF1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateAccessServiceConnectionsRegionCostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateAccessServiceConnectionsRegionCost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fraF1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fraF1 = this._fraF1;
    }
    if (this._iadF1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.iadF1 = this._iadF1;
    }
    if (this._lonF1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.lonF1 = this._lonF1;
    }
    if (this._sjcF1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sjcF1 = this._sjcF1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateAccessServiceConnectionsRegionCost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fraF1 = undefined;
      this._iadF1 = undefined;
      this._lonF1 = undefined;
      this._sjcF1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fraF1 = value.fraF1;
      this._iadF1 = value.iadF1;
      this._lonF1 = value.lonF1;
      this._sjcF1 = value.sjcF1;
    }
  }

  // fra_f1 - computed: true, optional: true, required: false
  private _fraF1?: number; 
  public get fraF1() {
    return this.getNumberAttribute('fra_f1');
  }
  public set fraF1(value: number) {
    this._fraF1 = value;
  }
  public resetFraF1() {
    this._fraF1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fraF1Input() {
    return this._fraF1;
  }

  // iad_f1 - computed: true, optional: true, required: false
  private _iadF1?: number; 
  public get iadF1() {
    return this.getNumberAttribute('iad_f1');
  }
  public set iadF1(value: number) {
    this._iadF1 = value;
  }
  public resetIadF1() {
    this._iadF1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iadF1Input() {
    return this._iadF1;
  }

  // lon_f1 - computed: true, optional: true, required: false
  private _lonF1?: number; 
  public get lonF1() {
    return this.getNumberAttribute('lon_f1');
  }
  public set lonF1(value: number) {
    this._lonF1 = value;
  }
  public resetLonF1() {
    this._lonF1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lonF1Input() {
    return this._lonF1;
  }

  // sjc_f1 - computed: true, optional: true, required: false
  private _sjcF1?: number; 
  public get sjcF1() {
    return this.getNumberAttribute('sjc_f1');
  }
  public set sjcF1(value: number) {
    this._sjcF1 = value;
  }
  public resetSjcF1() {
    this._sjcF1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sjcF1Input() {
    return this._sjcF1;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections fortisase_private_access_service_connections}
*/
export class PrivateAccessServiceConnections extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_private_access_service_connections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateAccessServiceConnections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateAccessServiceConnections to import
  * @param importFromId The id of the existing PrivateAccessServiceConnections that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateAccessServiceConnections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_private_access_service_connections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections fortisase_private_access_service_connections} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateAccessServiceConnectionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PrivateAccessServiceConnectionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortisase_private_access_service_connections',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._auth = config.auth;
    this._backupLinks.internalValue = config.backupLinks;
    this._bgpPeerIp = config.bgpPeerIp;
    this._ipsecCertName = config.ipsecCertName;
    this._ipsecIkeVersion = config.ipsecIkeVersion;
    this._ipsecPeerName = config.ipsecPeerName;
    this._ipsecPreSharedKey = config.ipsecPreSharedKey;
    this._ipsecRemoteGw = config.ipsecRemoteGw;
    this._overlayNetworkId = config.overlayNetworkId;
    this._regionCost.internalValue = config.regionCost;
    this._routeMapTag = config.routeMapTag;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // auth - computed: false, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // backup_links - computed: false, optional: true, required: false
  private _backupLinks = new PrivateAccessServiceConnectionsBackupLinksList(this, "backup_links", false);
  public get backupLinks() {
    return this._backupLinks;
  }
  public putBackupLinks(value: PrivateAccessServiceConnectionsBackupLinks[] | cdktf.IResolvable) {
    this._backupLinks.internalValue = value;
  }
  public resetBackupLinks() {
    this._backupLinks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupLinksInput() {
    return this._backupLinks.internalValue;
  }

  // bgp_peer_ip - computed: false, optional: true, required: false
  private _bgpPeerIp?: string; 
  public get bgpPeerIp() {
    return this.getStringAttribute('bgp_peer_ip');
  }
  public set bgpPeerIp(value: string) {
    this._bgpPeerIp = value;
  }
  public resetBgpPeerIp() {
    this._bgpPeerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPeerIpInput() {
    return this._bgpPeerIp;
  }

  // common_config - computed: true, optional: false, required: false
  private _commonConfig = new PrivateAccessServiceConnectionsCommonConfigOutputReference(this, "common_config");
  public get commonConfig() {
    return this._commonConfig;
  }

  // config - computed: true, optional: false, required: false
  private _config = new PrivateAccessServiceConnectionsConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // config_state - computed: true, optional: false, required: false
  public get configState() {
    return this.getStringAttribute('config_state');
  }

  // failed_message - computed: true, optional: false, required: false
  public get failedMessage() {
    return this.getStringAttribute('failed_message');
  }

  // ftntid - computed: true, optional: false, required: false
  public get ftntid() {
    return this.getStringAttribute('ftntid');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_assigned - computed: true, optional: false, required: false
  private _ipAssigned = new PrivateAccessServiceConnectionsIpAssignedList(this, "ip_assigned", false);
  public get ipAssigned() {
    return this._ipAssigned;
  }

  // ipsec_cert_name - computed: false, optional: true, required: false
  private _ipsecCertName?: string; 
  public get ipsecCertName() {
    return this.getStringAttribute('ipsec_cert_name');
  }
  public set ipsecCertName(value: string) {
    this._ipsecCertName = value;
  }
  public resetIpsecCertName() {
    this._ipsecCertName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecCertNameInput() {
    return this._ipsecCertName;
  }

  // ipsec_ike_version - computed: false, optional: true, required: false
  private _ipsecIkeVersion?: string; 
  public get ipsecIkeVersion() {
    return this.getStringAttribute('ipsec_ike_version');
  }
  public set ipsecIkeVersion(value: string) {
    this._ipsecIkeVersion = value;
  }
  public resetIpsecIkeVersion() {
    this._ipsecIkeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecIkeVersionInput() {
    return this._ipsecIkeVersion;
  }

  // ipsec_peer_name - computed: false, optional: true, required: false
  private _ipsecPeerName?: string; 
  public get ipsecPeerName() {
    return this.getStringAttribute('ipsec_peer_name');
  }
  public set ipsecPeerName(value: string) {
    this._ipsecPeerName = value;
  }
  public resetIpsecPeerName() {
    this._ipsecPeerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPeerNameInput() {
    return this._ipsecPeerName;
  }

  // ipsec_pre_shared_key - computed: false, optional: true, required: false
  private _ipsecPreSharedKey?: string; 
  public get ipsecPreSharedKey() {
    return this.getStringAttribute('ipsec_pre_shared_key');
  }
  public set ipsecPreSharedKey(value: string) {
    this._ipsecPreSharedKey = value;
  }
  public resetIpsecPreSharedKey() {
    this._ipsecPreSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPreSharedKeyInput() {
    return this._ipsecPreSharedKey;
  }

  // ipsec_remote_gw - computed: false, optional: true, required: false
  private _ipsecRemoteGw?: string; 
  public get ipsecRemoteGw() {
    return this.getStringAttribute('ipsec_remote_gw');
  }
  public set ipsecRemoteGw(value: string) {
    this._ipsecRemoteGw = value;
  }
  public resetIpsecRemoteGw() {
    this._ipsecRemoteGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecRemoteGwInput() {
    return this._ipsecRemoteGw;
  }

  // overlay_network_id - computed: false, optional: true, required: false
  private _overlayNetworkId?: string; 
  public get overlayNetworkId() {
    return this.getStringAttribute('overlay_network_id');
  }
  public set overlayNetworkId(value: string) {
    this._overlayNetworkId = value;
  }
  public resetOverlayNetworkId() {
    this._overlayNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayNetworkIdInput() {
    return this._overlayNetworkId;
  }

  // region_cost - computed: false, optional: true, required: false
  private _regionCost = new PrivateAccessServiceConnectionsRegionCostOutputReference(this, "region_cost");
  public get regionCost() {
    return this._regionCost;
  }
  public putRegionCost(value: PrivateAccessServiceConnectionsRegionCost) {
    this._regionCost.internalValue = value;
  }
  public resetRegionCost() {
    this._regionCost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionCostInput() {
    return this._regionCost.internalValue;
  }

  // route_map_tag - computed: false, optional: true, required: false
  private _routeMapTag?: string; 
  public get routeMapTag() {
    return this.getStringAttribute('route_map_tag');
  }
  public set routeMapTag(value: string) {
    this._routeMapTag = value;
  }
  public resetRouteMapTag() {
    this._routeMapTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapTagInput() {
    return this._routeMapTag;
  }

  // seq_num - computed: true, optional: false, required: false
  public get seqNum() {
    return this.getNumberAttribute('seq_num');
  }

  // service_connection_id - computed: true, optional: false, required: false
  public get serviceConnectionId() {
    return this.getStringAttribute('service_connection_id');
  }

  // type - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      auth: cdktf.stringToTerraform(this._auth),
      backup_links: cdktf.listMapper(privateAccessServiceConnectionsBackupLinksToTerraform, false)(this._backupLinks.internalValue),
      bgp_peer_ip: cdktf.stringToTerraform(this._bgpPeerIp),
      ipsec_cert_name: cdktf.stringToTerraform(this._ipsecCertName),
      ipsec_ike_version: cdktf.stringToTerraform(this._ipsecIkeVersion),
      ipsec_peer_name: cdktf.stringToTerraform(this._ipsecPeerName),
      ipsec_pre_shared_key: cdktf.stringToTerraform(this._ipsecPreSharedKey),
      ipsec_remote_gw: cdktf.stringToTerraform(this._ipsecRemoteGw),
      overlay_network_id: cdktf.stringToTerraform(this._overlayNetworkId),
      region_cost: privateAccessServiceConnectionsRegionCostToTerraform(this._regionCost.internalValue),
      route_map_tag: cdktf.stringToTerraform(this._routeMapTag),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth: {
        value: cdktf.stringToHclTerraform(this._auth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_links: {
        value: cdktf.listMapperHcl(privateAccessServiceConnectionsBackupLinksToHclTerraform, false)(this._backupLinks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivateAccessServiceConnectionsBackupLinksList",
      },
      bgp_peer_ip: {
        value: cdktf.stringToHclTerraform(this._bgpPeerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_cert_name: {
        value: cdktf.stringToHclTerraform(this._ipsecCertName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_ike_version: {
        value: cdktf.stringToHclTerraform(this._ipsecIkeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_peer_name: {
        value: cdktf.stringToHclTerraform(this._ipsecPeerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_pre_shared_key: {
        value: cdktf.stringToHclTerraform(this._ipsecPreSharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_remote_gw: {
        value: cdktf.stringToHclTerraform(this._ipsecRemoteGw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overlay_network_id: {
        value: cdktf.stringToHclTerraform(this._overlayNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_cost: {
        value: privateAccessServiceConnectionsRegionCostToHclTerraform(this._regionCost.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrivateAccessServiceConnectionsRegionCost",
      },
      route_map_tag: {
        value: cdktf.stringToHclTerraform(this._routeMapTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
