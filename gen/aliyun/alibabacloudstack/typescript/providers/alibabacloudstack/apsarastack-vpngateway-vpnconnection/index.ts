// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackVpngatewayVpnconnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#customer_gateway_id ApsarastackVpngatewayVpnconnection#customer_gateway_id}
  */
  readonly customerGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#effect_immediately ApsarastackVpngatewayVpnconnection#effect_immediately}
  */
  readonly effectImmediately?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#id ApsarastackVpngatewayVpnconnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#local_subnet ApsarastackVpngatewayVpnconnection#local_subnet}
  */
  readonly localSubnet: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#name ApsarastackVpngatewayVpnconnection#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#remote_subnet ApsarastackVpngatewayVpnconnection#remote_subnet}
  */
  readonly remoteSubnet: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#vpn_connection_name ApsarastackVpngatewayVpnconnection#vpn_connection_name}
  */
  readonly vpnConnectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#vpn_gateway_id ApsarastackVpngatewayVpnconnection#vpn_gateway_id}
  */
  readonly vpnGatewayId: string;
  /**
  * ike_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#ike_config ApsarastackVpngatewayVpnconnection#ike_config}
  */
  readonly ikeConfig?: ApsarastackVpngatewayVpnconnectionIkeConfig[] | cdktf.IResolvable;
  /**
  * ipsec_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#ipsec_config ApsarastackVpngatewayVpnconnection#ipsec_config}
  */
  readonly ipsecConfig?: ApsarastackVpngatewayVpnconnectionIpsecConfig[] | cdktf.IResolvable;
}
export interface ApsarastackVpngatewayVpnconnectionIkeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#ike_auth_alg ApsarastackVpngatewayVpnconnection#ike_auth_alg}
  */
  readonly ikeAuthAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#ike_enc_alg ApsarastackVpngatewayVpnconnection#ike_enc_alg}
  */
  readonly ikeEncAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#ike_lifetime ApsarastackVpngatewayVpnconnection#ike_lifetime}
  */
  readonly ikeLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#ike_local_id ApsarastackVpngatewayVpnconnection#ike_local_id}
  */
  readonly ikeLocalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#ike_mode ApsarastackVpngatewayVpnconnection#ike_mode}
  */
  readonly ikeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#ike_pfs ApsarastackVpngatewayVpnconnection#ike_pfs}
  */
  readonly ikePfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#ike_remote_id ApsarastackVpngatewayVpnconnection#ike_remote_id}
  */
  readonly ikeRemoteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#ike_version ApsarastackVpngatewayVpnconnection#ike_version}
  */
  readonly ikeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#psk ApsarastackVpngatewayVpnconnection#psk}
  */
  readonly psk?: string;
}

export function apsarastackVpngatewayVpnconnectionIkeConfigToTerraform(struct?: ApsarastackVpngatewayVpnconnectionIkeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_auth_alg: cdktf.stringToTerraform(struct!.ikeAuthAlg),
    ike_enc_alg: cdktf.stringToTerraform(struct!.ikeEncAlg),
    ike_lifetime: cdktf.numberToTerraform(struct!.ikeLifetime),
    ike_local_id: cdktf.stringToTerraform(struct!.ikeLocalId),
    ike_mode: cdktf.stringToTerraform(struct!.ikeMode),
    ike_pfs: cdktf.stringToTerraform(struct!.ikePfs),
    ike_remote_id: cdktf.stringToTerraform(struct!.ikeRemoteId),
    ike_version: cdktf.stringToTerraform(struct!.ikeVersion),
    psk: cdktf.stringToTerraform(struct!.psk),
  }
}


