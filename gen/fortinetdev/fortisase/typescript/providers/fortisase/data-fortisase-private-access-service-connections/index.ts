// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisasePrivateAccessServiceConnectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * alias for serivce connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#alias DataFortisasePrivateAccessServiceConnections#alias}
  */
  readonly alias?: string;
  /**
  * IPSEC authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#auth DataFortisasePrivateAccessServiceConnections#auth}
  */
  readonly auth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#backup_links DataFortisasePrivateAccessServiceConnections#backup_links}
  */
  readonly backupLinks?: DataFortisasePrivateAccessServiceConnectionsBackupLinks[] | cdktf.IResolvable;
  /**
  * BGP Routing Peer IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#bgp_peer_ip DataFortisasePrivateAccessServiceConnections#bgp_peer_ip}
  */
  readonly bgpPeerIp?: string;
  /**
  * the name of IPSEC authentication certificate that uploaded to SASE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#ipsec_cert_name DataFortisasePrivateAccessServiceConnections#ipsec_cert_name}
  */
  readonly ipsecCertName?: string;
  /**
  * IKE version for IPSEC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#ipsec_ike_version DataFortisasePrivateAccessServiceConnections#ipsec_ike_version}
  */
  readonly ipsecIkeVersion?: string;
  /**
  * Peer PKI user name that created on SASE for IPSEC authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#ipsec_peer_name DataFortisasePrivateAccessServiceConnections#ipsec_peer_name}
  */
  readonly ipsecPeerName?: string;
  /**
  * IPSEC auth by pre shared key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#ipsec_pre_shared_key DataFortisasePrivateAccessServiceConnections#ipsec_pre_shared_key}
  */
  readonly ipsecPreSharedKey?: string;
  /**
  * IPSEC Remote Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#ipsec_remote_gw DataFortisasePrivateAccessServiceConnections#ipsec_remote_gw}
  */
  readonly ipsecRemoteGw?: string;
  /**
  * integer id for overlay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#overlay_network_id DataFortisasePrivateAccessServiceConnections#overlay_network_id}
  */
  readonly overlayNetworkId?: string;
  /**
  * Cost value to determine the priority of SASE spokes. Default cost is 5 if not provided through initial api request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#region_cost DataFortisasePrivateAccessServiceConnections#region_cost}
  */
  readonly regionCost?: DataFortisasePrivateAccessServiceConnectionsRegionCost;
  /**
  * route map tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#route_map_tag DataFortisasePrivateAccessServiceConnections#route_map_tag}
  */
  readonly routeMapTag?: string;
  /**
  * the unique uuid for service connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#service_connection_id DataFortisasePrivateAccessServiceConnections#service_connection_id}
  */
  readonly serviceConnectionId: string;
  /**
  * BGP Routing Design. Must be same as network configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#type DataFortisasePrivateAccessServiceConnections#type}
  */
  readonly type?: string;
}
export interface DataFortisasePrivateAccessServiceConnectionsBackupLinksCreate {
  /**
  * alias for serivce connection additional overlay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#alias DataFortisasePrivateAccessServiceConnections#alias}
  */
  readonly alias?: string;
  /**
  * IPSEC authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#auth DataFortisasePrivateAccessServiceConnections#auth}
  */
  readonly auth?: string;
  /**
  * the name of IPSEC authentication certificate that uploaded to SASE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#ipsec_cert_name DataFortisasePrivateAccessServiceConnections#ipsec_cert_name}
  */
  readonly ipsecCertName?: string;
  /**
  * IKE version for IPSEC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#ipsec_ike_version DataFortisasePrivateAccessServiceConnections#ipsec_ike_version}
  */
  readonly ipsecIkeVersion?: string;
  /**
  * Peer PKI user name that created on SASE for IPSEC authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#ipsec_peer_name DataFortisasePrivateAccessServiceConnections#ipsec_peer_name}
  */
  readonly ipsecPeerName?: string;
  /**
  * IPSEC auth by pre shared key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#ipsec_pre_shared_key DataFortisasePrivateAccessServiceConnections#ipsec_pre_shared_key}
  */
  readonly ipsecPreSharedKey?: string;
  /**
  * IPSEC Remote Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#ipsec_remote_gw DataFortisasePrivateAccessServiceConnections#ipsec_remote_gw}
  */
  readonly ipsecRemoteGw?: string;
  /**
  * integer id for overlay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#overlay_network_id DataFortisasePrivateAccessServiceConnections#overlay_network_id}
  */
  readonly overlayNetworkId?: string;
}

