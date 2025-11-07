// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVpnDefaultOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#id DataThunderVpnDefaultOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#oper DataThunderVpnDefaultOper#oper}
  */
  readonly oper?: DataThunderVpnDefaultOperOper;
}
export interface DataThunderVpnDefaultOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ike_auth_method DataThunderVpnDefaultOper#ike_auth_method}
  */
  readonly ikeAuthMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ike_dh_group DataThunderVpnDefaultOper#ike_dh_group}
  */
  readonly ikeDhGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ike_dpd_interval DataThunderVpnDefaultOper#ike_dpd_interval}
  */
  readonly ikeDpdInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ike_encryption DataThunderVpnDefaultOper#ike_encryption}
  */
  readonly ikeEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ike_hash DataThunderVpnDefaultOper#ike_hash}
  */
  readonly ikeHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ike_lifetime DataThunderVpnDefaultOper#ike_lifetime}
  */
  readonly ikeLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ike_local_address DataThunderVpnDefaultOper#ike_local_address}
  */
  readonly ikeLocalAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ike_mode DataThunderVpnDefaultOper#ike_mode}
  */
  readonly ikeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ike_nat_traversal DataThunderVpnDefaultOper#ike_nat_traversal}
  */
  readonly ikeNatTraversal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ike_priority DataThunderVpnDefaultOper#ike_priority}
  */
  readonly ikePriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ike_remote_address DataThunderVpnDefaultOper#ike_remote_address}
  */
  readonly ikeRemoteAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ike_version DataThunderVpnDefaultOper#ike_version}
  */
  readonly ikeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ipsec_anti_replay_window DataThunderVpnDefaultOper#ipsec_anti_replay_window}
  */
  readonly ipsecAntiReplayWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ipsec_dh_group DataThunderVpnDefaultOper#ipsec_dh_group}
  */
  readonly ipsecDhGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ipsec_encryption DataThunderVpnDefaultOper#ipsec_encryption}
  */
  readonly ipsecEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ipsec_hash DataThunderVpnDefaultOper#ipsec_hash}
  */
  readonly ipsecHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ipsec_lifebytes DataThunderVpnDefaultOper#ipsec_lifebytes}
  */
  readonly ipsecLifebytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ipsec_lifetime DataThunderVpnDefaultOper#ipsec_lifetime}
  */
  readonly ipsecLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ipsec_local_port DataThunderVpnDefaultOper#ipsec_local_port}
  */
  readonly ipsecLocalPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ipsec_local_protocol DataThunderVpnDefaultOper#ipsec_local_protocol}
  */
  readonly ipsecLocalProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ipsec_local_subnet DataThunderVpnDefaultOper#ipsec_local_subnet}
  */
  readonly ipsecLocalSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ipsec_mode DataThunderVpnDefaultOper#ipsec_mode}
  */
  readonly ipsecMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ipsec_priority DataThunderVpnDefaultOper#ipsec_priority}
  */
  readonly ipsecPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ipsec_protocol DataThunderVpnDefaultOper#ipsec_protocol}
  */
  readonly ipsecProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ipsec_remote_port DataThunderVpnDefaultOper#ipsec_remote_port}
  */
  readonly ipsecRemotePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ipsec_remote_protocol DataThunderVpnDefaultOper#ipsec_remote_protocol}
  */
  readonly ipsecRemoteProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ipsec_remote_subnet DataThunderVpnDefaultOper#ipsec_remote_subnet}
  */
  readonly ipsecRemoteSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#ipsec_traffic_selector DataThunderVpnDefaultOper#ipsec_traffic_selector}
  */
  readonly ipsecTrafficSelector?: string;
}