export function apsarastackVpngatewayVpnconnectionIkeConfigToHclTerraform(struct?: ApsarastackVpngatewayVpnconnectionIkeConfig | cdktf.IResolvable): any {
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
    ike_local_id: {
      value: cdktf.stringToHclTerraform(struct!.ikeLocalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    ike_remote_id: {
      value: cdktf.stringToHclTerraform(struct!.ikeRemoteId),
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
    psk: {
      value: cdktf.stringToHclTerraform(struct!.psk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackVpngatewayVpnconnectionIkeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackVpngatewayVpnconnectionIkeConfig | cdktf.IResolvable | undefined {
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
    if (this._ikeLocalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeLocalId = this._ikeLocalId;
    }
    if (this._ikeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeMode = this._ikeMode;
    }
    if (this._ikePfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikePfs = this._ikePfs;
    }
    if (this._ikeRemoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeRemoteId = this._ikeRemoteId;
    }
    if (this._ikeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeVersion = this._ikeVersion;
    }
    if (this._psk !== undefined) {
      hasAnyValues = true;
      internalValueResult.psk = this._psk;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackVpngatewayVpnconnectionIkeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ikeAuthAlg = undefined;
      this._ikeEncAlg = undefined;
      this._ikeLifetime = undefined;
      this._ikeLocalId = undefined;
      this._ikeMode = undefined;
      this._ikePfs = undefined;
      this._ikeRemoteId = undefined;
      this._ikeVersion = undefined;
      this._psk = undefined;
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
      this._ikeLocalId = value.ikeLocalId;
      this._ikeMode = value.ikeMode;
      this._ikePfs = value.ikePfs;
      this._ikeRemoteId = value.ikeRemoteId;
      this._ikeVersion = value.ikeVersion;
      this._psk = value.psk;
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

  // ike_local_id - computed: false, optional: true, required: false
  private _ikeLocalId?: string; 
  public get ikeLocalId() {
    return this.getStringAttribute('ike_local_id');
  }
  public set ikeLocalId(value: string) {
    this._ikeLocalId = value;
  }
  public resetIkeLocalId() {
    this._ikeLocalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeLocalIdInput() {
    return this._ikeLocalId;
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

  // ike_remote_id - computed: false, optional: true, required: false
  private _ikeRemoteId?: string; 
  public get ikeRemoteId() {
    return this.getStringAttribute('ike_remote_id');
  }
  public set ikeRemoteId(value: string) {
    this._ikeRemoteId = value;
  }
  public resetIkeRemoteId() {
    this._ikeRemoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeRemoteIdInput() {
    return this._ikeRemoteId;
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

  // psk - computed: false, optional: true, required: false
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
}

export class ApsarastackVpngatewayVpnconnectionIkeConfigList extends cdktf.ComplexList {
  public internalValue? : ApsarastackVpngatewayVpnconnectionIkeConfig[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackVpngatewayVpnconnectionIkeConfigOutputReference {
    return new ApsarastackVpngatewayVpnconnectionIkeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackVpngatewayVpnconnectionIpsecConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#ipsec_auth_alg ApsarastackVpngatewayVpnconnection#ipsec_auth_alg}
  */
  readonly ipsecAuthAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#ipsec_enc_alg ApsarastackVpngatewayVpnconnection#ipsec_enc_alg}
  */
  readonly ipsecEncAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#ipsec_lifetime ApsarastackVpngatewayVpnconnection#ipsec_lifetime}
  */
  readonly ipsecLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#ipsec_pfs ApsarastackVpngatewayVpnconnection#ipsec_pfs}
  */
  readonly ipsecPfs?: string;
}

export function apsarastackVpngatewayVpnconnectionIpsecConfigToTerraform(struct?: ApsarastackVpngatewayVpnconnectionIpsecConfig | cdktf.IResolvable): any {
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


export function apsarastackVpngatewayVpnconnectionIpsecConfigToHclTerraform(struct?: ApsarastackVpngatewayVpnconnectionIpsecConfig | cdktf.IResolvable): any {
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

export class ApsarastackVpngatewayVpnconnectionIpsecConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackVpngatewayVpnconnectionIpsecConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApsarastackVpngatewayVpnconnectionIpsecConfig | cdktf.IResolvable | undefined) {
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

export class ApsarastackVpngatewayVpnconnectionIpsecConfigList extends cdktf.ComplexList {
  public internalValue? : ApsarastackVpngatewayVpnconnectionIpsecConfig[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackVpngatewayVpnconnectionIpsecConfigOutputReference {
    return new ApsarastackVpngatewayVpnconnectionIpsecConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection apsarastack_vpngateway_vpnconnection}
*/
export class ApsarastackVpngatewayVpnconnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_vpngateway_vpnconnection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackVpngatewayVpnconnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackVpngatewayVpnconnection to import
  * @param importFromId The id of the existing ApsarastackVpngatewayVpnconnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackVpngatewayVpnconnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_vpngateway_vpnconnection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpngateway_vpnconnection apsarastack_vpngateway_vpnconnection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackVpngatewayVpnconnectionConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackVpngatewayVpnconnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_vpngateway_vpnconnection',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customerGatewayId = config.customerGatewayId;
    this._effectImmediately = config.effectImmediately;
    this._id = config.id;
    this._localSubnet = config.localSubnet;
    this._name = config.name;
    this._remoteSubnet = config.remoteSubnet;
    this._vpnConnectionName = config.vpnConnectionName;
    this._vpnGatewayId = config.vpnGatewayId;
    this._ikeConfig.internalValue = config.ikeConfig;
    this._ipsecConfig.internalValue = config.ipsecConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer_gateway_id - computed: false, optional: false, required: true
  private _customerGatewayId?: string; 
  public get customerGatewayId() {
    return this.getStringAttribute('customer_gateway_id');
  }
  public set customerGatewayId(value: string) {
    this._customerGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerGatewayIdInput() {
    return this._customerGatewayId;
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

  // local_subnet - computed: false, optional: false, required: true
  private _localSubnet?: string[]; 
  public get localSubnet() {
    return cdktf.Fn.tolist(this.getListAttribute('local_subnet'));
  }
  public set localSubnet(value: string[]) {
    this._localSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetInput() {
    return this._localSubnet;
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

  // remote_subnet - computed: false, optional: false, required: true
  private _remoteSubnet?: string[]; 
  public get remoteSubnet() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_subnet'));
  }
  public set remoteSubnet(value: string[]) {
    this._remoteSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSubnetInput() {
    return this._remoteSubnet;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vpn_connection_name - computed: true, optional: true, required: false
  private _vpnConnectionName?: string; 
  public get vpnConnectionName() {
    return this.getStringAttribute('vpn_connection_name');
  }
  public set vpnConnectionName(value: string) {
    this._vpnConnectionName = value;
  }
  public resetVpnConnectionName() {
    this._vpnConnectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnConnectionNameInput() {
    return this._vpnConnectionName;
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
  private _ikeConfig = new ApsarastackVpngatewayVpnconnectionIkeConfigList(this, "ike_config", false);
  public get ikeConfig() {
    return this._ikeConfig;
  }
  public putIkeConfig(value: ApsarastackVpngatewayVpnconnectionIkeConfig[] | cdktf.IResolvable) {
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
  private _ipsecConfig = new ApsarastackVpngatewayVpnconnectionIpsecConfigList(this, "ipsec_config", false);
  public get ipsecConfig() {
    return this._ipsecConfig;
  }
  public putIpsecConfig(value: ApsarastackVpngatewayVpnconnectionIpsecConfig[] | cdktf.IResolvable) {
    this._ipsecConfig.internalValue = value;
  }
  public resetIpsecConfig() {
    this._ipsecConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecConfigInput() {
    return this._ipsecConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_gateway_id: cdktf.stringToTerraform(this._customerGatewayId),
      effect_immediately: cdktf.booleanToTerraform(this._effectImmediately),
      id: cdktf.stringToTerraform(this._id),
      local_subnet: cdktf.listMapper(cdktf.stringToTerraform, false)(this._localSubnet),
      name: cdktf.stringToTerraform(this._name),
      remote_subnet: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteSubnet),
      vpn_connection_name: cdktf.stringToTerraform(this._vpnConnectionName),
      vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
      ike_config: cdktf.listMapper(apsarastackVpngatewayVpnconnectionIkeConfigToTerraform, true)(this._ikeConfig.internalValue),
      ipsec_config: cdktf.listMapper(apsarastackVpngatewayVpnconnectionIpsecConfigToTerraform, true)(this._ipsecConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      customer_gateway_id: {
        value: cdktf.stringToHclTerraform(this._customerGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      local_subnet: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._localSubnet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_subnet: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteSubnet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vpn_connection_name: {
        value: cdktf.stringToHclTerraform(this._vpnConnectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_gateway_id: {
        value: cdktf.stringToHclTerraform(this._vpnGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_config: {
        value: cdktf.listMapperHcl(apsarastackVpngatewayVpnconnectionIkeConfigToHclTerraform, true)(this._ikeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackVpngatewayVpnconnectionIkeConfigList",
      },
      ipsec_config: {
        value: cdktf.listMapperHcl(apsarastackVpngatewayVpnconnectionIpsecConfigToHclTerraform, true)(this._ipsecConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackVpngatewayVpnconnectionIpsecConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
