// https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#customer_gateway_id VpnConnection#customer_gateway_id}
  */
  readonly customerGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#id VpnConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#name VpnConnection#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#remark VpnConnection#remark}
  */
  readonly remark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#tag VpnConnection#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#vpc_id VpnConnection#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#vpn_gateway_id VpnConnection#vpn_gateway_id}
  */
  readonly vpnGatewayId: string;
  /**
  * ike_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#ike_config VpnConnection#ike_config}
  */
  readonly ikeConfig: VpnConnectionIkeConfig;
  /**
  * ipsec_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#ipsec_config VpnConnection#ipsec_config}
  */
  readonly ipsecConfig: VpnConnectionIpsecConfig;
}
export interface VpnConnectionIkeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#authentication_algorithm VpnConnection#authentication_algorithm}
  */
  readonly authenticationAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#dh_group VpnConnection#dh_group}
  */
  readonly dhGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#encryption_algorithm VpnConnection#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#exchange_mode VpnConnection#exchange_mode}
  */
  readonly exchangeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#ike_version VpnConnection#ike_version}
  */
  readonly ikeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#local_id VpnConnection#local_id}
  */
  readonly localId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#pre_shared_key VpnConnection#pre_shared_key}
  */
  readonly preSharedKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#remote_id VpnConnection#remote_id}
  */
  readonly remoteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#sa_life_time VpnConnection#sa_life_time}
  */
  readonly saLifeTime?: number;
}

export function vpnConnectionIkeConfigToTerraform(struct?: VpnConnectionIkeConfigOutputReference | VpnConnectionIkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_algorithm: cdktf.stringToTerraform(struct!.authenticationAlgorithm),
    dh_group: cdktf.stringToTerraform(struct!.dhGroup),
    encryption_algorithm: cdktf.stringToTerraform(struct!.encryptionAlgorithm),
    exchange_mode: cdktf.stringToTerraform(struct!.exchangeMode),
    ike_version: cdktf.stringToTerraform(struct!.ikeVersion),
    local_id: cdktf.stringToTerraform(struct!.localId),
    pre_shared_key: cdktf.stringToTerraform(struct!.preSharedKey),
    remote_id: cdktf.stringToTerraform(struct!.remoteId),
    sa_life_time: cdktf.numberToTerraform(struct!.saLifeTime),
  }
}