export function dataThunderVpnDefaultOperOperToTerraform(struct?: DataThunderVpnDefaultOperOperOutputReference | DataThunderVpnDefaultOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_auth_method: cdktf.stringToTerraform(struct!.ikeAuthMethod),
    ike_dh_group: cdktf.stringToTerraform(struct!.ikeDhGroup),
    ike_dpd_interval: cdktf.numberToTerraform(struct!.ikeDpdInterval),
    ike_encryption: cdktf.stringToTerraform(struct!.ikeEncryption),
    ike_hash: cdktf.stringToTerraform(struct!.ikeHash),
    ike_lifetime: cdktf.numberToTerraform(struct!.ikeLifetime),
    ike_local_address: cdktf.stringToTerraform(struct!.ikeLocalAddress),
    ike_mode: cdktf.stringToTerraform(struct!.ikeMode),
    ike_nat_traversal: cdktf.stringToTerraform(struct!.ikeNatTraversal),
    ike_priority: cdktf.numberToTerraform(struct!.ikePriority),
    ike_remote_address: cdktf.stringToTerraform(struct!.ikeRemoteAddress),
    ike_version: cdktf.stringToTerraform(struct!.ikeVersion),
    ipsec_anti_replay_window: cdktf.numberToTerraform(struct!.ipsecAntiReplayWindow),
    ipsec_dh_group: cdktf.stringToTerraform(struct!.ipsecDhGroup),
    ipsec_encryption: cdktf.stringToTerraform(struct!.ipsecEncryption),
    ipsec_hash: cdktf.stringToTerraform(struct!.ipsecHash),
    ipsec_lifebytes: cdktf.numberToTerraform(struct!.ipsecLifebytes),
    ipsec_lifetime: cdktf.numberToTerraform(struct!.ipsecLifetime),
    ipsec_local_port: cdktf.numberToTerraform(struct!.ipsecLocalPort),
    ipsec_local_protocol: cdktf.numberToTerraform(struct!.ipsecLocalProtocol),
    ipsec_local_subnet: cdktf.stringToTerraform(struct!.ipsecLocalSubnet),
    ipsec_mode: cdktf.stringToTerraform(struct!.ipsecMode),
    ipsec_priority: cdktf.numberToTerraform(struct!.ipsecPriority),
    ipsec_protocol: cdktf.stringToTerraform(struct!.ipsecProtocol),
    ipsec_remote_port: cdktf.numberToTerraform(struct!.ipsecRemotePort),
    ipsec_remote_protocol: cdktf.numberToTerraform(struct!.ipsecRemoteProtocol),
    ipsec_remote_subnet: cdktf.stringToTerraform(struct!.ipsecRemoteSubnet),
    ipsec_traffic_selector: cdktf.stringToTerraform(struct!.ipsecTrafficSelector),
  }
}


