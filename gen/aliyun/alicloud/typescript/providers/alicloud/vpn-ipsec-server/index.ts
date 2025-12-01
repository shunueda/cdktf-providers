// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnIpsecServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#client_ip_pool VpnIpsecServer#client_ip_pool}
  */
  readonly clientIpPool: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#dry_run VpnIpsecServer#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#effect_immediately VpnIpsecServer#effect_immediately}
  */
  readonly effectImmediately?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#id VpnIpsecServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#ipsec_server_name VpnIpsecServer#ipsec_server_name}
  */
  readonly ipsecServerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#local_subnet VpnIpsecServer#local_subnet}
  */
  readonly localSubnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#psk VpnIpsecServer#psk}
  */
  readonly psk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#psk_enabled VpnIpsecServer#psk_enabled}
  */
  readonly pskEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#vpn_gateway_id VpnIpsecServer#vpn_gateway_id}
  */
  readonly vpnGatewayId: string;
  /**
  * ike_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#ike_config VpnIpsecServer#ike_config}
  */
  readonly ikeConfig?: VpnIpsecServerIkeConfig[] | cdktf.IResolvable;
  /**
  * ipsec_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#ipsec_config VpnIpsecServer#ipsec_config}
  */
  readonly ipsecConfig?: VpnIpsecServerIpsecConfig[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#timeouts VpnIpsecServer#timeouts}
  */
  readonly timeouts?: VpnIpsecServerTimeouts;
}
export interface VpnIpsecServerIkeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#ike_auth_alg VpnIpsecServer#ike_auth_alg}
  */
  readonly ikeAuthAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#ike_enc_alg VpnIpsecServer#ike_enc_alg}
  */
  readonly ikeEncAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#ike_lifetime VpnIpsecServer#ike_lifetime}
  */
  readonly ikeLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#ike_mode VpnIpsecServer#ike_mode}
  */
  readonly ikeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#ike_pfs VpnIpsecServer#ike_pfs}
  */
  readonly ikePfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#ike_version VpnIpsecServer#ike_version}
  */
  readonly ikeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#local_id VpnIpsecServer#local_id}
  */
  readonly localId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#remote_id VpnIpsecServer#remote_id}
  */
  readonly remoteId?: string;
}

export function vpnIpsecServerIkeConfigToTerraform(struct?: VpnIpsecServerIkeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_auth_alg: cdktf.stringToTerraform(struct!.ikeAuthAlg),
    ike_enc_alg: cdktf.stringToTerraform(struct!.ikeEncAlg),
    ike_lifetime: cdktf.numberToTerraform(struct!.ikeLifetime),
    ike_mode: cdktf.stringToTerraform(struct!.ikeMode),
    ike_pfs: cdktf.stringToTerraform(struct!.ikePfs),
    ike_version: cdktf.stringToTerraform(struct!.ikeVersion),
    local_id: cdktf.stringToTerraform(struct!.localId),
    remote_id: cdktf.stringToTerraform(struct!.remoteId),
  }
}