export function vpnConnectionIkeConfigToHclTerraform(struct?: VpnConnectionIkeConfigOutputReference | VpnConnectionIkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.authenticationAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dh_group: {
      value: cdktf.stringToHclTerraform(struct!.dhGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.encryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exchange_mode: {
      value: cdktf.stringToHclTerraform(struct!.exchangeMode),
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
    pre_shared_key: {
      value: cdktf.stringToHclTerraform(struct!.preSharedKey),
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
    sa_life_time: {
      value: cdktf.numberToHclTerraform(struct!.saLifeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnConnectionIkeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnConnectionIkeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationAlgorithm = this._authenticationAlgorithm;
    }
    if (this._dhGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhGroup = this._dhGroup;
    }
    if (this._encryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAlgorithm = this._encryptionAlgorithm;
    }
    if (this._exchangeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.exchangeMode = this._exchangeMode;
    }
    if (this._ikeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeVersion = this._ikeVersion;
    }
    if (this._localId !== undefined) {
      hasAnyValues = true;
      internalValueResult.localId = this._localId;
    }
    if (this._preSharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.preSharedKey = this._preSharedKey;
    }
    if (this._remoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteId = this._remoteId;
    }
    if (this._saLifeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.saLifeTime = this._saLifeTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnConnectionIkeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationAlgorithm = undefined;
      this._dhGroup = undefined;
      this._encryptionAlgorithm = undefined;
      this._exchangeMode = undefined;
      this._ikeVersion = undefined;
      this._localId = undefined;
      this._preSharedKey = undefined;
      this._remoteId = undefined;
      this._saLifeTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationAlgorithm = value.authenticationAlgorithm;
      this._dhGroup = value.dhGroup;
      this._encryptionAlgorithm = value.encryptionAlgorithm;
      this._exchangeMode = value.exchangeMode;
      this._ikeVersion = value.ikeVersion;
      this._localId = value.localId;
      this._preSharedKey = value.preSharedKey;
      this._remoteId = value.remoteId;
      this._saLifeTime = value.saLifeTime;
    }
  }

  // authentication_algorithm - computed: false, optional: true, required: false
  private _authenticationAlgorithm?: string; 
  public get authenticationAlgorithm() {
    return this.getStringAttribute('authentication_algorithm');
  }
  public set authenticationAlgorithm(value: string) {
    this._authenticationAlgorithm = value;
  }
  public resetAuthenticationAlgorithm() {
    this._authenticationAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAlgorithmInput() {
    return this._authenticationAlgorithm;
  }

  // dh_group - computed: false, optional: true, required: false
  private _dhGroup?: string; 
  public get dhGroup() {
    return this.getStringAttribute('dh_group');
  }
  public set dhGroup(value: string) {
    this._dhGroup = value;
  }
  public resetDhGroup() {
    this._dhGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupInput() {
    return this._dhGroup;
  }

  // encryption_algorithm - computed: false, optional: true, required: false
  private _encryptionAlgorithm?: string; 
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: string) {
    this._encryptionAlgorithm = value;
  }
  public resetEncryptionAlgorithm() {
    this._encryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm;
  }

  // exchange_mode - computed: false, optional: true, required: false
  private _exchangeMode?: string; 
  public get exchangeMode() {
    return this.getStringAttribute('exchange_mode');
  }
  public set exchangeMode(value: string) {
    this._exchangeMode = value;
  }
  public resetExchangeMode() {
    this._exchangeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exchangeModeInput() {
    return this._exchangeMode;
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

  // local_id - computed: true, optional: true, required: false
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

  // remote_id - computed: true, optional: true, required: false
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

  // sa_life_time - computed: false, optional: true, required: false
  private _saLifeTime?: number; 
  public get saLifeTime() {
    return this.getNumberAttribute('sa_life_time');
  }
  public set saLifeTime(value: number) {
    this._saLifeTime = value;
  }
  public resetSaLifeTime() {
    this._saLifeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saLifeTimeInput() {
    return this._saLifeTime;
  }
}
export interface VpnConnectionIpsecConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#authentication_algorithm VpnConnection#authentication_algorithm}
  */
  readonly authenticationAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#encryption_algorithm VpnConnection#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#local_subnet_ids VpnConnection#local_subnet_ids}
  */
  readonly localSubnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#pfs_dh_group VpnConnection#pfs_dh_group}
  */
  readonly pfsDhGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#protocol VpnConnection#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#remote_subnets VpnConnection#remote_subnets}
  */
  readonly remoteSubnets: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#sa_life_time VpnConnection#sa_life_time}
  */
  readonly saLifeTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#sa_life_time_bytes VpnConnection#sa_life_time_bytes}
  */
  readonly saLifeTimeBytes?: number;
}

export function vpnConnectionIpsecConfigToTerraform(struct?: VpnConnectionIpsecConfigOutputReference | VpnConnectionIpsecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_algorithm: cdktf.stringToTerraform(struct!.authenticationAlgorithm),
    encryption_algorithm: cdktf.stringToTerraform(struct!.encryptionAlgorithm),
    local_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localSubnetIds),
    pfs_dh_group: cdktf.stringToTerraform(struct!.pfsDhGroup),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    remote_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteSubnets),
    sa_life_time: cdktf.numberToTerraform(struct!.saLifeTime),
    sa_life_time_bytes: cdktf.numberToTerraform(struct!.saLifeTimeBytes),
  }
}


export function vpnConnectionIpsecConfigToHclTerraform(struct?: VpnConnectionIpsecConfigOutputReference | VpnConnectionIpsecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.authenticationAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.encryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localSubnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pfs_dh_group: {
      value: cdktf.stringToHclTerraform(struct!.pfsDhGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteSubnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sa_life_time: {
      value: cdktf.numberToHclTerraform(struct!.saLifeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sa_life_time_bytes: {
      value: cdktf.numberToHclTerraform(struct!.saLifeTimeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnConnectionIpsecConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnConnectionIpsecConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationAlgorithm = this._authenticationAlgorithm;
    }
    if (this._encryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAlgorithm = this._encryptionAlgorithm;
    }
    if (this._localSubnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSubnetIds = this._localSubnetIds;
    }
    if (this._pfsDhGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.pfsDhGroup = this._pfsDhGroup;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._remoteSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteSubnets = this._remoteSubnets;
    }
    if (this._saLifeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.saLifeTime = this._saLifeTime;
    }
    if (this._saLifeTimeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.saLifeTimeBytes = this._saLifeTimeBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnConnectionIpsecConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationAlgorithm = undefined;
      this._encryptionAlgorithm = undefined;
      this._localSubnetIds = undefined;
      this._pfsDhGroup = undefined;
      this._protocol = undefined;
      this._remoteSubnets = undefined;
      this._saLifeTime = undefined;
      this._saLifeTimeBytes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationAlgorithm = value.authenticationAlgorithm;
      this._encryptionAlgorithm = value.encryptionAlgorithm;
      this._localSubnetIds = value.localSubnetIds;
      this._pfsDhGroup = value.pfsDhGroup;
      this._protocol = value.protocol;
      this._remoteSubnets = value.remoteSubnets;
      this._saLifeTime = value.saLifeTime;
      this._saLifeTimeBytes = value.saLifeTimeBytes;
    }
  }

  // authentication_algorithm - computed: false, optional: true, required: false
  private _authenticationAlgorithm?: string; 
  public get authenticationAlgorithm() {
    return this.getStringAttribute('authentication_algorithm');
  }
  public set authenticationAlgorithm(value: string) {
    this._authenticationAlgorithm = value;
  }
  public resetAuthenticationAlgorithm() {
    this._authenticationAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAlgorithmInput() {
    return this._authenticationAlgorithm;
  }

  // encryption_algorithm - computed: false, optional: true, required: false
  private _encryptionAlgorithm?: string; 
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: string) {
    this._encryptionAlgorithm = value;
  }
  public resetEncryptionAlgorithm() {
    this._encryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm;
  }

  // local_subnet_ids - computed: false, optional: false, required: true
  private _localSubnetIds?: string[]; 
  public get localSubnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('local_subnet_ids'));
  }
  public set localSubnetIds(value: string[]) {
    this._localSubnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetIdsInput() {
    return this._localSubnetIds;
  }

  // pfs_dh_group - computed: false, optional: true, required: false
  private _pfsDhGroup?: string; 
  public get pfsDhGroup() {
    return this.getStringAttribute('pfs_dh_group');
  }
  public set pfsDhGroup(value: string) {
    this._pfsDhGroup = value;
  }
  public resetPfsDhGroup() {
    this._pfsDhGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfsDhGroupInput() {
    return this._pfsDhGroup;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // remote_subnets - computed: false, optional: false, required: true
  private _remoteSubnets?: string[]; 
  public get remoteSubnets() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_subnets'));
  }
  public set remoteSubnets(value: string[]) {
    this._remoteSubnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSubnetsInput() {
    return this._remoteSubnets;
  }

  // sa_life_time - computed: false, optional: true, required: false
  private _saLifeTime?: number; 
  public get saLifeTime() {
    return this.getNumberAttribute('sa_life_time');
  }
  public set saLifeTime(value: number) {
    this._saLifeTime = value;
  }
  public resetSaLifeTime() {
    this._saLifeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saLifeTimeInput() {
    return this._saLifeTime;
  }

  // sa_life_time_bytes - computed: true, optional: true, required: false
  private _saLifeTimeBytes?: number; 
  public get saLifeTimeBytes() {
    return this.getNumberAttribute('sa_life_time_bytes');
  }
  public set saLifeTimeBytes(value: number) {
    this._saLifeTimeBytes = value;
  }
  public resetSaLifeTimeBytes() {
    this._saLifeTimeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saLifeTimeBytesInput() {
    return this._saLifeTimeBytes;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection ucloud_vpn_connection}
*/
export class VpnConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ucloud_vpn_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnConnection to import
  * @param importFromId The id of the existing VpnConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ucloud_vpn_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/vpn_connection ucloud_vpn_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: VpnConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'ucloud_vpn_connection',
      terraformGeneratorMetadata: {
        providerName: 'ucloud',
        providerVersion: '1.39.1'
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
    this._id = config.id;
    this._name = config.name;
    this._remark = config.remark;
    this._tag = config.tag;
    this._vpcId = config.vpcId;
    this._vpnGatewayId = config.vpnGatewayId;
    this._ikeConfig.internalValue = config.ikeConfig;
    this._ipsecConfig.internalValue = config.ipsecConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

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

  // name - computed: false, optional: true, required: false
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

  // remark - computed: true, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
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

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
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

  // ike_config - computed: false, optional: false, required: true
  private _ikeConfig = new VpnConnectionIkeConfigOutputReference(this, "ike_config");
  public get ikeConfig() {
    return this._ikeConfig;
  }
  public putIkeConfig(value: VpnConnectionIkeConfig) {
    this._ikeConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeConfigInput() {
    return this._ikeConfig.internalValue;
  }

  // ipsec_config - computed: false, optional: false, required: true
  private _ipsecConfig = new VpnConnectionIpsecConfigOutputReference(this, "ipsec_config");
  public get ipsecConfig() {
    return this._ipsecConfig;
  }
  public putIpsecConfig(value: VpnConnectionIpsecConfig) {
    this._ipsecConfig.internalValue = value;
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      remark: cdktf.stringToTerraform(this._remark),
      tag: cdktf.stringToTerraform(this._tag),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
      ike_config: vpnConnectionIkeConfigToTerraform(this._ikeConfig.internalValue),
      ipsec_config: vpnConnectionIpsecConfigToTerraform(this._ipsecConfig.internalValue),
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
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
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
        value: vpnConnectionIkeConfigToHclTerraform(this._ikeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnConnectionIkeConfigList",
      },
      ipsec_config: {
        value: vpnConnectionIpsecConfigToHclTerraform(this._ipsecConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnConnectionIpsecConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