export function dataThunderVpnDefaultOperOperToHclTerraform(struct?: DataThunderVpnDefaultOperOperOutputReference | DataThunderVpnDefaultOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ike_auth_method: {
      value: cdktf.stringToHclTerraform(struct!.ikeAuthMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_dh_group: {
      value: cdktf.stringToHclTerraform(struct!.ikeDhGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_dpd_interval: {
      value: cdktf.numberToHclTerraform(struct!.ikeDpdInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ike_encryption: {
      value: cdktf.stringToHclTerraform(struct!.ikeEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_hash: {
      value: cdktf.stringToHclTerraform(struct!.ikeHash),
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
    ike_local_address: {
      value: cdktf.stringToHclTerraform(struct!.ikeLocalAddress),
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
    ike_nat_traversal: {
      value: cdktf.stringToHclTerraform(struct!.ikeNatTraversal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_priority: {
      value: cdktf.numberToHclTerraform(struct!.ikePriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ike_remote_address: {
      value: cdktf.stringToHclTerraform(struct!.ikeRemoteAddress),
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
    ipsec_anti_replay_window: {
      value: cdktf.numberToHclTerraform(struct!.ipsecAntiReplayWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_dh_group: {
      value: cdktf.stringToHclTerraform(struct!.ipsecDhGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_encryption: {
      value: cdktf.stringToHclTerraform(struct!.ipsecEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_hash: {
      value: cdktf.stringToHclTerraform(struct!.ipsecHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_lifebytes: {
      value: cdktf.numberToHclTerraform(struct!.ipsecLifebytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.ipsecLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_local_port: {
      value: cdktf.numberToHclTerraform(struct!.ipsecLocalPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_local_protocol: {
      value: cdktf.numberToHclTerraform(struct!.ipsecLocalProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_local_subnet: {
      value: cdktf.stringToHclTerraform(struct!.ipsecLocalSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_mode: {
      value: cdktf.stringToHclTerraform(struct!.ipsecMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_priority: {
      value: cdktf.numberToHclTerraform(struct!.ipsecPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_protocol: {
      value: cdktf.stringToHclTerraform(struct!.ipsecProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_remote_port: {
      value: cdktf.numberToHclTerraform(struct!.ipsecRemotePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_remote_protocol: {
      value: cdktf.numberToHclTerraform(struct!.ipsecRemoteProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_remote_subnet: {
      value: cdktf.stringToHclTerraform(struct!.ipsecRemoteSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_traffic_selector: {
      value: cdktf.stringToHclTerraform(struct!.ipsecTrafficSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnDefaultOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnDefaultOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikeAuthMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeAuthMethod = this._ikeAuthMethod;
    }
    if (this._ikeDhGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeDhGroup = this._ikeDhGroup;
    }
    if (this._ikeDpdInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeDpdInterval = this._ikeDpdInterval;
    }
    if (this._ikeEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeEncryption = this._ikeEncryption;
    }
    if (this._ikeHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeHash = this._ikeHash;
    }
    if (this._ikeLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeLifetime = this._ikeLifetime;
    }
    if (this._ikeLocalAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeLocalAddress = this._ikeLocalAddress;
    }
    if (this._ikeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeMode = this._ikeMode;
    }
    if (this._ikeNatTraversal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeNatTraversal = this._ikeNatTraversal;
    }
    if (this._ikePriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikePriority = this._ikePriority;
    }
    if (this._ikeRemoteAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeRemoteAddress = this._ikeRemoteAddress;
    }
    if (this._ikeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeVersion = this._ikeVersion;
    }
    if (this._ipsecAntiReplayWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecAntiReplayWindow = this._ipsecAntiReplayWindow;
    }
    if (this._ipsecDhGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecDhGroup = this._ipsecDhGroup;
    }
    if (this._ipsecEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecEncryption = this._ipsecEncryption;
    }
    if (this._ipsecHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecHash = this._ipsecHash;
    }
    if (this._ipsecLifebytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecLifebytes = this._ipsecLifebytes;
    }
    if (this._ipsecLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecLifetime = this._ipsecLifetime;
    }
    if (this._ipsecLocalPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecLocalPort = this._ipsecLocalPort;
    }
    if (this._ipsecLocalProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecLocalProtocol = this._ipsecLocalProtocol;
    }
    if (this._ipsecLocalSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecLocalSubnet = this._ipsecLocalSubnet;
    }
    if (this._ipsecMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecMode = this._ipsecMode;
    }
    if (this._ipsecPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPriority = this._ipsecPriority;
    }
    if (this._ipsecProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecProtocol = this._ipsecProtocol;
    }
    if (this._ipsecRemotePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecRemotePort = this._ipsecRemotePort;
    }
    if (this._ipsecRemoteProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecRemoteProtocol = this._ipsecRemoteProtocol;
    }
    if (this._ipsecRemoteSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecRemoteSubnet = this._ipsecRemoteSubnet;
    }
    if (this._ipsecTrafficSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecTrafficSelector = this._ipsecTrafficSelector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnDefaultOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ikeAuthMethod = undefined;
      this._ikeDhGroup = undefined;
      this._ikeDpdInterval = undefined;
      this._ikeEncryption = undefined;
      this._ikeHash = undefined;
      this._ikeLifetime = undefined;
      this._ikeLocalAddress = undefined;
      this._ikeMode = undefined;
      this._ikeNatTraversal = undefined;
      this._ikePriority = undefined;
      this._ikeRemoteAddress = undefined;
      this._ikeVersion = undefined;
      this._ipsecAntiReplayWindow = undefined;
      this._ipsecDhGroup = undefined;
      this._ipsecEncryption = undefined;
      this._ipsecHash = undefined;
      this._ipsecLifebytes = undefined;
      this._ipsecLifetime = undefined;
      this._ipsecLocalPort = undefined;
      this._ipsecLocalProtocol = undefined;
      this._ipsecLocalSubnet = undefined;
      this._ipsecMode = undefined;
      this._ipsecPriority = undefined;
      this._ipsecProtocol = undefined;
      this._ipsecRemotePort = undefined;
      this._ipsecRemoteProtocol = undefined;
      this._ipsecRemoteSubnet = undefined;
      this._ipsecTrafficSelector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ikeAuthMethod = value.ikeAuthMethod;
      this._ikeDhGroup = value.ikeDhGroup;
      this._ikeDpdInterval = value.ikeDpdInterval;
      this._ikeEncryption = value.ikeEncryption;
      this._ikeHash = value.ikeHash;
      this._ikeLifetime = value.ikeLifetime;
      this._ikeLocalAddress = value.ikeLocalAddress;
      this._ikeMode = value.ikeMode;
      this._ikeNatTraversal = value.ikeNatTraversal;
      this._ikePriority = value.ikePriority;
      this._ikeRemoteAddress = value.ikeRemoteAddress;
      this._ikeVersion = value.ikeVersion;
      this._ipsecAntiReplayWindow = value.ipsecAntiReplayWindow;
      this._ipsecDhGroup = value.ipsecDhGroup;
      this._ipsecEncryption = value.ipsecEncryption;
      this._ipsecHash = value.ipsecHash;
      this._ipsecLifebytes = value.ipsecLifebytes;
      this._ipsecLifetime = value.ipsecLifetime;
      this._ipsecLocalPort = value.ipsecLocalPort;
      this._ipsecLocalProtocol = value.ipsecLocalProtocol;
      this._ipsecLocalSubnet = value.ipsecLocalSubnet;
      this._ipsecMode = value.ipsecMode;
      this._ipsecPriority = value.ipsecPriority;
      this._ipsecProtocol = value.ipsecProtocol;
      this._ipsecRemotePort = value.ipsecRemotePort;
      this._ipsecRemoteProtocol = value.ipsecRemoteProtocol;
      this._ipsecRemoteSubnet = value.ipsecRemoteSubnet;
      this._ipsecTrafficSelector = value.ipsecTrafficSelector;
    }
  }

  // ike_auth_method - computed: false, optional: true, required: false
  private _ikeAuthMethod?: string; 
  public get ikeAuthMethod() {
    return this.getStringAttribute('ike_auth_method');
  }
  public set ikeAuthMethod(value: string) {
    this._ikeAuthMethod = value;
  }
  public resetIkeAuthMethod() {
    this._ikeAuthMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeAuthMethodInput() {
    return this._ikeAuthMethod;
  }

  // ike_dh_group - computed: false, optional: true, required: false
  private _ikeDhGroup?: string; 
  public get ikeDhGroup() {
    return this.getStringAttribute('ike_dh_group');
  }
  public set ikeDhGroup(value: string) {
    this._ikeDhGroup = value;
  }
  public resetIkeDhGroup() {
    this._ikeDhGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeDhGroupInput() {
    return this._ikeDhGroup;
  }

  // ike_dpd_interval - computed: false, optional: true, required: false
  private _ikeDpdInterval?: number; 
  public get ikeDpdInterval() {
    return this.getNumberAttribute('ike_dpd_interval');
  }
  public set ikeDpdInterval(value: number) {
    this._ikeDpdInterval = value;
  }
  public resetIkeDpdInterval() {
    this._ikeDpdInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeDpdIntervalInput() {
    return this._ikeDpdInterval;
  }

  // ike_encryption - computed: false, optional: true, required: false
  private _ikeEncryption?: string; 
  public get ikeEncryption() {
    return this.getStringAttribute('ike_encryption');
  }
  public set ikeEncryption(value: string) {
    this._ikeEncryption = value;
  }
  public resetIkeEncryption() {
    this._ikeEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeEncryptionInput() {
    return this._ikeEncryption;
  }

  // ike_hash - computed: false, optional: true, required: false
  private _ikeHash?: string; 
  public get ikeHash() {
    return this.getStringAttribute('ike_hash');
  }
  public set ikeHash(value: string) {
    this._ikeHash = value;
  }
  public resetIkeHash() {
    this._ikeHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeHashInput() {
    return this._ikeHash;
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

  // ike_local_address - computed: false, optional: true, required: false
  private _ikeLocalAddress?: string; 
  public get ikeLocalAddress() {
    return this.getStringAttribute('ike_local_address');
  }
  public set ikeLocalAddress(value: string) {
    this._ikeLocalAddress = value;
  }
  public resetIkeLocalAddress() {
    this._ikeLocalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeLocalAddressInput() {
    return this._ikeLocalAddress;
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

  // ike_nat_traversal - computed: false, optional: true, required: false
  private _ikeNatTraversal?: string; 
  public get ikeNatTraversal() {
    return this.getStringAttribute('ike_nat_traversal');
  }
  public set ikeNatTraversal(value: string) {
    this._ikeNatTraversal = value;
  }
  public resetIkeNatTraversal() {
    this._ikeNatTraversal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeNatTraversalInput() {
    return this._ikeNatTraversal;
  }

  // ike_priority - computed: false, optional: true, required: false
  private _ikePriority?: number; 
  public get ikePriority() {
    return this.getNumberAttribute('ike_priority');
  }
  public set ikePriority(value: number) {
    this._ikePriority = value;
  }
  public resetIkePriority() {
    this._ikePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePriorityInput() {
    return this._ikePriority;
  }

  // ike_remote_address - computed: false, optional: true, required: false
  private _ikeRemoteAddress?: string; 
  public get ikeRemoteAddress() {
    return this.getStringAttribute('ike_remote_address');
  }
  public set ikeRemoteAddress(value: string) {
    this._ikeRemoteAddress = value;
  }
  public resetIkeRemoteAddress() {
    this._ikeRemoteAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeRemoteAddressInput() {
    return this._ikeRemoteAddress;
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

  // ipsec_anti_replay_window - computed: false, optional: true, required: false
  private _ipsecAntiReplayWindow?: number; 
  public get ipsecAntiReplayWindow() {
    return this.getNumberAttribute('ipsec_anti_replay_window');
  }
  public set ipsecAntiReplayWindow(value: number) {
    this._ipsecAntiReplayWindow = value;
  }
  public resetIpsecAntiReplayWindow() {
    this._ipsecAntiReplayWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecAntiReplayWindowInput() {
    return this._ipsecAntiReplayWindow;
  }

  // ipsec_dh_group - computed: false, optional: true, required: false
  private _ipsecDhGroup?: string; 
  public get ipsecDhGroup() {
    return this.getStringAttribute('ipsec_dh_group');
  }
  public set ipsecDhGroup(value: string) {
    this._ipsecDhGroup = value;
  }
  public resetIpsecDhGroup() {
    this._ipsecDhGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecDhGroupInput() {
    return this._ipsecDhGroup;
  }

  // ipsec_encryption - computed: false, optional: true, required: false
  private _ipsecEncryption?: string; 
  public get ipsecEncryption() {
    return this.getStringAttribute('ipsec_encryption');
  }
  public set ipsecEncryption(value: string) {
    this._ipsecEncryption = value;
  }
  public resetIpsecEncryption() {
    this._ipsecEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecEncryptionInput() {
    return this._ipsecEncryption;
  }

  // ipsec_hash - computed: false, optional: true, required: false
  private _ipsecHash?: string; 
  public get ipsecHash() {
    return this.getStringAttribute('ipsec_hash');
  }
  public set ipsecHash(value: string) {
    this._ipsecHash = value;
  }
  public resetIpsecHash() {
    this._ipsecHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecHashInput() {
    return this._ipsecHash;
  }

  // ipsec_lifebytes - computed: false, optional: true, required: false
  private _ipsecLifebytes?: number; 
  public get ipsecLifebytes() {
    return this.getNumberAttribute('ipsec_lifebytes');
  }
  public set ipsecLifebytes(value: number) {
    this._ipsecLifebytes = value;
  }
  public resetIpsecLifebytes() {
    this._ipsecLifebytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecLifebytesInput() {
    return this._ipsecLifebytes;
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

  // ipsec_local_port - computed: false, optional: true, required: false
  private _ipsecLocalPort?: number; 
  public get ipsecLocalPort() {
    return this.getNumberAttribute('ipsec_local_port');
  }
  public set ipsecLocalPort(value: number) {
    this._ipsecLocalPort = value;
  }
  public resetIpsecLocalPort() {
    this._ipsecLocalPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecLocalPortInput() {
    return this._ipsecLocalPort;
  }

  // ipsec_local_protocol - computed: false, optional: true, required: false
  private _ipsecLocalProtocol?: number; 
  public get ipsecLocalProtocol() {
    return this.getNumberAttribute('ipsec_local_protocol');
  }
  public set ipsecLocalProtocol(value: number) {
    this._ipsecLocalProtocol = value;
  }
  public resetIpsecLocalProtocol() {
    this._ipsecLocalProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecLocalProtocolInput() {
    return this._ipsecLocalProtocol;
  }

  // ipsec_local_subnet - computed: false, optional: true, required: false
  private _ipsecLocalSubnet?: string; 
  public get ipsecLocalSubnet() {
    return this.getStringAttribute('ipsec_local_subnet');
  }
  public set ipsecLocalSubnet(value: string) {
    this._ipsecLocalSubnet = value;
  }
  public resetIpsecLocalSubnet() {
    this._ipsecLocalSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecLocalSubnetInput() {
    return this._ipsecLocalSubnet;
  }

  // ipsec_mode - computed: false, optional: true, required: false
  private _ipsecMode?: string; 
  public get ipsecMode() {
    return this.getStringAttribute('ipsec_mode');
  }
  public set ipsecMode(value: string) {
    this._ipsecMode = value;
  }
  public resetIpsecMode() {
    this._ipsecMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecModeInput() {
    return this._ipsecMode;
  }

  // ipsec_priority - computed: false, optional: true, required: false
  private _ipsecPriority?: number; 
  public get ipsecPriority() {
    return this.getNumberAttribute('ipsec_priority');
  }
  public set ipsecPriority(value: number) {
    this._ipsecPriority = value;
  }
  public resetIpsecPriority() {
    this._ipsecPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPriorityInput() {
    return this._ipsecPriority;
  }

  // ipsec_protocol - computed: false, optional: true, required: false
  private _ipsecProtocol?: string; 
  public get ipsecProtocol() {
    return this.getStringAttribute('ipsec_protocol');
  }
  public set ipsecProtocol(value: string) {
    this._ipsecProtocol = value;
  }
  public resetIpsecProtocol() {
    this._ipsecProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecProtocolInput() {
    return this._ipsecProtocol;
  }

  // ipsec_remote_port - computed: false, optional: true, required: false
  private _ipsecRemotePort?: number; 
  public get ipsecRemotePort() {
    return this.getNumberAttribute('ipsec_remote_port');
  }
  public set ipsecRemotePort(value: number) {
    this._ipsecRemotePort = value;
  }
  public resetIpsecRemotePort() {
    this._ipsecRemotePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecRemotePortInput() {
    return this._ipsecRemotePort;
  }

  // ipsec_remote_protocol - computed: false, optional: true, required: false
  private _ipsecRemoteProtocol?: number; 
  public get ipsecRemoteProtocol() {
    return this.getNumberAttribute('ipsec_remote_protocol');
  }
  public set ipsecRemoteProtocol(value: number) {
    this._ipsecRemoteProtocol = value;
  }
  public resetIpsecRemoteProtocol() {
    this._ipsecRemoteProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecRemoteProtocolInput() {
    return this._ipsecRemoteProtocol;
  }

  // ipsec_remote_subnet - computed: false, optional: true, required: false
  private _ipsecRemoteSubnet?: string; 
  public get ipsecRemoteSubnet() {
    return this.getStringAttribute('ipsec_remote_subnet');
  }
  public set ipsecRemoteSubnet(value: string) {
    this._ipsecRemoteSubnet = value;
  }
  public resetIpsecRemoteSubnet() {
    this._ipsecRemoteSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecRemoteSubnetInput() {
    return this._ipsecRemoteSubnet;
  }

  // ipsec_traffic_selector - computed: false, optional: true, required: false
  private _ipsecTrafficSelector?: string; 
  public get ipsecTrafficSelector() {
    return this.getStringAttribute('ipsec_traffic_selector');
  }
  public set ipsecTrafficSelector(value: string) {
    this._ipsecTrafficSelector = value;
  }
  public resetIpsecTrafficSelector() {
    this._ipsecTrafficSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecTrafficSelectorInput() {
    return this._ipsecTrafficSelector;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper thunder_vpn_default_oper}
*/
export class DataThunderVpnDefaultOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn_default_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVpnDefaultOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVpnDefaultOper to import
  * @param importFromId The id of the existing DataThunderVpnDefaultOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVpnDefaultOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn_default_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_default_oper thunder_vpn_default_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVpnDefaultOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVpnDefaultOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn_default_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVpnDefaultOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnDefaultOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderVpnDefaultOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderVpnDefaultOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnDefaultOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