export function vpnIpsecServerIkeConfigToHclTerraform(struct?: VpnIpsecServerIkeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ike_auth_alg: {
      value: cdktf.stringToHclTerraform(struct!.ikeAuthAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_enc_alg: {
      value: cdktf.stringToHclTerraform(struct!.ikeEncAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.ikeLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ike_mode: {
      value: cdktf.stringToHclTerraform(struct!.ikeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_pfs: {
      value: cdktf.stringToHclTerraform(struct!.ikePfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_version: {
      value: cdktf.stringToHclTerraform(struct!.ikeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_id: {
      value: cdktf.stringToHclTerraform(struct!.localId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_id: {
      value: cdktf.stringToHclTerraform(struct!.remoteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecServerIkeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnIpsecServerIkeConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikeAuthAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeAuthAlg = this._ikeAuthAlg;
    }
    if (this._ikeEncAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeEncAlg = this._ikeEncAlg;
    }
    if (this._ikeLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeLifetime = this._ikeLifetime;
    }
    if (this._ikeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeMode = this._ikeMode;
    }
    if (this._ikePfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikePfs = this._ikePfs;
    }
    if (this._ikeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeVersion = this._ikeVersion;
    }
    if (this._localId !== undefined) {
      hasAnyValues = true;
      internalValueResult.localId = this._localId;
    }
    if (this._remoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteId = this._remoteId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecServerIkeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ikeAuthAlg = undefined;
      this._ikeEncAlg = undefined;
      this._ikeLifetime = undefined;
      this._ikeMode = undefined;
      this._ikePfs = undefined;
      this._ikeVersion = undefined;
      this._localId = undefined;
      this._remoteId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ikeAuthAlg = value.ikeAuthAlg;
      this._ikeEncAlg = value.ikeEncAlg;
      this._ikeLifetime = value.ikeLifetime;
      this._ikeMode = value.ikeMode;
      this._ikePfs = value.ikePfs;
      this._ikeVersion = value.ikeVersion;
      this._localId = value.localId;
      this._remoteId = value.remoteId;
    }
  }

  // ike_auth_alg - computed: false, optional: true, required: false
  private _ikeAuthAlg?: string; 
  public get ikeAuthAlg() {
    return this.getStringAttribute('ike_auth_alg');
  }
  public set ikeAuthAlg(value: string) {
    this._ikeAuthAlg = value;
  }
  public resetIkeAuthAlg() {
    this._ikeAuthAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeAuthAlgInput() {
    return this._ikeAuthAlg;
  }

  // ike_enc_alg - computed: false, optional: true, required: false
  private _ikeEncAlg?: string; 
  public get ikeEncAlg() {
    return this.getStringAttribute('ike_enc_alg');
  }
  public set ikeEncAlg(value: string) {
    this._ikeEncAlg = value;
  }
  public resetIkeEncAlg() {
    this._ikeEncAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeEncAlgInput() {
    return this._ikeEncAlg;
  }

  // ike_lifetime - computed: false, optional: true, required: false
  private _ikeLifetime?: number; 
  public get ikeLifetime() {
    return this.getNumberAttribute('ike_lifetime');
  }
  public set ikeLifetime(value: number) {
    this._ikeLifetime = value;
  }
  public resetIkeLifetime() {
    this._ikeLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeLifetimeInput() {
    return this._ikeLifetime;
  }

  // ike_mode - computed: false, optional: true, required: false
  private _ikeMode?: string; 
  public get ikeMode() {
    return this.getStringAttribute('ike_mode');
  }
  public set ikeMode(value: string) {
    this._ikeMode = value;
  }
  public resetIkeMode() {
    this._ikeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeModeInput() {
    return this._ikeMode;
  }

  // ike_pfs - computed: false, optional: true, required: false
  private _ikePfs?: string; 
  public get ikePfs() {
    return this.getStringAttribute('ike_pfs');
  }
  public set ikePfs(value: string) {
    this._ikePfs = value;
  }
  public resetIkePfs() {
    this._ikePfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePfsInput() {
    return this._ikePfs;
  }

  // ike_version - computed: false, optional: true, required: false
  private _ikeVersion?: string; 
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }
  public set ikeVersion(value: string) {
    this._ikeVersion = value;
  }
  public resetIkeVersion() {
    this._ikeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeVersionInput() {
    return this._ikeVersion;
  }

  // local_id - computed: false, optional: true, required: false
  private _localId?: string; 
  public get localId() {
    return this.getStringAttribute('local_id');
  }
  public set localId(value: string) {
    this._localId = value;
  }
  public resetLocalId() {
    this._localId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIdInput() {
    return this._localId;
  }

  // remote_id - computed: false, optional: true, required: false
  private _remoteId?: string; 
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }
  public set remoteId(value: string) {
    this._remoteId = value;
  }
  public resetRemoteId() {
    this._remoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdInput() {
    return this._remoteId;
  }
}

export class VpnIpsecServerIkeConfigList extends cdktf.ComplexList {
  public internalValue? : VpnIpsecServerIkeConfig[] | cdktf.IResolvable

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
  public get(index: number): VpnIpsecServerIkeConfigOutputReference {
    return new VpnIpsecServerIkeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnIpsecServerIpsecConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#ipsec_auth_alg VpnIpsecServer#ipsec_auth_alg}
  */
  readonly ipsecAuthAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#ipsec_enc_alg VpnIpsecServer#ipsec_enc_alg}
  */
  readonly ipsecEncAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#ipsec_lifetime VpnIpsecServer#ipsec_lifetime}
  */
  readonly ipsecLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#ipsec_pfs VpnIpsecServer#ipsec_pfs}
  */
  readonly ipsecPfs?: string;
}

export function vpnIpsecServerIpsecConfigToTerraform(struct?: VpnIpsecServerIpsecConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipsec_auth_alg: cdktf.stringToTerraform(struct!.ipsecAuthAlg),
    ipsec_enc_alg: cdktf.stringToTerraform(struct!.ipsecEncAlg),
    ipsec_lifetime: cdktf.numberToTerraform(struct!.ipsecLifetime),
    ipsec_pfs: cdktf.stringToTerraform(struct!.ipsecPfs),
  }
}


export function vpnIpsecServerIpsecConfigToHclTerraform(struct?: VpnIpsecServerIpsecConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipsec_auth_alg: {
      value: cdktf.stringToHclTerraform(struct!.ipsecAuthAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_enc_alg: {
      value: cdktf.stringToHclTerraform(struct!.ipsecEncAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.ipsecLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_pfs: {
      value: cdktf.stringToHclTerraform(struct!.ipsecPfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecServerIpsecConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnIpsecServerIpsecConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipsecAuthAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecAuthAlg = this._ipsecAuthAlg;
    }
    if (this._ipsecEncAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecEncAlg = this._ipsecEncAlg;
    }
    if (this._ipsecLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecLifetime = this._ipsecLifetime;
    }
    if (this._ipsecPfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPfs = this._ipsecPfs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecServerIpsecConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipsecAuthAlg = undefined;
      this._ipsecEncAlg = undefined;
      this._ipsecLifetime = undefined;
      this._ipsecPfs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipsecAuthAlg = value.ipsecAuthAlg;
      this._ipsecEncAlg = value.ipsecEncAlg;
      this._ipsecLifetime = value.ipsecLifetime;
      this._ipsecPfs = value.ipsecPfs;
    }
  }

  // ipsec_auth_alg - computed: false, optional: true, required: false
  private _ipsecAuthAlg?: string; 
  public get ipsecAuthAlg() {
    return this.getStringAttribute('ipsec_auth_alg');
  }
  public set ipsecAuthAlg(value: string) {
    this._ipsecAuthAlg = value;
  }
  public resetIpsecAuthAlg() {
    this._ipsecAuthAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecAuthAlgInput() {
    return this._ipsecAuthAlg;
  }

  // ipsec_enc_alg - computed: false, optional: true, required: false
  private _ipsecEncAlg?: string; 
  public get ipsecEncAlg() {
    return this.getStringAttribute('ipsec_enc_alg');
  }
  public set ipsecEncAlg(value: string) {
    this._ipsecEncAlg = value;
  }
  public resetIpsecEncAlg() {
    this._ipsecEncAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecEncAlgInput() {
    return this._ipsecEncAlg;
  }

  // ipsec_lifetime - computed: false, optional: true, required: false
  private _ipsecLifetime?: number; 
  public get ipsecLifetime() {
    return this.getNumberAttribute('ipsec_lifetime');
  }
  public set ipsecLifetime(value: number) {
    this._ipsecLifetime = value;
  }
  public resetIpsecLifetime() {
    this._ipsecLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecLifetimeInput() {
    return this._ipsecLifetime;
  }

  // ipsec_pfs - computed: false, optional: true, required: false
  private _ipsecPfs?: string; 
  public get ipsecPfs() {
    return this.getStringAttribute('ipsec_pfs');
  }
  public set ipsecPfs(value: string) {
    this._ipsecPfs = value;
  }
  public resetIpsecPfs() {
    this._ipsecPfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPfsInput() {
    return this._ipsecPfs;
  }
}

export class VpnIpsecServerIpsecConfigList extends cdktf.ComplexList {
  public internalValue? : VpnIpsecServerIpsecConfig[] | cdktf.IResolvable

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
  public get(index: number): VpnIpsecServerIpsecConfigOutputReference {
    return new VpnIpsecServerIpsecConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnIpsecServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#create VpnIpsecServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#delete VpnIpsecServer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#update VpnIpsecServer#update}
  */
  readonly update?: string;
}

export function vpnIpsecServerTimeoutsToTerraform(struct?: VpnIpsecServerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function vpnIpsecServerTimeoutsToHclTerraform(struct?: VpnIpsecServerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecServerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpnIpsecServerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecServerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server alicloud_vpn_ipsec_server}
*/
export class VpnIpsecServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpn_ipsec_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnIpsecServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnIpsecServer to import
  * @param importFromId The id of the existing VpnIpsecServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnIpsecServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpn_ipsec_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpn_ipsec_server alicloud_vpn_ipsec_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnIpsecServerConfig
  */
  public constructor(scope: Construct, id: string, config: VpnIpsecServerConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpn_ipsec_server',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientIpPool = config.clientIpPool;
    this._dryRun = config.dryRun;
    this._effectImmediately = config.effectImmediately;
    this._id = config.id;
    this._ipsecServerName = config.ipsecServerName;
    this._localSubnet = config.localSubnet;
    this._psk = config.psk;
    this._pskEnabled = config.pskEnabled;
    this._vpnGatewayId = config.vpnGatewayId;
    this._ikeConfig.internalValue = config.ikeConfig;
    this._ipsecConfig.internalValue = config.ipsecConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_ip_pool - computed: false, optional: false, required: true
  private _clientIpPool?: string; 
  public get clientIpPool() {
    return this.getStringAttribute('client_ip_pool');
  }
  public set clientIpPool(value: string) {
    this._clientIpPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpPoolInput() {
    return this._clientIpPool;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // effect_immediately - computed: false, optional: true, required: false
  private _effectImmediately?: boolean | cdktf.IResolvable; 
  public get effectImmediately() {
    return this.getBooleanAttribute('effect_immediately');
  }
  public set effectImmediately(value: boolean | cdktf.IResolvable) {
    this._effectImmediately = value;
  }
  public resetEffectImmediately() {
    this._effectImmediately = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectImmediatelyInput() {
    return this._effectImmediately;
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

  // ipsec_server_name - computed: false, optional: true, required: false
  private _ipsecServerName?: string; 
  public get ipsecServerName() {
    return this.getStringAttribute('ipsec_server_name');
  }
  public set ipsecServerName(value: string) {
    this._ipsecServerName = value;
  }
  public resetIpsecServerName() {
    this._ipsecServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecServerNameInput() {
    return this._ipsecServerName;
  }

  // local_subnet - computed: false, optional: false, required: true
  private _localSubnet?: string; 
  public get localSubnet() {
    return this.getStringAttribute('local_subnet');
  }
  public set localSubnet(value: string) {
    this._localSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetInput() {
    return this._localSubnet;
  }

  // psk - computed: true, optional: true, required: false
  private _psk?: string; 
  public get psk() {
    return this.getStringAttribute('psk');
  }
  public set psk(value: string) {
    this._psk = value;
  }
  public resetPsk() {
    this._psk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pskInput() {
    return this._psk;
  }

  // psk_enabled - computed: false, optional: true, required: false
  private _pskEnabled?: boolean | cdktf.IResolvable; 
  public get pskEnabled() {
    return this.getBooleanAttribute('psk_enabled');
  }
  public set pskEnabled(value: boolean | cdktf.IResolvable) {
    this._pskEnabled = value;
  }
  public resetPskEnabled() {
    this._pskEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pskEnabledInput() {
    return this._pskEnabled;
  }

  // vpn_gateway_id - computed: false, optional: false, required: true
  private _vpnGatewayId?: string; 
  public get vpnGatewayId() {
    return this.getStringAttribute('vpn_gateway_id');
  }
  public set vpnGatewayId(value: string) {
    this._vpnGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayIdInput() {
    return this._vpnGatewayId;
  }

  // ike_config - computed: false, optional: true, required: false
  private _ikeConfig = new VpnIpsecServerIkeConfigList(this, "ike_config", true);
  public get ikeConfig() {
    return this._ikeConfig;
  }
  public putIkeConfig(value: VpnIpsecServerIkeConfig[] | cdktf.IResolvable) {
    this._ikeConfig.internalValue = value;
  }
  public resetIkeConfig() {
    this._ikeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeConfigInput() {
    return this._ikeConfig.internalValue;
  }

  // ipsec_config - computed: false, optional: true, required: false
  private _ipsecConfig = new VpnIpsecServerIpsecConfigList(this, "ipsec_config", true);
  public get ipsecConfig() {
    return this._ipsecConfig;
  }
  public putIpsecConfig(value: VpnIpsecServerIpsecConfig[] | cdktf.IResolvable) {
    this._ipsecConfig.internalValue = value;
  }
  public resetIpsecConfig() {
    this._ipsecConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecConfigInput() {
    return this._ipsecConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpnIpsecServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpnIpsecServerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_ip_pool: cdktf.stringToTerraform(this._clientIpPool),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      effect_immediately: cdktf.booleanToTerraform(this._effectImmediately),
      id: cdktf.stringToTerraform(this._id),
      ipsec_server_name: cdktf.stringToTerraform(this._ipsecServerName),
      local_subnet: cdktf.stringToTerraform(this._localSubnet),
      psk: cdktf.stringToTerraform(this._psk),
      psk_enabled: cdktf.booleanToTerraform(this._pskEnabled),
      vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
      ike_config: cdktf.listMapper(vpnIpsecServerIkeConfigToTerraform, true)(this._ikeConfig.internalValue),
      ipsec_config: cdktf.listMapper(vpnIpsecServerIpsecConfigToTerraform, true)(this._ipsecConfig.internalValue),
      timeouts: vpnIpsecServerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_ip_pool: {
        value: cdktf.stringToHclTerraform(this._clientIpPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      effect_immediately: {
        value: cdktf.booleanToHclTerraform(this._effectImmediately),
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
      ipsec_server_name: {
        value: cdktf.stringToHclTerraform(this._ipsecServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_subnet: {
        value: cdktf.stringToHclTerraform(this._localSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psk: {
        value: cdktf.stringToHclTerraform(this._psk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psk_enabled: {
        value: cdktf.booleanToHclTerraform(this._pskEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpn_gateway_id: {
        value: cdktf.stringToHclTerraform(this._vpnGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_config: {
        value: cdktf.listMapperHcl(vpnIpsecServerIkeConfigToHclTerraform, true)(this._ikeConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpnIpsecServerIkeConfigList",
      },
      ipsec_config: {
        value: cdktf.listMapperHcl(vpnIpsecServerIpsecConfigToHclTerraform, true)(this._ipsecConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpnIpsecServerIpsecConfigList",
      },
      timeouts: {
        value: vpnIpsecServerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpnIpsecServerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