export function dataFortisasePrivateAccessServiceConnectionsBackupLinksCreateToTerraform(struct?: DataFortisasePrivateAccessServiceConnectionsBackupLinksCreate | cdktf.IResolvable): any {
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


export function dataFortisasePrivateAccessServiceConnectionsBackupLinksCreateToHclTerraform(struct?: DataFortisasePrivateAccessServiceConnectionsBackupLinksCreate | cdktf.IResolvable): any {
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

export class DataFortisasePrivateAccessServiceConnectionsBackupLinksCreateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisasePrivateAccessServiceConnectionsBackupLinksCreate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataFortisasePrivateAccessServiceConnectionsBackupLinksCreate | cdktf.IResolvable | undefined) {
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

export class DataFortisasePrivateAccessServiceConnectionsBackupLinksCreateList extends cdktf.ComplexList {
  public internalValue? : DataFortisasePrivateAccessServiceConnectionsBackupLinksCreate[] | cdktf.IResolvable

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
  public get(index: number): DataFortisasePrivateAccessServiceConnectionsBackupLinksCreateOutputReference {
    return new DataFortisasePrivateAccessServiceConnectionsBackupLinksCreateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisasePrivateAccessServiceConnectionsBackupLinksDelete {
  /**
  * unique id for additional IPsec overlays.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#id DataFortisasePrivateAccessServiceConnections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function dataFortisasePrivateAccessServiceConnectionsBackupLinksDeleteToTerraform(struct?: DataFortisasePrivateAccessServiceConnectionsBackupLinksDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataFortisasePrivateAccessServiceConnectionsBackupLinksDeleteToHclTerraform(struct?: DataFortisasePrivateAccessServiceConnectionsBackupLinksDelete | cdktf.IResolvable): any {
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

export class DataFortisasePrivateAccessServiceConnectionsBackupLinksDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisasePrivateAccessServiceConnectionsBackupLinksDelete | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataFortisasePrivateAccessServiceConnectionsBackupLinksDelete | cdktf.IResolvable | undefined) {
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

export class DataFortisasePrivateAccessServiceConnectionsBackupLinksDeleteList extends cdktf.ComplexList {
  public internalValue? : DataFortisasePrivateAccessServiceConnectionsBackupLinksDelete[] | cdktf.IResolvable

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
  public get(index: number): DataFortisasePrivateAccessServiceConnectionsBackupLinksDeleteOutputReference {
    return new DataFortisasePrivateAccessServiceConnectionsBackupLinksDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisasePrivateAccessServiceConnectionsBackupLinksUpdate {
  /**
  * alias for serivce connection additional overlay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#alias DataFortisasePrivateAccessServiceConnections#alias}
  */
  readonly alias?: string;
  /**
  * IPSEC authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#auth DataFortisasePrivateAccessServiceConnections#auth}
  */
  readonly auth?: string;
  /**
  * unique id for additional IPsec overlays.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#id DataFortisasePrivateAccessServiceConnections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * the name of IPSEC authentication certificate that uploaded to SASE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#ipsec_cert_name DataFortisasePrivateAccessServiceConnections#ipsec_cert_name}
  */
  readonly ipsecCertName?: string;
  /**
  * IKE version for IPSEC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#ipsec_ike_version DataFortisasePrivateAccessServiceConnections#ipsec_ike_version}
  */
  readonly ipsecIkeVersion?: string;
  /**
  * Peer PKI user name that created on SASE for IPSEC authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#ipsec_peer_name DataFortisasePrivateAccessServiceConnections#ipsec_peer_name}
  */
  readonly ipsecPeerName?: string;
  /**
  * IPSEC auth by pre shared key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#ipsec_pre_shared_key DataFortisasePrivateAccessServiceConnections#ipsec_pre_shared_key}
  */
  readonly ipsecPreSharedKey?: string;
  /**
  * IPSEC Remote Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#ipsec_remote_gw DataFortisasePrivateAccessServiceConnections#ipsec_remote_gw}
  */
  readonly ipsecRemoteGw?: string;
  /**
  * integer id for overlay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#overlay_network_id DataFortisasePrivateAccessServiceConnections#overlay_network_id}
  */
  readonly overlayNetworkId?: string;
}

export function dataFortisasePrivateAccessServiceConnectionsBackupLinksUpdateToTerraform(struct?: DataFortisasePrivateAccessServiceConnectionsBackupLinksUpdate | cdktf.IResolvable): any {
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


export function dataFortisasePrivateAccessServiceConnectionsBackupLinksUpdateToHclTerraform(struct?: DataFortisasePrivateAccessServiceConnectionsBackupLinksUpdate | cdktf.IResolvable): any {
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

export class DataFortisasePrivateAccessServiceConnectionsBackupLinksUpdateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisasePrivateAccessServiceConnectionsBackupLinksUpdate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataFortisasePrivateAccessServiceConnectionsBackupLinksUpdate | cdktf.IResolvable | undefined) {
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

export class DataFortisasePrivateAccessServiceConnectionsBackupLinksUpdateList extends cdktf.ComplexList {
  public internalValue? : DataFortisasePrivateAccessServiceConnectionsBackupLinksUpdate[] | cdktf.IResolvable

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
  public get(index: number): DataFortisasePrivateAccessServiceConnectionsBackupLinksUpdateOutputReference {
    return new DataFortisasePrivateAccessServiceConnectionsBackupLinksUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisasePrivateAccessServiceConnectionsBackupLinks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#create DataFortisasePrivateAccessServiceConnections#create}
  */
  readonly create?: DataFortisasePrivateAccessServiceConnectionsBackupLinksCreate[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#delete DataFortisasePrivateAccessServiceConnections#delete}
  */
  readonly delete?: DataFortisasePrivateAccessServiceConnectionsBackupLinksDelete[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#update DataFortisasePrivateAccessServiceConnections#update}
  */
  readonly update?: DataFortisasePrivateAccessServiceConnectionsBackupLinksUpdate[] | cdktf.IResolvable;
}

export function dataFortisasePrivateAccessServiceConnectionsBackupLinksToTerraform(struct?: DataFortisasePrivateAccessServiceConnectionsBackupLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.listMapper(dataFortisasePrivateAccessServiceConnectionsBackupLinksCreateToTerraform, false)(struct!.create),
    delete: cdktf.listMapper(dataFortisasePrivateAccessServiceConnectionsBackupLinksDeleteToTerraform, false)(struct!.delete),
    update: cdktf.listMapper(dataFortisasePrivateAccessServiceConnectionsBackupLinksUpdateToTerraform, false)(struct!.update),
  }
}


export function dataFortisasePrivateAccessServiceConnectionsBackupLinksToHclTerraform(struct?: DataFortisasePrivateAccessServiceConnectionsBackupLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.listMapperHcl(dataFortisasePrivateAccessServiceConnectionsBackupLinksCreateToHclTerraform, false)(struct!.create),
      isBlock: true,
      type: "list",
      storageClassType: "DataFortisasePrivateAccessServiceConnectionsBackupLinksCreateList",
    },
    delete: {
      value: cdktf.listMapperHcl(dataFortisasePrivateAccessServiceConnectionsBackupLinksDeleteToHclTerraform, false)(struct!.delete),
      isBlock: true,
      type: "list",
      storageClassType: "DataFortisasePrivateAccessServiceConnectionsBackupLinksDeleteList",
    },
    update: {
      value: cdktf.listMapperHcl(dataFortisasePrivateAccessServiceConnectionsBackupLinksUpdateToHclTerraform, false)(struct!.update),
      isBlock: true,
      type: "list",
      storageClassType: "DataFortisasePrivateAccessServiceConnectionsBackupLinksUpdateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisasePrivateAccessServiceConnectionsBackupLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisasePrivateAccessServiceConnectionsBackupLinks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataFortisasePrivateAccessServiceConnectionsBackupLinks | cdktf.IResolvable | undefined) {
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
  private _create = new DataFortisasePrivateAccessServiceConnectionsBackupLinksCreateList(this, "create", false);
  public get create() {
    return this._create;
  }
  public putCreate(value: DataFortisasePrivateAccessServiceConnectionsBackupLinksCreate[] | cdktf.IResolvable) {
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
  private _delete = new DataFortisasePrivateAccessServiceConnectionsBackupLinksDeleteList(this, "delete", false);
  public get delete() {
    return this._delete;
  }
  public putDelete(value: DataFortisasePrivateAccessServiceConnectionsBackupLinksDelete[] | cdktf.IResolvable) {
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
  private _update = new DataFortisasePrivateAccessServiceConnectionsBackupLinksUpdateList(this, "update", false);
  public get update() {
    return this._update;
  }
  public putUpdate(value: DataFortisasePrivateAccessServiceConnectionsBackupLinksUpdate[] | cdktf.IResolvable) {
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

export class DataFortisasePrivateAccessServiceConnectionsBackupLinksList extends cdktf.ComplexList {
  public internalValue? : DataFortisasePrivateAccessServiceConnectionsBackupLinks[] | cdktf.IResolvable

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
  public get(index: number): DataFortisasePrivateAccessServiceConnectionsBackupLinksOutputReference {
    return new DataFortisasePrivateAccessServiceConnectionsBackupLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisasePrivateAccessServiceConnectionsCommonConfig {
  /**
  * Autonomous System Number (ASN).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#as_number DataFortisasePrivateAccessServiceConnections#as_number}
  */
  readonly asNumber?: string;
  /**
  * BGP Routing Design.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#bgp_design DataFortisasePrivateAccessServiceConnections#bgp_design}
  */
  readonly bgpDesign?: string;
  /**
  * Available/unused subnet that can be used to assign loopback interface IP addresses used for BGP router IDs parameter on the FortiSASE security PoPs. /28 is the minimum subnet size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#bgp_router_ids_subnet DataFortisasePrivateAccessServiceConnections#bgp_router_ids_subnet}
  */
  readonly bgpRouterIdsSubnet?: string;
  /**
  * Configuration state of network configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#config_state DataFortisasePrivateAccessServiceConnections#config_state}
  */
  readonly configState?: string;
  /**
  * BGP Recursive Routing. Enabling this setting allows for interhub connectivity. When use BGP design on-loopback this has to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#recursive_next_hop DataFortisasePrivateAccessServiceConnections#recursive_next_hop}
  */
  readonly recursiveNextHop?: boolean | cdktf.IResolvable;
  /**
  * Health Check IP. Must be provided when enable sdwan rule which used to obtain Jitter, latency and packet loss measurements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#sdwan_health_check_vm DataFortisasePrivateAccessServiceConnections#sdwan_health_check_vm}
  */
  readonly sdwanHealthCheckVm?: string;
  /**
  * Hub Selection Method. Enabling this setting the highest priority service connection that meets minimum SLA requirements is selected. Otherwise BGP MED (Multi-Exit Discriminator) will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#sdwan_rule_enable DataFortisasePrivateAccessServiceConnections#sdwan_rule_enable}
  */
  readonly sdwanRuleEnable?: boolean | cdktf.IResolvable;
}

export function dataFortisasePrivateAccessServiceConnectionsCommonConfigToTerraform(struct?: DataFortisasePrivateAccessServiceConnectionsCommonConfig): any {
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


export function dataFortisasePrivateAccessServiceConnectionsCommonConfigToHclTerraform(struct?: DataFortisasePrivateAccessServiceConnectionsCommonConfig): any {
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

export class DataFortisasePrivateAccessServiceConnectionsCommonConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisasePrivateAccessServiceConnectionsCommonConfig | undefined {
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

  public set internalValue(value: DataFortisasePrivateAccessServiceConnectionsCommonConfig | undefined) {
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
export interface DataFortisasePrivateAccessServiceConnectionsConfigBackupLinks {
  /**
  * alias for serivce connection additional overlay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#alias DataFortisasePrivateAccessServiceConnections#alias}
  */
  readonly alias?: string;
  /**
  * IPSEC authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#auth DataFortisasePrivateAccessServiceConnections#auth}
  */
  readonly auth?: string;
  /**
  * unique id for additional IPsec overlays.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#id DataFortisasePrivateAccessServiceConnections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * the name of IPSEC authentication certificate that uploaded to SASE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#ipsec_cert_name DataFortisasePrivateAccessServiceConnections#ipsec_cert_name}
  */
  readonly ipsecCertName?: string;
  /**
  * IKE version for IPSEC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#ipsec_ike_version DataFortisasePrivateAccessServiceConnections#ipsec_ike_version}
  */
  readonly ipsecIkeVersion?: string;
  /**
  * Peer PKI user name that created on SASE for IPSEC authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#ipsec_peer_name DataFortisasePrivateAccessServiceConnections#ipsec_peer_name}
  */
  readonly ipsecPeerName?: string;
  /**
  * IPSEC Remote Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#ipsec_remote_gw DataFortisasePrivateAccessServiceConnections#ipsec_remote_gw}
  */
  readonly ipsecRemoteGw?: string;
  /**
  * integer id for overlay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#overlay_network_id DataFortisasePrivateAccessServiceConnections#overlay_network_id}
  */
  readonly overlayNetworkId?: string;
}

export function dataFortisasePrivateAccessServiceConnectionsConfigBackupLinksToTerraform(struct?: DataFortisasePrivateAccessServiceConnectionsConfigBackupLinks | cdktf.IResolvable): any {
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


export function dataFortisasePrivateAccessServiceConnectionsConfigBackupLinksToHclTerraform(struct?: DataFortisasePrivateAccessServiceConnectionsConfigBackupLinks | cdktf.IResolvable): any {
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

export class DataFortisasePrivateAccessServiceConnectionsConfigBackupLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisasePrivateAccessServiceConnectionsConfigBackupLinks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataFortisasePrivateAccessServiceConnectionsConfigBackupLinks | cdktf.IResolvable | undefined) {
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

export class DataFortisasePrivateAccessServiceConnectionsConfigBackupLinksList extends cdktf.ComplexList {
  public internalValue? : DataFortisasePrivateAccessServiceConnectionsConfigBackupLinks[] | cdktf.IResolvable

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
  public get(index: number): DataFortisasePrivateAccessServiceConnectionsConfigBackupLinksOutputReference {
    return new DataFortisasePrivateAccessServiceConnectionsConfigBackupLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisasePrivateAccessServiceConnectionsConfigRegionCost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#fra_f1 DataFortisasePrivateAccessServiceConnections#fra_f1}
  */
  readonly fraF1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#iad_f1 DataFortisasePrivateAccessServiceConnections#iad_f1}
  */
  readonly iadF1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#lon_f1 DataFortisasePrivateAccessServiceConnections#lon_f1}
  */
  readonly lonF1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#sjc_f1 DataFortisasePrivateAccessServiceConnections#sjc_f1}
  */
  readonly sjcF1?: number;
}

export function dataFortisasePrivateAccessServiceConnectionsConfigRegionCostToTerraform(struct?: DataFortisasePrivateAccessServiceConnectionsConfigRegionCost | cdktf.IResolvable): any {
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


export function dataFortisasePrivateAccessServiceConnectionsConfigRegionCostToHclTerraform(struct?: DataFortisasePrivateAccessServiceConnectionsConfigRegionCost | cdktf.IResolvable): any {
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

export class DataFortisasePrivateAccessServiceConnectionsConfigRegionCostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisasePrivateAccessServiceConnectionsConfigRegionCost | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataFortisasePrivateAccessServiceConnectionsConfigRegionCost | cdktf.IResolvable | undefined) {
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
export interface DataFortisasePrivateAccessServiceConnectionsConfigA {
  /**
  * alias for serivce connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#alias DataFortisasePrivateAccessServiceConnections#alias}
  */
  readonly alias?: string;
  /**
  * IPSEC authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#auth DataFortisasePrivateAccessServiceConnections#auth}
  */
  readonly auth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#backup_links DataFortisasePrivateAccessServiceConnections#backup_links}
  */
  readonly backupLinks?: DataFortisasePrivateAccessServiceConnectionsConfigBackupLinks[] | cdktf.IResolvable;
  /**
  * BGP Routing Peer IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#bgp_peer_ip DataFortisasePrivateAccessServiceConnections#bgp_peer_ip}
  */
  readonly bgpPeerIp?: string;
  /**
  * the name of IPSEC authentication certificate that uploaded to SASE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#ipsec_cert_name DataFortisasePrivateAccessServiceConnections#ipsec_cert_name}
  */
  readonly ipsecCertName?: string;
  /**
  * IKE version for IPSEC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#ipsec_ike_version DataFortisasePrivateAccessServiceConnections#ipsec_ike_version}
  */
  readonly ipsecIkeVersion?: string;
  /**
  * Peer PKI user name that created on SASE for IPSEC authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#ipsec_peer_name DataFortisasePrivateAccessServiceConnections#ipsec_peer_name}
  */
  readonly ipsecPeerName?: string;
  /**
  * IPSEC Remote Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#ipsec_remote_gw DataFortisasePrivateAccessServiceConnections#ipsec_remote_gw}
  */
  readonly ipsecRemoteGw?: string;
  /**
  * integer id for overlay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#overlay_network_id DataFortisasePrivateAccessServiceConnections#overlay_network_id}
  */
  readonly overlayNetworkId?: string;
  /**
  * cost value to determine the priority of SASE spokes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#region_cost DataFortisasePrivateAccessServiceConnections#region_cost}
  */
  readonly regionCost?: DataFortisasePrivateAccessServiceConnectionsConfigRegionCost;
  /**
  * route map tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#route_map_tag DataFortisasePrivateAccessServiceConnections#route_map_tag}
  */
  readonly routeMapTag?: string;
}

export function dataFortisasePrivateAccessServiceConnectionsConfigAToTerraform(struct?: DataFortisasePrivateAccessServiceConnectionsConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    auth: cdktf.stringToTerraform(struct!.auth),
    backup_links: cdktf.listMapper(dataFortisasePrivateAccessServiceConnectionsConfigBackupLinksToTerraform, false)(struct!.backupLinks),
    bgp_peer_ip: cdktf.stringToTerraform(struct!.bgpPeerIp),
    ipsec_cert_name: cdktf.stringToTerraform(struct!.ipsecCertName),
    ipsec_ike_version: cdktf.stringToTerraform(struct!.ipsecIkeVersion),
    ipsec_peer_name: cdktf.stringToTerraform(struct!.ipsecPeerName),
    ipsec_remote_gw: cdktf.stringToTerraform(struct!.ipsecRemoteGw),
    overlay_network_id: cdktf.stringToTerraform(struct!.overlayNetworkId),
    region_cost: dataFortisasePrivateAccessServiceConnectionsConfigRegionCostToTerraform(struct!.regionCost),
    route_map_tag: cdktf.stringToTerraform(struct!.routeMapTag),
  }
}


export function dataFortisasePrivateAccessServiceConnectionsConfigAToHclTerraform(struct?: DataFortisasePrivateAccessServiceConnectionsConfigA): any {
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
      value: cdktf.listMapperHcl(dataFortisasePrivateAccessServiceConnectionsConfigBackupLinksToHclTerraform, false)(struct!.backupLinks),
      isBlock: true,
      type: "list",
      storageClassType: "DataFortisasePrivateAccessServiceConnectionsConfigBackupLinksList",
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
      value: dataFortisasePrivateAccessServiceConnectionsConfigRegionCostToHclTerraform(struct!.regionCost),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisasePrivateAccessServiceConnectionsConfigRegionCost",
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

export class DataFortisasePrivateAccessServiceConnectionsConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisasePrivateAccessServiceConnectionsConfigA | undefined {
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

  public set internalValue(value: DataFortisasePrivateAccessServiceConnectionsConfigA | undefined) {
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
  private _backupLinks = new DataFortisasePrivateAccessServiceConnectionsConfigBackupLinksList(this, "backup_links", false);
  public get backupLinks() {
    return this._backupLinks;
  }
  public putBackupLinks(value: DataFortisasePrivateAccessServiceConnectionsConfigBackupLinks[] | cdktf.IResolvable) {
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
  private _regionCost = new DataFortisasePrivateAccessServiceConnectionsConfigRegionCostOutputReference(this, "region_cost");
  public get regionCost() {
    return this._regionCost;
  }
  public putRegionCost(value: DataFortisasePrivateAccessServiceConnectionsConfigRegionCost) {
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
export interface DataFortisasePrivateAccessServiceConnectionsIpAssigned {
  /**
  * BGP Router ID generated from Router ID Subnets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#bgp_router_id DataFortisasePrivateAccessServiceConnections#bgp_router_id}
  */
  readonly bgpRouterId?: string;
  /**
  * unique id for bgp router id assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#id DataFortisasePrivateAccessServiceConnections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * air port code for SASE spoke physical region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#region DataFortisasePrivateAccessServiceConnections#region}
  */
  readonly region?: string;
  /**
  * unique id related to network configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#sdwan_common_id DataFortisasePrivateAccessServiceConnections#sdwan_common_id}
  */
  readonly sdwanCommonId?: string;
  /**
  * id for SASE spoke
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#site_id DataFortisasePrivateAccessServiceConnections#site_id}
  */
  readonly siteId?: string;
}

export function dataFortisasePrivateAccessServiceConnectionsIpAssignedToTerraform(struct?: DataFortisasePrivateAccessServiceConnectionsIpAssigned): any {
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


export function dataFortisasePrivateAccessServiceConnectionsIpAssignedToHclTerraform(struct?: DataFortisasePrivateAccessServiceConnectionsIpAssigned): any {
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

export class DataFortisasePrivateAccessServiceConnectionsIpAssignedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisasePrivateAccessServiceConnectionsIpAssigned | undefined {
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

  public set internalValue(value: DataFortisasePrivateAccessServiceConnectionsIpAssigned | undefined) {
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

export class DataFortisasePrivateAccessServiceConnectionsIpAssignedList extends cdktf.ComplexList {
  public internalValue? : DataFortisasePrivateAccessServiceConnectionsIpAssigned[] | cdktf.IResolvable

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
  public get(index: number): DataFortisasePrivateAccessServiceConnectionsIpAssignedOutputReference {
    return new DataFortisasePrivateAccessServiceConnectionsIpAssignedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisasePrivateAccessServiceConnectionsRegionCost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#fra_f1 DataFortisasePrivateAccessServiceConnections#fra_f1}
  */
  readonly fraF1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#iad_f1 DataFortisasePrivateAccessServiceConnections#iad_f1}
  */
  readonly iadF1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#lon_f1 DataFortisasePrivateAccessServiceConnections#lon_f1}
  */
  readonly lonF1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#sjc_f1 DataFortisasePrivateAccessServiceConnections#sjc_f1}
  */
  readonly sjcF1?: number;
}

export function dataFortisasePrivateAccessServiceConnectionsRegionCostToTerraform(struct?: DataFortisasePrivateAccessServiceConnectionsRegionCost | cdktf.IResolvable): any {
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


export function dataFortisasePrivateAccessServiceConnectionsRegionCostToHclTerraform(struct?: DataFortisasePrivateAccessServiceConnectionsRegionCost | cdktf.IResolvable): any {
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

export class DataFortisasePrivateAccessServiceConnectionsRegionCostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisasePrivateAccessServiceConnectionsRegionCost | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataFortisasePrivateAccessServiceConnectionsRegionCost | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections fortisase_private_access_service_connections}
*/
export class DataFortisasePrivateAccessServiceConnections extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_private_access_service_connections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisasePrivateAccessServiceConnections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisasePrivateAccessServiceConnections to import
  * @param importFromId The id of the existing DataFortisasePrivateAccessServiceConnections that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisasePrivateAccessServiceConnections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_private_access_service_connections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/private_access_service_connections fortisase_private_access_service_connections} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisasePrivateAccessServiceConnectionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisasePrivateAccessServiceConnectionsConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_private_access_service_connections',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
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
    this._serviceConnectionId = config.serviceConnectionId;
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
  private _backupLinks = new DataFortisasePrivateAccessServiceConnectionsBackupLinksList(this, "backup_links", false);
  public get backupLinks() {
    return this._backupLinks;
  }
  public putBackupLinks(value: DataFortisasePrivateAccessServiceConnectionsBackupLinks[] | cdktf.IResolvable) {
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
  private _commonConfig = new DataFortisasePrivateAccessServiceConnectionsCommonConfigOutputReference(this, "common_config");
  public get commonConfig() {
    return this._commonConfig;
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataFortisasePrivateAccessServiceConnectionsConfigAOutputReference(this, "config");
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

  // ip_assigned - computed: true, optional: false, required: false
  private _ipAssigned = new DataFortisasePrivateAccessServiceConnectionsIpAssignedList(this, "ip_assigned", false);
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
  private _regionCost = new DataFortisasePrivateAccessServiceConnectionsRegionCostOutputReference(this, "region_cost");
  public get regionCost() {
    return this._regionCost;
  }
  public putRegionCost(value: DataFortisasePrivateAccessServiceConnectionsRegionCost) {
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

  // service_connection_id - computed: false, optional: false, required: true
  private _serviceConnectionId?: string; 
  public get serviceConnectionId() {
    return this.getStringAttribute('service_connection_id');
  }
  public set serviceConnectionId(value: string) {
    this._serviceConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConnectionIdInput() {
    return this._serviceConnectionId;
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
      backup_links: cdktf.listMapper(dataFortisasePrivateAccessServiceConnectionsBackupLinksToTerraform, false)(this._backupLinks.internalValue),
      bgp_peer_ip: cdktf.stringToTerraform(this._bgpPeerIp),
      ipsec_cert_name: cdktf.stringToTerraform(this._ipsecCertName),
      ipsec_ike_version: cdktf.stringToTerraform(this._ipsecIkeVersion),
      ipsec_peer_name: cdktf.stringToTerraform(this._ipsecPeerName),
      ipsec_pre_shared_key: cdktf.stringToTerraform(this._ipsecPreSharedKey),
      ipsec_remote_gw: cdktf.stringToTerraform(this._ipsecRemoteGw),
      overlay_network_id: cdktf.stringToTerraform(this._overlayNetworkId),
      region_cost: dataFortisasePrivateAccessServiceConnectionsRegionCostToTerraform(this._regionCost.internalValue),
      route_map_tag: cdktf.stringToTerraform(this._routeMapTag),
      service_connection_id: cdktf.stringToTerraform(this._serviceConnectionId),
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
        value: cdktf.listMapperHcl(dataFortisasePrivateAccessServiceConnectionsBackupLinksToHclTerraform, false)(this._backupLinks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisasePrivateAccessServiceConnectionsBackupLinksList",
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
        value: dataFortisasePrivateAccessServiceConnectionsRegionCostToHclTerraform(this._regionCost.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisasePrivateAccessServiceConnectionsRegionCost",
      },
      route_map_tag: {
        value: cdktf.stringToHclTerraform(this._routeMapTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_connection_id: {
        value: cdktf.stringToHclTerraform(this._serviceConnectionId),
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
